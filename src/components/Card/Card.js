import React, { useEffect, useState } from "react";
import "../Card/Card.css";
import Button from "../Button/Button";
import SimpleSlider from "./CardItem";
import axios from "axios";

const Card = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('inventory/recommendation?locId=101').then(res => {
      setProducts(res.data.newArrivals)
    }).catch(err => {
      console.log(err)
    })
  }, []);

  // console.log(products.newArrivals);

  return (
    <div className="card_section">
      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-10 mt-3">
            <div className="row d-flex align-items-center justify-content-space-between">
              <div className=" col-8">
                <div className="card_h1">
                  <h2>NEWEST ADDITIONS</h2>
                </div>
              </div>
              <div className=" col-4 ">
                <div className="card_button">
                  <Button buttonStyle="btn--primary" buttonSize="btn--medium">
                    SEE ALL
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <SimpleSlider products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
