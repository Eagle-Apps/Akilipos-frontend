import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import logo from "../assets/images/akili.png";
import { Link } from "react-router-dom";
import Img1 from "../assets/images/bg-biz.jpg"

function Home(props) {
    return <>
        <Container fluid style={{ background: "white", minHeight: "100vh" }}>
            <Container>
                <div className="home-topbar flex px-4" style={{
                    justifyContent: "space-between", background: "black", alignItems: "center", height: "50px", color: "white",
                    fontWeight: "600", fontSize: "20px"
                }}>
                    <div className="logo" style={{ width: "150px" }}>
                        <img id="logo" src={logo} alt="akili-logo" />
                        <p style={{ color: "white" }}>AKILI POS</p>
                    </div>
                    <div>PRODUCTS</div>
                    <div>
                        <a href="#about">ABOUT</a>
                    </div>
                    <div>BLOG</div>
                    <div>
                        <Link to="faq">
                            FAQ
                        </Link>
                    </div>
                    <div>
                        <Link to="login">
                            LOGIN
                        </Link>
                    </div>
                </div>
                <Row className="business">
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