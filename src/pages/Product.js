import React, { useState, useEffect, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import Modal from "react-bootstrap/Modal";
import { Home, RotateCcw } from "react-feather";
import { Store } from "../context/store";
import { useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { useCookies } from 'react-cookie';

function Catalog() {
    let store = useContext(Store);
    let [productUrl] = store.product;
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const handleClose = () => { setShow(false); setShow1(false); setLoading(false) };
    const handleShow = () => setShow(true);
    let { id } = useParams();
    let [products, setProducts] = useState([]);
    let [productId, setProductId] = useState("");
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState("");
    let [name, setName] = useState("");
    let [description, setDescp] = useState("");
    let [category, setCategory] = useState("");
    let [costPrice, setCost] = useState(null);
    let [sellingPrice, setSell] = useState(null);
    let [coinValue, setCoin] = useState(null);
    let [quantity, setQty] = useState(null);
    let [imageUrl, setImage] = useState([]);
    let [errorMsg, setErrorMsg] = useState("");
    // let [, set] = useState(""); 
    const [cookies, setCookie] = useCookies(['akili']);

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

    let createProduct = async () => {
        if (imageUrl.length === 0) return (setError('Add Product Image'))
        setLoading(true);
        const formData = new FormData()
        formData.append('name', name)
        formData.append('costPrice', costPrice)
        formData.append('description', description)
        formData.append('quantity', quantity)
        formData.append('sellingPrice', sellingPrice)
        formData.append('coinValue', coinValue)
        formData.append('category', category)

        for (let i = 0; i < imageUrl.length; i++) {
            formData.append('imageUrl', imageUrl[i])
        }

        let url = productUrl + "/product";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${cookies.akili}`
            },
            body: formData,
        });

        if (response.status === 200) {
            await response.json()
            setError("Product Successfully Created.")
            const t1 = setTimeout(() => {
                setLoading(false);
                setError("");
                clearTimeout(t1);
            }, 2000);
            setName("")
            setDescp("")
            setCategory("")
            setCost(null)
            setSell(null)
            setCoin(null)
            setQty(null)
            setImage([])
        } else {
            setError("Error Occured")
            const t1 = setTimeout(() => {
                setLoading(false);
                setError("");
                clearTimeout(t1);
            }, 2000)
        }
    };

    let updateProduct = async () => {
        let url = `${productUrl}/edit-product/${productId}`;
        let data = {
            name,
            description,
            category,
            costPrice: Number(costPrice),
            sellingPrice: Number(sellingPrice),
            coinValue: Number(coinValue),
            quantity: Number(quantity),
            // imageUrl
        }

        setLoading(true);
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${cookies.akili}`,
                "content-type": "application/json"
            },
            method: "PATCH",
            body: JSON.stringify(data)
        });

        console.log(response);
        if (response.status === 200) {
            loadProducts()
            setError("Product Updated!!!")
            const t1 = await setTimeout(() => {
                setError("")
                setLoading(false)
                handleClose()
                clearTimeout(t1);
            }, 2000)
        } else {
            setError("Product Not Updated!!!")
            const t1 = await setTimeout(() => {
                setError("")
                setLoading(false)
                clearTimeout(t1);
            }, 2000)
        }
    };

    let editModal = (e) => {
        setShow1(true)
        handleShow()
        setName(e.name)
        setDescp(e.description)
        setCategory(e.category)
        setCost(e.costPrice)
        setSell(e.sellingPrice)
        setCoin(e.coinValue)
        setQty(e.quantity)
        setImage(e.imageUrl)
        setProductId(e._id)
    };

    let deleteProduct = async (id) => {
        let url = `${productUrl}/delete-product/${id}`;
        const response = window.confirm("Are you sure?") ? await fetch(url, {
            headers: {
                "content-type": "application/json"
            },
            method: "DELETE"
        }) : console.log("");
        if (response.status === 200) {
            loadProducts()
            setErrorMsg("Product Deleted!!!")
            const t1 = await setTimeout(() => {
                setErrorMsg("")
                clearTimeout(t1);
            }, 2000)
        } else {
            setErrorMsg("Product Not Deleted!!!")
            const t1 = await setTimeout(() => {
                setErrorMsg("")
                clearTimeout(t1);
            }, 2000)
        }
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
                                    <p id="error">{error}</p>
                                    <div className="card card-body">
                                        <div className="col-sm-12 col-xs-12">
                                            <div>
                                                <div className="row">
                                                    <div className="form-group col-md-6">
                                                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" placeholder="Product Name" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <input value={description} onChange={(e) => setDescp(e.target.value)} type="text" className="form-control" id="exampleInputEmail7" placeholder="Description" />
                                                    </div>
                                                    <div className="form-group  col-md-6">
                                                        <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" className="form-control" id="exampleInputEmai1" placeholder="Category" />
                                                    </div>
                                                    <div className="form-group  col-md-6">
                                                        <input value={costPrice} onChange={(e) => setCost(e.target.value)} type="number" className="form-control" id="exampleInputPassword1" placeholder="Cost Price" />
                                                    </div>
                                                    <div className="form-group  col-md-6">
                                                        <input value={sellingPrice} onChange={(e) => setSell(e.target.value)} type="number" className="form-control" id="exampleInputNumber1" placeholder="Selling Price" />
                                                    </div>
                                                    <div className="form-group  col-md-6">
                                                        <input value={quantity} onChange={(e) => setQty(e.target.value)} type="number" className="form-control" id="exampleInputPassword1" placeholder="Quantity" />
                                                    </div>
                                                    <div className="form-group  col-md-6">
                                                        <input value={coinValue} onChange={(e) => setCoin(e.target.value)} type="number" className="form-control" id="exampleInputEmail3" placeholder="Coin Value" />
                                                    </div>
                                                    <div className="form-group  col-md-6">
                                                        <input name="imageUrl" multiple onChange={(e) => setImage(e.target.files)} type="file" className="form-control" id="exampleInputPassword2" placeholder="Image" />
                                                    </div>
                                                </div>
                                                {show1 ? <button
                                                    type="submit" onClick={() => updateProduct(productId)} style={{ background: "black", color: "white", fontWeight: "800" }} className="btn waves-effect waves-light m-r-10">{loading ? <PulseLoader color="white" size={8} /> : "Update"}
                                                </button> :
                                                    <button
                                                        type="submit" onClick={() => createProduct()} style={{ background: "black", color: "white", fontWeight: "800" }} className="btn waves-effect waves-light m-r-10">{loading ? <PulseLoader color="white" size={8} /> : "Submit"}
                                                    </button>}

                                            </div>
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
                            <h2 className="text-center">{errorMsg}</h2>
                            <div className="card-body collapse show">
                                <div className="table-responsive">
                                    <table className="table product-overview">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Image</th>
                                                <th>Quantity</th>
                                                <th>Date</th>
                                                <th>Cost(&#x20A6;)</th>
                                                <th>Sell(&#x20A6;)</th>
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
                                                            {e.costPrice.toLocaleString()}
                                                        </td>
                                                        <td>
                                                            {e.sellingPrice.toLocaleString()}
                                                        </td>
                                                        <td><a onClick={() => editModal(e)} id="edit" className="text-inverse p-r-10"
                                                            data-toggle="tooltip" title="" data-original-title="Edit"><i
                                                                className="ti-marker-alt"></i></a>
                                                            <a onClick={() => deleteProduct(e._id)} id="edit"
                                                                className="text-inverse" title="" data-toggle="tooltip"
                                                                data-original-title="Delete"><i className="ti-trash"></i>
                                                            </a>
                                                        </td>
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