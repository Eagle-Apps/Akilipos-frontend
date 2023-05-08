import React, { useContext, useState } from "react";
import GoToTop from "../components/goToTop";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../context/store";

function Login() {
    let store = useContext(Store);
    let [auth] = store.auth;
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let navigate = useNavigate();
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState("");

    let login = async () => {
        setLoading(true);

        if (password.trim() === "" || email.trim() === "") {
            setError("Please fill missing field(s)!!!");
            const t1 = setTimeout(() => {
                setError("")
                setLoading(false);
                clearTimeout(t1);
            }, 2000);
            return;
        }
        let url = auth + "/login";
        let data = { email, password };
        const response = await fetch(url, {
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        });

        if (response.status === 200) {
            let res = await response.json()
            let path = `/dashboard/${res.id}`
            const t1 = setTimeout(() => {
                setLoading(false);
                setError("");
                clearTimeout(t1);
            }, 2000);
            const t2 = setTimeout(() => {
                navigate(path);
                clearTimeout(t2);
            }, 5000);
            setPassword("")
            setEmail("")
        } else {
            let err = await response.json();
            if (err.message === "user with the email does not exist") {
                setError(err.message)
            } else if (err.message === "invalid credentials") {
                setError("Invalid Email or Password")
            } else {
                setError("Error Occurred")
            }

            const t2 = setTimeout(() => {
                setLoading(false)
                clearTimeout(t2);
            }, 500)
            const t1 = setTimeout(() => {
                setError("")
                clearTimeout(t1);
            }, 6000)
        }
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
                                        <div className="form-horizontal form-material" id="loginform">
                                            <h3 className="box-title m-b-20 text-center" >Sign In</h3>
                                            <p id="error">{error}</p>
                                            <div className="form-group ">
                                                <div className="col-xs-12">
                                                    <input className="form-control" type="email" required placeholder="Email" value={email}
                                                        onChange={(e) => setEmail(e.target.value)} /> </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-xs-12">
                                                    <input className="form-control" type="password" required placeholder="Password" value={password}
                                                        onChange={(e) => setPassword(e.target.value)} /> </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-md-12 font-14">
                                                    <div className="checkbox checkbox-primary pull-left p-t-0">
                                                        <input id="checkbox-signup" type="checkbox" />
                                                        <label for="checkbox-signup"> Remember me </label>
                                                    </div>
                                                    <Link id="to-recover" to={"/reset-password"} className="text-dark pull-right"> <i className="fa fa-lock m-r-5"></i>  Forgot Password?</Link>
                                                </div>
                                            </div>
                                            <div className="form-group text-center m-t-20">
                                                <div className="col-xs-12">
                                                    <button onClick={() => login()} style={{ background: "#8da1af" }} className="btn  btn-lg btn-block text-uppercase" >{loading ? "Loading" : "Log In"}</button>
                                                </div>
                                            </div>
                                            <div className="form-group m-b-0">
                                                <div className="col-sm-12 text-center">
                                                    <div>Don't have an account? &nbsp;
                                                        <Link to="/register"><b>Sign Up</b></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="form-horizontal" id="recoverform" >
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
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div >
        </div >
        <GoToTop />
    </>
}

export default Login;