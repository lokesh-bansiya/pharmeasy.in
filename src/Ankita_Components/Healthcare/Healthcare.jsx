import React from "react";
import axios from "axios";
import { Image, Stack, Text, SimpleGrid, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./css/HealthcareCarousel.css";
import { useEffect, useState } from "react";
import MediaQuery from "react-responsive";
import { AboutHealthcare } from "./AboutHealthcare";
import { Achievement } from "./Achievement";
import { DownLoadApp } from "./DownLoadApp";
import HealthcareCarousel from "./HealthcareCarousel";
import Footer from "../Footer/Footer";

const categorydata = [
  {
    id: 109,
    name: "All Category",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png?f=png",
    discountText: "Upto 77% off",
    slug: "covid-essentials-109",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=109&category_name=Covid Essentials",
  },
  {
    id: 877,
    name: "Personal Care",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/1e622b0308ec3ab48887512eaa3488a5.png?f=png",
    discountText: "Upto 80% off",
    slug: "personal-care-877",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=877&category_name=Personal Care",
  },
  {
    id: 648,
    name: "Health Food and Drinks",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/335dae76832d370c94f0440f5ba89e1f.png?f=png",
    discountText: "Upto 57% off",
    slug: "health-food-and-drinks-648",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=648&category_name=Health Food and Drinks",
  },
  {
    id: 8881,
    name: "Beauty",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/403b8ada7b113c7cb2e8d09e3420edfa.png?f=png",
    discountText: "Upto 35% off",
    slug: "beauty-8881",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=8881&category_name=Beauty",
  },
  {
    id: 93,
    name: "Skin Care",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/154dec0567b23244b7dcbf2158d39eee.png?f=png",
    discountText: "Upto 50% off",
    slug: "skin-care-93",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=93&category_name=Skin Care",
  },
  {
    id: 734,
    name: "Home Care",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png?f=png",
    discountText: "Upto 35% off",
    slug: "home-care-734",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=734&category_name=Home Care",
  },
  {
    id: 765,
    name: "Ayurvedic Care",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ecad9a974e003fb987858b3ee81413c6.png?f=png",
    discountText: "Upto 70% off",
    slug: "ayurvedic-care-765",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=765&category_name=Ayurvedic Care",
  },
  {
    id: 575,
    name: "Sexual Wellness",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/d1b29f7a2b5f3d62a3d47b617aceef1b.png?f=png",
    discountText: "Upto 53% off",
    slug: "sexual-wellness-575",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=575&category_name=Sexual Wellness",
  },
  {
    id: 623,
    name: "Fitness Supplements",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/514d0d7d01a63502b4ebfec9ae26f4d2.png?f=png",
    discountText: "Upto 80% off",
    slug: "fitness-supplements-623",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=623&category_name=Fitness Supplements",
  },
  {
    id: 838,
    name: "Mother and Baby Care",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f692f7243b8036ed97d99a7973dd42b3.png?f=png",
    discountText: "Upto 50% off",
    slug: "mother-and-baby-care-838",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=838&category_name=Mother and Baby Care",
  },
  {
    id: 717,
    name: "Healthcare Devices",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/cfc8ee511609321e91eb86a34f5b2885.png?f=png",
    discountText: "Upto 65% off",
    slug: "healthcare-devices-717",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=717&category_name=Healthcare Devices",
  },
  {
    id: 693,
    name: "Health Condition",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/8a31db906db93f7cba59f1c48d3ba239.png?f=png",
    discountText: "Upto 65% off",
    slug: "health-condition-693",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=693&category_name=Health Condition",
  },
  {
    id: 145,
    name: "Diabetic Care",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/105ceca515ee30509f93309ae75306aa.png?f=png",
    discountText: "Upto 65% off",
    slug: "diabetic-care-145",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=145&category_name=Diabetic Care",
  },
  {
    id: 750,
    name: "Elderly Care",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/fa936f30b4563fc4abd187fb22fe5258.png?f=png",
    discountText: "Upto 45% off",
    slug: "elderly-care-750",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=750&category_name=Elderly Care",
  },
  {
    id: 788,
    name: "Accessories And Wearables",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/763b558b32313005bc11d0cae0e26f58.png?f=png",
    discountText: "Upto 35% off",
    slug: "accessories-and-wearables-788",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=788&category_name=Accessories And Wearables",
  },
  {
    id: 9297,
    name: "Top Products",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png?f=png",
    discountText: "Upto % off",
    slug: "top-products-9297",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=9297&category_name=Top Products",
  },
];

const Healthcare = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(categorydata);
  return (
    <>
      <section className="ankita">
        <HealthcareCarousel />
      </section>

      <div>
        <MediaQuery minWidth={1200} maxWidth={2000}>
          <SimpleGrid
            columns={3}
            spacingX="20px"
            spacingY="20px"
            marginLeft="8em"
            marginRight="8em"
          >
            {data.length > 0 &&
              data.map((ele) => (
                <Box
                  onClick={() => navigate("/product")}
                  _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
                  key={ele.id}
                  border="0.5px solid #c0b0c0"
                  borderRadius={10}
                  width={340}
                  boxShadow="3px 0 8px 1px var(--chakra-colors-dark-background)"
                  paddingTop="10px"
                  paddingBottom="10px"
                  pr="4"
                >
                  <SimpleGrid columns={3} spacing={5}>
                    <Image
                      src={ele.imageUrl}
                      h="70px"
                      w="80"
                      paddingLeft="30px"
                    ></Image>
                    <Text margin="auto" paddingTop={3}>
                      {ele.name}
                    </Text>
                    <Text
                      margin="auto"
                      textAlign="center"
                      paddingTop={3}
                      color="#319795"
                    >
                      {ele.discountText}
                    </Text>
                  </SimpleGrid>
                </Box>
              ))}
          </SimpleGrid>
        </MediaQuery>
        <MediaQuery minWidth={1000} maxWidth={1199}>
          <SimpleGrid
            columns={3}
            spacingX="10px"
            spacingY="10px"
            marginLeft="8em"
            marginRight="8em"
          >
            {data.length > 0 &&
              data.map((ele) => (
                <Box
                  _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
                  key={ele.id}
                  border="0.5px solid #c0b0c0"
                  borderRadius={10}
                  width={250}
                  paddingTop="10px"
                  paddingBottom="10px"
                >
                  <SimpleGrid columns={3} spacing={5}>
                    <Image
                      src={ele.imageUrl}
                      boxSize="80px"
                      paddingLeft="20px"
                    ></Image>
                    <Text margin="auto" paddingTop={3}>
                      {ele.name}
                    </Text>
                    <Text margin="auto" paddingTop={3} color="#319795">
                      {ele.discountText}
                    </Text>
                  </SimpleGrid>
                </Box>
              ))}
          </SimpleGrid>
        </MediaQuery>
        <MediaQuery minWidth={601} maxWidth={999}>
          <SimpleGrid
            columns={1}
            spacingX="10px"
            spacingY="10px"
            marginLeft="8em"
            marginRight="8em"
          >
            {data.length > 0 &&
              data.map((ele) => (
                <Box
                  _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
                  key={ele.id}
                  border="0.5px solid #c0b0c0"
                  borderRadius={10}
                  width="autofit"
                  paddingTop="10px"
                  paddingBottom="10px"
                >
                  <SimpleGrid columns={3} spacing={5}>
                    <Box marginLeft="2em" gap="auto">
                      <Image
                        src={ele.imageUrl}
                        boxSize={20}
                        paddingLeft="10px"
                      ></Image>
                    </Box>
                    <Box>
                      <Text paddingTop={5}>{ele.name}</Text>
                    </Box>
                    <Text paddingTop={5} marginLeft="1em" color="#319795">
                      {ele.discountText}
                    </Text>
                  </SimpleGrid>
                </Box>
              ))}
          </SimpleGrid>
        </MediaQuery>
        <MediaQuery minWidth={1} maxWidth={600}>
          <SimpleGrid
            columns={1}
            spacingX="5px"
            spacingY="5px"
            marginLeft="2em"
            marginRight="2em"
          >
            {data.length > 0 &&
              data.map((ele) => (
                <Box
                  _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
                  key={ele.id}
                  border="0.5px solid #c0b0c0"
                  borderRadius={10}
                  width="autofit"
                  paddingTop="10px"
                  paddingBottom="10px"
                >
                  <SimpleGrid columns={3} spacing={5}>
                    <Box marginLeft="2em" gap="auto">
                      <Image
                        src={ele.imageUrl}
                        boxSize={20}
                        paddingLeft="10px"
                      ></Image>
                    </Box>
                    <Box>
                      <Text paddingTop={5}>{ele.name}</Text>
                    </Box>
                    <Text paddingTop={5} marginLeft="1em" color="#319795">
                      {ele.discountText}
                    </Text>
                  </SimpleGrid>
                </Box>
              ))}
          </SimpleGrid>
        </MediaQuery>
      </div>
      <AboutHealthcare />

      <MediaQuery minWidth={1000} maxWidth={2000}>
        <Achievement />
      </MediaQuery>

      <DownLoadApp />
    </>
  );
};

export { Healthcare };
