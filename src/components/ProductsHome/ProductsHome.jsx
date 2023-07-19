import React from "react";
import { proApiHome } from "../../Fake_api/DataApi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ArrowForwardIos, Star, StarOutline } from "@material-ui/icons";
import { useCart } from "react-use-cart";

export default function ProductsHome() {
  const [products, setProducts] = useState(proApiHome); //Api
  const { addItem } = useCart();

  const success = () => {
    toast.success("Product added successfully");
  };

  return (
    <div className=" bg-white">
      <div className=" container mx-auto md:mt-10 mt-14 px-2 md:px-0">
        <div className="border-l-8 pl-6 py-1 flex border-red-600 bg-[#dadada] items-center overflow-hidden relative ">
          <h1 className="font-bold md:text-2xl text-[20px] text-[#001e2b] ">
            PRODUCTS
          </h1>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid grid-cols-2 md:grid-cols-6 md:grid container mx-auto gap-4 md:mt-8 mt-[20px]"
          // className="md:flex md:flex-wrap  md:justify-center grid grid-cols-2 justify-between md:gap-4 gap-2  items-center md:mt-8 mt-[20px]"
        >
          {products.map((prohome, index) => {
            return (
              <div
                key={index}
                className="overflow-hidden relative border-[1px] border_sh rounded-xl hover:border-[#001e2b] duration-700 cursor-pointer shadow-xl hover:shadow-2xl px-2 pt-4 md:pb-1 pb-4"
              >
                <Link
                  to={`/productsHome/${prohome.id}`}
                  className="flex items-center justify-center"
                >
                  <img
                    className=" object-cover hover:scale-[1.1] ease-in w-44 duration-200 cursor-pointer"
                    src={prohome.img}
                    alt="img-products"
                  />
                </Link>
                <div className="text-center md:mt-4 mt-2">
                  <h1 className="text-sm md:h-[100%] h-[38px] font-semibold">
                    {prohome.title.substring(0, 20)} ...
                  </h1>
                  <div className="mt-1 md:mt-0">
                    <ul className="flex items-center justify-center md:mb-2 mb-1">
                      <li>
                        <Star style={{ color: "#f0c832", fontSize: "16px" }} />
                      </li>
                      <li>
                        <Star style={{ color: "#f0c832", fontSize: "16px" }} />
                      </li>
                      <li>
                        <Star style={{ color: "#f0c832", fontSize: "16px" }} />
                      </li>
                      <li>
                        <Star style={{ color: "#f0c832", fontSize: "16px" }} />
                      </li>
                      <li>
                        <StarOutline
                          style={{ color: "#ccc", fontSize: "16px" }}
                        />
                      </li>
                    </ul>
                  </div>
                  <p className="text-sm text-red-600 font-bold text-center">
                    $ {prohome.price}
                  </p>
                </div>
                <div className="flex items-center justify-center md:mt-4 md:mb-5 mt-2">
                  <button
                    onClick={() => addItem(prohome)}
                    className="border-[1px] rounded text-sm px-2 py-2 border-[#001e2b]  hover:font-medium  bg-[#001e2b] hover:bg-transparent hover:text-black text-white duration-500"
                  >
                    <p onClick={success}>Add to Cart</p>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <Link
          data-aos="fade-up"
          data-aos-duration="1000"
          to="/productsPage"
          className="flex items-center justify-end"
        >
          <button className="hover:underline flex items-center duration-500 font-medium  text-sm mt-6 p-2">
            See more
            <ArrowForwardIos style={{ fontSize: "14px" }} />
          </button>
        </Link>
      </div>
    </div>
  );
}
