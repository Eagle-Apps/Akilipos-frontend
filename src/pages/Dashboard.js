import React from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";

function Dashboard() {
    return <>
        <Row>
            <Col md="2" sm="12">
                <NavBar class1="activeBar" color1="white" />
            </Col>
            <Col md="10" sm="12" style={{ minHeight: "100vh" }} className="content-wrapper">
                <div style={{ minHeight: "85vh" }}>

                    {/* dashboard section */}
                    <div className="row page-titles">
                        <div className="col-md-5 align-self-center">
                            <h3>Dashboard</h3>
                        </div>
                        <div className="col-md-7 align-items-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">Home</li>
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                        </div>
                        <div>
                            <button
                                className="right-side-toggle waves-effect waves-light btn-inverse btn btn-circle btn-sm pull-right m-l-10">
                                <i className="ti-settings text-white"></i></button>
                        </div>
                    </div>

                    <div className="pe-3">
                        {/* Top cards section */}
                        <div className="card-group">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <h2 className="m-b-0"><i className="mdi mdi-alert-circle text-danger"></i></h2>
                                            <h3 className="">2456</h3>
                                            <h6 className="card-subtitle">Pending Orders</h6>
                                        </div>
                                        <div className="col-12">
                                            <div className="progress">
                                                <div className="progress-bar bg-info" role="progressbar"
                                                    style={{ width: "85%", height: "100%" }} aria-valuenow="25" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Column // */}
                            {/* <!-- Column // */}
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <h2 className="m-b-0"><i className="mdi mdi-briefcase-check text-success"></i></h2>
                                            <h3 className="">546</h3>
                                            <h6 className="card-subtitle">Completed Orders</h6>
                                        </div>
                                        <div className="col-12">
                                            <div className="progress">
                                                <div className="progress-bar bg-success" role="progressbar"
                                                    style={{ width: "45%", height: "100%" }} aria-valuenow="70" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Column // */}
                            {/* <!-- Column // */}
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <h2 className="m-b-0"><i className="mdi mdi-wallet text-purple"></i></h2>
                                            <h3 className="">$24561</h3>
                                            <h6 className="card-subtitle">Total Sales</h6>
                                        </div>
                                        <div className="col-12">
                                            <div className="progress">
                                                <div className="progress-bar bg-primary" role="progressbar"
                                                    style={{ width: "56%", height: "100%" }} aria-valuenow="25" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Column // */}
                            {/* <!-- Column // */}
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <h2 className="m-b-0"><i className="mdi mdi-buffer text-warning"></i></h2>
                                            <h3 className="">$30010</h3>
                                            <h6 className="card-subtitle">Total Earnings</h6>
                                        </div>
                                        <div className="col-12">
                                            <div className="progress">
                                                <div className="progress-bar bg-warning" role="progressbar"
                                                    style={{ width: "26 %", height: "100%" }} aria-valuenow="25" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* analysis section */}
                        <div className="row">
                            {/* <!-- Column --> */}
                            <div className="col-lg-8 col-xlg-9">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="d-flex flex-wrap">
                                                    <div>
                                                        <h4 className="card-title">Yearly Earning</h4>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <ul className="list-inline">
                                                            <li>
                                                                <h6 className="text-muted text-success"><i
                                                                    className="fa fa-circle font-10 m-r-10 "></i>Sales</h6>
                                                            </li>
                                                            <li>
                                                                <h6 className="text-muted  text-info"><i
                                                                    className="fa fa-circle font-10 m-r-10"></i>Earning ($)</h6>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div id="earning" style={{ height: "355px" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Column --> */}
                            <div className="col-lg-4 col-xlg-3">
                                <div className="card card-inverse card-info">
                                    <div className="card-body" style={{ background: "black" }}>
                                        <div className="d-flex">
                                            <div className="m-r-20 align-self-center">
                                                <h1 className="text-white"><i className="ti-light-bulb"></i></h1>
                                            </div>
                                            <div>
                                                <h3 className="card-title">Sales Analytics</h3>
                                                <h6 className="card-subtitle">February 2023</h6>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 align-self-center">
                                                <h2 className="font-light text-white"><sub><small><i
                                                    className="ti-arrow-up"></i></small></sub>35,487</h2>
                                            </div>
                                            <div className="col-6 p-t-10 p-b-20 text-right">
                                                <div className="spark-count" style={{ height: "65px" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card-inverse card-success" style={{ background: "black" }}>
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <div className="m-r-20 align-self-center">
                                                <h1 className="text-white"><i className="ti-light-bulb"></i></h1>
                                            </div>
                                            <div>
                                                <h3 className="card-title">Sales Analytics</h3>
                                                <h6 className="card-subtitle">March 2023</h6>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 align-self-center">
                                                <h2 className="font-light text-white">27,000</h2>
                                            </div>
                                            <div className="col-6 p-t-10 p-b-20 text-right align-self-center">
                                                <div className="spark-count2" style={{ height: "65px" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Column --> */}
                        </div>

                        {/* employee report section */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex no-block">
                                            <h4 className="card-title">Salary Report<br /><small className="text-muted">Employee Salary
                                                Report by Month</small></h4>
                                            <div className="ml-auto">
                                                <select className="custom-select">
                                                    <option selected="">July</option>
                                                    <option value="1">Aug</option>
                                                    <option value="2">Sept</option>
                                                    <option value="3">Oct</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-light p-20">
                                        <div className="d-flex">
                                            <div className="align-self-center">
                                                <h3 className="m-b-0">February 2022</h3><small>Total Salary Paid:</small>
                                            </div>
                                            <div className="ml-auto align-self-center">
                                                <h2 className="text-success">$5470</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover earning-box">
                                                <thead>
                                                    <tr>
                                                        <th colspan="2">Name</th>
                                                        <th>Status</th>
                                                        <th>Earnings</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ width: "50px" }}><span className="round"><img
                                                            src="../assets/images/users/8.jpg" alt="user"
                                                            width="50" /></span></td>
                                                        <td>
                                                            <h6>Sunil Joshi</h6><small className="text-muted">Web Designer</small>
                                                        </td>
                                                        <td><span className="label label-success">Low</span></td>
                                                        <td>$3.9K</td>
                                                    </tr>
                                                    <tr className="active">
                                                        <td><span className="round"><img src="../assets/images/users/2.jpg"
                                                            alt="user" width="50" /></span></td>
                                                        <td>
                                                            <h6>Andrew</h6><small className="text-muted">Project Manager</small>
                                                        </td>
                                                        <td><span className="label label-info">Medium</span></td>
                                                        <td>$23.9K</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="round round-success"><img
                                                            src="../assets/images/users/1.jpg" alt="user"
                                                            width="50" /></span></td>
                                                        <td>
                                                            <h6>Bhavesh patel</h6><small className="text-muted">Developer</small>
                                                        </td>
                                                        <td><span className="label label-primary">High</span></td>
                                                        <td>$12.9K</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="round round-primary"><img
                                                            src="../assets/images/users/4.jpg" alt="user"
                                                            width="50" /></span></td>
                                                        <td>
                                                            <h6>Nirav Joshi</h6><small className="text-muted">Frontend Eng</small>
                                                        </td>
                                                        <td><span className="label label-danger">Low</span></td>
                                                        <td>$10.9K</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="round round-warning"><img
                                                            src="../assets/images/users/5.jpg" alt="user"
                                                            width="50" /></span></td>
                                                        <td>
                                                            <h6>Micheal Doe</h6><small className="text-muted">Content Writer</small>
                                                        </td>
                                                        <td><span className="label label-warning">High</span></td>
                                                        <td>$12.9K</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="round round-danger"><img
                                                            src="../assets/images/users/1.jpg" alt="user"
                                                            width="50" /></span></td>
                                                        <td>
                                                            <h6>Johnathan</h6><small className="text-muted">Graphic</small>
                                                        </td>
                                                        <td><span className="label label-info">High</span></td>
                                                        <td>$2.6K</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="round round-success">M</span></td>
                                                        <td>
                                                            <h6>Vishal Doe</h6><small className="text-muted">Content Writer</small>
                                                        </td>
                                                        <td><span className="label label-warning">High</span></td>
                                                        <td>$12.9K</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-6">
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Recent Comments</h4>
                <h6 className="card-subtitle">Latest Comments on users from Material</h6>
            </div>
            <div className="comment-widgets m-b-20">
                <div className="d-flex flex-row comment-row">
                    <div className="p-2"><span className="round"><img src="../assets/images/users/1.jpg"
                        alt="user" width="50"/></span></div>
                    <div className="comment-text w-100">
                        <h5>James Anderson</h5>
                        <div className="comment-footer">
                            <span className="date">April 14, 2016</span>
                            <span className="label label-info">Pending</span> <span className="action-icons">
                                <a href="javascript:void(0)"><i className="mdi mdi-pencil-circle"></i></a>
                                <a href="javascript:void(0)"><i
                                    className="mdi mdi-checkbox-marked-circle"></i></a>
                                <a href="javascript:void(0)"><i className="mdi mdi-heart"></i></a>
                            </span>
                        </div>
                        <p className="m-b-5 m-t-10">Lorem Ipsum is simply dummy text of the printing and
                            type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text
                            of the printing and type setting industry.</p>
                    </div>
                </div>
       
                <div className="d-flex flex-row comment-row ">
                    <div className="p-2"><span className="round"><img src="../assets/images/users/2.jpg"
                        alt="user" width="50"/></span></div>
                    <div className="comment-text active w-100">
                        <h5>Michael Jorden</h5>
                        <div className="comment-footer">
                            <span className="date">April 14, 2016</span>
                            <span className="label label-success">Approved</span> <span
                                className="action-icons active">
                                <a href="javascript:void(0)"><i className="mdi mdi-pencil-circle"></i></a>
                                <a href="javascript:void(0)"><i
                                    className="mdi mdi-checkbox-marked-circle text-success"></i></a>
                                <a href="javascript:void(0)"><i
                                    className="mdi mdi-heart text-danger"></i></a>
                            </span>
                        </div>
                        <p className="m-b-5 m-t-10">Lorem Ipsum is simply dummy text of the printing and
                            type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text
                            of the printing and type setting industry..</p>
                    </div>
                </div>
                
                <div className="d-flex flex-row comment-row">
                    <div className="p-2"><span className="round"><img src="../assets/images/users/3.jpg"
                        alt="user" width="50"/></span></div>
                    <div className="comment-text w-100">
                        <h5>Johnathan Doeting</h5>
                        <div className="comment-footer">
                            <span className="date">April 14, 2016</span>
                            <span className="label label-danger">Rejected</span> <span className="action-icons">
                                <a href="javascript:void(0)"><i className="mdi mdi-pencil-circle"></i></a>
                                <a href="javascript:void(0)"><i
                                    className="mdi mdi-checkbox-marked-circle"></i></a>
                                <a href="javascript:void(0)"><i className="mdi mdi-heart"></i></a>
                            </span>
                        </div>
                        <p className="m-b-5 m-t-10">Lorem Ipsum is simply dummy text of the printing and
                            type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text
                            of the printing and type setting industry.</p>
                    </div>
                </div>
                
                <div className="d-flex flex-row comment-row">
                    <div className="p-2"><span className="round"><img src="../assets/images/users/4.jpg"
                        alt="user" width="50"/></span></div>
                    <div className="comment-text w-100">
                        <h5>James Anderson</h5>
                        <div className="comment-footer">
                            <span className="date">April 14, 2016</span>
                            <span className="label label-info">Pending</span> <span className="action-icons">
                                <a href="javascript:void(0)"><i className="mdi mdi-pencil-circle"></i></a>
                                <a href="javascript:void(0)"><i
                                    className="mdi mdi-checkbox-marked-circle"></i></a>
                                <a href="javascript:void(0)"><i className="mdi mdi-heart"></i></a>
                            </span>
                        </div>
                        <p className="m-b-5 m-t-10">Lorem Ipsum is simply dummy text of the printing and
                            type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text
                            of the printing and type setting industry..</p>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
                        </div>

                        {/* Product Overview Section */}
                        <div className="card card-default">
                            <div className="card-header">
                                <div className="card-actions">
                                    <a className="" data-action="collapse"><i className="ti-minus"></i></a>
                                    <a className="btn-minimize" data-action="expand"><i
                                        className="mdi mdi-arrow-expand"></i></a>
                                    <a className="btn-close" data-action="close"><i className="ti-close"></i></a>
                                </div>
                                <h4 className="card-title m-b-0">Product Overview</h4>
                            </div>
                            <div className="card-body collapse show">
                                <div className="table-responsive">
                                    <table className="table product-overview">
                                        <thead>
                                            <tr>
                                                <th>Customer</th>
                                                <th>Photo</th>
                                                <th>Quantity</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Steave Jobs</td>
                                                <td>
                                                    <img src="../assets/images/gallery/chair.jpg" alt="iMac" width="80" />
                                                </td>
                                                <td>20</td>
                                                <td>10-7-2017</td>
                                                <td>
                                                    <span className="label label-success font-weight-100">Paid</span>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-inverse p-r-10"
                                                    data-toggle="tooltip" title="" data-original-title="Edit"><i
                                                        className="ti-marker-alt"></i></a> <a href="javascript:void(0)"
                                                            className="text-inverse" title="" data-toggle="tooltip"
                                                            data-original-title="Delete"><i className="ti-trash"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>Varun Dhavan</td>
                                                <td>
                                                    <img src="../assets/images/gallery/chair2.jpg" alt="iPhone"
                                                        width="80" />
                                                </td>
                                                <td>25</td>
                                                <td>09-7-2017</td>
                                                <td>
                                                    <span className="label label-warning font-weight-100">Pending</span>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-inverse p-r-10"
                                                    data-toggle="tooltip" title="" data-original-title="Edit"><i
                                                        className="ti-marker-alt"></i></a> <a href="javascript:void(0)"
                                                            className="text-inverse" title="" data-toggle="tooltip"
                                                            data-original-title="Delete"><i className="ti-trash"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>Ritesh Desh</td>
                                                <td>
                                                    <img src="../assets/images/gallery/chair3.jpg" alt="apple_watch"
                                                        width="80" />
                                                </td>
                                                <td>12</td>
                                                <td>08-7-2017</td>
                                                <td>
                                                    <span className="label label-success font-weight-100">Paid</span>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-inverse p-r-10"
                                                    data-toggle="tooltip" title="" data-original-title="Edit"><i
                                                        className="ti-marker-alt"></i></a> <a href="javascript:void(0)"
                                                            className="text-inverse" title="" data-toggle="tooltip"
                                                            data-original-title="Delete"><i className="ti-trash"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>Hrithik</td>
                                                <td>
                                                    <img src="../assets/images/gallery/chair4.jpg" alt="mac_mouse"
                                                        width="80" />
                                                </td>
                                                <td>18</td>
                                                <td>02-7-2017</td>
                                                <td>
                                                    <span className="label label-danger font-weight-100">Failed</span>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-inverse p-r-10"
                                                    data-toggle="tooltip" title="" data-original-title="Edit"><i
                                                        className="ti-marker-alt"></i></a> <a href="javascript:void(0)"
                                                            className="text-inverse" title="" data-toggle="tooltip"
                                                            data-original-title="Delete"><i className="ti-trash"></i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
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

export default Dashboard;