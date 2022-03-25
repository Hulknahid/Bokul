import React from "react";
import { Link } from "react-router-dom";
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
                    <div class="form-check">
                      <label class="form-check-label" for="flexCheckChecked">
                        AVEDA
                      </label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      />
                    </div>
                  </div>
                  <div className="shop_check mb-2">
                    <div class="form-check">
                      <label class="form-check-label" for="flexCheckChecked">
                        KEVIN MURPHY
                      </label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      />
                    </div>
                  </div>
                  <div className="shop_check">
                    <div class="form-check">
                      <label class="form-check-label" for="flexCheckChecked">
                        LIVING PROOF
                      </label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-9 col-12 ">
                  <div className="row d-flex align-items-start justify-content-between">
                    <div className="col-12">
                      <div className="row d-flex align-items-center">
                        <div className="col-md-6 col-6">
                          <p className="mb-0 text-muted ">showing24products</p>
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
                    <div className="col-md-4 col-10 mx-auto">
                      <div className="shop_card my-3">
                        <CardGroup>
                          <Card className="card">
                            <CardImg
                              alt="Card image cap"
                              src="https://zoracorp.s3.amazonaws.com/bianca/common/prdct/aveda/1406.png"
                              top
                              width="100%"
                              className=''
                            />
                            <CardBody>
                              <CardTitle tag="h5">AVEDA</CardTitle>
                              <CardText>
                                A GIFT OF RENEWAL FOR YOUR JOURNEY HAND RELIEF
                                TRI
                              </CardText>
                              <CardText>$33.06</CardText>
                            </CardBody>
                          </Card>
                        </CardGroup>
                      </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                      <div className="shop_card my-3">
                        <CardGroup>
                          <Card>
                            <CardImg
                              alt="Card image cap"
                              src="https://zoracorp.s3.amazonaws.com/bianca/common/prdct/aveda/324.png"
                              top
                              width="100%"
                              className=''
                            />
                            <CardBody>
                              <CardTitle tag="h5">AVEDA</CardTitle>
                              <CardText>
                                A GIFT OF RENEWAL FOR YOUR JOURNEY HAND RELIEF
                                TRI
                              </CardText>
                              <CardText>$33.06</CardText>
                            </CardBody>
                          </Card>
                        </CardGroup>
                      </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                      <div className="shop_card my-3">
                        <CardGroup>
                          <Card>
                            <CardImg
                              alt="Card image cap"
                              src="https://zoracorp.s3.amazonaws.com/bianca/common/prdct/aveda/1407.png"
                              top
                              width="100%"
                              className=''
                            />
                            <CardBody>
                              <CardTitle tag="h5">AVEDA</CardTitle>
                              <CardText>
                                A GIFT OF RENEWAL FOR YOUR JOURNEY HAND RELIEF
                                TRI
                              </CardText>
                              <CardText>$33.06</CardText>
                            </CardBody>
                          </Card>
                        </CardGroup>
                      </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                      <div className="shop_card my-3">
                        <CardGroup>
                          <Card>
                            <CardImg
                              alt="Card image cap"
                              src="https://zoracorp.s3.amazonaws.com/bianca/common/prdct/aveda/1408.png"
                              top
                              width="100%"
                              className=''
                            />
                            <CardBody>
                              <CardTitle tag="h5">AVEDA</CardTitle>
                              <CardText>
                                A GIFT OF RENEWAL FOR YOUR JOURNEY HAND RELIEF
                                TRI
                              </CardText>
                              <CardText>$33.06</CardText>
                            </CardBody>
                          </Card>
                        </CardGroup>
                      </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                      <div className="shop_card my-3">
                        <CardGroup>
                          <Card>
                            <CardImg
                              alt="Card image cap"
                              src="https://zoracorp.s3.amazonaws.com/bianca/common/prdct/kevin-murphy/1022.png"
                              top
                              width="100%"
                              className=''
                            />
                            <CardBody>
                              <CardTitle tag="h5">AVEDA</CardTitle>
                              <CardText>
                                A GIFT OF RENEWAL FOR YOUR JOURNEY HAND RELIEF
                                TRI
                              </CardText>
                              <CardText>$33.06</CardText>
                            </CardBody>
                          </Card>
                        </CardGroup>
                      </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                      <div className="shop_card my-3">
                        <CardGroup>
                          <Card>
                            <CardImg
                              alt="Card image cap"
                              src="https://zoracorp.s3.amazonaws.com/bianca/common/prdct/aveda/1406.png"
                              top
                              width="100%"
                              className=''
                            />
                            <CardBody>
                              <CardTitle tag="h5">AVEDA</CardTitle>
                              <CardText>
                                A GIFT OF RENEWAL FOR YOUR JOURNEY HAND RELIEF
                                TRI
                              </CardText>
                              <CardText>$33.06</CardText>
                            </CardBody>
                          </Card>
                        </CardGroup>
                      </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                      <div className="shop_card my-3">
                        <CardGroup>
                          <Card>
                            <CardImg
                              alt="Card image cap"
                              src="https://zoracorp.s3.amazonaws.com/bianca/common/prdct/aveda/1406.png"
                              top
                              width="100%"
                              className=''
                            />
                            <CardBody>
                              <CardTitle tag="h5">AVEDA</CardTitle>
                              <CardText>
                                A GIFT OF RENEWAL FOR YOUR JOURNEY HAND RELIEF
                                TRI
                              </CardText>
                              <CardText>$33.06</CardText>
                            </CardBody>
                          </Card>
                        </CardGroup>
                      </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                      <div className="shop_card my-3">
                        <CardGroup>
                          <Card>
                            <CardImg
                              alt="Card image cap"
                              src="https://zoracorp.s3.amazonaws.com/bianca/common/prdct/aveda/1406.png"
                              top
                              width="100%"
                              className=''
                            />
                            <CardBody>
                              <CardTitle tag="h5">AVEDA</CardTitle>
                              <CardText>
                                A GIFT OF RENEWAL FOR YOUR JOURNEY HAND RELIEF
                                TRI
                              </CardText>
                              <CardText>$33.06</CardText>
                            </CardBody>
                          </Card>
                        </CardGroup>
                      </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                      <div className="shop_card my-3">
                        <CardGroup>
                          <Card>
                            <CardImg
                              alt="Card image cap"
                              src="https://zoracorp.s3.amazonaws.com/bianca/common/prdct/aveda/1406.png"
                              top
                              width="100%"
                              className=''
                            />
                            <CardBody>
                              <CardTitle tag="h5">AVEDA</CardTitle>
                              <CardText>
                                A GIFT OF RENEWAL FOR YOUR JOURNEY HAND RELIEF
                                TRI
                              </CardText>
                              <CardText>$33.06</CardText>
                            </CardBody>
                          </Card>
                        </CardGroup>
                      </div>
                    </div>
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
