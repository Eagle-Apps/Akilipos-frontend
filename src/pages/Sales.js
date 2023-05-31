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
    let [customer, setCustomer] = useState("");
    let [total, setTotal] = useState();
    let [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    let [customerUrl] = store.customer;
    let [customers, setCustomers] = useState([]);

    useEffect(() => {
        loadProducts();
        loadCustomers();
        Aos.init({ duration: 1000 })
    }, []);

    useEffect(() => {
        loadData();
    }, []);

    const handleSearch = (e) => {
        const q = e.target.value;
        setSearchQuery(q);

        const filteredResults = customers.filter((item) =>
            item.name.toLowerCase().includes(q.toLowerCase())
        );

        setSearchResults(filteredResults);
    };

    let loadCustomers = () => {
        let url = `${customerUrl}/customers/${id}`;
        console.log(url);
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setCustomers(res.customers)
            });
    };

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

    const handleEdit = async (id, fieldName, newValue) => {
        let data = JSON.parse(localStorage.getItem('akili-products'));
        const updatedData = data.map((item) => {
            if (data.indexOf(item) === id) {
                return {
                    ...item,
                    [fieldName]: newValue,
                };
            }
            return item;
        });
        await localStorage.setItem('akili-products', JSON.stringify(updatedData))
        loadData();
    };

    const handleDelete = async (id) => {
        let data = JSON.parse(localStorage.getItem('akili-products'));
        data.splice(id, 1);
        await localStorage.setItem('akili-products', JSON.stringify(data))
        loadData();
    };

    console.log(customer)


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
                                {/* <h4 className="card-title">Sales</h4> */}

                                <div className="form-group w-50">
                                    <input type="text" style={{ border: "1px solid #8da1af", borderRadius: "50px" }}
                                        value={searchQuery}
                                        onChange={handleSearch}
                                        placeholder="Search customer by name"
                                        className="form-control" />
                                    <div className="mt-1 p-2" style={{ height: "100px", overflowY: "hidden", background:"" }}>
                                        {searchResults?.map((e, i) => {
                                            return (
                                                <p key={e.id} value={(e.id)} onClick={() => setCustomer(e.id)} >{e.name}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <h5 className="text-center">{error}</h5>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>ItemNo</th>
                                                <th>Product(s)</th>
                                                <th>Qty</th>
                                                <th>Unit Price</th>
                                                <th>Total Price</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableData?.map((e, i) => {
                                                return (
                                                    <tr className="gradeX">
                                                        <td>{i + 1}</td>
                                                        <td>{JSON.parse(e.productId).name}</td>
                                                        <td>
                                                            <input type="number" defaultValue={e.quantity}
                                                                style={{ border: "none", background: "inherit", width: "50px" }}
                                                                onChange={(x) => handleEdit(i, 'quantity', parseInt(x.target.value))}
                                                            />
                                                        </td>
                                                        <td className="center">{JSON.parse(e.productId).sellingPrice}</td>
                                                        <td className="center">{JSON.parse(e.productId).sellingPrice * e.quantity}</td>
                                                        <td >
                                                            <a onClick={() => handleDelete(i)}
                                                                id="edit" className="text-inverse" title="" data-toggle="tooltip"
                                                                data-original-title="Delete"><i className="ti-trash"></i>
                                                            </a>
                                                        </td>
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
                                    <button className="create-btn-ah" style={{ background: "#c5e5de", float: "right" }} onClick={() => createOrder()}>
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