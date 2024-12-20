import React from "react";
import { IoMdSearch } from "react-icons/io";
import logo from "../assets/8014178.jpg";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./Dark_mode";
import LowerNavbar from "./LowerNavbar";

function Navbar() {
  return (
    <>
      {/*  upper navbar */}

      <div className="parent dark:bg-slate-500 bg-orange-100 py-2 drop-shadow-md  transition-all duration-200">
        <div className=" flex justify-between items-center mx-8 ">
          {/* Brand loog */}
          <div className="logo ">
            <a
              href=""
              className="font-bold text-2xl sm:text-3xl flex gap-2 items-center"
            >
              <img src={logo} alt="logo" className="w-10 rounded-full " />
              shopsy
            </a>
          </div>

          <div className="flex gap-5 items-center ">
            {/* Search logo */}
            <div className="   search-bar relative  ">
              <input
                type="text"
                placeholder="search"
                className="w-[100px] bg-white sm:w-[200px] sm:hover:w-[300px] hover:w-[150px] transition-all duration-300 rounded-full border-gray-300 px-2 py-1 focus:outline-none focus:border-2 focus:border-orange-400 dark:border-none"
              />
              <IoMdSearch className=" absolute  inset-y-2  right-3    " />
            </div>

            {/* order btn */}
            <button
              onClick={() => alert("ordering are not available yet")}
              className="bg-gradient-to-r from-orange-600 to-orange-400 py-1 px-3 rounded-xl flex items-center dark:bg-none"
            >
              
              <FaCartShopping className="size-3 sm:size-5" />
            </button>

            {/* Darkmode */}
            <div >
                <DarkMode  />
            </div>
          
          </div>
        </div>
      </div>
      {/* lower navbar */}
      <LowerNavbar />
    </>
  );
}

export default Navbar;
