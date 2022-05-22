import React from "react";
import Button from "../Button/Button";
import { Form, FormGroup, Label, Input } from "reactstrap";
const Registration = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 mx-auto">
            <h1 className="mt-5 text-center">CREATE ACCOUNT</h1>
            <Form className="form">
              <div className="row d-flex align-items-center justify-content-center">
                <div className=" col-6">
                  <FormGroup>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      type="text"
                      autoComplete="off"
                    />
                  </FormGroup>
                </div>
                <div className=" col-6">
                  <FormGroup>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      type="text"
                      autoComplete="off"
                    />
                  </FormGroup>
                </div>
              </div>

              <div className="row d-flex align-items-center justify-content-center">
                <div className=" col-6">
                  <FormGroup>
                    <Input
                      id="email"
                      name="email"
                      placeholder="Enter Email"
                      type="email"
                      autoComplete="off"
                    />
                  </FormGroup>
                </div>
                <div className=" col-6">
                  <FormGroup>
                    <Input
                      id="password"
                      name="password"
                      placeholder="Password"
                      type="password"
                      autoComplete="off"
                    />
                  </FormGroup>
                </div>
              </div>

              <div className="row d-flex align-items-center justify-content-center">
                <div className=" col-6">
                  <FormGroup>
                    <Input
                      id="Female"
                      name="Female"
                      placeholder="Female"
                      type="text"
                      autoComplete="off"
                    />
                  </FormGroup>
                </div>
                <div className=" col-6">
                  <FormGroup>
                    <Input
                      id="number"
                      name="number"
                      placeholder="Phone Number"
                      type="number"
                      autoComplete="off"
                    />
                  </FormGroup>
                </div>
              </div>

              <div className="row d-flex align-items-center justify-content-center">
                <div className=" col-6">
                  <FormGroup>
                    <Input
                      id="CL9S"
                      name="CL9S"
                      placeholder="CL9S"
                      type="text"
                      autoComplete="off"
                    />
                  </FormGroup>
                </div>
                <div className=" col-6">
                  <FormGroup>
                    <Input
                      id="date"
                      name="date"
                      placeholder="mm-dd"
                      type="text"
                      autoComplete="off"
                    />
                  </FormGroup>
                </div>
              </div>
              <div className="row d-flex align-items-center justify-content-center">
                <div className=" col-6">
                  <div style={{ height: "50px" }}>
                    <Button buttonStyle="btn--primary" buttonSize="btn--medium">
                      SUBMIT
                    </Button>
                  </div>
                </div>
                <div className=" col-6">
                  <div style={{ height: "50px" }}>
                    <span>
                      <div className="row">
                        <div className="col-md-6">Already have an account?</div>
                        <div className="col-md-6 ">
                          Please <strong>Login</strong>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
