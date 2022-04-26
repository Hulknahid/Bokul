import React, { useState } from "react";
import "../Header/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from './assets/images/logo.png';

// import classnames from "classnames";

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";


const Header = () => {
  const [show, setShow] = useState(false);
  // const clickHandle = () => setShow(!show);
  return (
    <div>
      <div>
        <Navbar color="light" expand="md" light className="fixed-top">
          <NavbarBrand href="/">
            <img src="/assets/images/logo.png" alt="" className="logo-img" />
          </NavbarBrand>
          {/*<NavbarToggler onClick={() => setShow(!show)} />*/}
          <NavbarToggler
            onClick={() => {
              setShow(!show);
            }}
          />
          <Collapse
            navbar
            className={show == true ? "show" : ""}
            id="navbar_collapse"
          >
            {/*<Collapse navbar className={classnames({ show: show === true })}>*/}
            <Nav className="mx-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/Salon/">The Salon</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link"  to="/Shop/">Shop</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/Reservation/">Reservation</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/GiftCard/">Gift Card</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/Contact/">Contact Us </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
