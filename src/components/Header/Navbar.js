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
                <NavLink href="/Salon/">The Salon</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Shop/">Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Reservation/">Reservation</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/GiftCard/">Gift Card</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contact/">Contact Us </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
