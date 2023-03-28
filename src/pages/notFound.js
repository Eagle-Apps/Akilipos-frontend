import React from "react";
import GoToTop from "../components/goToTop";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";

function NotFound() {
    return <>
        <div className="cenn">
            <div className="cen">
                <div className="row">
                    <div className="col-md-3">
                        <NavBar />
                    </div>
                    <div className="col-md-9 notFound">

                        <h2>PAGE NOT FOUND</h2>

                    </div>
                </div>
            </div >
        </div >
        <GoToTop />
    </>
}

export default NotFound;