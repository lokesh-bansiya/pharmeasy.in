import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Home_Styles/CarouselBox_second.css";


const CarouselBox_second = () => {

    return (
        <Carousel interval={1500}>
            <Carousel.Item className="item_container">
                <div className="Home_carousel_item_second">
                    <img
                        src="https://cdn01.pharmeasy.in/dam/banner/banner/051ca0c08ef-AMAZON-PAY.jpg?dim=1440x0"
                        alt="First slide"
                    />
                    <img
                        src="https://cdn01.pharmeasy.in/dam/banner/banner/b12a27172b0-hdfcbanner.jpg?dim=1440x0"
                        alt="First slide"
                    />
                    <img
                        src="https://cdn01.pharmeasy.in/dam/banner/banner/9466405c308-au.jpg?dim=1440x0"
                        alt="First slide"
                    />
                </div>
               
            </Carousel.Item>
            <Carousel.Item className="item_container">
                <div className="Home_carousel_item_second">
                    
                    <img
                        src="https://cdn01.pharmeasy.in/dam/banner/banner/b12a27172b0-hdfcbanner.jpg?dim=1440x0"
                        alt="First slide"
                    />
                    <img
                        src="https://cdn01.pharmeasy.in/dam/banner/banner/9466405c308-au.jpg?dim=1440x0"
                        alt="First slide"
                    />
                    <img
                        src="https://cdn01.pharmeasy.in/dam/banner/banner/051ca0c08ef-AMAZON-PAY.jpg?dim=1440x0"
                        alt="First slide"
                    />
                </div>
               
            </Carousel.Item>

            <Carousel.Item className="item_container">
                <div className="Home_carousel_item_second">
                    <img
                        src="https://cdn01.pharmeasy.in/dam/banner/banner/9466405c308-au.jpg?dim=1440x0"
                        alt="First slide"
                    />
                    <img
                        src="https://cdn01.pharmeasy.in/dam/banner/banner/051ca0c08ef-AMAZON-PAY.jpg?dim=1440x0"
                        alt="First slide"
                    />
                    <img
                        src="https://cdn01.pharmeasy.in/dam/banner/banner/b12a27172b0-hdfcbanner.jpg?dim=1440x0"
                        alt="First slide"
                    />
                </div>
            </Carousel.Item>
            
        </Carousel>
    );
}

export { CarouselBox_second };