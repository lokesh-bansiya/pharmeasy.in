import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Home_Styles/CarouselBox_third.css";

const CarouselBox_Third = () => {

    return (
        <Carousel interval={2000}>
            <Carousel.Item className="Home_carousel_Third_container">
                <div className="Home_carousel_item_Third">
                    <div className="Home_Featured_Brands_Item">
                        <div>
                            <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/154dec0567b23244b7dcbf2158d39eee.png?f=png?dim=360x0" alt="" />
                        </div>
                        <div>
                            Skin Care
                        </div>
                    </div>

                    <div className="Home_Featured_Brands_Item">
                        <div>
                            <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/514d0d7d01a63502b4ebfec9ae26f4d2.png?f=png?dim=360x0" alt="" />
                        </div>
                        <div>
                            Supplements
                        </div>
                    </div>

                    <div className="Home_Featured_Brands_Item">
                        <div>
                            <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/105ceca515ee30509f93309ae75306aa.png?f=png?dim=360x0" alt="" />
                        </div>
                        <div>
                            Diabetic Care
                        </div>
                    </div>

                    <div className="Home_Featured_Brands_Item">
                        <div>
                            <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/d1b29f7a2b5f3d62a3d47b617aceef1b.png?f=png?dim=360x0" alt="" />
                        </div>
                        <div>
                            Sexual Wellness
                        </div>
                    </div>

                    <div className="Home_Featured_Brands_Item">
                        <div>
                            <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ecad9a974e003fb987858b3ee81413c6.png?f=png?dim=360x0" alt="" />
                        </div>
                        <div>
                            Ayurvedic Care
                        </div>
                    </div>

                    <div className="Home_Featured_Brands_Item">
                        <div>
                            <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/8a31db906db93f7cba59f1c48d3ba239.png?f=png?dim=360x0" alt="" />
                        </div>
                        <div>
                            Health Condition
                        </div>
                    </div>
                </div>
               
            </Carousel.Item>

            <Carousel.Item className="Home_carousel_Third_container">
                <div className="Home_carousel_item_Third">
                    <div className="Home_Featured_Brands_Item">
                        <div>
                            <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/763b558b32313005bc11d0cae0e26f58.png?f=png?dim=360x0" alt="" />
                        </div>
                        <div>
                            Accessories
                        </div>
                    </div>

                    <div className="Home_Featured_Brands_Item">
                        <div>
                            <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png?f=png?dim=360x0" alt="" />
                        </div>
                        <div>
                            Top-Products
                        </div>
                    </div>

                    <div className="Home_Featured_Brands_Item">
                        <div>
                            <img src="https://cms-contents.pharmeasy.in/carousel_item/40facc7fa28-Pharmeasy-App.jpg?dim=1440x0" alt="" />
                        </div>
                        <div>
                            Pharmeasy
                        </div>
                    </div>

                    <div className="Home_Featured_Brands_Item">
                        <div>
                            <img src="https://cms-contents.pharmeasy.in/carousel_item/a559f294d43-Vicks-min.png?dim=1440x0" alt="" />
                        </div>
                        <div>
                            Vicks
                        </div>
                    </div>

                    <div className="Home_Featured_Brands_Item">
                        <div>
                            <img src="https://cms-contents.pharmeasy.in/carousel_item/1466c422fcd-Sugerfree.png?dim=1440x0" alt="" />
                        </div>
                        <div>
                            Sugar Free
                        </div>
                    </div>

                    <div className="Home_Featured_Brands_Item">
                        <div>
                            <img src="https://cms-contents.pharmeasy.in/carousel_item/a204783ad47-App-Evion.png?dim=1440x0" alt="" />
                        </div>
                        <div>
                            Evion
                        </div>
                    </div>
                </div>
               
            </Carousel.Item>

        </Carousel>
    );
}

export { CarouselBox_Third };