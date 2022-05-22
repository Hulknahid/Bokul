import React from "react";
import { FcPaid, FcDisapprove } from "react-icons/fc";
import { GiTireIronCross } from "react-icons/gi";
// import Img from './assets/image/download.png'
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
const Sidebar = (props) => {
  return (
    <>
      <div className={`sidebar ${props.cls}`}>
        <div className="sidebar_items mt-3">
          <div className="first_icon">
            <div>
              <FcPaid size={30} />
            </div>
            <h5 className="mx-2">0 Itmes</h5>
          </div>
          <h5>Your Curt</h5>
          <div
            onClick={() => {
              props.setClick("");
            }}
          >
            <FcDisapprove size={30} />
          </div>
        </div>
        <hr />

        <div className="big_icon">
          <div>
            <h6 className="text-center bg-gray">
              PRODUCTS YOU ADDED TO THE CART
            </h6>
            <div className="main_div">
              <div className="row d-flex aling-items-center justify-content-space-between">
                <div className="col-3">
                  <div className="first_div">
                    <ul>
                      <li>
                        <MdOutlineKeyboardArrowUp />1
                        <MdOutlineKeyboardArrowDown />
                      </li>
                    </ul>
                    <img
                      src="https://zoracorp.s3.amazonaws.com/bianca/common/prdct/aveda/1406.png"
                      alt=""
                      className="img-fluid icon_img"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <p className="text-center mt-2" style={{fontSize: "12px"}}>
                    A GIFT OF RENEWAL FOR YOUR JOURNEY HAND RELIEF TRI $ 33.06/M
                  </p>
                </div>
                <div className="col-3">
                  <div className="last_div mt-3">
                    <span>$ 66.12</span>
                    <div className="text-danger mx-1">
                    <GiTireIronCross />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="col-3">
                  <div className="first_div">
                    <ul>
                      <li>
                        <MdOutlineKeyboardArrowUp /> 1
                        <MdOutlineKeyboardArrowDown />
                      </li>
                    </ul>
                    <img
                      src="https://zoracorp.s3.amazonaws.com/bianca/common/prdct/aveda/1406.png"
                      alt=""
                      className="img-fluid icon_img"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <p className="text-center mt-2" style={{fontSize: "12px"}}>
                    A GIFT OF RENEWAL FOR YOUR JOURNEY HAND RELIEF TRI $ 33.06/M
                  </p>
                </div>
                <div className="col-3">
                  <div className="last_div mt-3">
                    <span>$ 66.12</span>
                    <div className="text-danger mx-1">
                    <GiTireIronCross />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="col-3">
                  <div className="first_div">
                    <ul>
                      <li>
                        <MdOutlineKeyboardArrowUp />1
                        <MdOutlineKeyboardArrowDown />
                      </li>
                    </ul>
                    <img
                      src="https://zoracorp.s3.amazonaws.com/bianca/common/prdct/aveda/1406.png"
                      alt=""
                      className="img-fluid icon_img"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <p className="text-center mt-2" style={{fontSize: "12px"}}>
                    A GIFT OF RENEWAL FOR YOUR JOURNEY HAND RELIEF TRI $ 33.06/M
                  </p>
                </div>
                <div className="col-3">
                  <div className="last_div mt-3">
                    <span>$ 66.12</span>
                    <div className="text-danger mx-1">
                    <GiTireIronCross />
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
          {/* <div>
            <img
              src="/assets/images/download.png"
              alt="sidebar img"
              className="img-fluid"
            />
            <p>Your shopping bag is empty. Start shopping now.</p>
          </div> */}
        </div>
        <div className="main_btn">
          <button className="side_btn">Show Now</button>
          <button className="side_btn">App Services</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
