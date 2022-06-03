export default function Main() {
    const handleBuy = () => {
        alert("abc");
    };

    return (
        <div className="dashboard">
            <div className="spacer-half"></div>
            <div className="container">
                <div className="header">
                    <h3>bayloanswap</h3>
                </div>
            </div>

            <section className="mainboard">
                <div className="container">
                    <div className="flex center middle text-center">
                        <h2>
                            Crypto investing, <br />
                            simplified. DeFi Together
                        </h2>
                    </div>

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
                                    <div className="col-md-6 col-sm-12">
                                        <span>Name: XBT</span>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
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

                    <div className="flex center middle text-center">
                        <h2>Ecosystem</h2>
                        <div className="row">
                            <div className="col-md-4 col-sm-12">
                                <img src="../assets/images/first.png" alt="" />
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <img src="../assets/images/second.png" alt="" />
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <img src="../assets/images/third.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
