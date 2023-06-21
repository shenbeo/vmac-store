import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import { proApi } from "../Fake_api/DataApi";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {
  AccessTimeOutlined,
  ChatOutlined,
  SendOutlined,
  Star,
  StarOutline,
  ArrowForwardIos,
} from "@material-ui/icons";
import { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import Tab from "@material-ui/core/Tab";
import Policy from "../components/Policy/Policy";
import { proApiHome } from "../Fake_api/DataApi";
import RotateLoader from "react-spinners/RotateLoader"



export default function ProductsDetails ()  {
  const [products, setProducts] = useState(proApiHome);
  const [value, setValue] = React.useState("1");
  const { addItem } = useCart();
  const { productId } = useParams();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const success = () => {
    toast.success("Product added successfully");
  };
  
  const singleProduct = proApi.find((pro) => pro.id === parseInt(productId));
  const { id, img, imgSale, title, price, priceOld, desc } = singleProduct;

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      { loading ?  <div className="flex  h-[100vh] items-center justify-center">
      <RotateLoader color="#001e2b" 
            height={8}
            width={400}
            loading={loading}/>
    </div> :
        <div>
          <Header />
          <div className="container mx-automd:px-0 px-2">
            <div className=" bg-white w-[100%] h-[100%] ">
              <div className="  pt-[60px] ">
                <div className="md:flex justify-center items-center mt-[30px]">
                  <div className="flex items-center justify-center">
                    <img
                      className="md:h-[100%] h-[300px]"
                      src={img}
                      alt="img-products"
                    />
                  </div>
  
                  <div className="md:ml-4 mt-4 md:mt-0 flex-col flex justify-center">
                    <div className="flex items-center">
                      <h1 className=" text-xl font-bold">
                        {title}
                      </h1>
                      <img
                        className="md:h-[70px] h-[50px]"
                        src={imgSale}
                        alt=""
                      />
                    </div>
  
                    <div className="flex items-center">
                      <ul className="flex items-center ">
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
                      <div className="ml-8 flex items-center md:text-[16px] text-[14px] font-medium">
                        (<h1 className="text-[#e9c953] font-bold mr-1">4.0 </h1>
                        ratings)
                      </div>
                    </div>
  
                    <div className="flex text-xl items-center mt-3">
                      <h2 className="font-bold text-red-600">$ {price}</h2>
                      <p className="line-through text-[#9c9c9c] ml-6">
                         {priceOld}
                      </p>
                    </div>
  
                    <div className="flex flex-wrap">
                      <p className="w-[600px] text-sm font-medium text-justify mt-4">
                        {desc}
                      </p>
                    </div>
  
                    <div className="mt-6 flex">
                      <div onClick={success}>
                        <button
                          onClick={() => addItem(singleProduct)}
                          className="rounded border-[1px] text-sm  border-[#001e2b] p-3 bg-[#001e2b] text-white font-medium hover:bg-white hover:text-black duration-500"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="pt-9">
                  <Box sx={{ width: "100%", typography: "body1" }}>
                    <TabContext value={value}>
                      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList
                          onChange={handleChange}
                          aria-label="lab API tabs example"
                        >
                          <Tab label="Description" value="1" />
                          <Tab label="Reviews" value="2" />
                        </TabList>
                      </Box>
  
                      <TabPanel value="1">
                        <div className="text-justify flex flex-wrap text-sm">
                          
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sapiente libero omnis cumque, ab hic pariatur autem
                            numquam doloremque impedit et recusandae, facere quae
                            magnam similique earum dicta odit, ut neque.Lorem ipsum
                            dolor sit amet consectetur adipisicing elit.
                          
                          <p className="pt-2 text-justify flex flex-wrap text-sm">
                            Sapiente libero omnis cumque, ab hic pariatur autem
                            numquam doloremque impedit et recusandae, facere quae
                            magnam similique earum dicta odit, ut neque. Atque,
                            veniam! Architecto cupiditate doloribus excepturi
                            atque maiores hic labore autem, sed sint omnis
                            deserunt, officia id rerum unde nesciunt vitae
                            inventore.
                          </p>
                        </div>
                      </TabPanel>
  
                      <TabPanel value="2">
                        <h1 className="font-bold text-sm">
                          Reviews & Comments
                        </h1>
                        <div className="flex items-center md:mt-[40px] mt-[20px]  justify-center ">
                          <div className="border-[1px]   md:p-4 p-2 rounded-xl md:flex  items-center justify-center">
                            {/* trai */}
                            <div className="flex-col flex items-center md:mr-[20px] mb-4">
                              <h1 className="font-bold text-sm">
                                4/5
                              </h1>
                              <div>
                                <ul className="flex py-1">
                                  <li>
                                    <Star style={{ color: "#f0c832", fontSize:"16px"}} />
                                  </li>
                                  <li>
                                    <Star style={{ color: "#f0c832", fontSize:"16px"}} />
                                  </li>
                                  <li>
                                    <Star style={{ color: "#f0c832", fontSize:"16px" }} />
                                  </li>
                                  <li>
                                    <Star style={{ color: "#f0c832", fontSize:"16px" }} />
                                  </li>
                                  <li>
                                    <StarOutline style={{ color: "#ccc", fontSize:"16px" }} />
                                  </li>
                                </ul>
                              </div>
                              <div className="flex items-center text-sm">
                                <h1 className="font-bold pr-1">2</h1>
                                Reviews and Comments
                              </div>
                            </div>
  
                            <div className=" text-sm ">
                              {/* 5 STAR */}
                              <div className="flex items-center justify-center ">
                                <div className="flex w-[50px] items-center justify-center">
                                  <h1 className="px-1">5</h1>
                                  <p>
                                    <Star style={{ color: "#f0c832" }} />
                                  </p>
                                </div>
                                <div className="md:w-[300px] w-[200px] h-4 bg-gray-200 rounded md:mr-2 mr-1"></div>
                                <p className="flex md:w-[100px] w-[80px] justify-center ">
                                  0 Reviews
                                </p>
                              </div>
                              {/* 4 STAR */}
                              <div className="flex items-center justify-center  ">
                                <div className="flex w-[50px] items-center justify-center">
                                  <h1 className="px-1">4</h1>
                                  <p>
                                    <Star style={{ color: "#f0c832" }}  />
                                  </p>
                                </div>
                                <div className="md:w-[300px] w-[200px] h-4 bg-[#f0c832] rounded md:mr-2 mr-1 "></div>
                                <p className="flex md:w-[100px] w-[80px] justify-center ">
                                  1 Reviews
                                </p>
                              </div>
                              {/* 3 STAR */}
                              <div className="flex items-center justify-center ">
                                <div className="flex w-[50px] items-center justify-center">
                                  <h1 className="px-1 text-sm">3</h1>
                                  <p>
                                    <Star style={{ color: "#f0c832" }} />
                                  </p>
                                </div>
                                <div className="md:w-[300px] w-[200px] h-4 bg-gray-200 rounded md:mr-2 mr-1 "></div>
                                <p className="flex md:w-[100px] w-[80px] text-sm justify-center ">
                                  0 Reviews
                                </p>
                              </div>
                              {/* 2 STAR */}
                              <div className="flex items-center justify-center ">
                                <div className="flex w-[50px] items-center justify-center">
                                  <h1 className="px-1 text-sm">2</h1>
                                  <p>
                                    <Star style={{ color: "#f0c832" }} />
                                  </p>
                                </div>
                                <div className="md:w-[300px] w-[200px] h-4 bg-gray-200 rounded md:mr-2 mr-1"></div>
                                <p className="flex md:w-[100px] w-[80px] justify-center ">
                                  0 Reviews
                                </p>
                              </div>
                              {/* 1 STAR */}
                              <div className="flex items-center justify-center ">
                                <div className="flex w-[50px] items-center justify-center">
                                  <h1 className="px-1 mr-1 text-sm">1</h1>
                                  <p>
                                    <Star style={{ color: "#f0c832" }} />
                                  </p>
                                </div>
                                <div className="md:w-[300px] w-[200px] h-4 bg-gray-200 rounded md:mr-2 mr-1"></div>
                                <p className="flex md:w-[100px] w-[80px] justify-center">
                                  0 Reviews
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
  
                        <div className="border-[1px] bg-[#f9fafb]  md:p-4 rounded-xl mt-[20px] shadow-lg md:px-[20px] p-2 ">
                          <h1 className="font-bold text-sm">
                            Q&A
                          </h1>
                          <div className="mt-4 mb-[20px] flex items-center justify-center">
                            <input
                              className="md:w-[700px] shadow-lg bg-white outline-none rounded-xl p-3 flex text-sm"
                              type="text"
                              name=""
                              id=""
                              placeholder="Please leave a question. We will reply as soon as possible."
                            />
  
                            <button
                              className="ml-2 bg-red-600 font-bold  text-white rounded-xl p-2  flex items-center justify-center md:text-[16px] text-[14px]"
                            >
                              {/* <SendOutlined /> */}
                              Send
                            </button>
                          </div>
  
                          {/* CMT 1*/}
                          <div>
                            <div className="flex justify-between">
                              <div className="flex items-center justify-center">
                                <h1 className="md:w-8 w-6 h-6 md:h-8 bg-[#ccc] rounded-full flex items-center justify-center font-bold text-base">
                                  V
                                </h1>
                                <p className="md:ml-2 ml-1 text-sm font-bold">
                                  Verson
                                </p>
                              </div>
  
                              <div className="flex items-center justify-center">
                                <h1>
                                  <AccessTimeOutlined
                                    style={{ fontSize: "14px" }}
                                  />
                                </h1>
                                <p className="ml-1 text-sm">
                                  four days ago
                                </p>
                              </div>
                            </div>
  
                            <div>
                              <div className="md:w-[600px] shadow-lg  bg-white  md:p-4 p-2 rounded-xl md:ml-[30px] ml-[25px] md:mt-[18px] mt-[16px] ">
                                <div>
                                  <h1 className="text-sm">
                                    Very Good
                                  </h1>
                                  <p className="flex items-center justify-end text-red-600 font-medium cursor-pointer text-sm">
                                    <ChatOutlined
                                      className="md:mr-2 mr-1"
                                      style={{
                                        fontSize: "14px",
                                        color: "#e84545",
                                      }}
                                    />
                                    answer
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* ADMIN */}
                          <div className="md:ml-[50px] ml-[30px] md:mt-[20px] mt-[16px]">
                            <div className="flex justify-between">
                              <div className="flex items-center justify-center">
                                <h1 className="md:w-8 w-6 md:h-8 h-6 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-base">
                                  A
                                </h1>
                                <p className="md:ml-2 ml-1 text-sm text-red-600 font-bold">
                                  Admin
                                </p>
                              </div>
  
                              <div className="flex items-center justify-center">
                                <h1>
                                  <AccessTimeOutlined
                                    style={{ fontSize: "14px" }}
                                  />
                                </h1>
                                <p className="ml-1 text-sm">
                                  four days ago
                                </p>
                              </div>
                            </div>
  
                            <div>
                              <div className="md:w-[600px] shadow-lg  bg-white  md:p-4 p-2 rounded-xl md:ml-[30px] ml-[25px] md:mt-[18px] mt-[16px]">
                                <div>
                                  <h1 className="text-sm">
                                    Thank you for the product review. If you need
                                    assistance, please contact us.
                                  </h1>
                                  <p className="flex items-center justify-end text-red-600 font-medium cursor-pointer text-sm">
                                    <ChatOutlined
                                      className="mr-2"
                                      style={{
                                        fontSize: "14px",
                                        color: "#e84545",
                                      }}
                                    />
                                    answer
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* END CMT 1 */}
  
                          {/* CMT 2 */}
                          <div className="mt-5">
  
                            <div className="flex justify-between">
                              <div className="flex items-center justify-center">
                                <h1 className="md:w-8 w-6 h-6 md:h-8 bg-[#ccc] rounded-full flex items-center justify-center font-bold text-base">
                                  M
                                </h1>
                                <p className="md:ml-2 ml-1 text-sm font-bold">
                                  Marry
                                </p>
                              </div>
  
                              <div className="flex items-center justify-center">
                                <h1>
                                  <AccessTimeOutlined
                                    style={{ fontSize: "14px" }}
                                  />
                                </h1>
                                <p className="ml-1 text-sm">
                                  two days ago
                                </p>
                              </div>
                            </div>
  
                            <div>
                              <div className="md:w-[600px] shadow-lg  bg-white  md:p-4 p-2 rounded-xl md:ml-[30px] ml-[25px] md:mt-[18px] mt-[16px] ">
                                <div>
                                  <h1 className="text-sm">
                                    Good!!!!!
                                  </h1>
                                  <p className="flex items-center justify-end text-red-600 font-medium cursor-pointer text-sm">
                                    <ChatOutlined
                                      className="md:mr-2 mr-1 "
                                      style={{
                                        fontSize: "14px",
                                        color: "#e84545",
                                      }}
                                    />
                                    answer
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
  
                          {/* ADMIN*/}
                          <div className="md:ml-[50px] ml-[30px] md:mt-[20px] mt-[16px]">
                            <div className="flex justify-between">
                              <div className="flex items-center justify-center">
                                <h1 className="md:w-8 w-6 md:h-8 h-6 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-base">
                                  A
                                </h1>
                                <p className="md:ml-2 ml-1 text-base text-red-600 font-bold">
                                  Admin
                                </p>
                              </div>
  
                              <div className="flex items-center justify-center text-sm">
                                <h1>
                                  <AccessTimeOutlined
                                    style={{ fontSize: "14px" }}
                                  />
                                </h1>
                                <p className="ml-1 ">two days ago</p>
                              </div>
                            </div>
  
                            <div>
                              <div className="md:w-[600px] shadow-lg  bg-white  md:p-4 p-2 rounded-xl md:ml-[30px] ml-[25px] md:mt-[18px] mt-[16px]">
                                <div>
                                  <h1 className="text-sm">
                                    Thank you for the product review. If you need
                                    assistance, please contact us.
                                  </h1>
                                  <p className="flex items-center justify-end text-red-600 font-medium cursor-pointer text-sm">
                                    <ChatOutlined
                                      className="md:mr-2 mr-1"
                                      style={{
                                        fontSize: "14px",
                                        color: "#e84545",
                                      }}
                                    />
                                    answer
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* END CMT 2 */}
                        </div>
                      </TabPanel>
                    </TabContext>
                  </Box>
                </div>
  
                {/* OTHER PRODUCTS */}
                <div  className="border-l-8 pl-6 py-1 mt-10 flex border-red-600 bg-[#ebe6e668] items-center">
                  <h1 className="font-bold md:text-2xl text-[20px] text-[#001e2b]">
                    OTHER PRODUCTS
                  </h1>
                </div>
                
                <div className="md:flex  md:justify-center grid grid-cols-2 justify-between gap-4  items-center md:mt-16 mt-[20px]">
                  
                  {products.map((prohome, index) => {
                    return (
                     
                      
                        <div key={index} className="overflow-hidden relative border-[1px] rounded-lg hover:border-[#001e2b] duration-700 cursor-pointer shadow-xl px-2 pt-4 md:pb-1 pb-4">
                          {/* {loading ? <Loader/> :
                            <div> */}
                              <Link
                                
                                to={`/productsHome/${prohome.id}` } className="flex items-center justify-center"
                              >
                                <img
                                  className="object-cover hover:scale-[1.1] ease-in w-44 duration-200 cursor-pointer"
                                  src={prohome.img}
                                  alt="img-products"
                                />
                              </Link>
                            {/* </div>
                  } */}
                          <div className="text-center md:mt-4 mt-2">
                            <h1 className="text-sm md:h-[100%] h-[38px] font-semibold">
                                {prohome.title.substring(0,20)} ...
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
                            <p className="text-sm text-red-600 font-bold text-center">
                              $ {prohome.price}
                            </p>
                          </div>
                          
                             
                          <div  className="flex items-center justify-center md:mt-4 md:mb-5 mt-2" >
                            <button
                            onClick={() => addItem(prohome)}
                              className="border-[1px] text-sm px-2 py-2 border-[#001e2b]  hover:font-medium  bg-[#001e2b] hover:bg-transparent hover:text-black text-white duration-500"
                            >
                              <p onClick={success}>Add to Cart</p>
                            </button>
                          </div>
                        </div>
                  
                     
                    );
                  })}
        
                </div>
  
                <Link to="/productsPage" className="flex items-center justify-end">
          <button
            className="hover:underline flex items-center duration-500 font-medium  text-sm mt-6 p-2"
          >
            See more
            <ArrowForwardIos style={{ fontSize: "14px" }} />
          </button>
        </Link>
              </div>
            </div>
          </div>
          {/* END OTHER PRODUCTS */}
          <Policy />
          <Footer />
        </div>
      }
    </div>
  );
};


