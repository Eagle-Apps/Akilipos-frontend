import React, { useState, useEffect, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import Modal from "react-bootstrap/Modal";
import { Link, useParams } from "react-router-dom";
import { Store } from "../context/store";

function Customers() {
    let store = useContext(Store);
    let [customerUrl] = store.customer;
    let [authUrl] = store.auth;
    let [messageUrl] = store.message;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let [customers, setCustomers] = useState([]);
    let [sender, setSender] = useState();
    let { id } = useParams();
    let [subject, setSubject] = useState("New Message");
    let [body, setBody] = useState("");
    // let [, set] = useState();
    const [checkedValues, setCheckedValues] = useState([]);

    useEffect(() => {
        loadCustomers();
        loadBusiness();
    }, []);

    let loadCustomers = () => {
        let url = `${customerUrl}/customers/${id}`;
        console.log(url)
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setCustomers(res.customers)
            });
    };

    let loadBusiness = () => {
        let url = `${authUrl}/fetchUser/${id}`;
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setSender(res.profile.businessName.slice(0, 10))
            });
    };

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        if (event.target.checked) {
            setCheckedValues([...checkedValues, value]);
        } else {
            const updatedValues = checkedValues.filter((item) => item !== value);
            setCheckedValues(updatedValues);
        }
    };

    let sendMessage = async () => {
        let data = { business: id, sender, subject, body, mobileNumbers: checkedValues.toString() };
        console.log(data);
        let url = `${messageUrl}/message`;
        const response = await fetch(url, {
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        });
        console.log(response)
        if (response.status === 200) {
            await response.json()
            // setError("Employee Added");
            const t1 = setTimeout(() => {
                // setLoading(false);
                // setError("");
                clearTimeout(t1);
            }, 2000);
            setBody("")
        } else {
            let err = await response.json()
            console.log(err);
            // if (err.message === "Email already registered") {
            //     setError(err.message)
            // } else {
            //     setError("Error Occurred")
            // }

            const t1 = setTimeout(() => {
                // setError("")
                // setLoading(false)
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
                            <h3>Customers</h3>
                        </div>
                    </div>

                    <div className="">

                        <div className="card mb-2 me-2" style={{ marginTop: "-20px" }}>

                            <div className="chat-main-box" style={{ overflow: "hidden" }}>

                                <div className="chat-left-aside">
                                    <div className="open-panel"><i className="ti-angle-right"></i></div>
                                    <div className="chat-left-inner">
                                        <div className="form-material">
                                            <input className="form-control p-20" type="text" placeholder="Search Customers" />
                                        </div>
                                        <ul className="chatonline style-none" style={{ height: "65vh", overflowY: "scroll" }}>
                                            {customers?.map((e, i) => {
                                                let status;
                                                e.status === "active" ? status = "online" : status = "offline";
                                                return (

                                                    <>
                                                        <input type="checkbox" name={e} id={`basic_checkbox_${i}`} class="fchk-col" value={e.phone} onChange={handleCheckboxChange} />
                                                        <label for={`basic_checkbox_${i}`} style={{ background: "" }}>
                                                            <li key={i} style={{ marginTop: "-20px" }}>
                                                                <a href="#">
                                                                    <img src={e.image} alt="user-img" className="img-circle" />
                                                                    <span>{e.name}
                                                                        <small className="text-success">
                                                                            {status}
                                                                        </small>
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        </label>
                                                    </>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>

                                {/* tab section */}
                                <div className="" >
                                    <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link custom-nav-ah active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Message</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link custom-nav-ah" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Rewards</button>
                                        </li>
                                        {/* <li className="nav-item" role="presentation">
                                            <button className="nav-link custom-nav-ah" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Report</button>
                                        </li> */}
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        {/* message section in tab */}
                                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" >
                                            <div className="chat-right-aside" style={{ height: "60vh" }}>
                                                <div className="chat-rbox">
                                                    <ul className="chat-list p-20" style={{ height: "50vh", overflowY: "scroll" }}>

                                                        {/* <li>
                                                            <div className="chat-img"><img src="../assets/images/users/1.jpg" alt="user" /></div>
                                                            <div className="chat-content">
                                                                <h5>James Anderson</h5>
                                                                <div className="box bg-light-info">Lorem Ipsum is simply dummy text of the printing & type setting industry.</div>
                                                            </div>
                                                            <div className="chat-time">10:56 am</div>
                                                        </li>

                                                        <li>
                                                            <div className="chat-img"><img src="../assets/images/users/2.jpg" alt="user" /></div>
                                                            <div className="chat-content">
                                                                <h5>Bianca Doe</h5>
                                                                <div className="box bg-light-info">It’s Great opportunity to work.</div>
                                                            </div>
                                                            <div className="chat-time">10:57 am</div>
                                                        </li>

                                                        <li className="reverse">
                                                            <div className="chat-content">
                                                                <h5>Steave Doe</h5>
                                                                <div className="box bg-light-inverse">It’s Great opportunity to work.</div>
                                                            </div>
                                                            <div className="chat-img"><img src="../assets/images/users/5.jpg" alt="user" /></div>
                                                            <div className="chat-time">10:57 am</div>
                                                        </li>

                                                        <li className="reverse">

                                                            <div className="chat-content">
                                                                <h5>Steave Doe</h5>
                                                                <div className="box bg-light-inverse">It’s Great opportunity to work.</div>
                                                            </div>

                                                            <div className="chat-img"><img src="../assets/images/users/5.jpg" alt="user" /></div>
                                                            <div className="chat-time">10:57 am</div>
                                                        </li>

                                                        <li>
                                                            <div className="chat-img"><img src="../assets/images/users/3.jpg" alt="user" /></div>
                                                            <div className="chat-content">
                                                                <h5>Angelina Rhodes</h5>
                                                                <div className="box bg-light-info">Well we have good budget for the project</div>
                                                            </div>
                                                            <div className="chat-time">11:00 am</div>
                                                        </li> */}

                                                    </ul>
                                                </div>
                                                <div className="card-body b-t">
                                                    <div className="row">
                                                        <div className="col-11">
                                                            <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Type your message here" className="form-control b-0"></textarea>
                                                        </div>
                                                        <div className="col-1 text-right">
                                                            <button onClick={() => sendMessage()} type="button" className="btn btn-info btn-circle btn-sm"><i className="fa fa-paper-plane-o"></i> </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Discount section in tab */}
                                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            <div className="card m-2 p-2">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="control-label">Want to Reward this Customer? Choose a type.</label>
                                                        <div className="m-b-10">
                                                            <label className="custom-control custom-radio">
                                                                <input id="radio1" name="radio" type="radio" className="custom-control-input" />
                                                                <span className="custom-control-label">Coin</span>
                                                            </label>
                                                            <label className="custom-control custom-radio">
                                                                <input id="radio2" name="radio" type="radio" className="custom-control-input" />
                                                                <span className="custom-control-label">Gift</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class="control-label">Products</label>
                                                            <select class="form-control custom-select" data-placeholder="Choose a Gift" tabindex="1">
                                                                <option value="Category 1">Cup</option>
                                                                <option value="Category 2">Shoe</option>
                                                                <option value="Category 3">Pen</option>
                                                                <option value="Category 4">Umbrella</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label>Coin</label>
                                                            <input type="number" class="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="flexbtw">
                                                    <h5>Nagode Coins available for Redemption:</h5>
                                                    <p>30000</p>
                                                </div>
                                                <div className="flexbtw">
                                                    <h5>Nagode Coins Equal:</h5>
                                                    <p>#3,000</p>
                                                </div>
                                                <div>
                                                    <h5>Gifts Received:</h5>
                                                    <ol>
                                                        <li>Fan</li>
                                                        <li>Key Holder</li>
                                                        <li>Water</li>
                                                        <li>Hamper</li>
                                                        <li>Fan</li>
                                                        <li>Fan</li>
                                                    </ol>
                                                </div>

                                            </div>
                                        </div>
                                        {/* Report section in tab */}
                                        {/* <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                            Report goes here
                                        </div> */}
                                    </div>
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

export default Customers;