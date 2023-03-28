import React from "react";
import GoToTop from "../components/goToTop";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function SignUp() {
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
                                            <h3 className="box-title m-b-20 text-center">Sign Up</h3>
                                            <div className="form-group">
                                                <div className="col-xs-12">
                                                    <input className="form-control" type="text" required="" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="form-group ">
                                                <div className="col-xs-12">
                                                    <input className="form-control" type="text" required="" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="form-group ">
                                                <div className="col-xs-12">
                                                    <input className="form-control" type="password" required="" placeholder="Password" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-xs-12">
                                                    <input className="form-control" type="password" required="" placeholder="Confirm Password" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-md-12">
                                                    <div className="checkbox checkbox-success">
                                                        <input id="checkbox-signup" type="checkbox" />
                                                        <label for="checkbox-signup"> I agree to all &nbsp;
                                                            <Link to="/terms">Terms</Link>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group text-center m-t-20">
                                                <div className="col-xs-12">
                                                    <button style={{ background: "#8da1af" }} className="btn btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Sign Up</button>
                                                </div>
                                            </div>
                                            <div className="form-group m-b-0">
                                                <div className="col-sm-12 text-center">
                                                    <div>Already have an account? &nbsp; <Link to="/login"><b>Login</b></Link></div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <Footer />
                    </div>
                </div>
            </div >
        </div >
        <GoToTop />
    </>
}

export default SignUp;