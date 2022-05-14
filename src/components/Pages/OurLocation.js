import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Banner/Banner.css";
import {
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import axios from "axios";

const OurLocation = () => {
  // State Settings
  const [appSettings, setAppSettings] = useState({});

  // State for Animation
  const [animating, setAnimating] = React.useState(false);

  // State for Active index
  const [activeIndex, setActiveIndex] = React.useState(0);

  //useEffect here
  useEffect(() => {
    axios
      .get("businesses/123456789")
      .then((res) => {
        setAppSettings(res.data);
        // console.log(res)
        localStorage.setItem("app-settings", JSON.stringify(res.data));
        // console.log("Banner:", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const getAppSettings = localStorage.getItem("app-settings");
  // const parsData = JSON.parse(getAppSettings);
  // console.log(parsData);
  const items =
    Object.keys(appSettings).length > 0 &&
    appSettings.activeBannerAds.WebDesktop
      ? appSettings.activeBannerAds.WebDesktop
      : [];

  // Items array length
  const itemLength = items.length - 1;

  // Previous button for Carousel
  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  // Next button for Carousel
  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  // Carousel Item Data
  const carouselItemData = items.map((item, index) => {
    // console.log("Banner:", item);
    return (
      <CarouselItem
        className="custom-tag"
        key={item.id}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}
      >
        <img
          src={item.contentUrl}
          alt={item.contentType}
          className="custom-tag"
        />
      </CarouselItem>
    );
  });
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-10 col-10 mx-auto">
            <h1 className="text-center my-3">Our Location</h1>
            <div className="row">
              <div className="col-md-10 col-12 mx-auto">
                {/* mini banner started */}

                <div>
                  <style>
                    {`.custom-tag {
          max-width: 100%;
          height: 90vh;
          background: url("assets/images/banner-03.jpg");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        }`}
                  </style>
                  <Carousel
                    previous={previousButton}
                    next={nextButton}
                    activeIndex={activeIndex}
                  >
                    <CarouselIndicators
                      items={items}
                      activeIndex={activeIndex}
                      onClickHandler={(newIndex) => {
                        if (animating) return;
                        setActiveIndex(newIndex);
                      }}
                    />
                    {carouselItemData}
                    <CarouselControl
                      directionText="Prev"
                      direction="prev"
                      onClickHandler={previousButton}
                    />
                    <CarouselControl
                      directionText="Next"
                      direction="next"
                      onClickHandler={nextButton}
                    />
                  </Carousel>
                </div>

                {/* //mini banner ended */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurLocation;
