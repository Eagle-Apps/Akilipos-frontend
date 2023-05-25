import React, { useEffect, useState, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import Aos from "aos";
import 'aos/dist/aos.css';
import { Store } from "../context/store";
import { useParams } from "react-router-dom";

function Settings() {
    let store = useContext(Store);
    let [authUrl] = store.auth;
    let { id } = useParams();
    let [businessName, setBusinessName] = useState("");
    let [email, setEmail] = useState("");
    let [address, setAddress] = useState("");
    let [phone, setPhone] = useState("");
    let [userName, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [coinName, setCoinName] = useState("");
    let [coinValue, setCoinValue] = useState("");
    let [error, setError] = useState("");

    useEffect(() => {
        Aos.init({ duration: 1000 });
        loadBusiness();
    }, []);

    let loadBusiness = () => {
        let url = `${authUrl}/fetchUser/${id}`;
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setBusinessName(res.profile.businessName)
                setEmail(res.profile.email)
                setAddress(res.profile.address)
                setUsername(res.profile.userName)
                setPassword(res.profile.password)
                setCoinName(res.profile.coinName)
                setCoinValue(res.profile.coinValue)
            });
    };

    let updateBusiness = async () => {
        let url = `${authUrl}/editprofile`;
        console.log(url);
        let data = {
            businessName, email, address, password, phone, userName, coinName, coinValue
        };
        const response = await fetch(url, {
            headers: {
                // Authorization: `Bearer ${cookies.akili}`,
                "content-type": "application/json"
            },
            method: "PATCH",
            body: JSON.stringify(data)
        });
        console.log(response);
        if (response.status === 200) {
            setError("Business Updated!!!")
            const t1 = await setTimeout(() => {
                setError("")
                clearTimeout(t1);
            }, 2000)
        } else {
            setError("Business Not Updated!!!")
            const t1 = await setTimeout(() => {
                setError("")
                clearTimeout(t1);
            }, 2000)
        }
    };

    return <>
        <Row>
            <Col md="2" sm="12">
                <NavBar class1="activeBar" color1="white" />
            </Col>
            <Col md="10" sm="12" style={{ minHeight: "100vh" }} className="content-wrapper">
                <div style={{ minHeight: "85vh" }}>

                    {/* header section */}
                    <div className="row page-titles">
                        <div className="col-md-5 align-self-center">
                            <h3>Settings</h3>
                        </div>
                    </div>

                    {/* settings section */}
                    <div className="card me-2" data-aos="zoom-in"
                        data-aos-once="true"
                        data-aos-easing="ease-out-sine">
                        <div className="card-body">
                            <h3 className="text-center">{error}</h3>
                            <div className="form-horizontal form-material">
                                <div className="form-group">
                                    <label className="col-md-12">Business Name</label>
                                    <div className="col-md-12">
                                        <input type="text" placeholder="Business Nig. Ltd" className="form-control form-control-line" value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="example-email" className="col-md-12">Email</label>
                                    <div className="col-md-12">
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="business@gmail.com" className="form-control form-control-line" name="example-email" id="example-email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-12">Password</label>
                                    <div className="col-md-12">
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control form-control-line" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-12">Phone No</label>
                                    <div className="col-md-12">
                                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="123 456 7890" className="form-control form-control-line" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-12">Address</label>
                                    <div className="col-md-12">
                                        <input value={address} onChange={(e) => setAddress(e.target.value)} type="address" placeholder="Street Number, Street, City, State, Country" className="form-control form-control-line" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-12">Username</label>
                                    <div className="col-md-12">
                                        <input value={userName} onChange={(e) => setUsername(e.target.value)} type="address" placeholder="Street Number, Street, City, State, Country" className="form-control form-control-line" />
                                    </div>
                                </div>

                                {/* <div className="form-group">
                                    <label className="col-md-12">Logo</label>
                                    <div className="col-md-12">
                                        <input type="file" className="form-control form-control-line" />
                                    </div>
                                </div> */}
                                <div className="form-group">
                                    <label className="col-md-12">Coin Name</label>
                                    <div className="col-md-12">
                                        <input value={coinName} onChange={(e) => setCoinName(e.target.value)} type="text" placeholder="Thank You Coin" className="form-control form-control-line" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-12">Coin Value</label>
                                    <div className="col-md-12">
                                        <input value={coinValue} onChange={(e) => setCoinValue(e.target.value)} type="Number" placeholder="100" className="form-control form-control-line" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-12">
                                        <button onClick={() => updateBusiness()} className="btn btn-success">Update</button>
                                    </div>
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

export default Settings;