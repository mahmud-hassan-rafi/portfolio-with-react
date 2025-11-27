import React from "react";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const NavbarMenu = () => {
  const styles = {
    defaultNav:
      "flex gap-x-1 sm:text-sm lg:text-sm items-center hover:bg-gray-300 p-1.5 lg:px-3 lg:py-1.5 rounded",
    activeNav: "text-[#0D9488] font-bold underline",
  };

  return (
    <div className="hidden md:flex md:w-1.5/3 md:justify-center">
      <menu className="flex">
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
