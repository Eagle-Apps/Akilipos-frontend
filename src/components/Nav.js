import React, { useState, useEffect, useContext } from "react";
import logo from "../assets/images/akili1.png";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Icon } from '@iconify/react';
import { Store } from "../context/store";
import { NavDropdown } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NavBar(props) {
  const store = useContext(Store);
  const [mainUrl] = store.product;
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState('password');
  const history = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const CustomIcon = () => (
    <svg id='menuIcon' ><rect width="39.52" height="0.84" fill="inherit"></rect><rect y="4.96" width="39.52" height="0.84" fill="inherir"></rect></svg>
  );
  const CustomCloseButton = () => {
    return (
      <Button variant="outline-secondary">
        Close
      </Button>
    );
  };

  useEffect(() => {
    userCheck();
  }, [location, email]);

  const userCheck = () => {
    if (localStorage.getItem("akili") === null) {
      setEmail("");
    } else {
      setEmail(localStorage.getItem("akili"));
    }
  };

  const handleLogout = () => {
    const url = mainUrl + "/logout";
    fetch(url, {
      headers: {
        "content-type": "application/json"
      },
      method: "POST"
    })
      .then(() => {
        localStorage.removeItem("akili");
      })
      .then(() => {
        history('/');
      })
      .then(() => {
        userCheck();
      });
  };

  return (
    <>
      <div className="showBar">
        <Navbar
          expand="lg"
          id="nav"
          className="flex-column align-items-start position-fixed"
        >
          <Container fluid className="flex-column">
            <Navbar.Brand>
              <Link to="/" className="logo">
                <img id="logo" src={logo} alt="akili-logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="flex-column mt-0"
                style={{ width: '100%' }}
                navbarScroll
              >
                <Nav.Item id={props.class1}>
                  <Link to={`/dashboard/${id}`} style={{ display: "flex", color: props.color1, alignItems: "center" }}>
                    <Icon icon="material-symbols:roofing-outline" width="24px" height="24px" className="me-3" />
                    Dashboard
                  </Link>
                </Nav.Item>

                {/* <div id={props.class2} style={{ display: "flex", color: props.color2 }}> */}
                <Link id={props.class2} style={{ display: "flex", color: props.color2 }}>
                  <Icon icon="emojione-monotone:money-bag" width="24px" height="24px" className="me-3" style={{ display: " flex", justifySelf: "center", alignSelf: "center" }} />
                  <NavDropdown title="My Business" id="businessNav" >
                    <NavDropdown.Item>
                      <Link to={`/employees/${id}`} >
                        <Icon icon="bi:shop" width="24px" height="24px" className="me-3" />
                        Employees
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to={`/inventory/${id}`}>
                        <Icon icon="fluent-mdl2:product-variant" width="24px" height="24px" className="me-3" />
                        Inventory
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to={`/suppliers/${id}`} style={{ textAlign: "center" }}>
                        <Icon icon="fluent:people-community-add-20-filled" width="24px" height="24px" className="me-3" />
                        Suppliers
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to={`/shopping-list/${id}`} style={{ textAlign: "center" }}>
                        <Icon icon="icon-park:list" width="24" className="me-3" />
                        Shop List
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to={`/in-demand/${id}`} style={{ textAlign: "center" }}>
                        <Icon icon="ep:list" width="24" className="me-3" />
                        Items On Demand
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to={`/credit/${id}`} style={{ textAlign: "center" }}>
                        <Icon icon="fa:book" width="24" height="24" className="me-3" />
                        Credit Book
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Link>

                {/* </div> */}

                <Nav.Item id={props.class3}>
                  <Link to={`/customers-view/${id}`} style={{ display: "flex", color: props.color3, alignItems: "center" }}>
                    <Icon icon="ph:users-four-light" width="24px" height="24px" className="me-3" />
                    Customers
                  </Link>
                </Nav.Item>

                <Nav.Item id={props.class4}>
                  <Link to={`/sales/${id}`} style={{ display: "flex", color: props.color4, alignItems: "center" }}>
                    <Icon icon="material-symbols:order-approve-outline-sharp" width="24px" height="24px" className="me-3" />
                    Sales
                  </Link>
                </Nav.Item>

                <Nav.Item id={props.class444}>
                  <Link to={`/orders/${id}`} style={{ display: "flex", color: props.color444, alignItems: "center" }}>
                    <Icon icon="fe:list-order" width="24px" height="24px" className="me-3" />
                    Orders
                  </Link>
                </Nav.Item>

                <Nav.Item id={props.class5}>
                  <Link to={`/payments/${id}`} style={{ display: "flex", color: props.color5, alignItems: "center" }}>
                    <Icon icon="mdi:credit-card-check-outline" width="24px" height="24px" className="me-3" />
                    Payments
                  </Link>
                </Nav.Item>

                <Nav.Item id={props.class44}>
                  <Link to={`/reports/${id}`} style={{ display: "flex", color: props.color44, alignItems: "center" }}>
                    <Icon icon="ic:outline-assessment" width="24px" height="24px" className="me-3" />
                    Analysis
                  </Link>
                </Nav.Item>

                <Nav.Item id={props.class6}>
                  <Link to={`/settings/${id}`} style={{ display: "flex", color: props.color6, alignItems: "center" }}>
                    <Icon icon="material-symbols:settings-outline" width="24px" height="24px" className="me-3" />
                    Settings
                  </Link>
                </Nav.Item>

                <Nav.Item id={props.class7}>
                  <Link to={`/help/${id}`} style={{ display: "flex", color: props.color7, alignItems: "center" }}>
                    <Icon icon="ic:round-help-outline" width="24px" height="24px" className="me-3" />
                    Help Center
                  </Link>
                </Nav.Item>

                <Nav.Item id={props.class8}>
                  {email ? (
                    <Link to='#' style={{ display: "flex", color: props.color8, alignItems: "center" }} onClick={handleLogout}>
                      <Icon icon="ri:logout-circle-line" width="24px" height="24px" className="me-3" />
                      Log Out
                    </Link>
                  ) : (
                    <Link to="#" style={{ display: "flex", color: props.color8, alignItems: "center" }}>
                      <Icon icon="ant-design:login-outlined" width="24px" height="24px" className="me-3" />
                      Log Out
                    </Link>
                  )}
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className="hideBar">
        <Navbar
          expand="lg"
          id="nav"
        >
          <Container fluid className="flex navBorder">
            <Navbar.Brand>
              <Link to="/" className="logo">
                <img id="logo" src={logo} alt="akili-logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="flex-column mt-0"
                style={{ width: '100%' }}
                navbarScroll
              >
                <Nav.Item id={props.class1}>
                  <Link to={`/dashboard/${id}`} style={{ display: "flex", color: props.color1, alignItems: "center" }}>
                    <Icon icon="material-symbols:roofing-outline" width="24px" height="24px" className="me-3" />
                    Dashboard
                  </Link>
                </Nav.Item>

                {/* <div id={props.class2} style={{ display: "flex", color: props.color2 }}> */}
                <Link id={props.class2} style={{ display: "flex", color: props.color2 }}>
                  <Icon icon="emojione-monotone:money-bag" width="24px" height="24px" className="me-3" style={{ display: " flex", justifySelf: "center", alignSelf: "center" }} />
                  <NavDropdown title="My Business" id="businessNav" >
                    <NavDropdown.Item>
                      <Link to={`/employees/${id}`}>
                        <Icon icon="bi:shop" width="24px" height="24px" className="me-3" />
                        Employees
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to={`/inventory/${id}`}>
                        <Icon icon="fluent-mdl2:product-variant" width="24px" height="24px" className="me-3" />
                        Inventory
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to={`/suppliers/${id}`} style={{ textAlign: "center" }}>
                        <Icon icon="fluent:people-community-add-20-filled" width="24px" height="24px" className="me-3" />
                        Suppliers
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to={`/shopping-list/${id}`} style={{ textAlign: "center" }}>
                        <Icon icon="icon-park:list" width="24" className="me-3" />
                        Shop List
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to={`/in-demand/${id}`} style={{ textAlign: "center" }}>
                        <Icon icon="ep:list" width="24" className="me-3" />
                        Items On Demand
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to={`/credit/${id}`} style={{ textAlign: "center" }}>
                        <Icon icon="fa:book" width="24" height="24" className="me-3" />
                        Credit Book
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Link>

                {/* </div> */}

                <Nav.Item id={props.class3}>
                  <Link to={`/customers-view/${id}`} style={{ display: "flex", color: props.color3, alignItems: "center" }}>
                    <Icon icon="ph:users-four-light" width="24px" height="24px" className="me-3" />
                    Customers
                  </Link>
                </Nav.Item>

                <Nav.Item id={props.class4}>
                  <Link to={`/sales/${id}`} style={{ display: "flex", color: props.color4, alignItems: "center" }}>
                    <Icon icon="material-symbols:order-approve-outline-sharp" width="24px" height="24px" className="me-3" />
                    Sales
                  </Link>
                </Nav.Item>

                <Nav.Item id={props.class44}>
                  <Link to={`/orders/${id}`} style={{ display: "flex", color: props.color44, alignItems: "center" }}>
                    <Icon icon="fe:list-order" width="24px" height="24px" className="me-3" />
                    Orders
                  </Link>
                </Nav.Item>

                <Nav.Item id={props.class5}>
                  <Link to={`/payments/${id}`} style={{ display: "flex", color: props.color5, alignItems: "center" }}>
                    <Icon icon="mdi:credit-card-check-outline" width="24px" height="24px" className="me-3" />
                    Payments
                  </Link>
                </Nav.Item>

                <Nav.Item id={props.class44}>
                  <Link to={`/reports/${id}`} style={{ display: "flex", color: props.color44, alignItems: "center" }}>
                    <Icon icon="ic:outline-assessment" width="24px" height="24px" className="me-3" />
                    Analysis
                  </Link>
                </Nav.Item>

                <Nav.Item id={props.class6}>
                  <Link to={`/settings/${id}`} style={{ display: "flex", color: props.color6, alignItems: "center" }}>
                    <Icon icon="material-symbols:settings-outline" width="24px" height="24px" className="me-3" />
                    Settings
                  </Link>
                </Nav.Item>

                <Nav.Item id={props.class7}>
                  <Link to={`/help/${id}`} style={{ display: "flex", color: props.color7, alignItems: "center" }}>
                    <Icon icon="ic:round-help-outline" width="24px" height="24px" className="me-3" />
                    Help Center
                  </Link>
                </Nav.Item>

                <Nav.Item id={props.class8}>
                  {email ? (
                    <Link to='#' style={{ display: "flex", color: props.color8, alignItems: "center" }} onClick={handleLogout}>
                      <Icon icon="ri:logout-circle-line" width="24px" height="24px" className="me-3" />
                      Log Out
                    </Link>
                  ) : (
                    <Link to="#" style={{ display: "flex", color: props.color8, alignItems: "center" }}>
                      <Icon icon="ant-design:login-outlined" width="24px" height="24px" className="me-3" />
                      Log Out
                    </Link>
                  )}
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

    </>
  );
}

export default NavBar;
