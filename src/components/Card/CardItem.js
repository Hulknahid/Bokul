import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Card/CardItem.css";

const SimpleSlider = (props) => {
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

          {
            props.products.map((e) => {
              console.log(e.variant);
              return <div className="mt-5">
                <figure className="card_img">
                  <img
                    src={e.variant.imageUrls[0]}
                    alt=""
                    className="card_images"
                  />
                </figure>
                <div className="card_info">

                  <h3>{e.variant.product.brand.name}</h3>
                  <h6>{e.variant.product.id} - 250ML</h6>
                  <p>$ 31.70</p>
                </div>
              </div>
            })
            // console.log(typeof props.name)
          }
        </Slider>
      </div>
    </>
  );
};
export default SimpleSlider;
