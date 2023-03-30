import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { ChevronDown } from "react-feather";

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

function HelpCenter() {
    const [project, setProject] = useState([
        {
            "day": "What is the Cash Book Page?",
            "lectures": "3 lectures",
            "content": [
                {
                    "topic": "Keeping a cash book for your business is very important because it helps your business keep track of purchases that can easily slip through the cracks.",
                    "duration": "30 min",
                    "status": "done",
                    "resource": true,
                    "status2": "lecture",
                },
                {
                    "topic": "creating registration form",
                    "duration": "24 min",
                    "status": "done",
                    "resource": false,
                    "status2": "lecture",
                }, {
                    "topic": "build a page",
                    "duration": "24 min",
                    "status": "pending",
                    "resource": false,
                    "status2": "classwork",
                },
                {
                    "topic": "build three pages",
                    "duration": "24 min",
                    "status": "pending",
                    "resource": true,
                    "status2": "assignment",
                }
            ],

        },
        {
            "day": "How to record a New Sale?",
            "lectures": "4 lectures",
            "content": [
                {
                    "topic": "Keeping a cash book for your business is very important because it helps your business keep track of purchases that can easily slip through the cracks.bkbsbfks fsskbfsb sbkbsfsbkfsf sfbksbbs skkb",
                    "duration": "30 min",
                    "status": "pending",
                    "resource": true,
                    "status2": "lecture",
                },
                {
                    "topic": "creating registration form",
                    "duration": "24 min",
                    "status": "pending",
                    "resource": false,
                    "status2": "lecture",
                }, {
                    "topic": "build a page",
                    "duration": "24 min",
                    "status": "pending",
                    "resource": false,
                    "status2": "classwork",
                },
                {
                    "topic": "build three pages",
                    "duration": "24 min",
                    "status": "pending",
                    "resource": true,
                    "status2": "assignment",
                }
            ],

        },
        {
            "day": "How to View all your transactions?",
            "lectures": "2 lectures",
            "content": [
                {
                    "topic": "Keeping a cash book for your business is very important because it helps your business keep track of purchases that can easily slip through the cracks. ggggggggggggggggggggg",
                    "duration": "30 min",
                    "status": "pending",
                    "resource": true,
                    "status2": "lecture",
                },
                {
                    "topic": "creating registration form",
                    "duration": "24 min",
                    "status": "pending",
                    "resource": false,
                    "status2": "lecture",
                }, {
                    "topic": "build a page",
                    "duration": "24 min",
                    "status": "pending",
                    "resource": false,
                    "status2": "classwork",
                },
                {
                    "topic": "build three pages",
                    "duration": "24 min",
                    "status": "pending",
                    "resource": true,
                    "status2": "assignment",
                }
            ],

        }
    ]);
    let changeView = (e) => {
        alert(1)
    };
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <>
        <Row>
            <Col md="2" sm="12">
                <NavBar class7="activeBar" color7="white" />
            </Col>
            <Col md="10" sm="12" style={{ minHeight: "100vh" }} className="content-wrapper">
                <div style={{ minHeight: "85vh" }}>

                    {/* header section */}
                    <div className="row page-titles">
                        <div className="col-md-5 align-self-center">
                            <h3>Help Center</h3>
                        </div>
                    </div>

                    <div className="pe-3">

                        <div className="mt-2 mb-3">
                            <button style={{ background: "white" }} className="create-btn-ah" onClick={handleShow}>Ask a Question ?</button>
                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                                centered
                            >
                                <Modal.Header closeButton
                                    style={{ padding: "10px 50px" }} >
                                    <Modal.Title>Question</Modal.Title>
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
                                                <Card style={{ borderRadius: "5px", background: "whitesmoke" }} className="mb-3" key={i} eventKey={i}>
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



                </div>
                <div>
                    <Footer />
                </div>
            </Col>
        </Row>

    </>
}

export default HelpCenter