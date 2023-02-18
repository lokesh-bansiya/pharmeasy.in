import v1 from "./images/v1.png";
import v2 from "./images/v2.png";
import v3 from "./images/v3.png";
import v4 from "./images/v4.png";
import v5 from "./images/v5.png";
import v6 from "./images/v6.png";
import v7 from "./images/v7.png";
import { Image, Box, Center } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const AdminCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Center>
      <Box width="80%" >
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
          slidesToSlide={2}
        >
          <Box>
            <Image src={v1}></Image>
          </Box>
          <Box>
            <Image src={v3}></Image>
          </Box>

          <Box>
            <Image src={v5}></Image>
          </Box>
          <Box>
            <Image src={v2}></Image>
          </Box>
          <Box>
            <Image src={v4}></Image>
          </Box>
          <Box>
            <Image src={v6}></Image>
          </Box>
          <Box>
            <Image src={v7}></Image>
          </Box>
          {/* <Box>
            <Image src={d19}></Image>
          </Box>  */}
        </Carousel>
      </Box>
    </Center>
  );
};
