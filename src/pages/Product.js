import React, { useState, useEffect, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import Modal from "react-bootstrap/Modal";
import { Home, RotateCcw } from "react-feather";
import { Store } from "../context/store";
import { useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

function Catalog() {
    let store = useContext(Store);
    let [productUrl] = store.product;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let { id } = useParams();
    let [products, setProducts] = useState([]);
    // let [, set] = useState("");
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState("");

    useEffect(() => {
        loadProducts();
    }, []);

    let loadProducts = () => {
        let url = `${productUrl}/products/${id}`;
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setProducts(res.products)
            });
    };
    
    return <>
        <Row>
            <Col md="2" sm="12">
                <NavBar class2="activeBar" color2="white" />
            </Col>
            <Col md="10" sm="12" style={{ minHeight: "100vh" }} className="content-wrapper">
                <div style={{ minHeight: "85vh" }}>

                    {/* header section */}
                    <div className="row page-titles">
                        <div className="col-md-5 align-self-center">
                            <h3>Catalog</h3>
                        </div>
                        <div className="col-md-7 align-items-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">My Business</li>
                                <li className="breadcrumb-item active">Products</li>
                            </ol>
                        </div>
                    </div>

                    <div className="pe-3">

                        <div className="mt-2 mb-3">
                            <button style={{ background: "white" }} className="create-btn-ah" onClick={handleShow}>Add Product +</button>
                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                                centered
                            >
                                <Modal.Header closeButton
                                    style={{ padding: "10px 50px" }} >
                                    <Modal.Title>Add a New Product?</Modal.Title>
                                </Modal.Header>
                                <Modal.Body style={{ padding: "15px 50px" }}>

                                    <div className="card card-body">
                                        <div className="col-sm-12 col-xs-12">
                                            <form>
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Product Name</label>
                                                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Product Name" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Price</label>
                                                    <input type="number" className="form-control" id="exampleInputEmail1" placeholder="Enter Price" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputPassword1">Description</label>
                                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Describe Product" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputPassword1">Quantity</label>
                                                    <input type="Number" className="form-control" id="exampleInputPassword1" placeholder="Quantity" />
                                                </div>
                                                <button style={{ background: "black", color: "white", fontWeight: "800" }} type="submit" className="btn waves-effect waves-light m-r-10">Submit</button>
                                            </form>
                                        </div>
                                    </div>

                                </Modal.Body>
                            </Modal>
                        </div>

                        {/* Product Overview Section */}
                        <div className="card card-default">
                            <div className="card-header">
                                <h4 className="card-title m-b-0">Product Overview</h4>
                            </div>
                            <div className="card-body collapse show">
                                <div className="table-responsive">
                                    <table className="table product-overview">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Image</th>
                                                <th>Quantity</th>
                                                <th>Date</th>
                                                <th>Price</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products.length === 0 ? <div>No Product found</div> :
                                                products.map((e, i) => {
                                                    let year = new Date(e.createdAt).getFullYear();
                                                    let month = new Date(e.createdAt).getMonth() + 1;
                                                    let day = new Date(e.createdAt).getDate();
                                                    let date = `${day}/${month}/${year}`;
                                                    return (<tr>
                                                        <td style={{ textTransform: "capitalize" }}>{e.name}</td>
                                                        <td>
                                                            <img src={e.imageUrl[0]} alt={e.name[0]} width="80" />
                                                        </td>
                                                        <td>{e.quantity}</td>
                                                        <td>{date}</td>
                                                        <td>
                                                            {e.costPrice}
                                                        </td>
                                                        <td><a href="javascript:void(0)" className="text-inverse p-r-10"
                                                            data-toggle="tooltip" title="" data-original-title="Edit"><i
                                                                className="ti-marker-alt"></i></a> <a href="javascript:void(0)"
                                                                    className="text-inverse" title="" data-toggle="tooltip"
                                                                    data-original-title="Delete"><i className="ti-trash"></i></a></td>
                                                    </tr>)
                                                })}

                                        </tbody>
                                    </table>
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

export default Catalog;