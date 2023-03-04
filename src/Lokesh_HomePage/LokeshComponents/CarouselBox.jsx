import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const CarouselBox = () => {
  return (
    <Carousel interval={1500}>
      <Carousel.Item className="item_container">
        <div className="Home_carousel_item">
          <img
            src="https://cdn01.pharmeasy.in/dam/banner/banner/59efe8fe01e-634X274.jpg"
            alt="First slide"
          />
          <img
            src="https://cdn01.pharmeasy.in/dam/banner/banner/b3a4bdb683b-1.jpg"
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item className="item_container">
        <div className="Home_carousel_item">
          <img
            src="https://cdn01.pharmeasy.in/dam/banner/banner/d71f51787ce-1_Thyroid-Profile_HP_634x274_v1.jpg"
            alt="First slide"
          />
          <img
            src="https://cdn01.pharmeasy.in/dam/banner/banner/782553ad506-STAR25.jpg"
            alt="Third slide"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export { CarouselBox };
