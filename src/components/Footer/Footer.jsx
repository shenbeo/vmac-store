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

const Footer = () => {
  return (
    <div className="w-full bg-[#171717] text-white md:px-[160px] px-[20px] py-[50px] text-[12px] md:text-[14px]  ">
      <div className="md:flex md:flex-wrap  justify-between  ">
        <div className="flex-col items-center justify-center">
{/* LOGO */}
          <div>
            <Link to="/">
              <div className="flex items-center">
                <div className="flex h-[36px] items-center">
                  <div className="bg-[#d70018] md:text-[26px] h-[36px] text-[25px] font-bold flex items-center ">
                    <h1 className="p-1">V.</h1>
                  </div>
                  <div className="border-2 border-[#d70018] h-[36px]">
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

          <div className="md:mt-5 mt-1 md:w-[400px] text-[#9c9c9c] md:mb-4 mb-2">
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              dolorum possimus debitis neque consectetur perspiciatis veritatis
              nulla. Aut, nihil velit, quae possimus voluptatibus unde corrupti
              repellat, beatae nesciunt magni laboriosam.
            </p>
          </div>
          <div className="md:mt-[40px] mt-4">
            <h1 className="font-bold md:text-[18px] text-[16px]">
              SIGN UP TO RECEIVE INFORMATION
            </h1>
            <h2 className="border-b-[3px] border-[#3b67a9] my-3 w-[40px]"></h2>
            <div className="flex items-center">
              <input
                className="flex text-black outline-none px-3 w-[300px] h-[30px]"
                type="text"
              ></input>
              <SendOutlined
                className="bg-[#3b67a9] cursor-pointer p-1"
                style={{ fontSize: "30px" }}
              />
            </div>
          </div>
        </div>
{/* END LOGO */}

{/* ADDRESS*/}
        <div className="flex-col items-center justify-center md:mt-0 mt-4">
          <h1 className="font-bold md:text-[18px] text-[16px]">ADDRESS</h1>
          <h2 className="border-b-[3px] border-[#3b67a9] my-3 w-[40px]"></h2>
          <div>
            <ul className="text-[#9c9c9c]">
              <li className="mb-1">
                <LocationOnOutlined style={{ fontSize: "16px" }} className="mr-1" /> 69 Nguyễn Du, Quận 1,
                TP.HCM
              </li>
              <li className="mb-1">
                <LocalPhoneOutlined style={{ fontSize: "16px" }} className="mr-1" /> 0964.999.999
              </li>
              <li>
                <EmailOutlined style={{ fontSize: "16px" }} className="mr-1" /> vmacshop@gamil.com
              </li>
            </ul>
          </div>
        </div>
{/* END ADDRESS */}

{/* MENU*/}
        <div className="md:mt-0 mt-4">
          <h1 className="font-bold md:text-[18px] text-[16px]">MENU</h1>
          <h2 className="border-b-[3px] border-[#3b67a9] my-3 w-[40px]"></h2>
          <div>
            <ul className="text-[#9c9c9c]">
              <Link to="/">
                <li className="mb-1 cursor-pointer hover:text-white hover:underline transition-all">
                  Home
                </li>
              </Link>
              <Link to="/productsPage">
                <li className="mb-1 cursor-pointer hover:text-white hover:underline transition-all">
                  Products
                </li>
              </Link>
              <Link to="/cartPage">
                <li className="cursor-pointer hover:text-white hover:underline transition-all">
                  Cart
                </li>
              </Link>
            </ul>
          </div>
        </div>
{/* END MENU */}

{/* CONTACT */}
        <div className="md:mt-0 mt-4">
          <h1 className="font-bold md:text-[18px] text-[16px]">CONTACT</h1>
          <h2 className="border-b-[3px] border-[#3b67a9] my-3 w-[40px]"></h2>
          <div>
            <ul className="flex flex-wrap">
              <li className="flex cursor-pointer rounded-full bg-[#3a589b] p-2 mr-1">
                <Facebook />
              </li>
              <li className="flex cursor-pointer rounded-full bg-[#fc7600] p-2 mr-1">
                <Instagram />
              </li>
              <li className="flex cursor-pointer rounded-full bg-[#ef2926] p-2 mr-1">
                <YouTube />
              </li>
              <li className="flex cursor-pointer rounded-full bg-[#2478ba] p-2 mr-1">
                <Twitter />
              </li>
              <li className="flex cursor-pointer rounded-full bg-[#cb2320] p-2">
                <Pinterest />
              </li>
            </ul>
          </div>
        </div>

{/* END CONTACT */}
    </div>
      <hr className="border-[#9c9c9c]  my-[40px]" />
          <span className="block  text-[#9c9c9c] text-center">
            © 2023{" "}
                <Link to="/" className="hover:underline transition-all">
                  NguyenThanhVinh
                </Link>
            . All Rights Reserved.
          </span>
    </div>
  );
};

export default Footer;
