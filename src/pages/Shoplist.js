import React, { useState, useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import Modal from "react-bootstrap/Modal";
import { Link, useParams } from "react-router-dom";
import { Store } from "../context/store";

function ShopList() {
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
            <Col md="2" sm="12">
                <NavBar class3="activeBar" color3="white" />
            </Col>
            <Col md="10" sm="12" style={{ minHeight: "100vh" }} className="content-wrapper">
                <div style={{ minHeight: "85vh" }}>

                    {/* header section */}
                    <div className="row page-titles">
                        <div className="col-md-5 align-self-center">
                            <h3>Shopping List</h3>
                        </div>
                    </div>

                    <div className="card me-2">
                        <div className="card-body">
                            <h4 className="card-title">List of Products for Next Purchase</h4>
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
                                                    <td>{e.name}</td>
                                                    <td>{e.email}</td>
                                                    <td>{e.phone}</td>
                                                    <td>{e.address}</td>
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
};

export default ShopList;