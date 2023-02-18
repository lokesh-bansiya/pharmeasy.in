import { Box, Image, Img, Text } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './CommentSlider.css'

 function CommentSlider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <Box width={['80%']} position= "relative"  m='auto' >
      
      
        <Carousel responsive={responsive} className='commentslider'>
          <Box border='1px solid black' width='50%' height='300px'>
            <Img height='150px' src=' https://cdn01.pharmeasy.in/dam/diagnostics/usp-images/e916484d3a2336368ce2ecf1748437e2'/>
            <Text fontWeight='bold' mt='20px' mb='20px'>Affordable Price</Text>
            <Text>Get the best price for the tests and package  by comparing arocess the multiple tabs</Text>


          </Box>
          <Box border='1px solid black'   width='50%'height='300px'>
            <Img height='150px' src=' https://cdn01.pharmeasy.in/dam/diagnostics/usp-images/e916484d3a2336368ce2ecf1748437e2'/>
            <Text fontWeight='bold' mt='20px' mb='20px'>Affordable Price</Text>
            <Text>Get the best price for the tests and package  by comparing arocess the multiple tabs</Text>


          </Box>
         
          
        </Carousel>
      
    </Box>
  );
}


export default CommentSlider