import React from "react";
import Slider from "react-slick";
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
function Hero() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "ease-in-out"
  };
  return (
    <>
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        <div className="h-[700px] w-[700px] bg-orange-200 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
        
        <div className="slide-container w-[1200px]">
          <Slider {...settings}>
            <div>
              <div className="hero-content bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <img
                    src={image1}
                    className="max-w-sm rounded-lg shadow-2xl"
                  />
                  <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut
                      assumenda excepturi exercitationem quasi. In deleniti
                      eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn  btn-primary hover:bg-slate-300 dark:hover:text-black">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <img
                    src={image2}
                    className="max-w-sm rounded-lg shadow-2xl"
                  />
                  <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut
                      assumenda excepturi exercitationem quasi. In deleniti
                      eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary hover:bg-slate-300 dark:hover:text-black">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <img
                    src={image3}
                    className="max-w-sm rounded-lg shadow-2xl"
                  />
                  <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut
                      assumenda excepturi exercitationem quasi. In deleniti
                      eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary hover:bg-slate-300 dark:hover:text-black">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Hero;
