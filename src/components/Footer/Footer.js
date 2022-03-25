import React from "react";
import { Link } from "react-router-dom";
import '../../components/Footer/Footer.css'

const Footer = () => {
  return (
    <div className="container mt-5 footer">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-6 col-md-3">
          <div className="footer_info_1">
          <Link to="/">
                <h5 className='footer_h5'>QUICK LINKS</h5>
              </Link>
              <p className='footer_p'>Salon Services</p>
              <Link to="/">
                <p className='footer_p'>Gift Cards</p>
              </Link>
              <Link to="/">
                <p className='footer_p'>Contact Us</p>
              </Link>
          </div>
            </div>
            <div className="col-6 col-md-3" >
          <div className="footer_info_2">
          <Link to="/">
                <h5 className='footer_h5'>IMPORTANT LINKS</h5>
              </Link>
              <p className='footer_p'>Privacy</p>
              <p className='footer_p'>Customer</p>
              <Link to="/">
                <p className='footer_p'>Appointment Cancellation Policy</p>
              </Link>
          </div>
            </div>
            <div className="col-6 col-md-3">
          <div className="footer_info_3">
          <Link to="/">
                <h5 className='footer_h5'>FOLLOW US</h5>
              </Link>
              <p className='footer_p'>Facebook</p>
              <Link to="/">
                <p className='footer_p'>Instragram</p>
              </Link>
              <Link to="/">
                <p className='footer_p'>Yelp</p>
              </Link>
          </div>
            </div>
            <div className="col-6 col-md-3">
             <div className="footer_info_4">
             <div className="footer_img">
                <figure className="first_img">
                  <img  src="https://cl9salon.com/assets/images/appstore.png"  alt="Footer_img_1" className="img-fluid"/>
                </figure>
                <figure className="secound_img">
                  <img 
                  src="https://cl9salon.com/assets/images/googleplay.png"
                  alt="Footer_img_2" className="img-fluid"/>
                </figure>
              </div>
              <Link to="/">
                <h5 className='footer_h5_i'>© 2022 CLOUD 9 SALON POWERED BY</h5>
              </Link>
              <p className='footer_p text-primary'>SILVERBIRD INC</p>
              <Link to="/">
                <p className='footer_p'>ALL RIGHTS RESERVED</p>
              </Link>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
