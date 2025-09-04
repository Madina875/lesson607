import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 h-[300px]">
      <div className="container">
        <div className="flex gap-10 p-[2%] place-items-center justify-between">
          <p className="text-white text-4xl uppercase">Footer</p>
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
                isActive ? "text-black underline" : ""
              }`
            }
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `uppercase text-2xl text-gray-600 ${
                isActive ? "text-black underline" : ""
              }`
            }
            to={"/contact"}
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `uppercase text-2xl text-gray-600 ${
                isActive ? "text-black underline" : ""
              }`
            }
            to={"/service"}
          >
            Service
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `uppercase text-2xl text-gray-600 ${
                isActive ? "text-black underline" : ""
              }`
            }
            to={"/login"}
          >
            Login
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
