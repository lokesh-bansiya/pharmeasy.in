import {
  Box,
  Text,
  Image,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
  Flex,
  PinInput,
  DrawerFooter,
  PinInputField,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RiUser5Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function DrawerLogin() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [otp, setOtp] = useState(0);
  const [isLogin, setLogin] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const random = Math.floor(1000 + Math.random() * 9000);

  const handleSend = () => {
    localStorage.setItem("random", random);
    toast({
      position: "top",
      duration: 2000,
      render: () => (
        <Box color="white" p={3} bg="blue.500">
          {`Your otp is ${random} please enter to Login`}
        </Box>
      ),
    });
    setLogin(true);
  };


  const handleContinue = (onClose) => {

    let check = localStorage.getItem("random");
    console.log(`check=${check} and otp=${otp}`);
    
    if (check == otp) {
      setLogin(true);
      toast({
        position: "top",
        duration: 2000,
        render: () => (
          <Box color="white" p={3} bg="green.500">
            {`You have Successfully Login`}
          </Box>
        ),
      });
      localStorage.setItem("logIn", true);
      localStorage.setItem("isAuth", true);
      onClose();
      navigate("/");
      setOtp("");
    }
    else {
      setLogin(false);
      toast({
        position: "top",
        duration: 2000,
        render: () => (
          <Box color="white" p={3} bg="red.700">
            {`wrong Credential!`}
          </Box>
        ),
      });
      localStorage.setItem("logIn", false);
      onClose();
      navigate("/");
      setOtp("");
    }

  };


  return (
    <>
      <Box _hover={{}} ref={btnRef} colorScheme="teal" display="flex" onClick={onOpen}>
        <RiUser5Fill style={{ height: "20px", width: "20px" }} />{isLogin ? "User" : "Login/signup"}
      </Box>
      <Drawer
        size={"sm"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader background={"#10847e"}>
            <Flex gap={20}>
              <Image
                width={40}
                src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png?dim=256x0"
              />
              <Image src="https://assets.pharmeasy.in/web-assets/dist/1fe1322a.svg?dim=256x0"></Image>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Text pb={8} color={"grey"} fontWeight={600}>
              Quick Login / Register
            </Text>
            {isLogin ? (
              <>
                {" "}
                <Flex margin={"auto"} width={"360px"} gap={5}>
                  <PinInput otp>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                  <br />
                </Flex>
                <Button
                  mt={5}
                  ml={8}
                  width={"200px"}
                  color={"white"}
                  _hover={{ background: "#10847e" }}
                  background={"#10847e"}
                  onClick={()=> handleContinue(onClose)}
                >
                  Continue
                </Button>
              </>
            ) : (
              <>
                <Input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  mt={10}
                  placeholder="Enter your phone number"
                />
                <Button
                  disabled={otp === ""}
                  onClick={()=> handleSend}
                  mt={5}
                  width={"400px"}
                  color={"white"}
                  _hover={{ background: "#10847e" }}
                  background={"#10847e"}
                >
                  Send OTP
                </Button>
              </>
            )}

            <Text mt={5} fontSize={12}>
              By clicking on continue you agree with our Privacy Policy
            </Text>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
