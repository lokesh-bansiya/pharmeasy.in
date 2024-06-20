import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

const Admin_Navbar = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <Box p="2">
        <Heading size="md">Admin panel</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button colorScheme="teal">Product</Button>
        <Button colorScheme="teal">Log in</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Admin_Navbar;
