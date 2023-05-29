import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import logo from "../assets/images/akili.png";
import { Link } from "react-router-dom";
import Img1 from "../assets/images/bg-biz.jpg";
import Img2 from "../assets/images/bg-woman.jpg";
import Img3 from "../assets/images/5.jpg";
import Carousel from 'react-bootstrap/Carousel';

function Home(props) {
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

                <Row className="business">
                    <Carousel fade>
                        <Carousel.Item>
                            <Row>
                                <Col md="7">
                                    <div>
                                        <h3>Simple banking & bookkeeping for your micro business</h3>
                                        <p>Get an Instant Business Bank Account, Simple Bookkeeping, Send Invoices & Receipts, and get an E-commerce website, all in one FREE app!</p>
                                    </div>
                                </Col>
                                <Col md="5">
                                    <img src={Img1} alt="business" />
                                </Col>
                            </Row>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Row>
                                <Col md="7">
                                    <div>
                                        <h3> Stay organized, track transactions.</h3>
                                        <p>Streamline your micro business finances with our simple banking and bookkeeping solutions  and make informed decisions effortlessly.</p>
                                    </div>
                                </Col>
                                <Col md="5">
                                    <img src={Img2} alt="business" />
                                </Col>
                            </Row>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Row>
                                <Col md="7">
                                    <div>
                                        <h3>Start managing your finances with ease and precision.</h3>
                                        <p>Let our simple banking and bookkeeping tools be your trusted companion on your micro business journey.</p>
                                    </div>
                                </Col>
                                <Col md="5">
                                    <img src={Img3} alt="business" />
                                </Col>
                            </Row>
                        </Carousel.Item>
                        {/* <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Second slide&bg=282c34"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Third slide&bg=20232a"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item> */}
                    </Carousel>
                    {/* <Col md="7">
                        <div>
                            <h3>Simple banking & bookkeeping for your micro business</h3>
                            <p>Get an Instant Business Bank Account, Simple Bookkeeping, Send Invoices & Receipts, and get an E-commerce website, all in one FREE app!</p>
                        </div>
                    </Col>
                    <Col md="5">
                        <img src={Img1} alt="business" />
                    </Col> */}
                </Row>

                <Row>
                    <Col className="ads">
                        <div className="sample-dashboard">
                            <img src="https://cdn.dribbble.com/userupload/2773311/file/original-d6adfa40b9b8ac940dff9c7c1da465b8.jpg?compress=1&resize=1024x768" alt="" />
                        </div>
                        <h5 id="about">100,000+ businesses will be using Akili by 2024 January</h5>
                        <hr />
                        <h5 style={{ color: "#70bfad" }}>One account to run your small business like the big boys</h5>
                    </Col>
                </Row>


                <Row>
                    <Col className="ads">
                        <div style={{ width: "100%", background: "#8da1af" }}>
                            <h5 style={{ color: "white", padding: "20px,0px", margin: "0px" }}>TESTIMONIES</h5>
                        </div>
                        <div className="sample-dashboard">
                            <iframe width="853" height="480" src="https://www.youtube.com/embed/s6dMWzZKjTs" title="Stop wasting time when you&#39;re learning to code!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </Col>
                </Row>

                <Footer />
            </Container>
        </Container>

    </>
}

export default Home;