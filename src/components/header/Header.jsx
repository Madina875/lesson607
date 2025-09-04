import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const { pathname } = useLocation();
  const isPink = pathname === "/about" || pathname === "/contact";
  return (
    <header
      className={`${
        isPink ? "bg-blue-300" : ""
      } flex h-25 items-center gap-4 bg-gray-100 mx-[2%] rounded-3xl place-items-center justify-between my-[1%] px-[3%]`}
    >
      <div className="text-3xl text-gray-600">LOGOO</div>
      <div className="flex gap-10">
        <NavLink
          className={({ isActive }) =>
            `uppercase text-2xl text-gray-600 ${
              isActive ? "text-black underline" : ""
            }`
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `uppercase text-2xl text-gray-600 ${
              isActive ? "text-red-500 underline" : ""
            }`
          }
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `uppercase text-2xl text-gray-600 ${
              isActive ? "text-red-500 underline" : ""
            }`
          }
          to={"/users"}
        >
          Users
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `uppercase text-2xl text-gray-600 ${
              isActive ? "text-red-500 underline" : ""
            }`
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `uppercase text-2xl text-gray-600 ${
              isActive ? "text-red-500 underline" : ""
            }`
          }
          to={"/service"}
        >
          Service
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `uppercase text-2xl text-gray-600 ${
              isActive ? "text-red-500 underline" : ""
            }`
          }
          to={"/login"}
        >
          Login
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
