import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="pt-5 relative z-50 bg-transparent">
  <div
    className="flex flex-col sm:flex-row px-5 py-3 justify-between items-center
               max-w-[1000px] mx-auto
               bg-rose-600/20 backdrop-blur-lg rounded-full shadow-lg
               text-white"
  >
    {/* Logo */}
    <h1 className="font-bold text-2xl mb-3 sm:mb-0">
      Joynal.<span className="text-rose-500">designer</span>
    </h1>

    {/* Nav Links */}
    <ul className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 text-center">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-rose-500 font-semibold p-2 rounded-md"
              : "text-white p-2 rounded-md hover:bg-rose-700/50 transition"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/service"
          className={({ isActive }) =>
            isActive
              ? "text-rose-500 font-semibold p-2 rounded-md"
              : "text-white p-2 rounded-md hover:bg-rose-700/50 transition"
          }
        >
          Service
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-rose-500 font-semibold p-2 rounded-md"
              : "text-white p-2 rounded-md hover:bg-rose-700/50 transition"
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>

    <div></div>
  </div>
</div>
  );
};

export default Navbar;
