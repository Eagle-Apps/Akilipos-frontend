import React, { useEffect, useState, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import Modal from "react-bootstrap/Modal";
import { Store } from "../context/store";
import { useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

function Vendors() {
    let store = useContext(Store);
    let [vendorUrl] = store.vendor;
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const handleClose = () => { setShow(false); setShow1(false) };
    const handleShow = () => setShow(true);
    let { id } = useParams();
    let [vendors, setVendors] = useState([]);
    let [phone, setPhone] = useState("");
    let [name, setName] = useState("");
    let [address, setAddress] = useState("");
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState("");
    let [errorMsg, setErrorMsg] = useState("");
    let [vendorId, setVendorId] = useState("");

    useEffect(() => {
        loadVendors();
    }, []);

    let loadVendors = () => {
        let url = `${vendorUrl}/vendors/${id}`;
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setVendors(res.vendors)
            });
    };

    let createVendor = async () => {
        if (name.trim() === "" || phone.trim() === "" || address.trim() === ""

        ) {
            setError("Please fill missing field(s)!!!");
            const t1 = setTimeout(() => {
                setError("")
                setLoading(false);
                clearTimeout(t1);
            }, 3000);
            return;
        }
        setLoading(true);
        let url = vendorUrl + "/vendor";

        let data = { phone, name, address, businessId: id };

        const response = await fetch(url, {
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        });

        if (response.status === 200) {
            loadVendors()
            await response.json()
            setError("Vendor Added");
            const t1 = setTimeout(() => {
                setLoading(false);
                setError("");
                clearTimeout(t1);
            }, 2000);
            setName("")
            setAddress("")
            setPhone("")
        } else {
            setError("Error Occurred")
            const t1 = setTimeout(() => {
                setError("")
                setLoading(false)
                clearTimeout(t1);
            }, 2000)
        }


    };

    let editModal = (e) => {
        setShow1(true)
        handleShow();
        setName(e.name)
        setPhone(e.phone)
        setAddress(e.address)
        setVendorId(e.id)
    };

    let editVendor = async () => {
        let url = `${vendorUrl}/vendor/${vendorId}`;
        let data = {
            name,
            phone,
            address
        }
        setLoading(true);
        const response = await fetch(url, {
            headers: {
                "content-type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify(data)
        });
        if (response.status === 200) {
            loadVendors()
            setError("Vendor Updated!!!")
            const t1 = await setTimeout(() => {
                setError("")
                setLoading(false)
                handleClose()
                clearTimeout(t1);
            }, 2000)
            setAddress("")
            setPhone("")
            setName("")
        } else {
            setError("Vendor Not Updated!!!")
            const t1 = await setTimeout(() => {
                setError("")
                setLoading(false)
                clearTimeout(t1);
            }, 2000)
        }
    };

    let deleteVendor = async (e) => {

        let url = `${vendorUrl}/vendor/${e}`;

        const response = window.confirm("Are you sure?") ? await fetch(url, {
            headers: {
                "content-type": "application/json"
            },
            method: "DELETE"
        }) : console.log("");
        if (response.status === 200) {
            loadVendors()
            setErrorMsg("Vendor Deleted!!!")
            const t1 = await setTimeout(() => {
                setErrorMsg("")
                clearTimeout(t1);
            }, 2000)
        } else {
            setErrorMsg("Vendor Not Deleted!!!")
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
                            <h3>Vendors</h3>
                        </div>
                        <div className="col-md-7 align-items-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">My Business</li>
                                <li className="breadcrumb-item active">Vendors</li>
                            </ol>
                        </div>
                    </div>

                    <div className="pe-3">

                        <div className="mt-2 mb-3">
                            <button style={{ background: "white" }} className="create-btn-ah" onClick={handleShow}> Vendor +</button>
                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                                centered
                            >
                                <Modal.Header closeButton
                                    style={{ padding: "10px 50px" }} >
                                    <Modal.Title>Add a New Vendor ?</Modal.Title>
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
                                                    <div className="form-group  col-md-6">
                                                        <input value={address} onChange={(e) => setAddress(e.target.value)} type="address" className="form-control" id="exampleInputEmai1" placeholder="Address" />
                                                    </div>
                                                    <div className="form-group  col-md-6">
                                                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" className="form-control" id="exampleInputPassword1" placeholder="Phone Number" />
                                                    </div>
                                                </div>
                                                {show1 ? <button
                                                    type="submit" onClick={() => editVendor(vendorId)} style={{ background: "black", color: "white", fontWeight: "800" }} className="btn waves-effect waves-light m-r-10">{loading ? <PulseLoader color="white" size={8} /> : "Update"}
                                                </button> :
                                                    <button
                                                        type="submit" onClick={() => createVendor()} style={{ background: "black", color: "white", fontWeight: "800" }} className="btn waves-effect waves-light m-r-10">{loading ? <PulseLoader color="white" size={8} /> : "Submit"}
                                                    </button>}
                                            </div>
                                        </div>
                                    </div>

                                </Modal.Body>
                            </Modal>
                        </div>

                        {/* Vendors section */}
                        <div className="row hero">
                            <h2 className="text-center">{errorMsg}</h2>
                            {vendors?.length === 0 ? <div>No vendors Added</div> :
                                vendors.map((e, i) => {
                                    return <div className="col-md-6 col-lg-6 col-xlg-4" key={i}>
                                        <div className="card card-body">
                                            <div className="row">
                                                <div className="col-md-8 col-lg-9">
                                                    <h3 className="box-title m-b-0">{e.name}</h3> <small>{e.position}</small>
                                                    <address>
                                                        {e.address}
                                                        <br />
                                                        <br />
                                                        <abbr title="Phone"></abbr> {e.phone}
                                                    </address>
                                                </div>
                                                <div className="col-md-4 col-lg-3 text-right">
                                                    <div><a onClick={() => editModal(e)} id="edit" className="text-inverse p-r-10"
                                                        data-toggle="tooltip" title="" data-original-title="Edit"><i
                                                            className="ti-marker-alt"></i></a>
                                                        <a onClick={() => deleteVendor(e.id)} id="edit"
                                                            className="text-inverse" title="" data-toggle="tooltip"
                                                            data-original-title="Delete"><i className="ti-trash"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })}

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

export default Vendors;