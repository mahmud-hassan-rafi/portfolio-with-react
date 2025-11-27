import React from "react";
import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <div className="flex items-center justify-start gap-x-2 w-2/3 md:w-1/3">
      {/* menu icon */}
      <div className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="16px"
          height="16px"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          ></path>
        </svg>
      </div>

      <Link to={"/"}>
        <h1 className=" text-2xl sm:text-left sm:text-2xl md:text-2xl font-semibold sm:flex">
          Mahmud Hassan
        </h1>
      </Link>
    </div>
  );
};

export default NavbarLogo;
