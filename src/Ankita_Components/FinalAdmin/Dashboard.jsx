import React from "react";
import { Navbar } from "./Navbar";
import { MiddleSection } from "./MiddleSection";

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
      <Navbar />
      <MiddleSection />
    </>
  );
};
