import React from "react";
import { FaBriefcase } from "react-icons/fa";

const NavbarHireNowBtn = () => {
  return (
    <div className="sm:w-1/5 md:w-1/4 flex items-center sm:justify-end">
      <button
        type="submit"
        className="text-[#0D9488] text-sm md:text-base flex items-center gap-x-2 px-1 py-2 sm:p-2.5 md:px-3 cursor-pointer hover:bg-gray-300 transition duration-200 ease-in-out rounded-md font-bold border border-gray-300"
      >
        <FaBriefcase /> Hire Now
      </button>
    </div>
  );
};

export default NavbarHireNowBtn;
