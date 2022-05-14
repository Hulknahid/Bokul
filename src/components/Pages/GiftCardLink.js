import React from "react";

const GiftCardLink = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row pt-5 text-center">
          <div className="col-12 mx-auto">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-6">
                <img
                  src="/assets/images/logo.png"
                  alt=""
                  className="logo-img"
                />
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-md-6 col-10">
                    <span className="pt-4">Cloud 9 Website</span>
                  </div>

                  <div className="col-md-6 col-10">
                    <span>Check Balance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftCardLink;
