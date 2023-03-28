import React from "react";
import GoToTop from "../components/goToTop";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Login() {
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
                                            <h3 className="box-title m-b-20 text-center" >Sign In</h3>
                                            <div className="form-group ">
                                                <div className="col-xs-12">
                                                    <input className="form-control" type="text" required="" placeholder="Username" /> </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-xs-12">
                                                    <input className="form-control" type="password" required="" placeholder="Password" /> </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-md-12 font-14">
                                                    <div className="checkbox checkbox-primary pull-left p-t-0">
                                                        <input id="checkbox-signup" type="checkbox" />
                                                        <label for="checkbox-signup"> Remember me </label>
                                                    </div> <Link id="to-recover" to={"/reset-password"} className="text-dark pull-right"> <i className="fa fa-lock m-r-5"></i>  Forgot Password?</Link> </div>
                                            </div>
                                            <div className="form-group text-center m-t-20">
                                                <div className="col-xs-12">
                                                    <button style={{ background: "#8da1af" }} className="btn  btn-lg btn-block text-uppercase " type="submit">Log In</button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                                                    {/* <div className="social">
                                                        <a href="javascript:void(0)" className="btn  btn-facebook" data-toggle="tooltip" title="Login with Facebook"> <i aria-hidden="true" className="fa fa-facebook"></i> </a>
                                                        <a href="javascript:void(0)" className="btn btn-googleplus" data-toggle="tooltip" title="Login with Google"> <i aria-hidden="true" className="fa fa-google-plus"></i> </a>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div className="form-group m-b-0">
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

                        <Footer />
                    </div>
                </div>
            </div >
        </div >
        <GoToTop />
    </>
}

export default Login;