import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box, Image } from "@chakra-ui/react";
const ImgSlider = () => {
  return (
    <Box width="80%" margin="auto">
      <Carousel>
        <Box>
          <Image src="https://cms-contents.pharmeasy.in/banner/69dc6d9168b-1_Thyroid-Profile_HP_634x274_v1.jpg" />
        </Box>
        <Box>
          <Image src="https://cms-contents.pharmeasy.in/banner/03438c566ea-Booking-Lab-Tests_HP_634x274.jpg" />
        </Box>
        <Box>
          <Image src="https://cms-contents.pharmeasy.in/banner/2668a31c5d1-1_HP_634x274.jpg" />
        </Box>
        <Box>
          <Image src="https://cms-contents.pharmeasy.in/banner/077b535cbfd-3_HP_634x274.jpg" />
        </Box>
        <Box>
          <Image src="https://cms-contents.pharmeasy.in/banner/78a5063a317-1_Tested-today_HP_634x274_v1.jpg" />
        </Box>
        <Box>
          <Image src="https://cms-contents.pharmeasy.in/banner/6ee85df7b05-SmokingDHP.jpg" />
        </Box>
      </Carousel>
    </Box>
  );
};

export default ImgSlider;
