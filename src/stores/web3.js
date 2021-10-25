import {
    createStore,
    createEffect,
    sample,
    restore,
    attach,
} from "effector";
import Web3 from "web3";
import { chainId, address, ABI } from "../constants/contract";

const detectMetamask = async () => {
    return new Promise((rs, rj) => {
        const ok = () => {
            window.removeEventListener("ethereum#initialized", ok);

            const { ethereum } = window;
            if (!ethereum) return rj('Please install metamask');

            rs(ethereum);
        };

        if (window.ethereum) {
            ok();
        } else {
            window.addEventListener("ethereum#initialized", ok, {
                once: true,
            });

            setTimeout(() => {
                ok();
            }, 3000);
        }
    });
};

export const detectMetamaskFx = createEffect({
    handler: async () => {
        try {
            const ethereum = await detectMetamask();

            return ethereum;
        } catch (e) {
            return null;
        }
    },
});

export const errorMessageFx = createEffect({
    handler: (str) => {
        alert(str);
    },
});


detectMetamaskFx();
export const $ethereum = restore(detectMetamaskFx.doneData, null);
export const connectAccountFx = attach({
    effect: createEffect(async (ethereum) => {
        if (!ethereum) throw errorMessageFx("Non-Ethereum browser detected. You should consider trying MetaMask!");
        const account = await ethereum.request({ method: "eth_requestAccounts" });
        return account;
    }),
    source: $ethereum,
    mapParams: (_, eth) => eth,
});

export const $web3 = $ethereum.map((eth) => (eth && new Web3(eth)) || null);
export const web3GetAccountsFx = attach({
    effect: async (web3) => {
        if (!web3) return null;
        const accounts = await web3.eth.getAccounts();

        return accounts;
    },
    source: $web3,
    mapParams: (_, eth) => eth,
});

export const web3GetChainId = attach({
    effect: async (web3) => {
        if (!web3) return null;
        const chainId = await web3.eth.getChainId();

        return chainId;
    },
    source: $web3,
    mapParams: (_, eth) => eth,
});

export const $account = createStore(null).on(
    web3GetAccountsFx.doneData,
    (_, accounts) => (accounts && accounts[0]) || null
).on(
    connectAccountFx.doneData,
    (_, accounts) => (accounts && accounts[0]) || null
);


export const $accountNamePretty = $account.map((account) => account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : null);
const $chainId = restore(web3GetChainId.doneData, null);
export const $isChainOK = $chainId.map((chain) => chain === chainId);
export const $isConnected = $account.map((account) => account !== null);
const hooksEngaged = detectMetamaskFx.doneData.watch((ethereum) => {
    if (ethereum) {
        window.ethereum.on("accountsChanged", () => web3GetAccountsFx());
        window.ethereum.on("chainChanged", () => web3GetChainId());
        hooksEngaged();
    }
});

// $account.watch(console.log);
// $isConnected.watch(console.log);
// connectAccountFx.done.watch(console.log);

sample({
    source: $web3,
    target: web3GetAccountsFx,
});

sample({
    source: $web3,
    target: web3GetChainId,
});

export const $contract = $web3.map((web3) => {
    try {
        return (web3 && new web3.eth.Contract(ABI, address)) || null;
    } catch (e) {
        return null;
    }
});

const getSupplyFromEtherscan = async () => {
    const resp = await fetch(`https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=${address}`);
    if (!resp.ok) throw new Error('Failed to get from etherscan');
    const json = await resp.json();
    if (json.status === '0') throw new Error('Failed to get from etherscan');

    return parseInt(json.result);
}

export const getSupplyFx = attach({
    effect: createEffect(async ($contract) => {
        const max = 10000;
        let reserved = 1600;
        if (!$contract) {
            const total = await getSupplyFromEtherscan();
            return { max, total, reserved };
        }
        const total = parseInt(await $contract.methods.totalSupply().call());
        reserved = parseInt(await $contract.methods.reservedSupply().call());
        return { total, max, reserved };
    }),
    source: $contract,
    mapParams: (_, contract) => contract,
});

const getMintingTimestampFx = attach({
    effect: createEffect(async ($contract) => {
        const timestamp = parseInt(await $contract.methods.mintingStartTimestamp().call());
        return timestamp * 1000;
    }),
    source: $contract,
    mapParams: (_, contract) => contract,
});

export const $mintingTimestamp = restore(getMintingTimestampFx, Date.UTC(2021, 9, 25, 19, 59, 59, 0));
export const $contractSaleActive = $mintingTimestamp.map((timestamp) => {
    return Date.now() > timestamp;
});
export const $supply = restore(getSupplyFx.doneData, { total: 0, max: 10000, reserved: 1600 });

const BASE_URL = 'https://api.thecryminals.com/';
const accountDataURL = (acc) => `${BASE_URL}transaction/data?address=${acc}`;
const accountSignUrl = `${BASE_URL}transaction/data/signed`;

const getMaxClaimableAPI = async (account) => {
    if (!account) return 0;
    const resp = await fetch(accountDataURL(account));
    if (!resp.ok) return 0;
    const { data } = await resp.json();
    const { value: maxClaimableBackend } = data.find(({ name }) => name === 'claims');
    // debugger;
    return maxClaimableBackend;

    // return 5;// json.count;
}

const getMaxClaimableFx = attach({
    effect: createEffect(async ({ $account, $contract }) => {
        if (!$account || !$contract) return 0;
        try {
            const maxClaimable = await getMaxClaimableAPI($account);
            const claimed = parseInt(await $contract.methods.claimed($account).call());

            return Math.max(maxClaimable - claimed, 0);
        } catch (e) {
            return 0;
        }
    }),
    source: { $contract, $account },
    mapParams: (_, a) => a,
});
export const $maxClaimable = restore(getMaxClaimableFx, 0);

