import React from "react";
import { useState, useEffect } from "react";
import { proApi } from "../Fake_api/DataApi";
import {
  SearchOutlined,
  Star,
  StarOutline,
} from "@material-ui/icons";
import Banner from "../assets/img/banner1.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Policy from "../components/Policy/Policy";
import Loader from "../components/Loader/Loader";




const ProductsPage = () => {
  const [products, setProducts] = useState(proApi);
  const { addItem } = useCart();
  const [loading, setLoading] = useState(false);

  const success = () => {
    toast.success("Product added successfully");
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);


 // FILTER
 const hanleFilter = (e) => {
  const filterValue = e.target.value;
  
  if (filterValue === "iphone14") {

    const filteredProducts = proApi.filter(
      (item) => item.category === "iphone14"
      
    );
    setProducts(filteredProducts)
  }
  if (filterValue === "iphone13") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "iphone13"
    );
    setProducts(filteredProducts);
  }
  if (filterValue === "iphone12") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "iphone12"
    );
    setProducts(filteredProducts);
  }
  if (filterValue === "iphone11") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "iphone11"
    );
    setProducts(filteredProducts);
  }
  if (filterValue === "macpro") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "macpro"
    );
    setProducts(filteredProducts);
  }
  if (filterValue === "macair") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "macair"
    );
    setProducts(filteredProducts);
  }
  if (filterValue === "imac") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "imac"
    );
    setProducts(filteredProducts);
  }
  if (filterValue === "macmini") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "macmini"
    );
    setProducts(filteredProducts);
  }
  if (filterValue === "ipadpro") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "ipadpro"
    );
    setProducts(filteredProducts);
  }
  if (filterValue === "ipadair") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "ipadair"
    );
    setProducts(filteredProducts);
  }
  if (filterValue === "airpods") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "airpods"
    );
    setProducts(filteredProducts);
  }
  if (filterValue === "earpods") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "earpods"
    );
    setProducts(filteredProducts);
  }

  if (filterValue === "powercore") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "powercore"
    );
    setProducts(filteredProducts);
  }
  if (filterValue === "adapter") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "adapter"
    );
    setProducts(filteredProducts);
  }
  if (filterValue === "glass") {
    
    const filteredProducts = proApi.filter(
      (item) => item.category === "glass"
    );
    setProducts(filteredProducts);
  }
};
// END FILTER


// SERACH
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searcedProducts = proApi.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(searcedProducts);
  };
