import AboutMe from "@pages/aboutMe/AboutMe";
import React from "react";
import { Outlet } from "react-router-dom";

const AboutLayout = () => {
  return (
    <>
      <AboutMe />
      <Outlet />
    </>
  );
};

export default AboutLayout;