const getMaxMintableFx = attach({
    effect: createEffect(async ({ $account, $supply }) => {
        if (!$account) return 50;
        const { max, total, reserved } = $supply

        return Math.min(50, max - total - reserved);
    }),
    source: {$account, $supply },
    mapParams: (_, a) => a,
});

export const $maxMintable = restore(getMaxMintableFx, 50);

export const mintFx = attach({
    effect: createEffect(async ({
        $ethereum,
        $contract,
        $isChainOK,
        $account,
        amount,
        $maxMintable,
        $contractSaleActive,
        $web3
    }) => {
        if (!$ethereum) throw errorMessageFx("Non-Ethereum browser detected. You should consider trying MetaMask!");
        if (!$contract) throw errorMessageFx("Failed to initialize contract");
        if (!$isChainOK) throw errorMessageFx("You are on the wrong chain");
        if (!$account) throw errorMessageFx("Press connect button");
        if (!$contractSaleActive)
            throw errorMessageFx("This sale is not active yet");
        if (amount > $maxMintable)
            throw errorMessageFx(`Not able to mint above your limit: ${$maxMintable}`);

        try {
            const tokenPrice = Web3.utils.toWei("0.025", 'ether');
            const gasPrice = await $web3.eth.getGasPrice();
            let gasLimit;
            try {
                await $contract.methods.mint(amount).estimateGas({
                    value: tokenPrice * amount,
                    from: $account,
                });
            } catch (e) {
                gasLimit = 250000 * amount;
            }

            console.log(gasPrice, gasLimit);

            try {
                return await $contract.methods.mint(amount).send({
                    from: $account,
                    value: tokenPrice * amount,
                    maxPriorityFeePerGas: 1500000000,
                    // maxFeePerGas: gasPrice,
                    gas: gasLimit,
                });
            } catch (e) {
                if (e.message && e.message.includes('current network does not support EIP-1559')) {
                    console.log('Mint failed because of EIP-1559. Sending as type 0 now.');
                } else {
                    throw e;
                }
            }

            return await $contract.methods.mint(amount).send({
                from: $account,
                value: tokenPrice * amount,
                // maxFeePerGas: gasPrice,
                gas: gasLimit,
                type: '0x0',
            });
        } catch (e) {
            throw errorMessageFx(`Mint failed\n${e.message ? e.message : JSON.stringify(e)}`);
        }
    }),
    source: {
        $ethereum,
        $contract,
        $isChainOK,
        $account,
        $contractSaleActive,
        $maxMintable,
        $web3
    },
    mapParams: (amount, source) => ({ ...source, amount })
});

export const giftFx = attach({
    effect: createEffect(async ({
        $ethereum,
        $contract,
        $isChainOK,
        $contractSaleActive,
        $account,
        amount,
        $web3
    }) => {
        if (!$ethereum) throw errorMessageFx("Non-Ethereum browser detected. You should consider trying MetaMask!");
        if (!$contract) throw errorMessageFx("Failed to initialize contract");
        if (!$isChainOK) throw errorMessageFx("You are on the wrong chain");
        if (!$account) throw errorMessageFx("Press connect button");
        if (!$contractSaleActive)
            throw errorMessageFx("This sale is not active yet");

        try {
            const maxClaimable = await getMaxClaimableAPI($account);
            const claimed = parseInt(await $contract.methods.claimed($account).call());
            if (maxClaimable === 0) throw new Error('You are now allowed to use gifts');
            else if (maxClaimable <= claimed) throw new Error('You have used all your gifts');

            const signature = await $web3.eth.personal.sign(
                "Prove that you own address",
                $account,
                "password"
            );
            const resp = await fetch(
                accountSignUrl,
                {
                    body: JSON.stringify({
                        address: $account,
                        signature,
                    }),
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );
            if (!resp.ok) throw new Error("Failed to get information");
            const { data, signature: backSignature } = await resp.json();
            const { value: maxClaimableBackend } = data.find(({ name }) => name === 'claims');
            console.log(maxClaimableBackend);
            debugger;
            const gasPrice = await $web3.eth.getGasPrice();
            let gasLimit;
            try {
                await $contract.methods.claim(amount, maxClaimable, backSignature).estimateGas({
                    value: 0,
                    from: $account,
                });
            } catch (e) {
                gasLimit = 250000;
            }
            console.log(gasPrice, gasLimit);

            try {
                return await $contract.methods.claim(amount, maxClaimable, backSignature).send({
                    from: $account,
                    value: 0,
                    maxPriorityFeePerGas: 1500000000,
                    // maxFeePerGas: gasPrice,
                    gas: gasLimit
                });
            } catch (e) {
                if (e.message && e.message.includes('current network does not support EIP-1559')) {
                    console.log('Mint failed because of EIP-1559. Sending as type 0 now.');
                } else {
                    throw e;
                }
            }

            return await $contract.methods.gift().send({
                from: $account,
                value: 0,
                // maxFeePerGas: gasPrice,
                gas: gasLimit,
                type: '0x0',
            });
        } catch (e) {
            throw errorMessageFx(`Gift failed\n${e.message ? e.message : JSON.stringify(e)}`);
        }
    }),
    source: {
        $ethereum,
        $contract,
        $isChainOK,
        $account,
        $contractSaleActive,
        $web3
    },
    mapParams: (amount, source) => ({ ...source, amount })
});


getSupplyFx.finally.watch((amounts) => {
    getMintingTimestampFx();
    getMaxClaimableFx();
    getMaxMintableFx();
    setTimeout(getSupplyFx, 10000);
});
