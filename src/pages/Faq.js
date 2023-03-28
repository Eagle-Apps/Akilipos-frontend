import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { ChevronDown } from "react-feather";
import logo from "../assets/images/akili.png";
import { Link } from "react-router-dom";

function CustomToggle({ eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
        <button id="view-project-tasks-ah" type="button" onClick={decoratedOnClick}>
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
    let changeView = (e) => {
        alert(1)
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <>

        <Container fluid style={{ background: "white", minHeight: "100vh" }}>
            <Container>
                <div className="home-topbar flex px-4" style={{
                    justifyContent: "space-between", background: "black", alignItems: "center", height: "50px", color: "white",
                    fontWeight: "600", fontSize: "20px"
                }}>    <Link to="/">
                        <div className="logo" style={{ width: "150px" }}>

                            <img id="logo" src={logo} alt="akili-logo" />
                            <p style={{ color: "white" }}>AKILI POS</p>


                        </div>  </Link>
                    <div>PRODUCTS</div>
                    <div>BLOG</div>
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
                                                    <div className="mt-2">
                                                        <h5 style={{ fontSize: "18px", fontWeight: "500" }}>{e.day}</h5>
                                                    </div>
                                                    <CustomToggle eventKey={i} />
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