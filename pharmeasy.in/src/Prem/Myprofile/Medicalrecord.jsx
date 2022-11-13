import React from "react";
import { Box, Grid, Heading, Image, Text, Divider } from "@chakra-ui/react";

const Medicalrecord = () => {
  return (
    <Box>
      <Box w={"92%"} m="6rem auto auto auto" display={"flex"}>
        <Box
          w={"30%"}
          color="gray"
          border="0.5px"
          boxShadow="lg"
          p="6"
          rounded="md"
          bg="white"
        >
          <Box p={"1rem"}>
            <Image
              width={"90%"}
              height="6rem"
              borderRadius={"0.5rem"}
              src="http://www.dealnloot.com/wp-content/uploads/2021/03/pharmeasy-plus-768x161.jpg"
            />
            <Divider m={"2rem"} />
            <Heading display={"flex"} fontSize="lg" m={"1rem"}>
              <Image
                mr="1rem"
                src="https://assets.pharmeasy.in/web-assets/dist/6d757b2d.svg"
              />
              Your Orders
            </Heading>
            <Text
              m={"1rem 0rem 1rem 3rem"}
              fontSize="1xl"
              _hover={{ color: "green", cursor: "pointer" }}
            >
              Medicine / Healthcare
            </Text>
            <Text
              m={"1rem 0rem 1rem 3rem"}
              fontSize="1xl"
              _hover={{ color: "green", cursor: "pointer" }}
            >
              Lab Tests
            </Text>
            <Divider m="1rem" />
            <Heading display={"flex"} fontSize="lg" m={"1rem"}>
              <Image
                mr="1rem"
                src="https://assets.pharmeasy.in/web-assets/dist/6d757b2d.svg"
              />
              Refills
            </Heading>
            <Text
              m={"1rem 0rem 1rem 3rem"}
              fontSize="1xl"
              _hover={{ color: "green", cursor: "pointer" }}
            >
              Active
            </Text>
            <Text
              m={"1rem 0rem 1rem 3rem"}
              fontSize="1xl"
              _hover={{ color: "green", cursor: "pointer" }}
            >
              Inactive
            </Text>
            <Divider m="1rem" />
            <Heading display={"flex"} fontSize="lg" m={"1rem"}>
              <Image
                mr="1rem"
                src="https://assets.pharmeasy.in/web-assets/dist/6d757b2d.svg"
              />
              Medical Records
            </Heading>
            <Text
              m={"1rem 0rem 1rem 3rem"}
              fontSize="1xl"
              _hover={{ color: "green", cursor: "pointer" }}
            >
              All
            </Text>
            <Divider m="1rem" />
            <Heading display={"flex"} fontSize="lg" m={"1rem"}>
              <Image
                mr="1rem"
                src="https://assets.pharmeasy.in/web-assets/dist/a2995809.svg"
              />
              Profile Settings
            </Heading>
            <Text
              m={"1rem 0rem 1rem 3rem"}
              fontSize="1xl"
              _hover={{ color: "green", cursor: "pointer" }}
            >
              Edit Profile
            </Text>
            <Text
              m={"1rem 0rem 1rem 3rem"}
              fontSize="1xl"
              _hover={{ color: "green", cursor: "pointer" }}
            >
              Manage Address{" "}
            </Text>
            <Text
              m={"1rem 0rem 1rem 3rem"}
              fontSize="1xl"
              _hover={{ color: "green", cursor: "pointer" }}
            >
              Manage Refunds{" "}
            </Text>
            <Divider m="1rem" />
            <Heading display={"flex"} fontSize="lg" m={"1rem"}>
              <Image
                mr="1rem"
                src="https://assets.pharmeasy.in/web-assets/dist/ab7afe51.svg"
              />
              Wallet
            </Heading>
            <Divider m="1rem" />
            <Heading display={"flex"} fontSize="lg" m={"1rem"}>
              <Image
                mr="1rem"
                src="https://assets.pharmeasy.in/web-assets/dist/319c59f0.svg"
              />
              Refer and Earn
            </Heading>
            <Divider m="1rem" />
            <Heading display={"flex"} fontSize="lg" m={"1rem"}>
              <Image
                mr="1rem"
                src="https://assets.pharmeasy.in/web-assets/dist/9a22e94b.svg"
              />
              Logout
            </Heading>
          </Box>
        </Box>
        <Box w={"70%"} h="auto" boxShadow="lg" p="6" rounded="md" bg="white">
          <Box w={"100%"} h="4rem" m="0.2rem auto auto auto" display={"flex"}>
            <Text
              fontSize={"1xl"}
              mr={"2rem"}
              fontWeight="bold"
              justifySelf={"left"}
            >
              MEDICAL RECORDS - ALL
            </Text>
          </Box>
          <Text fontSize={"2xl"} m="7rem 2rem 0rem 5rem" color={"gray"}>
            Sorry! You do not have any past prescriptions.
          </Text>
        </Box>
      </Box>
      <Divider m={"5rem"} />
      <Box w={"60%"} m="auto" mb={"2rem"}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Box w="100%" h="16rem" bg="white">
            <Image
              src="https://uploads-ssl.webflow.com/598435743262c800013158eb/5fccdb2bbb42677c2f3efa4e_moneyback-icon-green.svg"
              w="20%"
              h="20%"
              alt="Dan Abramov"
            />
            <Heading as="h4" size="md" mt="1rem">
              1 Lakh+ Products
            </Heading>
            <Text fontSize={"lg"} textAlign="left" mt="1rem" color={"gray"}>
              We maintain strict quality controls on all our partner retailers,
              so that you always get standard quality products.
            </Text>
          </Box>
          <Box w="100%" h="16rem" bg="white">
            <Image
              borderRadius={"21rem"}
              src="https://www.datocms-assets.com/22250/1583380060-shield-lock-2x.png?auto=format&dpr=0.8&w=244"
              w="20%"
              h="15%"
              mt={"0.5rem"}
              alt="Dan Abramov"
            />
            <Heading as="h4" size="md" mt="1rem">
              Secure Payment
            </Heading>
            <Text fontSize={"lg"} textAlign="left" mt="1rem" color={"gray"}>
              100% secure and trusted payment protection.
            </Text>
          </Box>
          <Box w="100%" h="16rem" bg="white">
            <Image
              borderRadius={"21rem"}
              src="https://i.pinimg.com/564x/31/55/64/315564aece0f76bde01696ce11b8f47f.jpg"
              w="20%"
              h="15%"
              mt={"0.5rem"}
              alt="Dan Abramov"
            />
            <Heading as="h4" size="md" mt="1rem">
              Easy Return{" "}
            </Heading>
            <Text fontSize={"lg"} textAlign="left" mt="1rem" color={"gray"}>
              We have a new and dynamic return window policy for medicines and
              healthcare items. Refer FAQs section for more details.
            </Text>
          </Box>
        </Grid>
      </Box>
      <Divider mb={"5rem"} />
      <Box w={"80%"} m="auto">
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          <Box w="90%" h="33rem" ml="1rem" bg="white">
            {" "}
            <Image
              w="100%"
              h="100%"
              src="https://assets.pharmeasy.in/web-assets/_next/icons/footerMobile.jpg"
            />
          </Box>
          <Box w="100%" h="22rem" bg="white">
            <Text fontSize={"xl"} textAlign="left" mt="1rem" ml={"1rem"}>
              Download the App for Free
            </Text>
            <a href="https://play.google.com/store/apps/details?id=com.phonegap.rxpal&hl=en_IN&gl=US&utm_source=web&utm_medium=footer">
              <Image src="https://www.idfcfirstbank.com/content/dam/IDFCFirstBank/android-store-icon.svg" />
            </a>
            <a href="https://apps.apple.com/in/app/pharmeasy-healthcare-app/id982432643">
              <Image src="https://www.idfcfirstbank.com/content/dam/IDFCFirstBank/apple-store-icon.svg" />
            </a>
          </Box>
        </Grid>
      </Box>
      <Divider mb={"2rem"} />
    </Box>
  );
};

export default Medicalrecord;
