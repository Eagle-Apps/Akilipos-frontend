import React, { useState, useEffect, useContext } from "react";
import logo from "../assets/images/akili.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Icon } from '@iconify/react';
import { Store } from "../context/store";
import { NavDropdown } from "react-bootstrap";

function NavBar(props) {
  let store = useContext(Store);
  let [mainUrl] = store.endUrl;
  let [user, setUser] = store.userinfo;
  let [email, setEmail] = useState("");
  let location = useLocation()
  let [password, setPassword] = useState("");
  let history = useNavigate();
  const [show, setShow] = useState(false);
  let [none, setNone] = useState("none");
  let [block, setBlock] = useState("block");
  const [showPassword, setShowPassword] = useState('password');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const loginStatus = (e) => setBlock(e);
  const logoutStatus = (e) => setNone(e);
  let routePath = useLocation();

  useEffect(() => {
    userCheck();
  }, [routePath, email]);


  let userCheck = () => {
    if (localStorage.getItem("afriqId") === null) {
      loginStatus("block");
      logoutStatus("none");
    } else {
      loginStatus("none");
      logoutStatus("block");
    }

  };

  let loginUser = () => {
    let data = { email, password }
    let url = mainUrl + "/login";
    fetch(url, {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        setUser(result)
        localStorage.setItem("afriqId", result.user._id)
      })
    history('/')
    setEmail("");
    setPassword("");
    handleClose();
  };


  let handleLogout = () => {
    let url = mainUrl + "/logout";
    fetch(url, {
      headers: {
        "content-type": "application/json"
      },
      method: "POST"
    })
      .then(localStorage.removeItem("afriqId"))
      .then(history('/'))
    userCheck();
  };

  let handleShowPassword = () => {
    showPassword === 'password' ? setShowPassword('text') : setShowPassword('password')
  };

  return <>
    <Navbar collapseOnSelect expand="lg" id="nav">

      <div className="p-2" style={{ display: "flex", flexDirection: "column" }}>
        <Navbar.Brand >
          <Link to="/" className="logo">
            <img id="logo" src={logo} alt="akili-logo" />
            <p style={{ color: "black" }}>AKILI POS</p>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="justify-content-end flex-grow-1"
            id="hamburger"
            style={{ display: "flex", flexDirection: "column" }}
            navbarScroll
          >
            <div className="topNav">
              <Nav.Item id={props.class1} >
                <Link to='/dashboard' style={{ display: "flex", color: props.color1, alignItems: "center" }}>
                  <Icon icon="material-symbols:roofing-outline" width="24px" height="24px" className="me-3" />
                  Dashboard
                </Link>
              </Nav.Item>

              <Nav.Link id={props.class2} style={{ display: "flex", color: props.color2 }}>
                <Icon icon="emojione-monotone:money-bag" width="24px" />
                <NavDropdown title="My Business" id={props.class2}>
                  <NavDropdown.Item>
                    <Link to='/shop'>
                      <Icon icon="bi:shop" width="24px" height="24px" className="me-3" />
                      My Shop
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='/products'>
                      <Icon icon="fluent-mdl2:product-variant" width="24px" height="24px" className="me-3" />
                      My Products
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='/suppliers' style={{ textAlign: "center" }}>
                      <Icon icon="fluent:people-community-add-20-filled" width="24px" height="24px" className="me-3" />
                      My Suppliers
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Link>

              <Nav.Item id={props.class3}>
                <Link to='/customers' style={{ display: "flex", color: props.color3, alignItems: "center" }}>
                  <Icon icon="ph:users-four-light" width="24px" height="24px" className="me-3" />
                  My Customers
                </Link>
              </Nav.Item>

              <Nav.Item id={props.class4}>
                <Link to='/orders' style={{ display: "flex", color: props.color4, alignItems: "center" }}>
                  <Icon icon="material-symbols:order-approve-outline-sharp" width="24px" height="24px" className="me-3" />
                  Orders
                </Link>
              </Nav.Item>

              <Nav.Item id={props.class5}>
                <Link to='/payment' style={{ display: "flex", color: props.color5, alignItems: "center" }}>
                  <Icon icon="mdi:credit-card-check-outline" width="24px" height="24px" className="me-3" />
                  Payments
                </Link>
              </Nav.Item>

              <Nav.Item id={props.class4}>
                <Link to='/report' style={{ display: "flex", color: props.color4, alignItems: "center" }}>
                  <Icon icon="ic:outline-assessment" width="24px" height="24px" className="me-3" />
                  Reports & Analysis
                </Link>
              </Nav.Item>
            </div>


            <div className="bottomNav">
              <Nav.Item id={props.class6}>
                <Link to='/settings' style={{ display: "flex", color: props.color6, alignItems: "center" }}>
                  <Icon icon="material-symbols:settings-outline" width="24px" height="24px" className="me-3" />
                  Settings
                </Link>
              </Nav.Item>
              <Nav.Item id={props.class7}>
                <Link to='/help' style={{ display: "flex", color: props.color7, alignItems: "center" }}>
                  <Icon icon="ic:round-help-outline" width="24px" height="24px" className="me-3" />
                  Help Center
                </Link>
              </Nav.Item>
              <Nav.Item id={props.class8}>
                <Link to='#' style={{ display: "flex", color: props.color8, alignItems: "center" }}>
                  <Icon icon="ri:logout-circle-line" width="24px" height="24px" className="me-3" />
                  Log Out
                </Link>
              </Nav.Item>
            </div>




          </Nav>
        </Navbar.Collapse>
      </div>

    </Navbar>


  </>
}

export default NavBar;
