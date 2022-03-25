import React from "react";
import "../MinCard/MinCard.css";
// import MinCardCom from "./MinCardCom";

const MinCard = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-10 col-md-4 mt-3 mt-md-0">
                <img
                  src="assets/images/min-card-01.jpg"
                  alt="min-card-img"
                  className="img-fluid min-card-img"
                />
              </div>
              <div className="col-10 col-md-4 mt-3 mt-md-0">
                <img
                  src="assets/images/min-card-02.jpg"
                  alt="min-card-img"
                  className="img-fluid min-card-img"
                />
              </div>
              <div className="col-10 col-md-4 mt-3 mt-md-0">
                <img
                  src="assets/images/min-card-03.jpg"
                  alt="min-card-img"
                  className="img-fluid min-card-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MinCard;
