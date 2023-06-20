import React, { useState, useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import Modal from "react-bootstrap/Modal";
import { Link, useParams } from "react-router-dom";
import { Store } from "../context/store";
import PulseLoader from "react-spinners/PulseLoader";
import { useCookies } from 'react-cookie';

function Order() {
    let store = useContext(Store);
    let [orderUrl] = store.order;
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => { setShow2(false); setShow1(false); setLoading(false) };
    const handleClose = () => { setShow(false); setShow1(false); setLoading(false) };
    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true);
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
        loadOrders();
    }, []);

    let loadOrders = () => {
        let url = `${orderUrl}/store/orders/${id}`;
        console.log(url);
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setProducts(res)
            });
    };

    let createProduct = async () => {
        if (imageUrl.length === 0) return (setError('Add Product Image'))
        setLoading(true);
        const formData = new FormData()
        formData?.append('name', name)
        formData?.append('costPrice', costPrice)
        formData?.append('description', description)
        formData?.append('quantity', quantity)
        formData?.append('sellingPrice', sellingPrice)
        formData?.append('coinValue', coinValue)
        formData?.append('category', category)

        for (let i = 0; i < imageUrl.length; i++) {
            formData?.append('imageUrl', imageUrl[i])
        }

        let url = orderUrl + "/product";
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
        let url = `${orderUrl}/edit-product/${productId}`;
        const formData = new FormData()
        formData?.append('name', name)
        formData?.append('costPrice', Number(costPrice))
        formData?.append('description', description)
        formData?.append('quantity', Number(quantity))
        formData?.append('sellingPrice', Number(sellingPrice))
        formData?.append('coinValue', Number(coinValue))
        formData?.append('category', category)

        for (let i = 0; i < imageUrl.length; i++) {
            formData?.append('imageUrl', imageUrl[i])
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
            loadOrders()
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
        let url = `${orderUrl}/delete-product/${id}`;
        const response = window.confirm("Are you sure?") ? await fetch(url, {
            headers: {
                "content-type": "application/json"
            },
            method: "DELETE"
        }) : console.log("");
        if (response.status === 200) {
            loadOrders()
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
            <Col lg="3">
                <NavBar class444="activeBar" color444="white" />
            </Col>
            <Col  lg="9"  className="content-wrapper">
                <div className="content-wrapper-card">

                    {/* header section */}
                    <div className="row page-titles">
                        <div className="col-md-5 align-self-center">
                            <h3>Order</h3>
                        </div>
                    </div>

                    <div className="pe-3">

                        {/* Order Overview Section */}
                        <div className="card card-default">
                            <div className="card-header" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center" }}>
                                <h4 className="card-title m-b-0">Order</h4>
                            </div>
                            <h2 className="text-center">{errorMsg}</h2>
                            <div className="card-body collapse show">
                                <div className="table-responsive">
                                    <table className="table product-overview">
                                        <thead>
                                            <tr>
                                                <th>Invoice No.</th>
                                                <th colSpan={2} >Products</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Type</th>
                                                <th>Total Paid (&#x20A6;)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products?.length === 0 ? <div>No Order found</div> :
                                                products.map((e, i) => {
                                                    let year = new Date(e.createdAt).getFullYear();
                                                    let month = new Date(e.createdAt).getMonth() + 1;
                                                    let day = new Date(e.createdAt).getDate();
                                                    let date = `${day}/${month}/${year}`;
                                                    if (e.orderType === "order")
                                                        return (<tr>
                                                            <td style={{ textTransform: "uppercase" }}>{e.id.slice(5, 10)} </td>
                                                            <td colSpan={2} style={{ textTransform: "uppercase" }}>
                                                                <ol>
                                                                    {e.products.map((a, b) => {

                                                                        return (
                                                                            <li>{a?.productId?.name || "Book"}</li>
                                                                        )

                                                                    })}
                                                                </ol>
                                                            </td>
                                                            <td style={{ textTransform: "uppercase" }}>
                                                                <ol>
                                                                    {e.products.map((a, b) => {

                                                                        return (
                                                                            <li>{a?.productId?.sellingPrice || "1,000"}</li>
                                                                        )

                                                                    })}
                                                                </ol>
                                                            </td>
                                                            <td>
                                                                <ol>
                                                                    {e.products.map((a, b) => {
                                                                        return (
                                                                            <li>{a?.quantity}</li>
                                                                        )
                                                                    })}
                                                                </ol>
                                                            </td>
                                                            <td>{e.orderType}</td>
                                                            <td>
                                                                {e.totalBill.toLocaleString()}
                                                            </td>

                                                        </tr>)
                                                })}

                                        </tbody>
                                        {/* <tfoot>
                                            <tr>
                                                <td className="text-center fw-bolder fs-3" colSpan={6}>Total</td>
                                                <td className="fw-bolder fs-5">10,575</td>
                                                <td className="fw-bolder fs-5">0</td>
                                                <td className="fw-bolder fs-5">10,575</td>
                                                <td className="fw-bolder fs-5"></td>
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

export default Order;