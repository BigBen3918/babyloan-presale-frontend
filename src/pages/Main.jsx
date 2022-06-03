import logo from "../assets/images/logo.png";
import sub1 from "../assets/images/first.png";
import sub2 from "../assets/images/second.png";
import sub3 from "../assets/images/third.png";

export default function Main() {
    const handleBuy = () => {
        alert("abc");
    };

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
                                        <span>
                                            <b>Add to Metamask</b>
                                        </span>
                                    </div>
                                </div>
                                <div className="spacer-10"></div>

                                <div className="slider">
                                    <span>Soft Cap</span>
                                    <div className="bar"></div>
                                    <div className="spacer-half"></div>

                                    <span>Said Amount</span>
                                    <div className="bar"></div>
                                    <div className="spacer-half"></div>

                                    <div className="presale__control">
                                        <label>Select: </label>
                                        <select>
                                            <option>BNB</option>
                                        </select>
                                    </div>
                                    <br />
                                    <div className="presale__control">
                                        <label>Amount: </label>
                                        <input type="number" />
                                    </div>
                                    <div className="spacer-single"></div>

                                    <div className="flex middle center">
                                        <button
                                            className="button-white"
                                            onClick={handleBuy}
                                        >
                                            Buy XBT Now
                                        </button>
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
