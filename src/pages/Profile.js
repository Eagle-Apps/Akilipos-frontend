import React, { useState, useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import Modal from "react-bootstrap/Modal";
import { Link, useParams } from "react-router-dom";
import { Store } from "../context/store";
import PulseLoader from "react-spinners/PulseLoader";
import { useCookies } from 'react-cookie';

function Profile() {
    let store = useContext(Store);
    let [productUrl] = store.product;
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const handleClose = () => { setShow(false); setShow1(false); setLoading(false) };
    const handleShow = () => setShow(true);
    let { id1, id } = useParams();
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
        const formData = new FormData()
        formData.append('name', name)
        formData.append('costPrice', Number(costPrice))
        formData.append('description', description)
        formData.append('quantity', Number(quantity))
        formData.append('sellingPrice', Number(sellingPrice))
        formData.append('coinValue', Number(coinValue))
        formData.append('category', category)

        for (let i = 0; i < imageUrl.length; i++) {
            formData.append('imageUrl', imageUrl[i])
        }
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
            // body: formData,
        });
        console.log(response.status);
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
                <NavBar class3="activeBar" color3="white" />
            </Col>
            <Col md="10" sm="12" style={{ minHeight: "100vh" }} className="content-wrapper">
                <div style={{ minHeight: "85vh" }}>

                    {/* header section */}
                    <div className="row page-titles">
                        <div className="col-md-5 align-self-center">
                            <h3>Profile</h3>
                        </div>

                    </div>

                    <div className="pe-3">

                        {/* Profile Overview Section */}
                        <div className="card card-default">
                            {/* info */}
                            <div className="card-header" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center" }}>
                                <h4 className="card-title m-b-0">Info</h4>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3 col-xs-6 b-r"> <strong>Full Name</strong>
                                        <br />
                                        <p className="text-muted">Ahmed Hero</p>
                                    </div>
                                    <div className="col-md-3 col-xs-6 b-r"> <strong>Mobile</strong>
                                        <br />
                                        <p className="text-muted">(123) 456 7890</p>
                                    </div>
                                    <div className="col-md-3 col-xs-6 b-r"> <strong>Email</strong>
                                        <br />
                                        <p className="text-muted">ahmed233@gmail.com</p>
                                    </div>
                                    <div className="col-md-3 col-xs-6"> <strong>Location</strong>
                                        <br />
                                        <p className="text-muted">Dape, Abuja</p>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>

                            {/* credit */}
                            <div className="card-header" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center" }}>
                                <h4 className="card-title m-b-0">Credit Book</h4>
                            </div>
                            <div className="card-body collapse show">
                                <div className="table-responsive">
                                    <table className="table product-overview">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Invoice No.</th>
                                                <th>Credit No.</th>
                                                <th>Date</th>
                                                <th>Date Due</th>
                                                <th>Installments</th>
                                                <th>Amount (&#x20A6;)</th>
                                                <th>Total Paid (&#x20A6;)</th>
                                                <th>Outstanding (&#x20A6;)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products?.length === 0 ? <div>No Product found</div> :
                                                products.map((e, i) => {
                                                    let year = new Date(e.updatedAt).getFullYear();
                                                    let month = new Date(e.updatedAt).getMonth() + 1;
                                                    let day = new Date(e.updatedAt).getDate();
                                                    let date = `${day}/${month}/${year}`;
                                                    return (<tr>
                                                        <td>
                                                            <Link style={{ color: "inherit", textDecoration: "none" }} to={`/profile/${e._id}/${id}`}>
                                                                Ahmed Hero
                                                            </Link>
                                                        </td>
                                                        <td style={{ textTransform: "uppercase" }}>{e._id.slice(0, 5)} </td>
                                                        <td style={{ textTransform: "uppercase" }}>{e._id.slice(5, 10)} </td>
                                                        <td>{date}</td>
                                                        <td>{date}</td>
                                                        <td>Not Specified</td>
                                                        <td>
                                                            {e.costPrice.toLocaleString()}
                                                        </td>
                                                        <td>
                                                            0.00
                                                        </td> <td>
                                                            {e.costPrice.toLocaleString()}
                                                        </td>
                                                    </tr>)
                                                })}

                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td className="text-center fw-bolder fs-3" colSpan={6}>Total</td>
                                                <td className="fw-bolder fs-5">10,575</td>
                                                <td className="fw-bolder fs-5">0</td>
                                                <td className="fw-bolder fs-5">10,575</td>
                                                <td className="fw-bolder fs-5"></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>

                            {/* payment */}
                            <div className="card-body collapse show">
                                <h4 className="card-title m-b-0">Payments</h4>
                                <div className="table-responsive">
                                    <table className="table product-overview">
                                        <thead>
                                            <tr>
                                                <th>Invoice Number</th>
                                                <th>Date</th>
                                                <th>Method</th>
                                                <th>Amount (&#x20A6;)</th>
                                                <th>Remark</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products?.length === 0 ? <div>No Product found</div> :
                                                products?.map((e, i) => {
                                                    let year = new Date(e.updatedAt).getFullYear();
                                                    let month = new Date(e.updatedAt).getMonth() + 1;
                                                    let day = new Date(e.updatedAt).getDate();
                                                    let date = `${day}/${month}/${year}`;
                                                    return (<tr>
                                                        <td style={{ textTransform: "capitalize" }}>{e._id.slice(0, 5)} </td>
                                                        <td>{date}</td>
                                                        <td>Cash</td>
                                                        <td>
                                                            {e.costPrice.toLocaleString()}
                                                        </td>
                                                        <td>Confirmed</td>
                                                    </tr>)
                                                })}

                                        </tbody>
                                        {/* <tfoot>
                                            <tr>
                                                <td className="text-center fw-bolder fs-3" colSpan={3}>Total</td>
                                                <td className="fw-bolder fs-5">10,575</td>
                                            </tr>
                                        </tfoot> */}
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
};

export default Profile;