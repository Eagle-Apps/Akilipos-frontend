import React, { useState, useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import Modal from "react-bootstrap/Modal";
import { Link, useParams } from "react-router-dom";
import { Store } from "../context/store";

function CustomersTable() {
    let store = useContext(Store);
    let [customerUrl] = store.customer;
    let [customers, setCustomers] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        loadCustomers();
    }, []);

    let loadCustomers = () => {
        let url = `${customerUrl}/customers/${id}`;
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setCustomers(res.customers)
            });
    };
    return <>
        <Row>
            <Col lg="3">
                <NavBar class3="activeBar" color3="white" />
            </Col>
            <Col lg="9" className="content-wrapper">
                <div className="content-wrapper-card">

                    {/* header section */}
                    <div className="row page-titles">
                        <div className="col-md-5 align-self-center">
                            <h3>Customers</h3>
                        </div>
                    </div>

                    <div className="card me-lg-2">
                        <div className="card-body">
                            <h4 className="card-title">Customers Details ({customers.length > 0 ? customers.length : 0})</h4>
                            <Link to={`/customers/${id}`} className="card-subtitle-link">
                                <h6 className="">
                                    Messages, Giveaways and Report
                                </h6>
                            </Link>

                            <div className="table-responsive m-t-40">
                                <table id="myTable" className="table table-bordered border-info">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {customers?.length === 0 ? <div className="text-center m-5">
                                            No customers added
                                        </div> : customers?.map((e, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td>
                                                        <Link style={{ color: "inherit", textDecoration: "none" }} to={`/profile/${e.id}/${id}`}>
                                                            {e.name}
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <Link style={{ color: "inherit", textDecoration: "none" }} to={`/profile/${e.id}/${id}`}>{e.email}
                                                        </Link></td>
                                                    <td>
                                                        <Link style={{ color: "inherit", textDecoration: "none" }} to={`/profile/${e.id}/${id}`}>{e.phone}
                                                        </Link></td>
                                                    <td>
                                                        <Link style={{ color: "inherit", textDecoration: "none" }} to={`/profile/${e.id}/${id}`}>{e.address}
                                                        </Link></td>
                                                </tr>
                                            )
                                        })}


                                    </tbody>
                                </table>
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

export default CustomersTable;