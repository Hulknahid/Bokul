import React from "react";
import "../../App.css";

const TheSalon = () => {
  return (
    <div>
      <figure className="salon_img">
        <img
          src="https://cl9salon.com/assets/images/salon-banner.jpg"
          alt="the-salon-img"
          className="salon_img_s"
        />
      </figure>
      <hr />
      <h1 className="text-center">SALON INFORMATION</h1>
      <hr />
      <div className="contaienr">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-4 col-10">
                <div className="salon_container mt-3">
                    <h5 className="text-center">MEET THE TEAM</h5>
                    <img src="	https://cl9salon.com/assets/images/meet-team.jpg" alt="" className="img-fluid my-3"/>
                    <p className="m-0">Meet the people that make CLOUD 9 SALON special. Read each stylist's bio, and find out what makes us all tick.</p>
                </div>
              </div>
              <div className="col-md-4 col-10">
                <div className="salon_container mt-2">
                    <h5 className="text-center">OUR SALON</h5>
                    <img src="	https://cl9salon.com/assets/images/contact-us.jpg" alt="" className="img-fluid my-3"/>
                    <p>See some pictures of our salon. We invite you to come take a look in-person</p>
                </div>
              </div>
              <div className="col-md-4 col-10">
                <div className="salon_container mt-2">
                    <h5 className="text-center">SERVICES</h5>
                    <img src="https://cl9salon.com/assets/images/service-page.jpg" alt="" className="img-fluid my-3"/>
                    <p>Find out more about our services and pricing. Book an appointment or set up a consultation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheSalon;
