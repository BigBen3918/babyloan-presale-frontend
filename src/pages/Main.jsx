import React, { useState, useEffect } from "react";
import { useWallet } from "use-wallet";
import { ethers } from "ethers";

import { useBlockchainContext } from "../context";
import { Toast } from "../utils/message";
import logo from "../assets/images/logo.png";
import sub1 from "../assets/images/first.png";
import sub2 from "../assets/images/second.png";
import sub3 from "../assets/images/third.png";

export default function Main() {
    const wallet = useWallet();
    const [state, { BuyToken }] = useBlockchainContext();
    // var styledAddress = wallet.account
    //     ? wallet.account.slice(0, 4) + "..." + wallet.account.slice(-4)
    //     : "";
    const [flag, setFlag] = useState(1);
    const [amount, setAmount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [tokenAmount, setTokenAmount] = useState(0);
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        if (amount > 0) {
            Number(flag) === 1
                ? setTokenAmount((amount * state.BNBPrice) / state.price)
                : setTokenAmount(amount / state.price);
        } else {
            setTokenAmount(0);
        }
    }, [flag, amount]);

    useEffect(() => {
        if (state.totalSold !== null && state.totalAmount !== null) {
            setPercent(
                Number((state.totalAmount / state.totalSold) * 100).toFixed(2)
            );
        } else {
            setPercent(0);
        }
    }, [state.totalSold, state.totalAmount]);

    const handleConnect = () => {
        wallet.connect();
    };

    const changeNetwork = async () => {
        if (window.ethereum)
            try {
                console.log(window.ethereum);
                await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [
                        { chainId: ethers.utils.hexlify(state.supportChainId) },
                    ],
                });
                window.location.reload();
            } catch (error) {
                console.error(error);
            }
    };

    const handleBuy = () => {
        if (amount.toString().trim() === "" || amount <= 0) {
            Toast("Please input amount", "warning");
            return;
        }
        if (Number(wallet.chainId) !== state.supportChainId) {
            changeNetwork();
            return;
        }
        setLoading(true);
        BuyToken({
            flag: flag,
            amount: amount,
        })
            .then((res) => {
                if (res) {
                    Toast("Successfully Buy", "success");
                } else {
                    Toast("Buy Failed", "error");
                }
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                Toast("Buy Failed", "error");
            });
    };

    const onChangeAmount = (e) => {
        setAmount(e.target.value);
    };

    const addToken = () => {};

    return (
        <div className="dashboard">
            <div className="spacer-half"></div>

            {/* Begin Header */}
            <div className="container">
                <div className="header">
                    <img src={logo} alt="" />
                    <h3>bayloanswap</h3>
                </div>
            </div>
            {/* End Header */}

            <div className="spacer-half"></div>

            {/* Begin Mainboard */}
            <section className="mainboard">
                <div className="container">
                    <div className="flex center middle text-center">
                        <h2>
                            Crypto investing, <br />
                            simplified. DeFi Together
                        </h2>
                    </div>

                    {/* Begin Presale Card */}
                    <div className="card">
                        <div className="presale__panel">
                            <h4>Presale Start</h4>

                            <div className="row time">
                                <div className="col-3">
                                    <span>00</span>
                                </div>
                                <div className="col-3">
                                    <span>02</span>
                                </div>
                                <div className="col-3">
                                    <span>53</span>
                                </div>
                                <div className="col-3">
                                    <span>41</span>
                                </div>
                            </div>
                            <div className="spacer-half"></div>

                            <div className="presale__content">
                                <div className="row">
                                    <div className="col-sm-6 col-xs-12">
                                        <span>Name: XBT</span>
                                    </div>
                                    <div className="col-sm-6 col-xs-12">
                                        <span onClick={addToken}>
                                            <b>Add to Metamask</b>
                                        </span>
                                    </div>
                                </div>
                                <div className="spacer-10"></div>

                                <div className="slider">
                                    <span>Sold Amount</span>
                                    <div className="bar">
                                        <div
                                            style={{ width: `${percent}%` }}
                                        ></div>
                                    </div>
                                    <div className="spacer-10"></div>
                                    <div className="status_bar">
                                        <div>
                                            <span>softcap</span>
                                        </div>
                                        <div>
                                            <span>hardcap</span>
                                        </div>
                                    </div>
                                    <div className="spacer-double"></div>

                                    <div className="presale__control">
                                        <label>Select: </label>
                                        <select
                                            onChange={(e) =>
                                                setFlag(e.target.value)
                                            }
                                        >
                                            <option value={1}>BNB</option>
                                            <option value={2}>BUSD</option>
                                        </select>
                                    </div>
                                    <br />
                                    <div className="presale__control">
                                        <label>Amount: </label>
                                        <input
                                            type="number"
                                            onChange={(e) => onChangeAmount(e)}
                                        />
                                    </div>
                                    <br />
                                    {wallet.status === "connected" ? (
                                        <div className="presale__control">
                                            <label>Token Amount: </label>
                                            <span className="color">
                                                {state.price === null ||
                                                state.BNBPrice === null
                                                    ? "uploading..."
                                                    : tokenAmount}
                                            </span>
                                        </div>
                                    ) : null}
                                    <div className="spacer-single"></div>

                                    <div className="flex middle center">
                                        {wallet.status === "connecting" ? (
                                            <button className="button-white">
                                                Connecting...
                                            </button>
                                        ) : wallet.status === "connected" ? (
                                            loading ? (
                                                <button className="button-white">
                                                    Buying...
                                                </button>
                                            ) : (
                                                <button
                                                    className="button-white"
                                                    onClick={handleBuy}
                                                >
                                                    Buy XBT Now
                                                </button>
                                            )
                                        ) : (
                                            <button
                                                className="button-white"
                                                onClick={handleConnect}
                                            >
                                                Wallet Connect
                                            </button>
                                        )}
                                    </div>
                                    <div className="spacer-half"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Presale Card */}
                </div>
                <div className="spacer-double"></div>

                {/* Begin Ecosystem Info */}
                <div className="ecosystem">
                    <h2>Ecosystem</h2>
                    <div className="row text-center">
                        <div className="col-md-4 col-sm-12">
                            <span>
                                <img src={sub1} alt="" />
                                <h4>
                                    Shared <br /> transaction fees
                                </h4>
                                <p>
                                    It's no secret fees and gas costs can
                                    quickly eat into profits. Split investment
                                    costs across all members of a Garden and
                                    receive a higher profit margin.
                                </p>
                            </span>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <span>
                                <img src={sub2} alt="" />
                                <h4>
                                    Shared <br /> transaction fees
                                </h4>
                                <p>
                                    No single point of control. Deposit or
                                    withdraw capital at any time.* Garden's are
                                    trustless smart contracts and only you have
                                    access to your funds.
                                </p>
                            </span>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <span>
                                <img src={sub3} alt="" />
                                <h4>
                                    Shared <br /> transaction fees
                                </h4>
                                <p>
                                    No need to manually claim and rebalance
                                    profits. Gardens autocompound investment
                                    profits across new and existing strategies
                                    to maintain maxium capital efficiency.
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
                {/* End Ecosystem Info */}
            </section>
            {/* End Mainboard */}

            <div className="spacer-double"></div>

            {/* Begin Footer */}
            <section className="footer">
                <div>
                    <img src={logo} alt="" />
                    <h3>bayloanswap</h3>
                </div>
                <p>Copyright &copy; 2022</p>
            </section>
            {/* End Footer */}
        </div>
    );
}
