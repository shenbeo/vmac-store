import { DateRangeOutlined, ArrowForwardIos } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import news1 from "../../assets/img/news01.jpg";
import news2 from "../../assets/img/news02.jpg";
import news3 from "../../assets/img/news03.jpg";

export default function News  ()  {
  return (
    <div
      // data-aos="fade-up"
      // data-aos-duration="1000"
      className="bg-white  container mx-auto md:mt-28 mt-12 px-2 md:px-0 w-full"
    >
      <div className="border-l-8 pl-6 py-1 flex border-red-600 bg-[#ebe6e668] items-center overflow-hidden relative ">
        <h1 className=" font-bold md:text-2xl text-[20px] text-[#001e2b] ">
          NEWS
        </h1>
      </div>
      <div className="md:flex md:mt-16 mt-8">

{/* NEWS 1 */}
        <div className="flex-1 rounded-lg  bg-[#f2f2f2]">
          <div className="flex-col items-center justify-center p-4">
            <h1 className="text-sm font-bold ">
              In celebration of Black History Month, Apple releases new Black...
            </h1>
            <h2 className="text-xs my-1 mb-5 items-center flex mt-2">
              <DateRangeOutlined style={{ fontSize: "16px" }} className="mr-1" />
              18/01/2022
            </h2>
            <Link to="https://www.apple.com/newsroom/2023/01/apple-celebrates-black-history-month-with-unity-collection-and-exclusive-content/">
              <img
                className="md:h-[240px] w-full h-[180px] rounded-lg md:w-[100%]  object-cover "
                src={news1}
                alt="img-new.01"
              />
            </Link>
            <div className="mt-5">
              <p className="text-xs font-medium text-justify">
                Starting today, customers can show their support with this
                year is Black Unity Collection, which includes a special-edition...
              </p>
            </div>
          </div>
        </div>
{/* END NEWS 1 */}

{/* NEWS 2 */}
        <div className="flex-1 md:mx-3 md:mt-0 mt-[20px] rounded-lg  bg-[#f2f2f2]">
          <div className="flex-col items-center justify-center  p-4">
            <h1 className="text-sm font-bold ">
              Apple unveils MacBook Pro featuring M2 Pro and M2 Max, with more...
            </h1>
            <h2 className="text-xs my-1 mb-5 items-center flex mt-2">
              <DateRangeOutlined style={{ fontSize: "18px" }} className="mr-1" />
              1/01/2022
            </h2>

            <Link to="https://www.apple.com/newsroom/2023/01/apple-unveils-macbook-pro-featuring-m2-pro-and-m2-max/">
              <img
                className="md:h-[240px] w-full h-[180px] rounded-lg md:w-[100%]  object-cover "
                src={news2}
                alt="img-new.02"
              />
            </Link>
            <div className="mt-5">
              <p className="text-xs font-medium text-justify">
                Apple today announced the new 14- and 16-inch MacBook Pro
                featuring M2 Pro and M2 Max,...
              </p>
            </div>
          </div>
        </div>
{/* END NEWS 2 */}

{/* NEWS 3 */}
        <div className="flex-1  md:mt-0 mt-[20px] rounded-lg bg-[#f2f2f2]">
          <div className="flex-col items-center justify-center p-4">
            <h1 className="text-sm font-bold">
              Apple introduces new Mac mini with M2 and M2 Pro-more powerful,
              capable,...
            </h1>
            <h2 className="text-xs my-1 mb-5 items-center flex mt-2">
              <DateRangeOutlined style={{ fontSize: "18px" }} className="mr-1" />
              17/01/2022
            </h2>

            <Link to="https://www.apple.com/newsroom/2023/01/apple-introduces-new-mac-mini-with-m2-and-m2-pro-more-powerful-capable-and-versatile-than-ever/">
              <img
                className="md:h-[240px] w-full h-[180px] rounded-lg md:w-[100%]  object-cover "
                src={news3}
                alt="img-new.03"
              />
            </Link>

            <div className="mt-5">
              <p className="text-xs font-medium text-justify">
                Apple today unveiled the new Mac mini, supercharged by M2 and
                the all-new M2 Pro. With the M2 chip,...
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
          <button className="hover:underline duration-500 flex items-center font-medium  text-sm mt-6 p-2">
            See more
            <ArrowForwardIos style={{ fontSize: "14px" }} />
          </button>
        </Link>
      </div>
{/* END MORE */}
    </div>
  );
};


