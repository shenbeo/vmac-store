import React from "react";
import { proApiSale } from "../../Fake_api/DataApi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ArrowForwardIos,
  Star,
  StarOutline,
} from "@material-ui/icons";
import { useCart } from "react-use-cart";
import iconS2 from "../../assets/img/saleTitle.png";

const ProductsHome = () => {
  const [products, setProducts] = useState(proApiSale); //Api
  const { addItem } = useCart();

  const success = () => {
    toast.success("Product added successfully");
  };

  return (
    <div className="md:px-[160px] px-[20px] mt-[80px]">
      <div className="border-l-[8px] pl-6 flex border-[#d70018] bg-[#ebe6e668] items-center overflow-hidden relative ">
        <h1 className="font-bold md:text-[28px] text-[20px] ">PRODUCTS</h1>
        <img
          className="h-full absolute md:pl-[150px] pl-[105px]"
          src={iconS2}
          alt=""
        />
      </div>

      <div data-aos="fade-up"
    data-aos-duration="1000" className="md:flex  md:justify-center grid grid-cols-2 justify-between  items-center md:mt-[40px] mt-[20px]">
        {products.map((prosale, index) => {
          return (
            <div key={index} className="overflow-hidden relative  my-2 md:mt-0">
              <Link to={`/productsHome/${prosale.id}`}>
                <img
                  className=" object-cover hover:scale-[1.1] ease-in duration-200 cursor-pointer"
                  src={prosale.img}
                  alt=""
                />
              </Link>
              <div className="text-center md:mt-4 mt-2">
                <h1 className="md:text-[16px] md:h-[100%] h-[38px] text-[14px] font-medium">
                  {prosale.title}
                </h1>
                <div className="mt-1 md:mt-0">
                  <ul className="flex items-center justify-center md:mb-2 mb-1">
                    <li>
                      <Star style={{ color: "#f0c832", fontSize: "18px" }} />
                    </li>
                    <li>
                      <Star style={{ color: "#f0c832", fontSize: "18px" }} />
                    </li>
                    <li>
                      <Star style={{ color: "#f0c832", fontSize: "18px" }} />
                    </li>
                    <li>
                      <Star style={{ color: "#f0c832", fontSize: "18px" }} />
                    </li>
                    <li>
                      <StarOutline
                        style={{ color: "#ccc", fontSize: "18px" }}
                      />
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <p className="md:text-[16px] text-[14px] text-[#e84545] font-bold">
                    $ {prosale.price}
                  </p>
                  <h2 className="md:text-[16px] pl-3 text-[14px] font-medium line-through text-[#9c9c9c]">
                    {prosale.priceOld}
                  </h2>
                </div>
              </div>
              <div className="flex items-center justify-center md:pt-3 pt-2"  >
                  <button onClick={() => addItem(prosale)} className="rounded-3xl border-2 text-[12px] md:text-[14px]  border-[#d70018] font-medium p-3 hover:bg-[#d70018] hover:text-white duration-700">
                      <p onClick={success}>Add to Cart</p>
                  </button>
              </div>
{/* SALE */}
              <div className="absolute right-0  top-0 ">
                <div className="overflow-hidden relative">
                  <img
                    className="md:h-[70px] h-[50px]"
                    src={prosale.imgSale}
                    alt="img-sale"
                  />
                </div>
              </div>
{/*END IMG SALE */}
            </div>
          );
        })}
      </div>
      <Link data-aos="fade-up"
    data-aos-duration="1000" to="/productsPage" className="flex items-center justify-end">
        <button
          className="underline  text-[14px] mt-6"
        >
          See more
          <ArrowForwardIos style={{ fontSize: "14px" }} />
        </button>
      </Link>
    </div>
  );
};

export default ProductsHome;
