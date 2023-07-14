import React from "react";
import { sliderDataApi } from "../../Fake_api/DataApi";
import { Link } from "react-router-dom";
import "./Slides.css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider () {
  return (
    <div className=" md:mt-20 mt-12">
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4800,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div>
            {sliderDataApi.map((slides,index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="w-[100%] h-[100%] flex overflow-hidden relative items-center">
                    <img className="object-cover" src={slides.img} alt="image-slider" />
                    <div className="absolute flex flex-col items-center justify-center ">
                      <div className="flex flex-col items-center justify-center md:ml-[300px] ml-[10px]">
                        <h1 className="text-white mb-3 md:text-4xl text-[16px] font-semibold">
                          {slides.title}
                        </h1>
                        <div className="text-white  text-[8px] md:text-sm md:w-[100%] w-[200px] flex flex-wrap md:mb-5 mb-2 font-light tracking-widest">
                          <p className="text-center">
                            LOREM IPSUM, DOLOR SIT AMET CONSECTETUR
                          </p>
                        </div>
                      </div>

                      <div className="md:ml-[300px] ml-[10px] md:mt-2">
                        <Link to="/productsPage">
                          <button className="text-white border-[1px] border-red-600 py-1 px-2 font-light hover:bg-red-600 duration-500  text-[8px] md:text-base">
                            Shop Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