// END SEARCH


  return (
    <div>
      { loading ? <Loader/> :
        <div>
          <Header />
          <div className="  md:mt-[62px] mt-[50px] w-full h-full">
{/* BANNER */}
            <div>
              <img
                className="w-[100%] h-[100%] object-cover"
                src={Banner}
                alt="img-banner"
              />
            </div>
{/* END BANNER */}


{/* ITEM PRO */}
              <div className="flex flex-wrap items-center justify-start  my-4 md:px-[160px] px-[20px]">
                <div>
                  <select
                    onChange={hanleFilter}
                    className="outline-none text-[14px] md:text-[16px] md:p-3 p-2 border-[1px]  md:m-2  rounded-3xl cursor-pointer border-[#e5e7eb] bg-[#f3f4f6]"
                  >
                  
                    <option style={{ background: "#5a5a5b", color:"#fff" }} value="">
                      iPhone
                    </option>
                
                    <option value="iphone14">iPhone 14</option>
                    <option value="iphone13">iPhone 13</option>
                    <option value="iphone12">iPhone 12</option>
                    <option value="iphone11">iPhone 11</option>
                  </select>
                </div>

                <div>
                  <select
                    onChange={hanleFilter}
                    className="outline-none text-[14px] md:text-[16px] md:p-3 p-2 border-[1px]  md:m-2 m-1 rounded-3xl cursor-pointer border-[#e5e7eb] bg-[#f3f4f6] "
                  >
                    <option
                      style={{ background: "#5a5a5b", color:"#fff" }}
                      value=""
                    >
                      Macbook
                    </option>
                    <option value="macpro">Macbook Pro</option>
                    <option value="macair">Macbook Air</option>
                    <option value="imac">iMac</option>
                    <option value="macmini">Mac Mini</option>
                  </select>
                </div>

                <div>
                  <select
                    onChange={hanleFilter}
                    className="outline-none text-[14px] md:text-[16px] md:p-3 p-2 border-[1px]  md:m-2 m-1 rounded-3xl cursor-pointer border-[#e5e7eb] bg-[#f3f4f6]"
                  >
                    <option style={{ background: "#5a5a5b", color:"#fff"  }} value="">
                      iPad
                    </option>
                    <option value="ipadair">iPad Air</option>
                    <option value="ipadpro">iPad Pro</option>
                  </select>
                </div>

                <div>
                  <select
                    onChange={hanleFilter}
                    className="outline-none text-[14px] md:text-[16px] md:p-3 p-2 border-[1px]  md:m-2 m-1 rounded-3xl cursor-pointer border-[#e5e7eb] bg-[#f3f4f6] "
                  >
                    <option style={{ background: "#5a5a5b", color:"#fff" }} value="">
                      AirPods
                    </option>
                    <option value="airpods">Air Pods</option>
                    <option value="earpods">Ear Pods</option>
                  </select>
                </div>

                <div>
                  <select
                    onChange={hanleFilter}
                    className="outline-none text-[14px] md:text-[16px] md:p-3 p-2 border-[1px]  md:m-2 m-1 rounded-3xl cursor-pointer border-[#e5e7eb] bg-[#f3f4f6] "
                  >
                    <option style={{ background: "#5a5a5b", color:"#fff"  }} value="">
                      Accessory
                    </option>
                    <option value="adapter">Adapter</option>
                    <option value="powercore">Power Core</option>
                    <option value="glass">Glass</option>
                  </select>
                </div>
              </div>
{/* END ITEM PRO*/}

{/* SEARCH */}
  <div className="flex items-center justify-center md:my-8">
                <div className=" md:w-[400px] flex items-center border-2 text-[14px] md:text-[16px] border-[#b8b9bc]  outline-none h-[40px]  m-2 rounded-3xl p-3 ">
                  <SearchOutlined />
                  <input
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search..."
                    className="outline-none ml-2 w-[100%]  text-[14px] md:text-[16px]"
                  />
                </div>
                </div>
                {/* END SEARCH */}

            <div  className=" grid grid-cols-2 md:grid-cols-4 md:grid md:px-[160px] px-[20px] pb-[20px]">
              {products.map((pro, index) => {
                return (
                  <div key={index} data-aos="fade-up"
                  data-aos-duration="1500" className="overflow-hidden flex-col my-3 mx-2 p-3 flex items-center justify-center relative ">
                    <Link to={`/productsPage/${pro.id}`}>
                      <img
                        src={pro.img}
                        className="object-cover hover:scale-[1.1] ease-in duration-200 md:h-[220px]  md:p-2 cursor-pointer"
                        alt="img-products"
                      />
                    </Link>

                      <div className=" text-center md:mt-4 mt-3">
                        <h1 className="md:text-[16px] md:mb-4 flex items-start justify-center md:h-[32px] h-[36px] text-[14px] font-medium">
                          {pro.title}
                        </h1>
                        <div className="mt-1 md:mt-0">
                          <ul className="flex items-center justify-center md:mb-2 mb-1">
                            <li>
                              <Star
                                style={{ color: "#f0c832", fontSize: "18px" }}
                              />
                            </li>
                            <li>
                              <Star
                                style={{ color: "#f0c832", fontSize: "18px" }}
                              />
                            </li>
                            <li>
                              <Star
                                style={{ color: "#f0c832", fontSize: "18px" }}
                              />
                            </li>
                            <li>
                              <Star
                                style={{ color: "#f0c832", fontSize: "18px" }}
                              />
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
                            $ {pro.price}
                          </p>
                          <h2 className="md:text-[16px] text-[14px] font-medium line-through text-[#9c9c9c] ml-2">
                            {pro.priceOld}
                          </h2>
                        </div>
                      </div>
                    <div  className="flex items-center justify-center md:pt-3 pt-2"  >
                    <button
                onClick={() => addItem(pro)}
                  className="rounded-3xl border-2 text-[12px] md:text-[14px]  border-[#d70018] font-medium p-3 hover:bg-[#d70018] hover:text-white duration-700"
                >
                  <p onClick={success}>Add to Cart</p>
                </button>
                    </div>

                    <div className="absolute right-0  top-0 ">
                      <div className="overflow-hidden relative">
                        <img
                          className="md:h-[70px] h-[50px]"
                          src={pro.imgSale}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
    
            {/* {END SHOW PRODUCTS */}
          </div>
          <Policy />
          <Footer />
        </div>
       }
    </div>
  );
};

export default ProductsPage;
