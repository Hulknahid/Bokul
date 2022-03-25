import React from "react";
import Button from "../Button/Button";
import { Form, FormGroup, Label, Input } from "reactstrap";

const Reservation = () => {
  return (
  <div className="reservation">
          <div className="container my-5 ">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-8 col-12 mt-3">
              <Form className="form">
                  <h1>LOGIN HERE</h1>
                <FormGroup>
                  <Input
                // <i class="fa fa-user icon">
                    id="exampleEmail"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    className="my-4 first_input"
                    autoComplete="off"
                  />


                </FormGroup>
                <FormGroup>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                    className="secound_input"
                    autoComplete="off"
                  />
                </FormGroup>
                <div className="container-influid">
                  <div className="row">
                      <div className="col-6 col-md-4">
                    <Button buttonStyle="btn--primary" buttonSize="btn--medium">
                    SEE ALL
                  </Button>
                      </div>
                      <div className="col-6 col-md-8 text-end">
                      <p className="m-0 l_title">Lost your password?</p>
                      </div>
                      <div className="col-12 text-center mt-3">
                          <p className="m-0">Don't have an account. Register?</p>
                      </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
export default Reservation;
