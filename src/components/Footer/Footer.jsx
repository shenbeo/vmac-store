import {
  EmailOutlined,
  Apple,
  Facebook,
  Instagram,
  LocalPhoneOutlined,
  LocationOnOutlined,
  Pinterest,
  SendOutlined,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer ()  {
  return (
    <div className="  bg-[#001e2b]">
      <div className="w-full container mx-auto px-2 md:px-0  text-white conatiner py-12 text-[12px] md:text-[14px]  ">
        <div className="md:flex md:flex-wrap  justify-between  ">
          <div className="flex-col items-center justify-center">
  {/* LOGO */}
            <div>
              <Link to="/">
                <div className="flex items-center">
                  <div className="flex h-[36px] items-center">
                    <div className="bg-red-600  rounded-l-3xl md:text-[26px] h-[36px] text-[25px] font-bold flex items-center ">
                      <h1 className="pl-2 pr-1">V.</h1>
                    </div>
                    <div className="border-2 border-red-600 h-[36px]">
                      <div className="flex items-end  px-1  md:text-[16px] text-[15px] mt-[3px]  font-medium">
                        <h1 className="">m</h1>
                        <h2 className="mb-1">
                          <Apple style={{ fontSize: "20px" }} />
                        </h2>
                        <h3 className="">c</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
  
            <div className="md:mt-5 mt-2 md:w-[400px] text-[#9c9c9c] md:mb-4 mb-2">
              <p className="text-justify mdLtext-sm text-xs font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
                dolorum possimus debitis neque consectetur perspiciatis veritatis
                nulla.
              </p>
            </div>
            <div className="md:mt-[40px] mt-4">
              <h1 className="font-medium text-sm">
                SIGN UP TO RECEIVE INFORMATION
              </h1>
              <h2 className="border-b-[1px] border-[#3b67a9] my-4 w-[40px]"></h2>
              <div className="flex items-center">
                <input
                  className="flex text-black outline-none px-3 w-[230px] h-[30px]"
                  type="text"
                ></input>
                <a href="/">
                  <SendOutlined
                    className="bg-[#3b67a9] cursor-pointer p-1"
                    style={{ fontSize: "30px" }}
                  />
                </a>
              </div>
            </div>
          </div>
  {/* END LOGO */}
  
  {/* ADDRESS*/}
          <div className="flex-col items-center justify-center md:mt-0 mt-4">
            <h1 className=" font-medium text-sm">ADDRESS</h1>
            <h2 className="border-b-[1px] border-[#3b67a9] my-4 w-[40px]"></h2>
            <div>
              <ul className="text-[#9c9c9c] font-medium md:text-sm text-xs">
                <li className="mb-1 ">
                  <LocationOnOutlined style={{ fontSize: "16px" }} className="mr-1" />69, Binh Thanh District,
                  TP.HCM
                </li>
                <li className="mb-1 ">
                  <LocalPhoneOutlined style={{ fontSize: "16px" }} className="mr-1" />(+84)964.999.999
                </li>
                <li className="">
                  <EmailOutlined style={{ fontSize: "16px" }} className="mr-1" />xmacshop@gamil.com
                </li>
              </ul>
            </div>
          </div>
  {/* END ADDRESS */}
  
  {/* MENU*/}
          <div className="md:mt-0 mt-4">
            <h1 className="font-medium text-sm">MENU</h1>
            <h2 className="border-b-[1px] border-[#3b67a9] my-4 w-[40px]"></h2>
            <div>
              <ul className="text-[#9c9c9c] font-medium md:text-sm text-xs">
                <Link to="/">
                  <li className="mb-1  cursor-pointer hover:text-white hover:underline duration-500 ">
                    Home
                  </li>
                </Link>
                <Link to="/productsPage">
                  <li className="mb-1  cursor-pointer hover:text-white hover:underline duration-500 ">
                    Products
                  </li>
                </Link>
                <Link to="/cartPage">
                  <li className="cursor-pointer  hover:text-white hover:underline duration-500 ">
                    Cart
                  </li>
                </Link>
              </ul>
            </div>
          </div>
  {/* END MENU */}
  
  {/* CONTACT */}
          <div className="md:mt-0 mt-4">
            <h1 className="font-medium text-sm">CONTACT</h1>
            <h2 className="border-b-[1px] border-[#3b67a9] my-4 w-[40px]"></h2>
            <div>
              <ul className="flex flex-wrap">
                <li className="flex cursor-pointer rounded-full bg-[#3a589b] p-1 mr-1">
                  <Facebook />
                </li>
                <li className="flex cursor-pointer rounded-full bg-[#fc7600] p-1 mr-1">
                  <Instagram />
                </li>
                <li className="flex cursor-pointer rounded-full bg-[#ef2926] p-1 mr-1">
                  <YouTube />
                </li>
                <li className="flex cursor-pointer rounded-full bg-[#2478ba] p-1 mr-1">
                  <Twitter />
                </li>
                <li className="flex cursor-pointer rounded-full bg-[#cb2320] p-1">
                  <Pinterest />
                </li>
              </ul>
            </div>
          </div>
  
  {/* END CONTACT */}
      </div>
        <hr className="border-[#9c9c9c]  my-10" />
            <span className="block font-medium  text-[#9c9c9c] text-end">
              © 2023{" "}
                  <Link to="/" className="hover:underline duration-500">
                    NguyenThanhVinh
                  </Link>
              . All Rights Reserved.
            </span>
      </div>
    </div>
  );
};


