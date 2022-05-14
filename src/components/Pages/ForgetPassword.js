import Button from "../Button/Button";
import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

const ForgetPassword = () => {
  return (
    <div className="reservation">
      <div className="container my-5 ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-8 col-12 mt-3">
                <Form className="form">
                  <h3>RESET PASSWORD</h3>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Enter your email"
                      type="email"
                      className="my-4 first_input"
                      autoComplete="off"
                    />
                  </FormGroup>

                  <div className="container-influid">
                    <div className="row">
                      <div className="col-6 col-md-4">
                        <Button
                          buttonStyle="btn--primary"
                          buttonSize="btn--medium"
                        >
                          RESET
                        </Button>
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
export default ForgetPassword;
