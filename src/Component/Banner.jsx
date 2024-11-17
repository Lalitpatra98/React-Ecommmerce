import React from "react";
import model from "../assets/model.png";
import { GrSecure } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
const Banner = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 m-14 place-items-center">
        <div>
          <img
            src={model}
            alt=""
            className="size-52 place-self-center shadow-[-5px_5px_2px_0]"
          />
        </div>

        <div>
          <h1 className="font-bold text-4xl m-4  ">winter sale upto 50% off</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            reprehenderit voluptates necessitatibus!
          </p>

          <div className="flex items-center gap-2 m-2">
            <GrSecure />
            <p>Quality product </p>
          </div>
          <div className="flex items-center gap-2 m-2">
            <FaShippingFast />
            <p>Fast Delivery </p>
          </div>
          <div className="flex items-center gap-2 m-2">
            <MdPayment />
            <p>Easy payment method </p>
          </div>
          <div className="flex items-center gap-2 m-2">
            <BiSolidOffer />
            <p>Get offer </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
