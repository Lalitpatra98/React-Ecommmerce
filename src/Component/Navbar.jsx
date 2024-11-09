import React from "react";
import logo from  "../assets/8014178.jpg"
function Navbar() {
  return (
    <>
      {/*  upper navbar */}
      <div className="parent">
        <div className="child-one">
          <div className="child-two">
            <a href="">
                <img src={logo} alt="logo" />
            </a>
          </div>
          {/* search bar */}
          <input type="text" placeholder="search" 
          
          className="w-[200px] bg-slate-200 sm:w-[200px] hover:w-[300px]"
        
          />
        </div>
      </div>
      {/* lower navbar */}
      <div></div>
    </>
  );
}

export default Navbar;
