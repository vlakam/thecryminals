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

const getSaleActiveFx = attach({
    effect: createEffect(async ($contract) => {
        if (!$contract) return 0;
        return parseInt(await $contract.methods.saleStatus().call());
    }),
    source: $contract,
    mapParams: (_, contract) => contract,
});

const getSupplyFromEtherscan = async () => {
    const resp = await fetch(`https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=${address}`);
    if (!resp.ok) throw 'Failed to get from etherscan';
    const json = await resp.json();
    if (json.status === '0') throw 'Failed to get from etherscan';

    return parseInt(json.result);
}

const getSupplyFx = attach({
    effect: createEffect(async ($contract) => {
        const max = 10000;
        if (!$contract) {
            const total = await getSupplyFromEtherscan();
            return { max, total };
        }
        const total = parseInt(await $contract.methods.totalSupply().call());
        return { total, max };
    }),
    source: $contract,
    mapParams: (_, contract) => contract,
});

export const $contractSaleActive = restore(getSaleActiveFx.doneData, 0);
export const $supply = restore(getSupplyFx.doneData, { total: 0, max: 10000 });


const getMaxMintableFx = attach({
    effect: createEffect(async ({ $account, $contract }) => {
        if (!$account || !$contract) return 0;
        const saleStatus = parseInt(await $contract.methods.saleStatus().call());
        if (saleStatus === 0) return 20;
        const minted = parseInt(await $contract.methods.balanceOf($account).call());

        return Math.max(20 - minted, 0);
    }),
    source: { $contract, $account },
    mapParams: (_, a) => a,
});
export const $maxMintable = restore(getMaxMintableFx.doneData, 0);
export const mintFx = attach({
    effect: createEffect(async ({
        $ethereum,
        $contract,
        $isChainOK,
        $account,
        amount,
        $contractSaleActive,
        $maxMintable,
        $web3
    }) => {
        if (!$ethereum) throw errorMessageFx("Non-Ethereum browser detected. You should consider trying MetaMask!");
        if (!$contract) throw errorMessageFx("Failed to initialize contract");
        if (!$isChainOK) throw errorMessageFx("You are on the wrong chain");
        if (!$account) throw errorMessageFx("Press connect button");
        if ($contractSaleActive === 0)
            throw errorMessageFx("This sale is not active yet");
        if (amount > $maxMintable)
            throw errorMessageFx(`Not able to mint above your limit: ${$maxMintable}`);

        try {
            const tokenPrice = Web3.utils.toWei("0.05", 'ether');
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
        $account,
        $web3
    }) => {
        if (!$ethereum) throw errorMessageFx("Non-Ethereum browser detected. You should consider trying MetaMask!");
        if (!$contract) throw errorMessageFx("Failed to initialize contract");
        if (!$isChainOK) throw errorMessageFx("You are on the wrong chain");
        if (!$account) throw errorMessageFx("Press connect button");
        if ($contractSaleActive === 0)
            throw errorMessageFx("This sale is not active yet");

        try {
            const canGift = await $contract.methods.checkGift().call({
                from: $account
            });
            if (!canGift) return errorMessageFx('You are not allowed to use Gift');
            const gasPrice = await $web3.eth.getGasPrice();
            let gasLimit;
            try {
                await $contract.methods.gift().estimateGas({
                    value: 0,
                    from: $account,
                });
            } catch (e) {
                gasLimit = 250000;
            }
            console.log(gasPrice, gasLimit);

            try {
                return await $contract.methods.gift().send({
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
    mapParams: (_, source) => source
});


getSupplyFx.finally.watch((amounts) => {
    getSaleActiveFx();
    getMaxMintableFx();
    setTimeout(getSupplyFx, 10000);
});

getSupplyFx();