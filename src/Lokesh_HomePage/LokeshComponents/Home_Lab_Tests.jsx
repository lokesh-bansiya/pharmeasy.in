import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import LabTestCarouselElements from "./Home_Lab_Tests_Carousel_Element";

const Home_Lab_Tests = () => {
  return (
    <Flex h="22rem"  align="end" position="relative">
        <Box
          height="auto"
          w="200px"
          position="absolute"
          top="0"
          zIndex="-2"
          margin="auto"
        ></Box>
        <Box
            h="85%"
            w="100%"
            margin="auto"
            position="relative"
            bg="#f7d9b7"
        >
            <Flex h="25%" justify="space-between" >
            <Flex className="left" align="center" h="45%">
                <Text mt="30%" ml="2%" mb="2%" w="200px"  cursor="pointer" fontSize="20px" fontWeight="700" color="#4f585e"  >
                Booked Lab Tests
                </Text>
            </Flex>
            <Flex className="right" align="center">
                <Text fontSize="18px" fontWeight="600" cursor="pointer" color="#0f847e">
                See All Offers
                </Text>
                <Flex className="arrow" w="9rem" h="100%"></Flex>
            </Flex>
            </Flex>
            <LabTestCarouselElements />
        </Box>
    </Flex>
  );
};

export default Home_Lab_Tests;
