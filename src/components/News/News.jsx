import { DateRangeOutlined, ArrowForwardIos } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import news1 from "../../assets/img/news01.jpg";
import news2 from "../../assets/img/news02.jpg";
import news3 from "../../assets/img/news03.jpg";

const News = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="bg-white  md:px-[160px] px-[20px] mt-[80px] w-full"
    >
      <h1 className=" border-l-[8px]  border-[#d70018] bg-[#a7a6a633] pl-6 font-bold md:text-[28px] text-[20px] ">
        NEWS
      </h1>
      <div className="md:flex md:mt-[40px] mt-[20px]">

{/* NEWS 1 */}
        <div className="flex-1 rounded-lg  bg-[#f5f5f7]">
          <div className="flex-col items-center justify-center p-2">
            <h1 className="text-[14px] md:text-[16px] font-bold ">
              In celebration of Black History Month, Apple releases new Black
              Unity collection and content
            </h1>
            <h2 className="text-[14px] my-1 mb-5 items-center flex">
              <DateRangeOutlined style={{ fontSize: "18px" }} />
              18/01/2023
            </h2>
            <Link to="https://www.apple.com/newsroom/2023/01/apple-celebrates-black-history-month-with-unity-collection-and-exclusive-content/">
              <img
                className="md:h-[240px] w-full h-[180px] rounded-lg md:w-[100%]  object-cover "
                src={news1}
                alt="img-new.01"
              />
            </Link>
            <div className="mt-3">
              <p className="text-[14px] ">
            
                Starting today, customers can show their support with this
                year is Black Unity Collection, which includes a special-edition
                Apple Watch Black Unity Sport Loop, alongside a new matching
                watch face and iPhone wallpaper.
              </p>
            </div>
          </div>
        </div>
{/* END NEWS 1 */}

{/* NEWS 2 */}
        <div className="flex-1 md:mx-3 md:mt-0 mt-[20px] rounded-lg  bg-[#f5f5f7]">
          <div className="flex-col items-center justify-center  p-2">
            <h1 className="text-[14px] md:text-[16px] font-bold ">
              Apple unveils MacBook Pro featuring M2 Pro and M2 Max, with more
              game-changing performance and the longest battery life ever in a
              Mac
            </h1>
            <h2 className="text-[14px] my-1 mb-5  items-center flex">
              <DateRangeOutlined style={{ fontSize: "18px" }} />
              17/01/2023
            </h2>

            <Link to="https://www.apple.com/newsroom/2023/01/apple-unveils-macbook-pro-featuring-m2-pro-and-m2-max/">
              <img
                className="md:h-[240px] w-full h-[180px] rounded-lg md:w-[100%]  object-cover "
                src={news2}
                alt="img-new.02"
              />
            </Link>
            <div className="mt-3">
              <p className="text-[14px]">
                Apple today announced the new 14- and 16-inch MacBook Pro
                featuring M2 Pro and M2 Max, Apple is next-generation pro silicon
                that brings even more power-efficient performance and battery
                life to pro users.
              </p>
            </div>
          </div>
        </div>
{/* END NEWS 2 */}

{/* NEWS 3 */}
        <div className="flex-1  md:mt-0 mt-[20px] rounded-lg bg-[#f5f5f7]">
          <div className="flex-col items-center justify-center p-2">
            <h1 className="text-[14px] md:text-[16px] font-bold">
              Apple introduces new Mac mini with M2 and M2 Pro — more powerful,
              capable, and versatile than ever
            </h1>
            <h2 className="text-[14px] my-1 mb-5  items-center flex">
              <DateRangeOutlined style={{ fontSize: "18px" }} />
              17/01/2023
            </h2>

            <Link to="https://www.apple.com/newsroom/2023/01/apple-introduces-new-mac-mini-with-m2-and-m2-pro-more-powerful-capable-and-versatile-than-ever/">
              <img
                className="md:h-[240px] w-full h-[180px] rounded-lg md:w-[100%]  object-cover "
                src={news3}
                alt="img-new.03"
              />
            </Link>

            <div className="mt-3">
              <p className="text-[14px]">
                Apple today unveiled the new Mac mini, supercharged by M2 and
                the all-new M2 Pro. With the M2 chip, Mac mini is even more
                powerful, capable, and affordable with a new starting price of
                just $599.
              </p>
            </div>
          </div>
        </div>
{/* END NEWS 3 */}
      </div>
{/* END NEW */}

{/* MORE */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex items-center justify-end "
      >
        <Link to="https://www.apple.com/newsroom/">
          <button className="underline  text-[14px] mt-6">
            See more
            <ArrowForwardIos style={{ fontSize: "14px" }} />
          </button>
        </Link>
      </div>
{/* END MORE */}
    </div>
  );
};

export default News;
