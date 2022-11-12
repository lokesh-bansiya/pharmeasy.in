import {
    Box,
    Center,
    Flex,
    Image,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
export default function LabTestCarousalCards({ elem }) {
    return (
        <Center height="auto" marginY="2%">
            <Stack

                w={{ sm: "0px", md: "600px" }}
                height={{ lg: "auto", sm: "500px", md: "auto" }}
                direction={{ base: "column", md: "row" }}
            >
                <Flex
                    borderWidth="2px"
                    position="relative"
                    height="290px"
                    w="260px"
                    direction="column"
                    bg={useColorModeValue("white", "gray.900")}
                    padding={"10px"}
                    transition="all 0.4s ease"
                    _hover={{
                        boxShadow:
                            " rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 4px 32px",
                        transition: "all 0.4s ease",
                        border: "2px solid #0f847e",
                    }}
                    borderRadius="10px"
                    overflow="hidden"
                    justifyContent="space-between"
                >

                    <Flex w="25%" align="center">
                        <Image
                            objectFit="cover"
                            w="90%"
                            h="90%"
                            src={elem.img}
                        />
                    </Flex>

                    <Flex direction="column" w="100%" px="8px" h="auto" color="#4f585e">
                        <Text
                            fontSize="15px"
                            fontWeight="600"
                            textAlign="left"
                            height="30px"
                            istruncated="true"
                            noOfLines={1}
                            w="100%"
                            padding="8px 0"
                        >
                            {elem.head}
                        </Text>
                        <Text textAlign="left" fontSize="14px" fontWeight="400" py="5px">
                            {" "}
                            {elem.desc}{" "}
                        </Text>
                        <Text
                            textAlign="left"
                            fontSize="12px"
                            fontWeight="400"
                            color="silver"
                        >
                            {" "}
                            {elem.tests}{" "}
                        </Text>
                    </Flex>

                    <Flex
                        bottom="0"
                        w="100%"
                        h="30%"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box color="#4f585e">
                            <Text fontWeight="700">
                                ₹{elem.price} &nbsp;
                                <span style={{ fontWeight: "400", fontSize: "14px" }}>
                                    Onwards
                                </span>{" "}
                            </Text>
                        </Box>
                        <Box
                            bg="#ffffff"
                            position="absolute"
                            color="#0f847e"
                            fontWeight="700"
                            h="13%"
                            pt="2%"
                            right="0"
                            alignItems="center"
                            justifyContent="center"
                            transition="all 0.4s ease"
                            w="50%"
                            cursor="pointer"
                            borderLeftRadius="md"
                            className="bookNow"
                            _hover={{
                                bg: "#0f847e",
                                color: "white",
                                transition: "all 0.4s ease"
                            }}
                        >
                            <Text 
                                display="flex" 
                                fontSize="17px"
                                justifyContent="center"
                                alignItems="center"
                                >
                                    Book Now<FiChevronRight style={{ fontSize: "20px" }}/>
                            </Text>
                            
                        </Box>
                    </Flex>
                </Flex>
            </Stack>
        </Center>
    );
}
