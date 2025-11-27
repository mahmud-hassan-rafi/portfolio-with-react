import Navbar from "@components/common/navbar/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-12">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
