import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Card/CardItem.css";

const SimpleSlider = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear"
  // };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="card_container">
        <Slider {...settings}>
          <div className="mt-5">
            <figure className="card_img">
              <img
                src="assets/images/card-01.png"
                alt=""
                className="card_images"
              />
            </figure>
            <div className="card_info">
          
            <h3>MAXI.WASH - 250ML</h3>
              <h4>kevin murphy</h4>
              <p>$ 31.70</p>
            </div>
          </div>

          <div className="mt-5">
            <figure className="card_img">
              <img
                src="assets/images/card-02.png"
                alt=""
                className="card_images"
              />
            </figure>
            <div className="card_info">
              <h3>MAXI.WASH - 250ML</h3>
              <h4>martin</h4>
              <p>$ 29.70</p>
            </div>
          </div>

          <div className="mt-5">
            <figure className="card_img">
              <img
                src="assets/images/card-03.png"
                alt=""
                className="card_images"
              />
            </figure>
            <div className="card_info">
              <h3>MAXI.WASH - 250ML</h3>
              <h4>kevin murphy</h4>
              <p>$ 31.70</p>
            </div>
          </div>

          <div className="mt-5">
            <figure className="card_img">
              <img
                src="assets/images/card-04.png"
                alt=""
                className="card_images"
              />
            </figure>
            <div className="card_info">
              <h3>MAXI.WASH - 250ML</h3>
              <h4>kevin murphy</h4>
              <p>$ 31.70</p>
            </div>
          </div>

          <div className="mt-5">
            <figure className="card_img">
              <img
                src="assets/images/card-05.png"
                alt=""
                className="card_images"
              />
            </figure>
            <div className="card_info">
              <h3>MAXI.WASH - 250ML</h3>
              <h4>kevin murphy</h4>
              <p>$ 31.70</p>
            </div>
          </div>

          <div className="mt-5">
            <figure className="card_img">
              <img
                src="assets/images/card-06.png"
                alt=""
                className="card_images"
              />
            </figure>
            <div className="card_info">
              <h3>MAXI.WASH - 250ML</h3>
              <h4>kevin murphy</h4>
              <p>$ 31.70</p>
            </div>
          </div>

          <div className="mt-5">
            <figure className="card_img">
              <img
                src="assets/images/card-07.png"
                alt=""
                className="card_images"
              />
            </figure>
            <div className="card_info">
              <h3>MAXI.WASH - 250ML</h3>
              <h4>kevin murphy</h4>
              <p>$ 31.70</p>
            </div>
          </div>

          <div className="mt-5">
            <figure className="card_img">
              <img
                src="assets/images/card-08.png"
                alt=""
                className="card_images"
              />
            </figure>
            <div className="card_info">
              <h3>MAXI.WASH - 250ML</h3>
              <h4>kevin murphy</h4>
              <p>$ 31.70</p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};
export default SimpleSlider;
