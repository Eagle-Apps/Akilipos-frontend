import React, { useEffect, useState, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useParams } from "react-router-dom";
import { Store } from "../context/store";
import PulseLoader from "react-spinners/PulseLoader";

function Sales() {
    let store = useContext(Store);
    let [productUrl] = store.product;
    let [orderUrl] = store.order;
    let [products, setProducts] = useState([]);
    let [tableData, setTableData] = useState([]);
    let { id } = useParams();
    let [quantity, setQty] = useState(1);
    let [product, setProduct] = useState();
    let [error, setError] = useState("");
    let [total, setTotal] = useState();
    let [loading, setLoading] = useState(false);

    useEffect(() => {
        loadProducts();
        Aos.init({ duration: 1000 })
    }, []);

    useEffect(() => {
        loadData();
    }, []);

    let loadProducts = () => {
        let url = `${productUrl}/products/${id}`;
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setProducts(res.products)
            });
    };

    let addItem = () => {
        let data = { productId: product, quantity: Number(quantity) };
        let array = [];
        let cart = localStorage.getItem('akili-products')
        if (cart === null) {
            array.push(data);
            localStorage.setItem('akili-products', JSON.stringify(array))
            loadData();
        } else {
            let arr = JSON.parse(localStorage.getItem('akili-products'))
            arr.push(data)
            localStorage.setItem('akili-products', JSON.stringify(arr))
            loadData();
        }
    };

    let loadData = () => {
        setTableData(JSON.parse(localStorage.getItem('akili-products')))
    };

    let createOrder = async () => {
        let productItems = JSON.parse(localStorage.getItem('akili-products'))
        let arr = [];
        let newData = [];
        let totalBill;
        productItems?.map((e, i) => {
            newData.push({ productId: JSON.parse(e.productId)._id, quantity: JSON.parse(e.quantity) })
            let dt = JSON.parse(e.productId).sellingPrice * e.quantity;
            arr.push(dt);
            totalBill = arr.reduce((a, b) => a + b, 0)
        });
        let data = {
            business: id, products: newData, totalBill,
            status: "completed", orderType: "order"
        };
        setLoading(true);
        setQty(1)
        setProduct("")
        let url = orderUrl + "/order";
        const response = await fetch(url, {
            headers: {
                "content-type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify(data),
        });
        if (response.status === 200) {
            await response.json()
            setError("Order Created.")
            const t1 = setTimeout(() => {
                setLoading(false);
                setError("");
                clearTimeout(t1);
            }, 2000);
            localStorage.removeItem('akili-products');
            loadData();
        } else {
            setError("Error Occured")
            const t1 = setTimeout(() => {
                setLoading(false);
                setError("");
                clearTimeout(t1);
            }, 2000)
        }
    };


    return <>
        <Row>
            <Col md="2" sm="12">
                <NavBar class4="activeBar" color4="white" />
            </Col>
            <Col md="10" sm="12" style={{ minHeight: "100vh" }} className="content-wrapper">
                <div style={{ minHeight: "85vh" }}>

                    {/* header section */}
                    <div className="row page-titles">
                        <div className="col-md-5 align-self-center">
                            <h3>Sales</h3>
                        </div>
                    </div>
                    {/* sales section */}
                    <div className="row">


                        <div className="col-md-3">
                            <div className="row">
                                <div class="form-group">
                                    <select class="form-control custom-select" name={product} onChange={(x) => setProduct(x.target.value)}>
                                        <option value="">Select Products</option>
                                        {products?.map((e, i) => {
                                            return (
                                                <option key={e._id} value={JSON.stringify(e)} >{e.name}</option>
                                            )
                                        })}

                                    </select>
                                </div>
                                <div className="form-group">
                                    <input value={quantity} onChange={(e) => setQty(e.target.value)} type="number" className="form-control" id="exampleInputEmail1" placeholder="Quantity" />
                                </div>
                            </div>
                            <button className="create-btn-ah" onClick={() => addItem()} style={{ background: "white", width: "100%" }}>Add Item</button>
                        </div>

                        <div className="col-md-8 card" data-aos="zoom-in"
                            data-aos-once="true"
                            data-aos-easing="ease-out-sine">
                            <div className="card-body">
                                <h4 className="card-title">Sales</h4>
                                <div class="table-responsive">
                                    <h5>{error}</h5>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>ItemNo</th>
                                                <th>Product(s)</th>
                                                <th>Qty</th>
                                                <th>Unit Price</th>
                                                <th>Total Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableData?.map((e, i) => {
                                                return (
                                                    <tr className="gradeX">
                                                        <td>{i + 1}</td>
                                                        <td>{JSON.parse(e.productId).name}</td>
                                                        <td>{e.quantity}</td>
                                                        <td className="center">{JSON.parse(e.productId).sellingPrice}</td>
                                                        <td className="center">{JSON.parse(e.productId).sellingPrice * e.quantity}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                        <tfoot style={{ float: "right" }}>
                                            <div>
                                                <p>Total</p>
                                                <p>{total}</p>
                                            </div>
                                        </tfoot>
                                    </table>
                                    <button className="create-btn-ah" style={{ background: "#c5e5de" }} onClick={() => createOrder()}>
                                        {loading ? <PulseLoader color="white" size={8} /> : "Submit"}
                                    </button>
                                </div>
                            </div>
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