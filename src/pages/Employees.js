import React, { useEffect, useState, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import Modal from "react-bootstrap/Modal";
import { Store } from "../context/store";
import { useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

function Employess() {
    let store = useContext(Store);
    let [employeeUrl] = store.employee;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let { id } = useParams();
    let [employees, setEmployees] = useState([]);
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [phone, setPhone] = useState("");
    let [name, setName] = useState("");
    let [username, setUsername] = useState("");
    let [address, setAddress] = useState("");
    let [salary, setSalary] = useState(0);
    let [position, setPosition] = useState("");
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState("");

    useEffect(() => {
        loadEmployees();
    }, []);

    let loadEmployees = () => {
        let url = `${employeeUrl}/employees/${id}`;
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setEmployees(res.employees)
            });
    };

    let createEmployee = async () => {
        if (password.trim() === "" || email.trim() === "" || name.trim() === ""
            || phone.trim() === "" || salary.trim() === "" || address.trim() === "" || position.trim() === ""
            || username.trim() === ""

        ) {
            setError("Please fill missing field(s)!!!");
            const t1 = setTimeout(() => {
                setError("")
                setLoading(false);
                clearTimeout(t1);
            }, 3000);
            return;
        }
        if (Number(salary) === 0) {
            setError("Salary cannot be Zero or Void");
            const t1 = setTimeout(() => {
                setSalary(Number(null))
                setError("")
                setLoading(false);
                clearTimeout(t1);
            }, 3000);
            return;
        }
        if (password.length < 8) {
            setError("Password must be at least 8 characters")
            const t1 = setTimeout(() => {
                setError("")
                setLoading(false);
                clearTimeout(t1);
            }, 3000);
            return;
        }
        setLoading(true);
        let url = employeeUrl + "/employee";

        let data = {
            email, password, phone,
            name, username, address,
            salary, position, businessId: id
        };

        const response = await fetch(url, {
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        });

        if (response.status === 200) {
            await response.json()
            setError("Employee Added");
            const t1 = setTimeout(() => {
                setLoading(false);
                setError("");
                clearTimeout(t1);
            }, 2000);
            setName("")
            setPassword("")
            setAddress("")
            setEmail("")
            setPhone("")
            setUsername("")
            setPosition("")
            setSalary(0)
        } else {
            let err = await response.json()
            if (err.message === "Email already registered") {
                setError(err.message)
            } else {
                setError("Error Occurred")
            }

            const t1 = setTimeout(() => {
                setError("")
                setLoading(false)
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
                            <h3>Employess</h3>
                        </div>
                        <div className="col-md-7 align-items-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">My Business</li>
                                <li className="breadcrumb-item active">Employess</li>
                            </ol>
                        </div>
                    </div>

                    <div className="pe-3">

                        <div className="mt-2 mb-3">
                            <button style={{ background: "white" }} className="create-btn-ah" onClick={handleShow}> Employee +</button>
                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                                centered
                            >
                                <Modal.Header closeButton
                                    style={{ padding: "10px 50px" }} >
                                    <Modal.Title>Add a New Employee ?</Modal.Title>
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
                                                <button onClick={() => createEmployee()} style={{ background: "black", color: "white", fontWeight: "800" }}
                                                    type="submit" className="btn waves-effect waves-light m-r-10">{loading ? <PulseLoader color="white" size={8} /> : "Submit"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </Modal.Body>
                            </Modal>
                        </div>

                        {/* Employees section */}
                        <div className="row hero">
                            {employees?.length === 0 ? <div>No employees Added</div> :
                                employees.map((e, i) => {
                                    return <div className="col-md-6 col-lg-6 col-xlg-4" key={i}>
                                        <div className="card card-body">
                                            <div className="row">
                                                <div className="col-md-4 col-lg-3 text-center">
                                                    <a href="app-contact-detail.html"><img src={e.image} alt="user" className="img-circle img-responsive" /></a>
                                                </div>
                                                <div className="col-md-8 col-lg-9">
                                                    <h3 className="box-title m-b-0">{e.name}</h3> <small>{e.position}</small>
                                                    <address>
                                                        {e.address}
                                                        <br />
                                                        <br />
                                                        <abbr title="Phone"></abbr> {e.phone}
                                                    </address>
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

export default Employess;