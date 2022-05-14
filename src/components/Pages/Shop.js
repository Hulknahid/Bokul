import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
} from "reactstrap";

const Shop = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("inventory?locId=101&brndIds=1,3,2&page=0&pageCount=24")
      .then((res) => {
        // console.log(res.data);
        setCards(res.data);
      });
  }, []);

  return (
    <>
      <div className="shop_container">
        <div className="shop_banner">
          <h1 className="text-center">Products</h1>
          <p className="text-center">hair care</p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-10">
              <ul className="list-unstyled d-flex page-structure">
                <li>
                  <Link to="/" className="text-dark">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa fa-angle-right mx-1 text-dark"></i>
                  </Link>
                </li>
                <li>Products</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="row">
                <div className="col-md-3 col-12">
                  <p>Filter :</p>
                  <hr />
                  <p className="">Search Products :</p>
                  <div className="shop_input">
                    <p className="mb-0">Search...</p>
                    {/* <i className='fab fa-typo3' /> */}
                    <i className="fas fa-search" />
                  </div>
                  <hr />
                  <div className="brand_shop mb-2">
                    <p className="mb-0">Brands :</p>
                    <i className="fa fa-angle-down" />
                  </div>
                  <div className="shop_check mb-2">
                    <div className="form-check">
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        AVEDA
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        defaultChecked
                      />
                    </div>
                  </div>
                  <div className="shop_check mb-2">
                    <div className="form-check">
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        KEVIN MURPHY
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        defaultChecked
                      />
                    </div>
                  </div>
                  <div className="shop_check">
                    <div className="form-check">
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        LIVING PROOF
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        defaultChecked
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-9 col-12 ">
                  <div className="row d-flex align-items-start justify-content-between">
                    <div className="col-12">
                      <div className="row d-flex align-items-center">
                        <div className="col-md-6 col-6">
                          <p className="mb-0 text-muted ">{`showing ${
                            cards && cards.length
                          } products`}</p>
                        </div>
                        <div className="col-md-6 col-6">
                          <div className="shop_arrow ">
                            <div className="arrow">
                              <i className="fa fa-arrow-left" />
                              <i className="fa fa-arrow-right" />
                            </div>
                            <p className="mb-0 arrow_text">Shop On Avenda?</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {cards.map((e) => {
                      // console.log(e);
                      return (
                        <div className="col-md-4 col-10 mx-auto" >
                          <Link to={`/products/${e.id}`} className="text-dark">
                            <div className="shop_card my-3">
                              <CardGroup>
                                <Card className="card" style={{minHeight: "420px"}}>
                                  <CardImg
                                    alt="Card image cap"
                                    src={e.variant.imageUrls[0]}
                                    top
                                    width="100%"
                                    className=""
                                  />
                                  <CardBody>
                                    <CardTitle tag="h5">
                                      {e.variant.product.brand.name}
                                    </CardTitle>
                                    <CardText>
                                      {e.variant.product.name}
                                    </CardText>
                                    <CardText>{e.salePrice}</CardText>
                                  </CardBody>
                                </Card>
                              </CardGroup>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
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

export default Shop;
