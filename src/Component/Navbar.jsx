import React from "react";
import { IoMdSearch } from "react-icons/io";
import logo from "../assets/8014178.jpg";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./Dark_mode";
function Navbar() {
  return (
    <>
      {/*  upper navbar */}
      <div className="parent dark:bg-orange-900 bg-orange-200 py-2 drop-shadow-md ">
        <div className="child-one flex justify-between items-center mx-8  ">
          <div className="logo ">
            <a
              href=""
              className="font-bold text-2xl sm:text-3xl flex gap-2 items-center"
            >
              <img src={logo} alt="logo" className="w-10 rounded-full " />
              shopsy
            </a>
          </div>

          <div className="search-bar relative sm:block ">
            <input
              type="text"
              placeholder="search"
              className="w-[200px] bg-white sm:w-[200px] hover:w-[300px] transition-all duration-300 rounded-full border-gray-300 px-2 py-1 focus:outline-none focus:border-2 focus:border-orange-400"
            />
            <IoMdSearch className=" absolute  inset-y-2  right-3    " />
          </div>

          <button onClick={() => alert("ordering are not available yet")}
            className="bg-gradient-to-r from-orange-600 to-orange-400 py-1 px-4 rounded-full flex items-center ">
            <span >order</span>
            <FaCartShopping/>
          </button>

          <DarkMode/>

        </div>
      </div>
      {/* lower navbar */}
      <div>
        <p>lower nav bar</p>
      </div>
    </>
  );
}

export default Navbar;
