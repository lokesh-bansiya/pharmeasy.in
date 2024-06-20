import React from "react";
import {
  Image,
  Stack,
  Text,
  SimpleGrid,
  Box,
  Button,
  Center,
} from "@chakra-ui/react";
import v1 from "./images/v1.png";
import v2 from "./images/v2.png";
import v3 from "./images/v3.png";
import v4 from "./images/v4.png";
import v5 from "./images/v5.png";
import v6 from "./images/v6.png";
import v7 from "./images/v7.png";
import Homedata1 from "./images/Homedata1.png";
import Homedata2 from "./images/Homedata2.png";

export const MiddleSection = () => {
  return (
    <Stack marginTop={10} marginRight="8em" marginLeft="8em">
      <Box>
        <Image src={Homedata2}></Image>
      </Box>
      <SimpleGrid spacing={40} columns={2}>
        <Box>
          <Image backgroundColor="#ebecf0" src={Homedata1}></Image>{" "}
          <Image marginTop={10} src={v1}></Image>
        </Box>
        <Box>
          <Image src={v5}></Image> <Image marginTop={10} src={v3}></Image>
        </Box>
      </SimpleGrid>
    </Stack>
  );
};
