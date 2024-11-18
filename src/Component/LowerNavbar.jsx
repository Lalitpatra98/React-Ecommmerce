import React from "react";
import { FaCaretDown } from "react-icons/fa6";

const menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/# service",
  },
  {
    id: 3,
    name: "kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Men Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronic",
    link: "/#",
  },
];

function LowerNavbar() {
  return (
    <>
      <div className="dark:bg-slate-600 dark:text-white hidden sm:block ">
        <ul className="flex justify-center gap-4 py-3 border-b-2 shadow-md ">
          {menu.map((data) => (
            <li key={data.id}>
              <a
                className=" hover:text-orange-600 transition duration-300"
                href={data.link}
              >
                {data.name}
              </a>
            </li>
          ))}

          {/* Tranding list */}
          <div className="dropdown dropdown-hover ">
            <div className="group flex items-center ">
               Tranding 
            <FaCaretDown className="group-hover:rotate-180 transition duration-200"/>
            </div>
            <ul
              tabIndex={0}
              className=" dropdown-content menu  rounded-box  w-24 p-2 shadow  dark:text-black z-40 bg-slate-50"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
              <li>
                <a>Item 4</a>
              </li>
            </ul>
           
          </div>
          
        </ul>
      </div>
    </>
  );
}

export default LowerNavbar;
