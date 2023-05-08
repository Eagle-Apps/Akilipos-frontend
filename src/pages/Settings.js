import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import Aos from "aos";
import 'aos/dist/aos.css';

function Settings() {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return <>
        <Row>
            <Col md="2" sm="12">
                <NavBar class1="activeBar" color1="white" />
            </Col>
            <Col md="10" sm="12" style={{ minHeight: "100vh" }} className="content-wrapper">
                <div style={{ minHeight: "85vh" }}>

                    {/* header section */}
                    <div className="row page-titles">
                        <div className="col-md-5 align-self-center">
                            <h3>Settings</h3>
                        </div>
                    </div>

                    {/* settings section */}
                    <div className="card me-2" data-aos="zoom-in"
                        data-aos-once="true"
                        data-aos-easing="ease-out-sine">
                        <div className="card-body">
                            <form className="form-horizontal form-material">
                                <div className="form-group">
                                    <label className="col-md-12">Business Name</label>
                                    <div className="col-md-12">
                                        <input type="text" placeholder="Business Nig. Ltd" className="form-control form-control-line" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="example-email" className="col-md-12">Email</label>
                                    <div className="col-md-12">
                                        <input type="email" placeholder="business@gmail.com" className="form-control form-control-line" name="example-email" id="example-email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-12">Password</label>
                                    <div className="col-md-12">
                                        <input type="password" value="password" className="form-control form-control-line" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-12">Phone No</label>
                                    <div className="col-md-12">
                                        <input type="text" placeholder="123 456 7890" className="form-control form-control-line" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-12">Address</label>
                                    <div className="col-md-12">
                                        <input type="text" placeholder="Street Number, Street, City, State, Country" className="form-control form-control-line" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-12">Logo</label>
                                    <div className="col-md-12">
                                        <input type="file" className="form-control form-control-line" />
                                    </div>
                                </div>
                                {/* <div className="form-group">
                                    <label className="col-md-12">Message</label>
                                    <div className="col-md-12">
                                        <textarea rows="5" className="form-control form-control-line"></textarea>
                                    </div>
                                </div> */}
                                {/* <div className="form-group">
                                    <label className="col-sm-12">Select Country</label>
                                    <div className="col-sm-12">
                                        <select className="form-control form-control-line">
                                            <option>London</option>
                                            <option>India</option>
                                            <option>Usa</option>
                                            <option>Canada</option>
                                            <option>Thailand</option>
                                        </select>
                                    </div>
                                </div> */}
                                <div className="form-group">
                                    <label className="col-md-12">Coin Name</label>
                                    <div className="col-md-12">
                                        <input type="text" placeholder="Thank You Coin" className="form-control form-control-line" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-12">Coin Value</label>
                                    <div className="col-md-12">
                                        <input type="Number" placeholder="100" className="form-control form-control-line" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-12">
                                        <button className="btn btn-success">Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

                {/* footer section */}
                <div data-aos="zoom-in"
                    data-aos-once="true"
                    data-aos-easing="ease-out-sine">
                    <Footer />
                </div>
            </Col>
        </Row>
    </>
};

export default Settings;