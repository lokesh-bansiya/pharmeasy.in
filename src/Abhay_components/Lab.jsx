import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CommentSlider.css";

function Lab() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box bg="blue.100" padding="30px" mb="20px">
      <Box width={["80%"]} m="auto">
        <Text fontWeight="bold" mb="20px">
          Frequently Booked Lab Tests
        </Text>
        <div style={{ position: "relative" }}>
          <Carousel responsive={responsive} className="commentslider">
            <Box
              borderRadius="5"
              bg="white"
              boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
              padding="10px 10px"
              ml="20px"
              mb="30px"
            >
              <Image
                height="30px"
                src="https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg"
                alt="avatar-icon"
              />
              <Text>Dengue NS 1 Antigen</Text>
              <Text fontSize="15px">Available at 1 certified lab</Text>
              <Flex>
                <Text mt="20px">500</Text>
                <Text mt="20px" ml={["10px"]}>
                  Onword
                </Text>
              </Flex>
            </Box>

            <Box
              borderRadius="5"
              bg="white"
              boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
              padding="10px 10px"
              ml="20px"
              mb="30px"
            >
              <Image
                height="30px"
                src="https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg"
                alt="avatar-icon"
              />
              <Text>Dengue NS 1 Antigen</Text>
              <Text fontSize="15px">Available at 1 certified lab</Text>
              <Flex>
                <Text mt="20px">500</Text>
                <Text mt="20px" ml={["10px"]}>
                  Onword
                </Text>
              </Flex>
            </Box>
            <Box
              borderRadius="5"
              bg="white"
              boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
              padding="10px 10px"
              ml="20px"
              mb="30px"
            >
              <Image
                height="30px"
                src="https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg"
                alt="avatar-icon"
              />
              <Text>Dengue NS 1 Antigen</Text>
              <Text fontSize="15px">Available at 1 certified lab</Text>
              <Flex>
                <Text mt="20px">500</Text>
                <Text mt="20px" ml={["10px"]}>
                  Onword
                </Text>
              </Flex>
            </Box>
            <Box
              borderRadius="5"
              bg="white"
              boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
              padding="10px 10px"
              ml="20px"
              mb="30px"
            >
              <Image
                height="30px"
                src="https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg"
                alt="avatar-icon"
              />
              <Text>Dengue NS 1 Antigen</Text>
              <Text fontSize="15px">Available at 1 certified lab</Text>
              <Flex>
                <Text mt="20px">500</Text>
                <Text mt="20px" ml={["10px"]}>
                  Onword
                </Text>
              </Flex>
            </Box>
            <Box
              borderRadius="5"
              bg="white"
              boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
              padding="10px 10px"
              ml="20px"
              mb="30px"
            >
              <Image
                height="30px"
                src="https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg"
                alt="avatar-icon"
              />
              <Text>Dengue NS 1 Antigen</Text>
              <Text fontSize="15px">Available at 1 certified lab</Text>
              <Flex>
                <Text mt="20px">500</Text>
                <Text mt="20px" ml={["10px"]}>
                  Onword
                </Text>
              </Flex>
            </Box>
            <Box
              borderRadius="5"
              bg="white"
              boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
              padding="10px 10px"
              ml="20px"
              mb="30px"
            >
              <Image
                height="30px"
                src="https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg"
                alt="avatar-icon"
              />
              <Text>Dengue NS 1 Antigen</Text>
              <Text fontSize="15px">Available at 1 certified lab</Text>
              <Flex>
                <Text mt="20px">500</Text>
                <Text mt="20px" ml={["10px"]}>
                  Onword
                </Text>
              </Flex>
            </Box>
            <Box
              borderRadius="5"
              bg="white"
              boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
              padding="10px 10px"
              ml="20px"
              mb="30px"
            >
              <Image
                height="30px"
                src="https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg"
                alt="avatar-icon"
              />
              <Text>Dengue NS 1 Antigen</Text>
              <Text fontSize="15px">Available at 1 certified lab</Text>
              <Flex>
                <Text mt="20px">500</Text>
                <Text mt="20px" ml={["10px"]}>
                  Onword
                </Text>
              </Flex>
            </Box>
            <Box
              borderRadius="5"
              bg="white"
              boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
              padding="10px 10px"
              ml="20px"
              mb="30px"
            >
              <Image
                height="30px"
                src="https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg"
                alt="avatar-icon"
              />
              <Text>Dengue NS 1 Antigen</Text>
              <Text fontSize="15px">Available at 1 certified lab</Text>
              <Flex>
                <Text mt="20px">500</Text>
                <Text mt="20px" ml={["10px"]}>
                  Onword
                </Text>
              </Flex>
            </Box>
          </Carousel>
        </div>
      </Box>
    </Box>
  );
}

export default Lab;
