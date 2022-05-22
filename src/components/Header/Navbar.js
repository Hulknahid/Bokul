import React, { useState } from "react";
import "../Header/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from './assets/images/logo.png';

// import classnames from "classnames";
import { FcBusiness } from "react-icons/fc";
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
import Sidebar from "../Pages/Sidebar";

const Header = (props) => {
  console.log(props);
  const [show, setShow] = useState(false);
  const [click, setClick] = useState("active")
  // const clickHandle = () => setShow(!show);
  return (
    <>
    <Sidebar cls={click} setClick={()=> setClick("")}/>
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
                <Link className="nav-link" to="/salon/">The Salon</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link"  to="/shop/">Shop</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/reservation/">Reservation</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/giftCard/">Gift Card</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/contact/">Contact Us</Link>
              </NavItem>
              <NavItem>
                <button onClick={()=>{setClick('active')}}> <FcBusiness/></button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
    </>
  );
};

export default Header;
