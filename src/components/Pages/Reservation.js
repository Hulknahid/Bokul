import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
// import axios from "axios";
// import Buffer from "buffer";
const Reservation = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  // const [users, setUsers] = useState([])

  const chanchHandler = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // console.log(value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    let { email, password } = user;

    // const hash = Buffer.from(`${email}#user:${password}`).toString('base64');
    // console.log(hash);

    // axios.get('users/token').then(res =>{

    // })


  }
  return (
    <div className="reservation">
      <div className="container my-5 ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-8 col-12 mt-3">
                <Form className="form" onSubmit={submitHandler}>
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
                      // value={user.email}
                      onChange={chanchHandler}
                    />


                  </FormGroup>
                  <FormGroup>
                    <Input
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      type="password"
                      className="secound_input"
                      autoComplete="off"
                      // value={user.password}
                      onChange={chanchHandler}
                    />
                  </FormGroup>
                  <div className="container-influid">
                    <div className="row">
                      <div className="col-6 col-md-4">
                        <button className="reservation_btn">LOGIN</button>
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
