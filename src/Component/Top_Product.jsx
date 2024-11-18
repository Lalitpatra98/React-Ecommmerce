import React from "react";
import img1 from "../assets/Products/img1.png";
import img2 from "../assets/Products/img2.png";
import img3 from "../assets/Products/img3.png";
import img4 from "../assets/Products/img4.png";
import img5 from "../assets/Products/img5.png";

const product = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
];
function Top_Product() {
  return (
    <>
      {/* text container */}
      <div className="dark:bg-slate-600 p-6">
         <div className="text  ">
        <p className="text-orange-500">Top rated product</p>
        <h1 className="font-bold text-2xl">Best products</h1>
        <p className="text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ea
          vel praesentium!
        </p>
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center mt-4 gap-6 ">
        {product.map((data) => (
      <ul key={data.id}>
        <li>
          
        <div className="card  w-60 h-96 shadow-md hover:bg-slate-400 group duration-500 ">
            <figure>
              <img
                src={data.img}
                alt="Shoes"
                className="object-scale-down h-48 w-96"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title ">
                Product 
                <div className="badge badge-secondary   ">NEW</div>
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi non harum ipsum aut possimus enim!</p>
             
            </div>
          </div>
        </li>
      </ul>
        ))}
      </div>
      </div>
     
    </>
  );
}

export default Top_Product;
