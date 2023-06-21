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
import RotateLoader from "react-spinners/RotateLoader"

import Sekeleton from "../components/Loader/Sekeleton";




export default function ProductsPage  ()  {
  const [products, setProducts] = useState(proApi);
  const { addItem } = useCart();
  const [loading, setLoading] = useState(false);
  const [loadingSk, setLoadingSk] = useState();

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

    const filteredProducts = proApi.filter((item) => 
      item.category === "iphone14"
      
    );
    setProducts(filteredProducts)
    setLoadingSk(true);
    setTimeout(() => {
      setLoadingSk(false);
    }, 1200);
  }
  if (filterValue === "iphone13") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "iphone13"
    );
    setProducts(filteredProducts);
    setLoadingSk(true);
    setTimeout(() => {
      setLoadingSk(false);
    }, 1200);
  }
  if (filterValue === "iphone12") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "iphone12"
    );
    setProducts(filteredProducts);
    setLoadingSk(true);
    setTimeout(() => {
      setLoadingSk(false);
    }, 1200);
  }
  if (filterValue === "iphone11") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "iphone11"
    );
    setProducts(filteredProducts);
    setLoadingSk(true);
    setTimeout(() => {
      setLoadingSk(false);
    }, 1200);
  }
  if (filterValue === "macpro") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "macpro"
    );
    setProducts(filteredProducts);
    setLoadingSk(true);
    setTimeout(() => {
      setLoadingSk(false);
    }, 1200);
  }
  if (filterValue === "macair") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "macair"
    );
    setProducts(filteredProducts);
    setLoadingSk(true);
    setTimeout(() => {
      setLoadingSk(false);
    }, 1200);
  }
  if (filterValue === "imac") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "imac"
    );
    setProducts(filteredProducts);
    setLoadingSk(true);
    setTimeout(() => {
      setLoadingSk(false);
    }, 1200);
  }
  if (filterValue === "macmini") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "macmini"
    );
    setProducts(filteredProducts);
    setLoadingSk(true);
    setTimeout(() => {
      setLoadingSk(false);
    }, 1200);
  }
  if (filterValue === "ipadpro") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "ipadpro"
    );
    setProducts(filteredProducts);
    setLoadingSk(true);
    setTimeout(() => {
      setLoadingSk(false);
    }, 1200);
  }
  if (filterValue === "ipadair") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "ipadair"
    );
    setProducts(filteredProducts);
    setLoadingSk(true);
    setTimeout(() => {
      setLoadingSk(false);
    }, 1200);
  }
  if (filterValue === "airpods") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "airpods"
    );
    setProducts(filteredProducts);
    setLoadingSk(true);
    setTimeout(() => {
      setLoadingSk(false);
    }, 1200);
  }
  if (filterValue === "earpods") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "earpods"
    );
    setProducts(filteredProducts);
    setLoadingSk(true);
    setTimeout(() => {
      setLoadingSk(false);
    }, 1200);
  }

  if (filterValue === "powercore") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "powercore"
    );
    setProducts(filteredProducts);
    setLoadingSk(true);
    setTimeout(() => {
      setLoadingSk(false);
    }, 1200);
  }
  if (filterValue === "adapter") {
    const filteredProducts = proApi.filter(
      (item) => item.category === "adapter"
    );
    setProducts(filteredProducts);
    setLoadingSk(true);
    setTimeout(() => {
      setLoadingSk(false);
    }, 1200);
  }
  if (filterValue === "glass") {
    
    const filteredProducts = proApi.filter(
      (item) => item.category === "glass"
    );
    setProducts(filteredProducts);
    setLoadingSk(true);
    setTimeout(() => {
      setLoadingSk(false);
    }, 1200);
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
    setLoadingSk(true);
    setTimeout(() => {
      setLoadingSk(false);
    }, 1200);
  };
// END SEARCH





// =============PANIGATE=======================
// const [currentPage, setCurrentPage] = useState(1)
// const recordsPerPage = 8;
// const lastIndex = currentPage * recordsPerPage;
// const firstIndex = lastIndex - recordsPerPage;
// const records = products.slice(firstIndex, lastIndex)
// const npage = Math.ceil(products.length / recordsPerPage)
// const numbers = [...Array(npage +1).keys()].slice(1)


// function prePage(){
//     if(currentPage !== 1){
//         setCurrentPage(currentPage -1)
//         setLoadingSk(true);
//         setTimeout(() => {
//           setLoadingSk(false);
//         }, 1200);
        
//     }
// }
// function changeCPage(id){
//     setCurrentPage(id)
//     setLoadingSk(true);
//     setTimeout(() => {
//       setLoadingSk(false);
//     }, 1200);
    
