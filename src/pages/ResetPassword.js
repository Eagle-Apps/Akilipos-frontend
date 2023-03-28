import React, { useContext, useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import Container from 'react-bootstrap/Container';
import { Link, useParams, useNavigate } from "react-router-dom";
import { Store } from "../context/store";
import logo from "../assets/images/akili.png";
import { Button, Col, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
// import FlashMessage from 'react-flash-message'


function ResetPassword() {
    let store = useContext(Store);
    let [mainUrl] = store.endUrl;
    let id = useParams();
    let history = useNavigate()
    let [user, setUser] = useState([]);


    let [email, setEmail] = useState("");
    let [success, setSuccess] = useState("");
    let forgotPassword = () => {
        let url = mainUrl + "/forgetPassword";
        let data = { email };
        fetch(url, {
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                setSuccess(result.msg)
            })
    };


    return <>
        <div className="reset-wrapper">
            <Container className="passwordReset ">
                <Row >
                    <Col className="square p-5" lg="10" md="12" sm='12' style={{ borderRadius: '10px', border: "2px solid black" }}>
                        {/* <img src={logo} alt="akili-logo" /> */}
                        <h6>Akili POS</h6>
                        <div className="text-center mb-3 account-header" style={{ background: '#8da1af', color: 'white' }}>
                            <h3>Forgot Password?</h3>
                        </div>
                        {/* {success !== "" ?
                        <FlashMessage duration={10000} persistOnHover={true} >
                            <p id="flash">{success}</p>
                        </FlashMessage> : ""
                    } */}
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email </Form.Label>
                                <span className="flex">
                                    <Icon className="login-icon" color="black" icon="bxs:user" width="25" height="35" />
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </span>
                            </Form.Group>

                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Button className="align-self-center" id='reset-btn' onClick={() => forgotPassword()}>
                                    Submit
                                </Button>
                            </div>

                        </Form>
                        <div className="mt-4 text-center" id="backToLogin">
                            <Link to='/login'>
                                Back to the Log In Page
                            </Link>
                        </div>
                    </Col>

                    <Col className="toRegsiter text-center m-3 p-3" lg='10'>
                        Don't you have an account?<br />
                        <Link to="/register">Sign Up !</Link>
                    </Col>

                </Row>


            </Container>
        </div>

    </>
}

export default ResetPassword;