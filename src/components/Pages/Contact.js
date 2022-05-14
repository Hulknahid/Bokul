import React, { useState } from "react";
import { Label, FormGroup, Input } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    console.log(name, value);
  };
  const submiteHandler = (e) => {
    const { name, email, subject, message } = user;
    e.preventDefault();

    clearState();

    const data = {
      name: name,
      contactEmail: email,
      subject: subject,
      body: message,
      location: {
        id: 101,
      },
    };

    axios
      .post("inquiries", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const clearState = () => {
    setUser({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

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

              <Link to="/Reservation">
                <button className="contact_btn mb-3">ONLINE BOOK NOW</button>
              </Link>
            </div>

            <div className="col-md-6 col-12">
              <div className="contact_info">
                <h1 className="contact_title text-center mb-3">contact us</h1>
                <form className="contact_form mb-2">
                  <div className="row">
                    <div className="col-6 mb-3">
                      <FormGroup>
                        <Label for="name">NAME*</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={user.name}
                          onChange={changeHandler}
                          placeholder="Enter your Name"
                        />
                      </FormGroup>
                    </div>
                    <div className="col-6 mb-3">
                      <FormGroup>
                        <Label for="email">EMAIL*</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={user.email}
                          onChange={changeHandler}
                          placeholder="Enter your email"
                        />
                      </FormGroup>
                    </div>
                    <div className="col-12 mb-3">
                      <FormGroup>
                        <Label for="subject">SUBJECT*</Label>
                        <Input
                          type="text"
                          id="subject"
                          name="subject"
                          value={user.subject}
                          onChange={changeHandler}
                          placeholder="Enter subject"
                        />
                      </FormGroup>
                    </div>
                    <div className="col-12 mb-2">
                      <FormGroup>
                        <Label for="message">MESSAGE*</Label>
                        <Input
                          id="message"
                          name="message"
                          type="text"
                          value={user.message}
                          onChange={changeHandler}
                          placeholder="Enter message"
                        />
                      </FormGroup>
                    </div>
                    <div className="form_btn">
                      <button onClick={submiteHandler} className="contact-btn">
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </form>
                <div className="business_btn mb-4">
                  <button className="contact_btn">Business hours</button>
                </div>
                <div className="gift_card_btn">
                  <Link to='/GiftCard'>
                  <button className="contact_btn fs-6">buy gift cards</button>
                  </Link>
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
