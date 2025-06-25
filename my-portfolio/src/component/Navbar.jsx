import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="pt-5 relative z-50">
      <div
        className="flex px-5 py-3  justify-between text-white max-w-[1000px] mx-auto 
    bg-rose-600/20 backdrop-blur-lg rounded-full  shadow-lg"
      >
        <h1 className="font-bold text-2xl ">
          Joynal.<span className="text-rose-500">designer</span>{" "}
        </h1>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-rose-500 font-semibold p-2" : "text-white  p-2"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive ? "text-rose-500 font-semibold p-2" : "text-white p-2"
              }
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-rose-500 font-semibold p-2" : "text-white p-2"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <h2></h2>
      </div>
    </div>
  );
};

export default Navbar;
