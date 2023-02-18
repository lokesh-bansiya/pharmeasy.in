import React from "react";
import { Navbar } from "./Navbar";
import { Image, Stack, Text, SimpleGrid, Box, Button } from "@chakra-ui/react";
import { MiddleSection } from "./MiddleSection";
import { AdminCarousel } from "./AdminCarousel";

export default function Dashboard() {
  return (
    <>
      <div
        border="1px solid red"
        width="100%"
        height="400px"
        marginleft="8em"
        marginright="8em"
      ></div>
<Navbar/>
      
      <MiddleSection />
    </>
  );
};
