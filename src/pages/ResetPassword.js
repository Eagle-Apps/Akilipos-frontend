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
        <div className="cenn">
            <div className="cen">
                <div className="row">
                    <div className="col-md-9">
                        <section id="wrapper">
                            <div className="login-register">
                                <div className="login-box card">
                                    <div className="card-body">
                                        <form className="form-horizontal form-material" id="loginform" action="index.html">
                                            <h3 className="box-title m-b-20 text-center" >Akili POS</h3>
                                            <h6>Forgot Password?</h6>
                                            <div className="form-group ">
                                                <div className="col-xs-12">
                                                    <input className="form-control" type="email" required="" placeholder="Email" /> </div>
                                            </div>
                                            <div className="form-group text-center m-t-20">
                                                <div className="col-xs-12">

                                                    <Link to="/dashboard">
                                                        <button style={{ background: "#8da1af" }} className="btn  btn-lg btn-block text-uppercase " type="submit" onClick={() => forgotPassword()}>Submit</button>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="form-group m-b-0">
                                                <div className="mt-4 text-center" id="backToLogin">
                                                    <Link to='/login'>
                                                        Back to the Log In Page
                                                    </Link>
                                                </div>
                                                <div className="col-sm-12 text-center">
                                                    <div>Don't have an account? &nbsp;
                                                        <Link to="/register"><b>Sign Up</b></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <form className="form-horizontal" id="recoverform" action="index.html">
                                            <div className="form-group ">
                                                <div className="col-xs-12">
                                                    <h3>Recover Password</h3>
                                                    <p className="text-muted">Enter your Email and instructions will be sent to you! </p>
                                                </div>
                                            </div>
                                            <div className="form-group ">
                                                <div className="col-xs-12">
                                                    <input className="form-control" type="text" required="" placeholder="Email" /> </div>
                                            </div>
                                            <div className="form-group text-center m-t-20">
                                                <div className="col-xs-12">
                                                    <button className="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Reset</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <Footer /> */}
                    </div>
                </div>
            </div >
        </div >

    </>
}

export default ResetPassword;