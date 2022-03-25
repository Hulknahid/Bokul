import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Banner/Banner.css";
import {
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

const Banner = () => {
  // State for Active index
  const [activeIndex, setActiveIndex] = React.useState(0);

  // State for Animation
  const [animating, setAnimating] = React.useState(false);

  // Sample items for Carousel
  const items = [
    {
      caption: "Sample Caption One",
      src: "/assets/images/banner-02.jpg",
      altText: "Slide One",
    },
    {
      caption: "Sample Caption Two",
      src: "/assets/images/banner-01.jpg",
      altText: "Slide Two",

    },
    {
      caption: "Sample Caption Three",
      src: "/assets/images/banner-03.jpg",
      altText: "Slide Three",

    },
    {
      caption: "Sample Caption four",
      src: "/assets/images/banner-04.jpg",
      altText: "Slide four",

    },
    {
      caption: "Sample Caption five",
      src: "/assets/images/banner-05.jpg",
      altText: "Slide five",

    },
    {
      caption: "Sample Caption six",
      src: "/assets/images/banner-06.jpg",
      altText: "Slide six",

    },
  ];

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
  const carouselItemData = items.map((item) => {
    return (
      <CarouselItem
      className="custom-tag"
        key={item.src}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}
      >
        <img src={item.src} alt={item.altText} className='custom-tag'/>
      </CarouselItem>
    );
  });

  return (
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
  );
};

export default Banner;
