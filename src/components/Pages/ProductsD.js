import React from "react";
import ProductsD2 from "./ProductsD2";

const Products = () => {
  return (
    <>
      <div className="container-fluid mt-3 details">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-6 col-12">
                <figure>
                  <img
                    src="https://zoracorp.s3.amazonaws.com/bianca/common/prdct/aveda/1406.png"
                    alt="Product_image"
                    className="img-fluid"
                  />
                </figure>
              </div>
              <div className="col-md-6 col-12 text-right">
                <div>
                  <h5 className="products_h5">
                    a gift of renewal for your journey hand relief tri
                  </h5>
                  <h6>$33.08</h6>
                  <p className="text-muted">AVEDA</p>
                </div>

                <ProductsD2 />

                <div className="row">
                  <h6 className="my-3">QUANTITY</h6>
                  <div className="col-6">
                    <div className="pasignation">
                      <button className="pasignation_left">-</button>
                      <div className="pasignation_input">
                        <input
                          type="text"
                          placeholder="1"
                          className="pasignation_input"
                        />
                      </div>
                      <button className="pasignation_right">+</button>
                    </div>
                  </div>
                  <div className="col-6">
                    <button className="pasignation_btn">add to cart</button>
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

export default Products;
