import {
    createStore,
    createEffect,
    sample,
    forward,
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
        if (!ethereum) throw errorMessageFx("Install metamask");
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
        if (!$contract) return false;
        return $contract.methods.isSaleActive();
    }),
    source: $contract,
    mapParams: (_, contract) => contract,
});

const getSupplyFx = attach({
    effect: createEffect(async ($contract) => {
        if (!$contract) return { max: 10000, total: 0 };
        const total = parseInt(await $contract.methods.totalSupply().call());
        const max = parseInt(await $contract.methods.maxTokensCount().call());
        return { total, max };
    }),
    source: $contract,
    mapParams: (_, contract) => contract,
});

export const $contractSaleActive = restore(getSaleActiveFx.doneData, false);
export const $supply = restore(getSupplyFx.doneData, { total: 0, max: 10000 });

export const mintFx = attach({
    effect: createEffect(async ({
        $ethereum,
        $contract,
        $isChainOK,
        $account,
        amount,
        $contractSaleActive,
        $web3
    }) => {
        if (!$ethereum) throw errorMessageFx("Install metamask");
        if (!$contract) throw errorMessageFx("Failed to initialize contract");
        if (!$isChainOK) throw errorMessageFx("You are on the wrong chain");
        if (!$account) throw errorMessageFx("Press connect button");
        if (!$contractSaleActive)
            throw errorMessageFx("This sale is not active yet");

        try {
            const tokenPrice = parseInt(await $contract.methods.tokenPrice().call());
            const gasPrice = await $web3.eth.getGasPrice();
            let gasLimit;
            try {
                await $contract.methods.mintAngelsOfAether(amount).estimateGas({
                    value: tokenPrice * amount,
                    from: $account,
                });
            } catch (e) {
                gasLimit = 250000 * amount;
            }
            console.log(gasPrice, gasLimit);

            const transaction = await $contract.methods.mintAngelsOfAether (amount).send({
                from: $account,
                value: tokenPrice * amount,
                maxPriorityFeePerGas: 1500000000,
                // maxFeePerGas: gasPrice,
                gas: gasLimit
            });

            return transaction;
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
        $web3
    },
    mapParams: (amount, source) => ({ ...source, amount })
});

getSupplyFx.finally.watch((amounts) => {
    getSaleActiveFx();
    setTimeout(getSupplyFx, 5000);
});

forward({
    from: $contract,
    to: [getSupplyFx],
});

