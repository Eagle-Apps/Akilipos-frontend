import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import Aos from "aos";
import 'aos/dist/aos.css';

function Sales() {
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
                    {/* sales section */}
                    <div className="card me-2" data-aos="zoom-in"
                        data-aos-once="true"
                        data-aos-easing="ease-out-sine">
                        <div className="card-body">
                            <h4 className="card-title">Editable with Datatable</h4>
                            <h6 className="card-subtitle">Just click on word which you want to change and enter</h6>
                            <table className="table table-striped table-bordered" id="editable-datatable">
                                <thead>
                                    <tr>
                                        <th>Rendering engine</th>
                                        <th>Browser</th>
                                        <th>Platform(s)</th>
                                        <th>Engine version</th>
                                        <th>CSS grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr id="1" className="gradeX">
                                        <td>Trident</td>
                                        <td>Internet Explorer 4.0 </td>
                                        <td>Win 95+</td>
                                        <td className="center">4</td>
                                        <td className="center">X</td>
                                    </tr>
                                </tbody>

                            </table>
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

export default Sales;