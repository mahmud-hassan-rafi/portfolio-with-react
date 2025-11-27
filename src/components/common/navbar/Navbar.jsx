import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";
import NavbarHireNowBtn from "./NavbarHireNowBtn";

const Navbar = () => {
  return (
    <nav className="bg-[#e5e6e6] h-16 sm:h-17 md:h-18 lg:h-19 flex items-center w-full">
      <div className="flex sm:justify-start md:justify-between items-center mx-5 w-full">
        <NavbarLogo />
        <NavbarMenu />
        <NavbarHireNowBtn />
      </div>
    </nav>
  );
};

export default Navbar;
