import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import Modal from "react-bootstrap/Modal";

function Vendors() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <>
        <Row>
            <Col md="2" sm="12">
                <NavBar />
            </Col>
            <Col md="10" sm="12" style={{ minHeight: "100vh" }} className="content-wrapper">
                <div style={{ minHeight: "85vh" }}>

                    {/* header section */}
                    <div className="row page-titles">
                        <div className="col-md-5 align-self-center">
                            <h3>Vendors</h3>
                        </div>
                        <div className="col-md-7 align-items-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">My Business</li>
                                <li className="breadcrumb-item active">Vendors</li>
                            </ol>
                        </div>
                    </div>

                    <div className="pe-3">

                        <div className="mt-2 mb-3">
                            <button style={{ background: "white" }} className="create-btn-ah" onClick={handleShow}>Add Vendor +</button>
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
                        </div>

                        {/* vendor section */}
                        <div className="row">
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

export default Vendors;