// }
// function nextPage(){
//     if(currentPage !== npage){
//         setCurrentPage(currentPage +1)
//         setLoadingSk(true);
//         setTimeout(() => {
//           setLoadingSk(false);
//         }, 1200);
//     }
// }
















  return (
    <div>
      { loading ? <div className="flex  h-[100vh] items-center justify-center">
      <RotateLoader color="#001e2b" 
            height={8}
            width={400}
            loading={loading}/>
    </div> :
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
              <div className="flex flex-wrap items-center justify-start container mx-auto mt-8">
                <div className="mr-2">
                  <select
                    onChange={hanleFilter}
                    className="outline-none text-sm p-1 border-[1px] rounded cursor-pointer text-white bg-[#001e2b]"
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

                <div  className="mr-2">
                  <select
                    onChange={hanleFilter}
                    className="outline-none text-sm p-1 border-[1px] rounded cursor-pointer text-white bg-[#001e2b]"
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

                <div  className="mr-2">
                  <select
                    onChange={hanleFilter}
                    className="outline-none text-sm p-1 border-[1px] rounded cursor-pointer text-white bg-[#001e2b]"
                  >
                    <option style={{ background: "#5a5a5b", color:"#fff"  }} value="">
                      iPad
                    </option>
                    <option value="ipadair">iPad Air</option>
                    <option value="ipadpro">iPad Pro</option>
                  </select>
                </div>

                <div  className="mr-2">
                  <select
                    onChange={hanleFilter}
                    className="outline-none text-sm p-1 border-[1px] rounded cursor-pointer text-white bg-[#001e2b]"
                  >
                    <option style={{ background: "#5a5a5b", color:"#fff" }} value="">
                      AirPods
                    </option>
                    <option value="airpods">Air Pods</option>
                    <option value="earpods">Ear Pods</option>
                  </select>
                </div>

                <div  className="mr-2">
                  <select
                    onChange={hanleFilter}
                    className="ooutline-none text-sm p-1 border-[1px] rounded cursor-pointer text-white bg-[#001e2b] "
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
  <div className="flex items-center justify-center md:my-6">
                <div className="  md:w-[300px] flex items-center border-[1px] rounded text-sm border-[#b8b9bc]  outline-none   m-2 p-1">
                  <SearchOutlined />
                  <input
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search..."
                    className="outline-none ml-2 w-[100%]  text-sm"
                  />
                </div>
                </div>
                {/* END SEARCH */}

            <div>

              <div  className=" grid grid-cols-2 md:grid-cols-5 md:grid container mx-auto gap-4 mt-12">
              { products.length === 0? <div className=' text-2xl font-medium text-center'>No  products!!!</div> : products && products.length>0 &&
                products.map((pro, index) => {
                  return (
                    <div>
                                  {loadingSk ? (
      <Sekeleton/>
    ) : (
                      <div key={index} 
                       className="overflow-hidden relative border-[1px] rounded-lg hover:border-[#001e2b] duration-700 cursor-pointer shadow-xl px-2 pt-4 pb-1">
                        <Link to={`/productsPage/${pro.id}`} className="flex items-center justify-center">
                          <img
                            src={pro.img}
                            className="object-cover hover:scale-[1.1] ease-in w-44 duration-200 cursor-pointer"
                            alt="img-products"
                          />
                        </Link>
    
                          <div className=" text-center md:mt-4 mt-2">
                            <h1 className="text-sm md:h-[100%] h-[38px] font-semibold">
                            {pro.title.substring(0,20)} ...
                            </h1>
                            <div className="mt-1 md:mt-0">
                              <ul className="flex items-center justify-center md:mb-2 mb-1">
                                <li>
                                  <Star
                                    style={{ color: "#f0c832", fontSize: "16px" }}
                                  />
                                </li>
                                <li>
                                  <Star
                                    style={{ color: "#f0c832", fontSize: "16px" }}
                                  />
                                </li>
                                <li>
                                  <Star
                                    style={{ color: "#f0c832", fontSize: "16px" }}
                                  />
                                </li>
                                <li>
                                  <Star
                                    style={{ color: "#f0c832", fontSize: "16px" }}
                                  />
                                </li>
                                <li>
                                  <StarOutline
                                    style={{ color: "#ccc", fontSize: "16px" }}
                                  />
                                </li>
                              </ul>
                            </div>
                            <div className="flex items-center justify-center">
                              <p className="text-sm text-red-600 font-bold">
                                $ {pro.price}
                              </p>
                              <h2 className="text-sm pl-3  font-medium line-through text-[#6c6c6c]">
                                {pro.priceOld}
                              </h2>
                            </div>
                          </div>
                        <div  className="flex items-center justify-center md:mt-4 md:mb-5 mt-2"  >
                        <button
                    onClick={() => addItem(pro)}
                      className="border-[1px] text-sm px-2 py-2 border-[#001e2b]  hover:font-medium  bg-[#001e2b] hover:bg-transparent hover:text-black text-white duration-500"
                    >
                      <p onClick={success}>Add to Cart</p>
                    </button>
                        </div>
    
                        <div className="absolute right-0  top-0 ">
                          <div className="overflow-hidden relative">
                            <img
                              className="md:w-18 h-[50px]"
                              src={pro.imgSale}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>)}
                    </div>
                  );
                })}
  
            </div>

            </div>
              {/* panigation */}
              {/* <nav className='mt-10 container mx-auto'>
                          <div className=' flex w-full items-center justify-end'>
                              <div >
                                  <div className=' bg-[#001e2b] font-light text-white p-1 text-sm flex items-center justify-center mr-3 cursor-pointer hover:bg-[#6eacf3] duration-500' onClick={prePage} >Prev</div>
                              </div>
                        
                                  {
                                      numbers.map((n,i)=>{
                                          return(
                                          
                                              <div className={` underline mx-2   ${currentPage === n ? 'active' : ' no-underline mx-2 '}`}  key={i}>
                                                  <div className=' cursor-pointer hover:underline' onClick={()=>changeCPage(n)} >{n}</div>
                                              </div>
                                        
                                          )
                                      })
                                  }
                            
                              <div>
                                  <div className=' bg-[#001e2b] font-light text-white p-1 text-sm flex items-center justify-center ml-3 cursor-pointer hover:bg-[#6eacf3] duration-500' onClick={nextPage} >Next</div>
                              </div>
                          </div>
                      </nav> */}


              {/* ----- */}
              
           
    
            {/* {END SHOW PRODUCTS */}
          </div>
          <Policy />
          <Footer />
        </div>
}
    </div>
  );
};
