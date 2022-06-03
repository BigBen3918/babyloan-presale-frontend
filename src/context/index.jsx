import React, {
    createContext,
    useContext,
    useReducer,
    useMemo,
    useEffect,
} from "react";
import { ethers } from "ethers";
import { useWallet } from "use-wallet";

import {
    presaleContract,
    BUSDContract,
    supportChainId,
    XBTContract,
} from "../contract";
import { toBigNum, fromBigNum } from "../utils";

const BlockchainContext = createContext();

export function useBlockchainContext() {
    return useContext(BlockchainContext);
}

function reducer(state, { type, payload }) {
    return {
        ...state,
        [type]: payload,
    };
}

const INIT_STATE = {
    signer: null,
    provider: null,
    price: null,
    BNBPrice: null,
    totalSold: null,
    totalAmount: null,
    supportChainId: supportChainId,
};

export default function Provider({ children }) {
    const wallet = useWallet();
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    /* ------------ Wallet Section ------------- */
    useEffect(() => {
        getPrice();
        getTotalSupply();
    }, []);

    useEffect(() => {
        const getSigner = async () => {
            if (wallet.status === "connected") {
                const provider = new ethers.providers.Web3Provider(
                    wallet.ethereum
                );
                const signer = provider.getSigner();
                dispatch({
                    type: "signer",
                    payload: signer,
                });
                dispatch({
                    type: "provider",
                    payload: provider,
                });
            }
        };

        getSigner();
    }, [wallet.status]);

    const getPrice = async () => {
        try {
            let price = await presaleContract.getPrice();
            let term = await presaleContract.terms();
            dispatch({
                type: "price",
                payload: fromBigNum(price, 0) / 10 ** 6,
            });
            dispatch({
                type: "BNBPrice",
                payload: fromBigNum(term.bnbPrice, 0) / 10 ** 6,
            });

            getTotal();
        } catch (err) {
            console.log(err);
        }
    };

    const getTotal = async () => {
        const provider = new ethers.providers.Web3Provider(wallet.ethereum);
        let bnbBalance = await provider.getBalance(presaleContract.address);
        let busdBalance = await BUSDContract.balanceOf(presaleContract.address);
        let total =
            (bnbBalance * state.BNBPrice) / state.price +
            busdBalance / state.price;
        dispatch({
            type: "totalSold",
            payload: total,
        });
    };

    const getTotalSupply = async () => {
        let total = await XBTContract.totalSupply();
        dispatch({
            type: "totalAmount",
            payload: fromBigNum(total, 18),
        });
    };

    /* ------------ Token Buy Section ------------- */
    const BuyToken = async (props) => {
        try {
            const { amount, flag } = props;

            const signedPresaleContract = presaleContract.connect(state.signer);
            if (flag === 1) {
                let tx = await signedPresaleContract.buy({
                    value: toBigNum(amount),
                });
                await tx.wait();
            } else {
                let signedBusdContract = BUSDContract.connect(state.signer);
                let tx = await signedBusdContract.approve(
                    presaleContract.address,
                    toBigNum(amount)
                );
                await tx.wait();

                let tx1 = await signedPresaleContract.buyWithBusd(
                    toBigNum(amount)
                );
                await tx1.wait();
            }
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    return (
        <BlockchainContext.Provider
            value={useMemo(() => [state, { dispatch, BuyToken }], [state])}
        >
            {children}
        </BlockchainContext.Provider>
    );
}
