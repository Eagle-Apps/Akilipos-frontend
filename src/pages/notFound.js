import React, { useEffect } from "react";
import GoToTop from "../components/goToTop";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import Aos from "aos";
import 'aos/dist/aos.css';
import { Link, useParams } from "react-router-dom";


function NotFound() {
    let { id } = useParams();
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);
    return <>
        <div className="cenn">
            <div className="cen">
                <div className="row">
                    <div className="col-md-2">
                        <NavBar />
                    </div>
                    <div className="col-md-10 notFound" data-aos="slide-left"
                        data-aos-once="false"
                        data-aos-easing="ease-out-sine">

                        <h2>PAGE NOT FOUND</h2>

                    </div>
                </div>
            </div >
        </div >
        <GoToTop />
    </>
}

export default NotFound;