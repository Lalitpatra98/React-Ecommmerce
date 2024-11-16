import React from "react";
import img1 from "../assets/imgs/img1.jpg";
import img2 from "../assets/imgs/img2.jpg";
import img3 from "../assets/imgs/img3.jpg";
import img4 from "../assets/imgs/img4.jpg";
import img5 from "../assets/imgs/img5.jpg";

const productData = [
  {
    id: 1,
    img: img1,
    title: "women Ethnic",
    rating: 5.0,
    color: "white",
  },
  {
    id: 2,
    img: img2,
    title: "men Ethnic",
    rating: 4.5,
    color: "Red",
  },
  {
    id: 3,
    img: img3,
    title: "women western",
    rating: 4.7,
    color: "Brown",
  },
  {
    id: 4,
    img: img4,
    title: "Goggles",
    rating: 4.3,
    color: "yellow",
  },
  {
    id: 5,
    img: img5,
    title: "Fashion T-shirt",
    rating: 4.5,
    color: "pink",
  },
];
function ProductSection() {
  return (
    <>
      <div>
        <div className="container text-center mt-4">
          <p className="text-sm text-orange-600" data-aos="fade-up">Top selling product for you</p>
          <h1 className="text-3xl font-bold  " data-aos="fade-up">Product</h1>
          <p className="text-xs text-gray-400 p-1  " data-aos="fade-up"  >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            consequuntur repellendus, accusamus odit porro rem sunt nam dicta.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center mt-4 gap-6 " data-aos="zoom-in-up">
            {productData.map((data) => (
              <ul key={data.id}>
                <li>
                  <div className="card   ">
                  <figure>
                      <img
                        src={data.img}
                        alt="Shoes"
                        className=""
                      />
                    </figure>
                    <div className="card-body ">
                      <h2 className="card-title">{data.title}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                  
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSection;
