import { Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const SelectPin = () => {
  return (
    <Flex>
      <Text color="teal.800" fontWeight={"500"}>
        Select Pincode
      </Text>
      <IoMdArrowDropdown
        style={{ marginTop: "0.3rem", marginLeft: "0.4rem" }}
        size="23px"
      />
    </Flex>
  );
};

export default SelectPin;
