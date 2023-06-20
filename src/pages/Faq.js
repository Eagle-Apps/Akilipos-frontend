import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { ChevronDown } from "react-feather";
import logo from "../assets/images/akili1.png";
import { Link } from "react-router-dom";

function CustomToggle({ eventKey, day }) {
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
        <button id="view-project-tasks-ah" type="button" onClick={decoratedOnClick}>
            <div className="mt-2" >
                <h5 style={{ fontSize: "18px", fontWeight: "500" }}>{day}</h5>
            </div>
            <ChevronDown />
        </button>
    );
}

function Faq() {
    const [project, setProject] = useState([
        {
            "day": "What is the Cash Book Page?",
            "content": [
                {
                    "topic": "Keeping a cash book for your business is very important because it helps your business keep track of purchases that can easily slip through the cracks."
                },
                {
                    "topic": "creating registration form"
                }, {
                    "topic": "build a page"
                },
                {
                    "topic": "build three pages"
                }
            ],

        },
        {
            "day": "How to record a New Sale?",
            "content": [
                {
                    "topic": "Keeping a cash book for your business is very important because it helps your business keep track of purchases that can easily slip through the cracks.bkbsbfks fsskbfsb sbkbsfsbkfsf sfbksbbs skkb"
                },
                {
                    "topic": "creating registration form"
                }, {
                    "topic": "build a page"
                },
                {
                    "topic": "build three pages"
                }
            ],

        },
        {
            "day": "How to View all your transactions?",
            "content": [
                {
                    "topic": "Keeping a cash book for your business is very important because it helps your business keep track of purchases that can easily slip through the cracks. gggggggggggggggggggggg"
                },
                {
                    "topic": "creating registration form"
                }, {
                    "topic": "build a page"
                },
                {
                    "topic": "build three pages"
                }
            ],

        }
    ]);
    let [hide, setHide] = useState("");

    let mobileView = () => {
        if (hide === "") {
            setHide("teleport-show");
        } else {
            setHide("");
        }
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <>

        <Container fluid style={{ background: "white", minHeight: "100vh" }}>
            <Container>
                <div data-role="Header" className={`header-header`}>
                    <div className="header-container">
                        <Link to="/" className="header-navlink3">
                            <div className="logo1">
                                <img id="logo" src={logo} alt="akili-logo" />
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
                                <div className="logo1">
                                    <img id="logo" src={logo} alt="akili-logo" />
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

                <div className="py-3" style={{ background: "#70bfad" }}>

                    <div className="mt-2 mb-3" >
                        <button className="create-btn-ah ms-3" onClick={handleShow}>Ask a Question ?</button>
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                            centered
                        >
                            <Modal.Header closeButton
                                style={{ padding: "10px 50px" }} >
                                <Modal.Title>Your Question</Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ padding: "15px 50px" }}>

                                <div className="card card-body">
                                    <div className="col-sm-12 col-xs-12">
                                        <form>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Name</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Your Name" />
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Email</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Your Email" />
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputPassword1">Question</label>
                                                <textarea className="form-control" id="exampleInputEmail1" rows={"6"}></textarea>
                                            </div>
                                            <button style={{ background: "black", color: "white", fontWeight: "800" }} type="submit" className="btn waves-effect waves-light m-r-10">Submit</button>
                                        </form>
                                    </div>
                                </div>

                            </Modal.Body>
                        </Modal>
                    </div>

                    {/* ask question section */}
                    <div>
                        <div className={"col-lg-12 col-md-12 mb-3"}>
                            <div className="p-2 main_phase_break_container_ah">
                                <Accordion defaultActiveKey={0}>
                                    {project?.map((e, i) => {
                                        return (
                                            <Card style={{ borderRadius: "5px", background: "whitesmoke" }} className="mb-3" key={i}>
                                                <Card.Header
                                                    className="flexbtw"
                                                    style={{ borderBottom: "1px solid silver", background: "whitesmoke", height: "65px", alignItems: "center" }}
                                                >
                                                    <CustomToggle eventKey={i} day={e.day} />
                                                </Card.Header>
                                                <Accordion.Collapse eventKey={i}>


                                                    <Card.Body className="">
                                                        <p>{e.content[0].topic}</p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        );
                                    })}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </Container>
        </Container>
    </>
}

export default Faq;