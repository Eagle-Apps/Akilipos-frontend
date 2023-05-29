import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import logo from "../assets/images/akili.png";
import { Link } from "react-router-dom";
import Img1 from "../assets/images/bg-biz.jpg"

function Price(props) {
    let [hide, setHide] = useState("");

    let mobileView = () => {
        if (hide === "") {
            setHide("teleport-show");
        } else {
            setHide("");
        }
    }

    return <>
        <Container fluid style={{ background: "white", minHeight: "100vh" }}>
            <Container>
            
                <div data-role="Header" className={`header-header`}>
                    <div className="header-container">
                        <Link to="/" className="header-navlink">
                            <div className="logo" style={{ width: "150px" }}>
                                <img id="logo" src={logo} alt="akili-logo" />
                                <p style={{ color: "white" }}>AKILI POS</p>
                            </div>
                        </Link>
                    </div>
                    <div data-role="BurgerMenu" className="header-burger-menu">
                        <svg viewBox="0 0 1024 1024" className="header-icon07" onClick={() => mobileView()}>
                            <path
                                d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
                                className=""
                            ></path>
                        </svg>
                    </div>
                    <div className="header-container3 home-topbar">
                        <div>
                            <a href="/#about">
                                ABOUT
                            </a>
                        </div>
                        <div>
                            <Link to="/prices">
                                PRICE
                            </Link>
                        </div>
                        <div>
                            <Link to="/faq">
                                FAQ
                            </Link>
                        </div>
                        <div>
                            <Link to="/login">
                                LOGIN
                            </Link>
                        </div>
                    </div>
                    <div data-role="MobileMenu" className={`header-mobile-menu ${hide}`}>
                        <div className="header-top">
                            <Link to="/" className="header-navlink3">
                                <div className="logo" style={{ width: "150px" }}>
                                    <img id="logo" src={logo} alt="akili-logo" />
                                    <p style={{ color: "white" }}>AKILI POS</p>
                                </div>
                            </Link>
                            <div data-role="CloseMobileMenu" className="header-close-menu">
                                <svg viewBox="0 0 1024 1024" className="header-icon15" onClick={() => setHide("")}>
                                    <path
                                        d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                                        className=""
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <div className="header-mid">
                            <div>
                                <a href="/#about">
                                    ABOUT
                                </a>
                            </div>
                            <div>
                                <Link to="/prices">
                                    PRICE
                                </Link>
                            </div>
                            <div>
                                <Link to="/faq">
                                    FAQ
                                </Link>
                            </div>
                            <div>
                                <Link to="/login">
                                    LOGIN
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row pricing-plan">
                                    <div className="col-md-3 col-xs-12 col-sm-6 no-padding">
                                        <div className="pricing-box">
                                            <div className="pricing-body b-l">
                                                <div className="pricing-header">
                                                    <h4 className="text-center">Silver</h4>
                                                    <h2 className="text-center"><span className="price-sign">&#8358;</span>24</h2>
                                                    <p className="uppercase">per month</p>
                                                </div>
                                                <div className="price-table-content">
                                                    <div className="price-row"><i className="icon-user"></i> 3 Members</div>
                                                    <div className="price-row"><i className="icon-screen-smartphone"></i> Single Device</div>
                                                    <div className="price-row"><i className="icon-drawar"></i> 50GB Storage</div>
                                                    <div className="price-row"><i className="icon-refresh"></i> Monthly Backups</div>
                                                    <div className="price-row">
                                                        <button className="btn btn-success waves-effect waves-light m-t-20">Sign up</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-xs-12 col-sm-6 no-padding">
                                        <div className="pricing-box b-l">
                                            <div className="pricing-body">
                                                <div className="pricing-header">
                                                    <h4 className="text-center">Gold</h4>
                                                    <h2 className="text-center"><span className="price-sign">&#8358;</span>34</h2>
                                                    <p className="uppercase">per month</p>
                                                </div>
                                                <div className="price-table-content">
                                                    <div className="price-row"><i className="icon-user"></i> 5 Members</div>
                                                    <div className="price-row"><i className="icon-screen-smartphone"></i> Single Device</div>
                                                    <div className="price-row"><i className="icon-drawar"></i> 80GB Storage</div>
                                                    <div className="price-row"><i className="icon-refresh"></i> Monthly Backups</div>
                                                    <div className="price-row">
                                                        <button className="btn btn-success waves-effect waves-light m-t-20">Sign up</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-xs-12 col-sm-6 no-padding">
                                        <div className="pricing-box featured-plan">
                                            <div className="pricing-body">
                                                <div className="pricing-header">
                                                    <h4 className="price-lable text-white bg-warning" style={{ fontSize: "14px" }}> Popular</h4>
                                                    <h4 className="text-center">Platinum</h4>
                                                    <h2 className="text-center"><span className="price-sign">&#8358;</span>45</h2>
                                                    <p className="uppercase">per month</p>
                                                </div>
                                                <div className="price-table-content">
                                                    <div className="price-row"><i className="icon-user"></i> 10 Members</div>
                                                    <div className="price-row"><i className="icon-screen-smartphone"></i> Single Device</div>
                                                    <div className="price-row"><i className="icon-drawar"></i> 120GB Storage</div>
                                                    <div className="price-row"><i className="icon-refresh"></i> Monthly Backups</div>
                                                    <div className="price-row">
                                                        <button className="btn btn-lg btn-info waves-effect waves-light m-t-20">Sign up</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-xs-12 col-sm-6 no-padding">
                                        <div className="pricing-box">
                                            <div className="pricing-body b-r">
                                                <div className="pricing-header">
                                                    <h4 className="text-center">Dimond</h4>
                                                    <h2 className="text-center"><span className="price-sign">&#8358;</span>54</h2>
                                                    <p className="uppercase">per month</p>
                                                </div>
                                                <div className="price-table-content">
                                                    <div className="price-row"><i className="icon-user"></i> 15 Members</div>
                                                    <div className="price-row"><i className="icon-screen-smartphone"></i> Single Device</div>
                                                    <div className="price-row"><i className="icon-drawar"></i> 1TB Storage</div>
                                                    <div className="price-row"><i className="icon-refresh"></i> Monthly Backups</div>
                                                    <div className="price-row">
                                                        <button className="btn btn-success waves-effect waves-light m-t-20">Sign up</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </Container>
        </Container>

    </>
}

export default Price;