import React, { useEffect, useState, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useParams } from "react-router-dom";
import { Store } from "../context/store";
import PulseLoader from "react-spinners/PulseLoader";
import Modal from "react-bootstrap/Modal";

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
    let [total, setTotal] = useState(0.00);
    let [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchProductQuery, setSearchProductQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchProductResults, setSearchProductResults] = useState([]);
    let [customerUrl] = store.customer;
    let [customers, setCustomers] = useState([]);
    let arr = [];




    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let [employees, setEmployees] = useState([]);
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [phone, setPhone] = useState("");
    let [name, setName] = useState("");
    let [username, setUsername] = useState("");
    let [address, setAddress] = useState("");
    let [salary, setSalary] = useState(0);
    let [position, setPosition] = useState("");

    useEffect(() => {
        loadProducts();
        loadCustomers();
        Aos.init({ duration: 1000 })
    }, []);

    useEffect(() => {
        loadData();
    }, []);

    const handleCustomerSearch = (e) => {
        const q = e.target.value;
        setSearchQuery(q);

        const filteredResults = customers.filter((item) =>
            item.name.toLowerCase().includes(q.toLowerCase())
        );

        setSearchResults(filteredResults);
    };

    const handleProductSearch = (e) => {
        const q = e.target.value;
        setSearchProductQuery(q);

        const filteredResults = products.filter((item) =>
            item.name.toLowerCase().includes(q.toLowerCase())
        );

        setSearchProductResults(filteredResults);
    };

    let loadCustomers = () => {
        let url = `${customerUrl}/customers/${id}`;
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


    // let loadData = async () => {
    //     await new Promise((resolve) => {
    //         const data = JSON.parse(localStorage.getItem('akili-products'));
    //         setTableData(data);
    //         resolve();
    //     });
    //     updateTotal();
    // };

    let loadData = async () => {
        const data = JSON.parse(localStorage.getItem('akili-products'));
        setTableData(data);
        await new Promise((resolve) => {
            resolve();
        });
        updateTotal();
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
            status: "completed", orderType: "order", customer
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
                setTotal(0);
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

    // let handleDelete = async (id) => {
    //     let data = JSON.parse(localStorage.getItem('akili-products'));
    //     let x = data.filter((e, i) => i !== id);
    //     await new Promise((resolve) => {
    //         localStorage.setItem('akili-products', JSON.stringify(x));
    //         resolve();
    //     });
    //     await loadData();
    // };

    let handleDelete = async (id) => {
        let data = JSON.parse(localStorage.getItem('akili-products'));
        let x = data.filter((e, i) => i !== id);
        localStorage.setItem('akili-products', JSON.stringify(x));
        await loadData();
    };



    let updateTotal = async () => {
        await new Promise((resolve) => {
            setTotal(JSON.parse(localStorage.getItem('akili-total')).reduce((a, b) => a + b, 0));
            resolve();
        });
    };

    const addCustomer = () => {

    }





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
                                <div className="form-group  ms-3">
                                    <input type="text" style={{ border: "1px solid #8da1af", borderRadius: "50px" }}
                                        value={searchProductQuery}
                                        onChange={handleProductSearch}
                                        placeholder="Search product by name"
                                        className="form-control" />
                                    <div className="mt-1 p-2 " style={{ height: "100px", overflowY: "hidden", background: "white" }}>
                                        {searchProductResults?.map((e, i) => {
                                            return (
                                                <p key={e._id} onClick={() => setProduct(JSON.stringify(e))} >{e.name}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                                {/* <div class="form-group">
                                    <select class="form-control custom-select" name={product} onChange={(x) => setProduct(x.target.value)}>
                                        <option value="">Select Products</option>
                                        {products?.map((e, i) => {
                                            return (
                                                <option key={e.id} value={JSON.stringify(e)} >{e.name}</option>
                                            )
                                        })}

                                    </select>
                                </div> */}
                                <div className="form-group m-3">
                                    <input value={quantity} onChange={(e) => setQty(e.target.value)} type="number" className="form-control" id="exampleInputEmail1" placeholder="Quantity" />
                                </div>
                            </div>
                            <button className="create-btn-ah ms-3" onClick={() => addItem()} style={{ background: "white", width: "100%" }}>Add Item</button>

                            <div className="m-4 p-4" style={{ background: "white" }}>
                                <p>Most in Demand</p>
                                <ul>
                                    {products?.map((e, i) => {
                                        return (
                                            <li>{e.name}</li>
                                        )
                                    })}

                                </ul>
                            </div>
                        </div>

                        <div className="col-md-8 card" data-aos="zoom-in"
                            data-aos-once="true"
                            data-aos-easing="ease-out-sine">
                            <div className="card-body">
                                {/* <h4 className="card-title">Sales</h4> */}

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group w-75">
                                            <input type="text" style={{ border: "1px solid #8da1af", borderRadius: "50px" }}
                                                value={searchQuery}
                                                onChange={handleCustomerSearch}
                                                placeholder="Search customer by name"
                                                className="form-control" />
                                            <div className="mt-1 p-2" style={{ height: "100px", overflowY: "hidden", background: "" }}>
                                                {searchResults?.map((e, i) => {
                                                    return (
                                                        <p key={e.id} value={(e.id)} onClick={() => setCustomer(e.id)} >{e.name}</p>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className=" mb-3">
                                            <button style={{ background: "white", width: "100%", border: "1px solid #8da1af", }} className="create-btn-ah" onClick={handleShow}> Customer +</button>
                                            <Modal
                                                show={show}
                                                onHide={handleClose}
                                                backdrop="static"
                                                keyboard={false}
                                                centered
                                            >
                                                <Modal.Header closeButton
                                                    style={{ padding: "10px 50px" }} >
                                                    <Modal.Title>Add a New Customer ?</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body style={{ padding: "15px 50px" }}>
                                                    <p id="error">{error}</p>
                                                    <div className="card card-body">
                                                        <div className="col-sm-12 col-xs-12">
                                                            <div>
                                                                <div className="row">
                                                                    <div className="form-group col-md-6">
                                                                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" placeholder="Name" />
                                                                    </div>
                                                                    <div className="form-group col-md-6">
                                                                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" id="exampleInputEmail7" placeholder="Username" />
                                                                    </div>
                                                                    <div className="form-group  col-md-6">
                                                                        <input value={address} onChange={(e) => setAddress(e.target.value)} type="address" className="form-control" id="exampleInputEmai1" placeholder="Address" />
                                                                    </div>
                                                                    <div className="form-group  col-md-6">
                                                                        <input value={position} onChange={(e) => setPosition(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" placeholder="Role" />
                                                                    </div>
                                                                    <div className="form-group  col-md-6">
                                                                        <input value={salary} onChange={(e) => setSalary(e.target.value)} type="number" className="form-control" id="exampleInputNumber1" placeholder="Salary" />
                                                                    </div>
                                                                    <div className="form-group  col-md-6">
                                                                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" className="form-control" id="exampleInputPassword1" placeholder="Phone Number" />
                                                                    </div>
                                                                    <div className="form-group  col-md-6">
                                                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail3" placeholder=" Email" />
                                                                    </div>
                                                                    <div className="form-group  col-md-6">
                                                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword2" placeholder=" Password" />
                                                                    </div>
                                                                </div>
                                                                <button onClick={addCustomer} style={{ background: "black", color: "white", fontWeight: "800" }}
                                                                    type="submit" className="btn waves-effect waves-light m-r-10">{loading ? <PulseLoader color="white" size={8} /> : "Submit"}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </Modal.Body>
                                            </Modal>
                                        </div>
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
                                                let item = e.productId
                                                arr?.push(JSON.parse(item).sellingPrice * e?.quantity)
                                                localStorage.setItem("akili-total", JSON.stringify(arr))
                                                return (
                                                    <tr className="gradeX">
                                                        <td>{i + 1}</td>
                                                        <td>{JSON.parse(item).name}</td>
                                                        <td>
                                                            <input type="number" defaultValue={e.quantity}
                                                                style={{ border: "none", background: "inherit", width: "50px" }}
                                                                onChange={(x) => handleEdit(i, 'quantity', parseInt(x.target.value))}
                                                            />
                                                        </td>
                                                        <td className="center">{JSON.parse(item).sellingPrice}</td>
                                                        <td className="center">{JSON.parse(item).sellingPrice * e.quantity}</td>
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
                                    </table>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <p className="fw-bolder fs-3">Tax</p>
                                        <p className="fw-bolder fs-3">0.00</p>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <p className="fw-bolder fs-3">Total</p>
                                        <p className="fw-bolder fs-3">{total?.toLocaleString()}</p>
                                    </div>
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