import Button from "../Button/Button";
import React from "react";
import { Label, FormGroup, Input } from "reactstrap";
const Contact = () => {
  return (
    <div className="container my-md-5">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row d-flex align-items-start justify-content-space-between">
            <div className="col-md-6 col-12">
              <figure className="google_map_img">
                <img
                  src="/assets/images/google-map.png"
                  alt=""
                  className="img-fluid"
                />
              </figure>
              <button className="contact_btn mb-3">ONLINE BOOK NOW</button>
            </div>

            <div className="col-md-6 col-12">
              <div className="contact_info">
                <h1 className="contact_title text-center mb-3">contact us</h1>
                <form className="contact_form mb-2">
                  <div className="row">
                    <div className="col-6 mb-3">
                      <FormGroup>
                        <Label for="exampleEmail">NAME*</Label>
                        <Input
                          id="exampleEmail"
                          name="text"
                          type="email"
                        />
                      </FormGroup>
                    </div>
                    <div className="col-6 mb-3">
                      <FormGroup>
                        <Label for="exampleEmail">EMAIL*</Label>
                        <Input
                          id="exampleEmail"
                          name="email"
                          type="email"
                        />
                      </FormGroup>
                    </div>
                    <div className="col-12 mb-3">
                      <FormGroup>
                        <Label for="exampleEmail">SUBJECT*</Label>
                        <Input type="text" id="subject" name="subject"/>
                      </FormGroup>
                    </div>
                    <div className="col-12 mb-2">
                      <FormGroup>
                        <Label for="exampleText">MESSAGE*</Label>
                        <Input id="exampleText" name="text" type="text" className="message"/>
                      </FormGroup>
                    </div>
                    <div className="form_btn">
                    <Button buttonStyle='btn--primary' buttonSize='btn--medium'>SUBMIT</Button>
                    </div>
                  </div>
                </form>
                <div className="business_btn mb-4">
                <button className="contact_btn">Business hours</button>
                </div>
                <div className="gift_card_btn">
                <button className="contact_btn fs-6">buy gift cards</button>

                </div>
              </div>
            </div>
            <div className="col-6 mt-3 bottom_info">
              <h6>VISIT US IN PERSON</h6>
              <p className="bottom_info_p">13380 Clarksville Pike,</p>
              <p className="bottom_info_p">Suite F | Highland, MD 20777</p>
            </div>
            <div className="col-6 mt-3 bottom_info">
              <h6>SHOP THE CLOUD 9 SALON 7 DAYS/WEEK ONLINE</h6>
              <p className="bottom_info_p">GIVE US A CALL</p>
              <p className="bottom_info_p">(301) 854-9511</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
