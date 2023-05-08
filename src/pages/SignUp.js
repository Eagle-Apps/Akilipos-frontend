import React, { useContext, useState } from "react";
import GoToTop from "../components/goToTop";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Store } from "../context/store";

function SignUp() {
    let store = useContext(Store);
    let [auth] = store.auth;
    let [businessName, setBusinessName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [phone, setPhone] = useState("");
    let [address, setAddress] = useState("");
    let [userName, setUsername] = useState("EmmaStores");
    let [country, setCountry] = useState("");
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState("");
    let [terms, setTerms] = useState(false);
    // let [, set] = useState();

    let checkTerm = () => {
        terms ? setTerms(false) : setTerms(true);
    }

    let register = async () => {
        setLoading(true);
        if (!terms) {
            setError("Terms of Service have not been accepted");
            const t1 = setTimeout(() => {
                setError("")
                setLoading(false);
                clearTimeout(t1);
            }, 1000);
            return;
        };

        if (address.trim() === "" || password.trim() === "" || businessName.trim() === ""
            || country.trim() === "" || email.trim() === "") {
            setError("Please fill missing field(s)!!!");
            const t1 = setTimeout(() => {
                setError("")
                setLoading(false);
                clearTimeout(t1);
            }, 2000);
            return;
        }
        if (password.length < 8) {
            setError("Your password must be at least 8 characters")
            const t1 = setTimeout(() => {
                setError("")
                setLoading(false);
                clearTimeout(t1);
            }, 3000);
            return;
        }

        let url = auth + "/register";
        let data = { businessName, email, password, address, country, userName };
        const response = await fetch(url, {
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        });
       
        if (response.status === 200) {
            await response.json()
            setError("Registration Completed");
            const t1 = setTimeout(() => {
                setLoading(false);
                setError("");
                clearTimeout(t1);
            }, 2000);
            setBusinessName("")
            setPassword("")
            setAddress("")
            setEmail("")
            setCountry("")
            setTerms(false)
        } else {
            setError("Error Occurred")
            const t1 = setTimeout(() => {
                setError("")
                setLoading(false)
                clearTimeout(t1);
            }, 2000)
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
                                        <div className="form-horizontal form-material" id="loginform" >
                                            <h3 className="box-title m-b-20 text-center">Sign Up</h3>
                                            <p id="error">{error}</p>
                                            <div className="form-group">
                                                <div className="col-xs-12">
                                                    <input className="form-control" type="text" required="" placeholder="Business Name" value={businessName}
                                                        onChange={(e) => setBusinessName(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="form-group ">
                                                <div className="col-xs-12">
                                                    <input className="form-control" type="text" required="" placeholder="Email" value={email}
                                                        onChange={(e) => setEmail(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="form-group ">
                                                <div className="col-xs-12">
                                                    <input className="form-control" type="password" required="" placeholder="Password" value={password}
                                                        onChange={(e) => setPassword(e.target.value)} />
                                                </div>
                                            </div>
                                            {/* <div className="form-group">
                                                <div className="col-xs-12">
                                                    <input className="form-control" type="text" required="" placeholder="Business Username" value={userName}
                                                        onChange={(e) => setUsername(e.target.value)} />
                                                </div>
                                            </div> */}
                                            <div className="form-group">
                                                <div className="col-xs-12">
                                                    <input className="form-control" type="text" required="" placeholder="Address" value={address}
                                                        onChange={(e) => setAddress(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-xs-12">
                                                    <input className="form-control" type="text" required="" placeholder="Country" value={country}
                                                        onChange={(e) => setCountry(e.target.value)} />
                                                </div>
                                            </div>
                                            {/* <div className="form-group">
                                                <div className="col-xs-12">
                                                    <input className="form-control" type="tel" required="" placeholder="Phone" value={phone}
                                                        onChange={(e) => setPhone(e.target.value)} />
                                                </div>
                                            </div> */}
                                            <div className="form-group row">
                                                <div className="col-md-12">
                                                    <div className="checkbox checkbox-success">
                                                        <input id="checkbox-signup" type="checkbox" onClick={() => checkTerm()} />
                                                        <label for="checkbox-signup"> I agree to all &nbsp;
                                                            <Link to="/terms">Terms</Link>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group text-center m-t-20">
                                                <div className="col-xs-12">
                                                    <button onClick={() => register()} style={{ background: "#8da1af" }} className="btn btn-lg btn-block text-uppercase waves-effect waves-light">{loading ? "Loading" : "Sign Up"}</button>
                                                </div>
                                            </div>

                                            <div className="form-group m-b-0">
                                                <div className="col-sm-12 text-center">
                                                    <div>Already have an account? &nbsp; <Link to="/login"><b>Login</b></Link></div>
                                                </div>
                                            </div>
                                        </div>
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