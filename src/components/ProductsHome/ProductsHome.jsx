import React from "react";
import { proApiHome } from "../../Fake_api/DataApi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ArrowForwardIos,
  Star,
  StarOutline,
} from "@material-ui/icons";
import { useCart } from "react-use-cart";

const ProductsHome = () => {
  const [products, setProducts] = useState(proApiHome); //Api
  const { addItem } = useCart();

  const success = () => {
    toast.success("Product added successfully");
  };

  return (
    <div  className="md:px-[160px] px-[20px] mt-[80px]">
      <div className="border-l-[8px] pl-6 border-[#d70018] bg-[#ebe6e668]">
        <h1 className="font-bold md:text-[28px] text-[20px]  ">PRODUCTS</h1>
      </div>

      <div data-aos="fade-up"
    data-aos-duration="1000" className="md:flex  md:justify-center grid grid-cols-2 justify-between  items-center md:mt-[40px] mt-[20px]">
        {products.map((prohome, index) => {
          return (
            <div key={index} className="my-2 md:mt-0">
              <Link to={`/productsHome/${prohome.id}`}>
                <img
                  className=" object-cover hover:scale-[1.1]  ease-in duration-200 cursor-pointer"
                  src={prohome.img}
                  alt="img-products"
                />
              </Link>
              <div className="text-center md:mt-4 mt-2">
                <h1 className="md:text-[16px] text-[14px] md:h-[100%] h-[38px] font-medium">
                  {prohome.title}
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
                <p className="md:text-[16px] text-[14px] text-[#e84545] font-bold text-center">
                  $ {prohome.price}
                </p>
              </div>
              <div className='flex items-center justify-center md:pt-3 pt-2'>
                  <button onClick={() => addItem(prohome)} className="rounded-3xl border-2 md:text-[14px] text-[12px] border-[#d70018] p-3 font-medium hover:bg-[#d70018] hover:text-white duration-700">
                      <p onClick={success}>Add to Cart</p>
                  </button>
              </div>
            </div>
          );
        })}
      </div>
      <Link data-aos="fade-up"
    data-aos-duration="1000"  to="/productsPage" className="flex items-center justify-end">
        <button
          className="underline  text-[14px]  mt-6"
        >
          See more
          <ArrowForwardIos style={{ fontSize: "14px" }} />
        </button>
      </Link>
    </div>
  );
};

export default ProductsHome;
