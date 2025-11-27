import React from "react";
import { NavLink } from "react-router-dom";
import { FaBriefcase, FaHome } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="bg-[#e5e6e6] h-16 sm:h-17 md:h-18 lg:h-19 flex items-center w-full">
      <div className="flex justify-between items-center mx-5 w-full">
        <div className="flex items-center justify-start gap-x-2 w-2/3 sm:w-1/3">
          {/* menu icon */}
          <div className="sm:hidden">
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

          <h1 className=" text-[22px] sm:text-left sm:text-2xl md:text-3xl font-bold sm:flex">
            Mahmud Hassan
          </h1>
        </div>
        <div className="hidden sm:flex sm:justify-end sm:w-1.5/3 md:justify-center">
          <menu className="flex sm:gap-x-4 md:gap-x-5 lg:gap-x-8 ">
            <NavLink
              to={"/"}
              className={"flex gap-x-1 sm:text-sm md:text-base items-center"}
            >
              <FaHome /> Home
            </NavLink>
            <NavLink
              to={"/about-me"}
              className={"flex gap-x-1 sm:text-sm md:text-base items-center"}
            >
              {" "}
              <FaUserLarge /> About me
            </NavLink>
            <NavLink
              to={"/contact"}
              className={"flex gap-x-1 sm:text-sm md:text-base items-center"}
            >
              {" "}
              <IoMdMail /> Contact
            </NavLink>
          </menu>
        </div>

        <div className="sm:w-1/5 md:w-1/4 flex items-center sm:justify-end">
          <button
            type="submit"
            className="text-[#0D9488] text-sm md:text-base flex items-center gap-x-2 p-2 sm:p-2.5 md:px-3 cursor-pointer hover:bg-gray-300 transition duration-200 ease-in-out rounded-md font-bold border border-gray-300"
          >
            <FaBriefcase /> Hire Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
