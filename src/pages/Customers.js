import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import Modal from "react-bootstrap/Modal";

function Customers() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <>
        <Row>
            <Col md="2" sm="12">
                <NavBar class3="activeBar" color3="white" />
            </Col>
            <Col md="10" sm="12" style={{ minHeight: "100vh" }} className="content-wrapper">
                <div style={{ minHeight: "85vh" }}>

                    {/* header section */}
                    <div className="row page-titles">
                        <div className="col-md-5 align-self-center">
                            <h3>Customers</h3>
                        </div>
                    </div>

                    <div className="">

                        {/* <div className="mt-2 mb-3">
                            <button style={{ background: "white" }} className="create-btn-ah" onClick={handleShow}>Add Supplier +</button>
                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                                centered
                            >
                                <Modal.Header closeButton
                                    style={{ padding: "10px 50px" }} >
                                    <Modal.Title>Add a New Vendor ?</Modal.Title>
                                </Modal.Header>
                                <Modal.Body style={{ padding: "15px 50px" }}>

                                    <div className="card card-body">
                                        <div className="col-sm-12 col-xs-12">
                                            <form>
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Name</label>
                                                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Product Name" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Address</label>
                                                    <input type="address" className="form-control" id="exampleInputEmail1" placeholder="Enter Address" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputPassword1">Role</label>
                                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Describe Role" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputPassword1">Phone</label>
                                                    <input type="tel" className="form-control" id="exampleInputPassword1" placeholder="Phone Number" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputPassword1">Picture</label>
                                                    <input type="file" className="form-control" id="exampleInputPassword1" placeholder="" />
                                                </div>
                                                <button style={{ background: "black", color: "white", fontWeight: "800" }} type="submit" className="btn waves-effect waves-light m-r-10">Submit</button>
                                            </form>
                                        </div>
                                    </div>

                                </Modal.Body>
                            </Modal>
                        </div> */}

                        {/* vendor section */}
                        {/* <div className="row">
                            <div className="col-md-6 col-lg-6 col-xlg-4">
                                <div className="card card-body">
                                    <div className="row">
                                        <div className="col-md-4 col-lg-3 text-center">
                                            <a href="app-contact-detail.html"><img src="../assets/images/users/1.jpg" alt="user" className="img-circle img-responsive" /></a>
                                        </div>
                                        <div className="col-md-8 col-lg-9">
                                            <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                            <address>
                                                795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                                <br />
                                                <br />
                                                <abbr title="Phone">P:</abbr> (123) 456-7890
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-6 col-lg-6 col-xlg-4">
                                <div className="card card-body">
                                    <div className="row">
                                        <div className="col-md-4 col-lg-3 text-center">
                                            <a href="app-contact-detail.html"><img src="../assets/images/users/2.jpg" alt="user" className="img-circle img-responsive" /></a>
                                        </div>
                                        <div className="col-md-8 col-lg-9">
                                            <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                            <address>
                                                795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                                <br />
                                                <br />
                                                <abbr title="Phone">P:</abbr> (123) 456-7890
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-6 col-xlg-4">
                                <div className="card card-body">
                                    <div className="row">
                                        <div className="col-md-4 col-lg-3 text-center">
                                            <a href="app-contact-detail.html"><img src="../assets/images/users/3.jpg" alt="user" className="img-circle img-responsive" /></a>
                                        </div>
                                        <div className="col-md-8 col-lg-9">
                                            <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                            <address>
                                                795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                                <br />
                                                <br />
                                                <abbr title="Phone">P:</abbr> (123) 456-7890
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-6 col-xlg-4">
                                <div className="card card-body">
                                    <div className="row">
                                        <div className="col-md-4 col-lg-3 text-center">
                                            <a href="app-contact-detail.html"><img src="../assets/images/users/4.jpg" alt="user" className="img-circle img-responsive" /></a>
                                        </div>
                                        <div className="col-md-8 col-lg-9">
                                            <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                            <address>
                                                795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                                <br />
                                                <br />
                                                <abbr title="Phone">P:</abbr> (123) 456-7890
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-6 col-xlg-4">
                                <div className="card card-body">
                                    <div className="row">
                                        <div className="col-md-4 col-lg-3 text-center">
                                            <a href="app-contact-detail.html"><img src="../assets/images/users/5.jpg" alt="user" className="img-circle img-responsive" /></a>
                                        </div>
                                        <div className="col-md-8 col-lg-9">
                                            <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                            <address>
                                                795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                                <br />
                                                <br />
                                                <abbr title="Phone">P:</abbr> (123) 456-7890
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-6 col-xlg-4">
                                <div className="card card-body">
                                    <div className="row">
                                        <div className="col-md-4 col-lg-3 text-center">
                                            <a href="app-contact-detail.html"><img src="../assets/images/users/6.jpg" alt="user" className="img-circle img-responsive" /></a>
                                        </div>
                                        <div className="col-md-8 col-lg-9">
                                            <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                            <address>
                                                795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                                <br />
                                                <br />
                                                <abbr title="Phone">P:</abbr> (123) 456-7890
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-6 col-xlg-4">
                                <div className="card card-body">
                                    <div className="row">
                                        <div className="col-md-4 col-lg-3 text-center">
                                            <a href="app-contact-detail.html"><img src="../assets/images/users/7.jpg" alt="user" className="img-circle img-responsive" /></a>
                                        </div>
                                        <div className="col-md-8 col-lg-9">
                                            <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                            <address>
                                                795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                                <br />
                                                <br />
                                                <abbr title="Phone">P:</abbr> (123) 456-7890
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-6 col-xlg-4">
                                <div className="card card-body">
                                    <div className="row">
                                        <div className="col-md-4 col-lg-3 text-center">
                                            <a href="app-contact-detail.html"><img src="../assets/images/users/8.jpg" alt="user" className="img-circle img-responsive" /></a>
                                        </div>
                                        <div className="col-md-8 col-lg-9">
                                            <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                            <address>
                                                795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                                <br />
                                                <br />
                                                <abbr title="Phone">P:</abbr> (123) 456-7890
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-6 col-xlg-4">
                                <div className="card card-body">
                                    <div className="row">
                                        <div className="col-md-4 col-lg-3 text-center">
                                            <a href="app-contact-detail.html"><img src="../assets/images/users/1.jpg" alt="user" className="img-circle img-responsive" /></a>
                                        </div>
                                        <div className="col-md-8 col-lg-9">
                                            <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                            <address>
                                                795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                                <br />
                                                <br />
                                                <abbr title="Phone">P:</abbr> (123) 456-7890
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-6 col-xlg-4">
                                <div className="card card-body">
                                    <div className="row">
                                        <div className="col-md-4 col-lg-3 text-center">
                                            <a href="app-contact-detail.html"><img src="../assets/images/users/2.jpg" alt="user" className="img-circle img-responsive" /></a>
                                        </div>
                                        <div className="col-md-8 col-lg-9">
                                            <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                            <address>
                                                795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                                <br />
                                                <br />
                                                <abbr title="Phone">P:</abbr> (123) 456-7890
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-6 col-xlg-4">
                                <div className="card card-body">
                                    <div className="row">
                                        <div className="col-md-4 col-lg-3 text-center">
                                            <a href="app-contact-detail.html"><img src="../assets/images/users/3.jpg" alt="user" className="img-circle img-responsive" /></a>
                                        </div>
                                        <div className="col-md-8 col-lg-9">
                                            <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                            <address>
                                                795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                                <br />
                                                <br />
                                                <abbr title="Phone">P:</abbr> (123) 456-7890
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-6 col-lg-6 col-xlg-4">
                                <div className="card card-body">
                                    <div className="row">
                                        <div className="col-md-4 col-lg-3 text-center">
                                            <a href="app-contact-detail.html"><img src="../assets/images/users/4.jpg" alt="user" className="img-circle img-responsive" /></a>
                                        </div>
                                        <div className="col-md-8 col-lg-9">
                                            <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                            <address>
                                                795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                                <br />
                                                <br />
                                                <abbr title="Phone">P:</abbr> (123) 456-7890
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div> */}
                        <div className="card mb-2 me-2" style={{marginTop:"-20px"}}>

                            <div className="chat-main-box">

                                <div className="chat-left-aside">
                                    <div className="open-panel"><i className="ti-angle-right"></i></div>
                                    <div className="chat-left-inner">
                                        <div className="form-material">
                                            <input className="form-control p-20" type="text" placeholder="Search Customers" />
                                        </div>
                                        <ul className="chatonline style-none">
                                            <li>
                                                <a href="javascript:void(0)"><img src="../assets/images/users/1.jpg" alt="user-img" className="img-circle" /> <span>Varun Dhavan <small className="text-success">online</small></span></a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)" className="active"><img src="../assets/images/users/2.jpg" alt="user-img" className="img-circle" /> <span>Genelia Deshmukh <small className="text-warning">Away</small></span></a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)"><img src="../assets/images/users/3.jpg" alt="user-img" className="img-circle" /> <span>Ritesh Deshmukh <small className="text-danger">Busy</small></span></a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)"><img src="../assets/images/users/4.jpg" alt="user-img" className="img-circle" /> <span>Arijit Sinh <small className="text-muted">Offline</small></span></a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)"><img src="../assets/images/users/5.jpg" alt="user-img" className="img-circle" /> <span>Govinda Star <small className="text-success">online</small></span></a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)"><img src="../assets/images/users/6.jpg" alt="user-img" className="img-circle" /> <span>John Abraham<small className="text-success">online</small></span></a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)"><img src="../assets/images/users/7.jpg" alt="user-img" className="img-circle" /> <span>Hritik Roshan<small className="text-success">online</small></span></a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)"><img src="../assets/images/users/8.jpg" alt="user-img" className="img-circle" /> <span>Pwandeep rajan <small className="text-success">online</small></span></a>
                                            </li>
                                            <li className="p-20"></li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="chat-right-aside">                                
                                    <div className="chat-rbox">
                                        <ul className="chat-list p-20">

                                            <li>
                                                <div className="chat-img"><img src="../assets/images/users/1.jpg" alt="user" /></div>
                                                <div className="chat-content">
                                                    <h5>James Anderson</h5>
                                                    <div className="box bg-light-info">Lorem Ipsum is simply dummy text of the printing & type setting industry.</div>
                                                </div>
                                                <div className="chat-time">10:56 am</div>
                                            </li>

                                            <li>
                                                <div className="chat-img"><img src="../assets/images/users/2.jpg" alt="user" /></div>
                                                <div className="chat-content">
                                                    <h5>Bianca Doe</h5>
                                                    <div className="box bg-light-info">It’s Great opportunity to work.</div>
                                                </div>
                                                <div className="chat-time">10:57 am</div>
                                            </li>

                                            <li className="reverse">

                                                <div className="chat-content">
                                                    <h5>Steave Doe</h5>
                                                    <div className="box bg-light-inverse">It’s Great opportunity to work.</div>
                                                </div>
                                                <div className="chat-img"><img src="../assets/images/users/5.jpg" alt="user" /></div>
                                                <div className="chat-time">10:57 am</div>
                                            </li>

                                            <li className="reverse">

                                                <div className="chat-content">
                                                    <h5>Steave Doe</h5>
                                                    <div className="box bg-light-inverse">It’s Great opportunity to work.</div>
                                                </div>

                                                <div className="chat-img"><img src="../assets/images/users/5.jpg" alt="user" /></div>
                                                <div className="chat-time">10:57 am</div>
                                            </li>

                                            <li>
                                                <div className="chat-img"><img src="../assets/images/users/3.jpg" alt="user" /></div>
                                                <div className="chat-content">
                                                    <h5>Angelina Rhodes</h5>
                                                    <div className="box bg-light-info">Well we have good budget for the project</div>
                                                </div>
                                                <div className="chat-time">11:00 am</div>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="card-body b-t">
                                        <div className="row">
                                            <div className="col-8">
                                                <textarea placeholder="Type your message here" className="form-control b-0"></textarea>
                                            </div>
                                            <div className="col-4 text-right">
                                                <button type="button" className="btn btn-info btn-circle btn-lg"><i className="fa fa-paper-plane-o"></i> </button>
                                            </div>
                                        </div>
                                    </div>
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

export default Customers;