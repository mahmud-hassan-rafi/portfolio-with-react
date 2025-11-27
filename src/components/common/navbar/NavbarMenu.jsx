import React from "react";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const NavbarMenu = () => {
  const styles = {
    defaultNav:
      "flex gap-x-1 sm:text-sm md:text-base items-center hover:bg-gray-300 px-3 py-1.5 rounded",
    activeNav: "text-[#0D9488] font-bold underline",
  };

  return (
    <div className="hidden sm:flex sm:justify-end sm:w-1.5/3 md:justify-center">
      <menu className="flex sm:gap-x-4 md:gap-x-5 lg:gap-x-8 ">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? `${styles.defaultNav} ${styles.activeNav}`
              : styles.defaultNav
          }
        >
          <FaHome /> Home
        </NavLink>
        <NavLink
          to={"/about-me"}
          className={({ isActive }) =>
            isActive
              ? `${styles.defaultNav} ${styles.activeNav}`
              : styles.defaultNav
          }
        >
          {" "}
          <FaUserLarge size={14} /> About me
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? `${styles.defaultNav} ${styles.activeNav}`
              : styles.defaultNav
          }
        >
          {" "}
          <IoMdMail /> Contact
        </NavLink>
      </menu>
    </div>
  );
};

export default NavbarMenu;
