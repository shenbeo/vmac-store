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

export default function Slider() {
  return (
    <div className=" md:mt-20 mt-12 responsive">
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <div>
            {sliderDataApi.map((slides, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="w-[100%] h-[100%] flex overflow-hidden relative items-center">
                    <img
                      className="object-cover h-[400px]"
                      src={slides.img}
                      alt="image-slider"
                    />
                    <div className="absolute flex flex-col pl-[4%] ">
                      <div className="flex flex-col ">
                        <h1 className="text-white mb-3 md:text-4xl text-[16px] font-semibold">
                          {slides.title}
                        </h1>
                        <div className="text-white">
                          <p className="text-xs font-medium mb-2">
                            LOREM IPSUM, DOLOR SIT AMET CONSECTETUR
                          </p>
                          <div className=" title">
                            <span className="text-xs">
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Perspiciatis ipsam laboriosam
                              illo placeat iure architecto ipsum totam,
                              voluptatibus sapiente vitae eveniet incidunt. Ad
                              omnis ab laudantium commodi obcaecati temporibus
                              voluptates.
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className=" md:mt-4">
                        <Link to="/productsPage">
                          <button className="text-white font-medium border-[1px] border-red-600 py-1 px-2  hover:bg-red-600 duration-500  text-[8px] md:text-base text-xs">
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
}
