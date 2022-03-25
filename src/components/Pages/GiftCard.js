import React from "react";
import Button from '../Button/Button'

const GiftCard = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-8 col-10">
              <figure className="mt-5 text-center">
                <img
                  src="https://cl9salon.com/assets/images/gifts.jpg"
                  alt="gift-card"
                  className="img-fluid mt-3 mt-md-5"
                />
              </figure>
              <div className="text-center py-3 py-md-5">
              <Button buttonStyle='btn--outline'>GIFT CARD</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
