import { CloseOutlined } from "@material-ui/icons";
import React from "react";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";
import Policy from "../components/Policy/Policy";
import countrydata from '../Fake_api/Countrydata.json';

import { Link } from "react-router-dom";
import RotateLoader from "react-spinners/RotateLoader"


export default function CartPage  ()  {



  const[countryid, setCountryid]=useState('');
  const[state, setState]=useState([]);
  const[stateid, setStateid]= useState('');
  const [loading, setLoading] = useState(false);

  const successDel = () => {
    toast.success("Product Deleted successfully!");
  };

  const successBuy = () => {
    toast.success("Buy successfully!");
  };





  const handlecounty=(e)=>{
    const getcountryId= e.target.value;
    const getStatedata= countrydata.find(country=>country.country_id===getcountryId).states;
    setState(getStatedata);
    setCountryid(getcountryId);
  // console.log(getcountryId);
  }

  const handlestate = (e)=>{
    const stateid= e.target.value;
    //console.log(stateid);
    setStateid(stateid);

  }


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return (
      <div>
        { loading ?  <div className="flex  h-[100vh] items-center justify-center">
      <RotateLoader color="#001e2b" 
            height={8}
            width={400}
            loading={loading}/>
    </div> :
          <div>
            <Header/>
                  <h1 className="flex items-center justify-center text-[30px] md:min-h-[690px]  min-h-[200px] text-black font-medium ">No Products!!!</h1>
            <Footer />
          </div>
        }
      </div>
    );

  return (
    <div className="bg-[#f0f0f0]">
      { loading ? <div className="flex  h-[100vh] items-center justify-center">
      <RotateLoader color="#001e2b" 
            height={8}
            width={400}
            loading={loading}/>
    </div>  :
      <>
        <Header />
  
          <div className=" container mx-auto px-2 md:px-0">
            <div className="md:flex md:flex-col justify-between items-center container ">
    
            
                <div className=" md:grid md:grid-cols-2 flex flex-col  md:mt-[40px] pt-[50px] md:min-h-[620px] ">
    {/* =====================*/}
      
                  <div className="text-sm overflow-y-auto md:h-[520px]">
                    {items.map((item, index) => {
                      return (
                        <div key={index} className="flex  md:mb-4 mb-3 mt-3 md:mt-0  bg-white rounded-xl md:p-3 shadow-md ">
    {/* IMG */}
                          <div>
                            <Link to={`/productsPage/${item.id}`}>
                              <img className="md:p-1 p-2 md:w-[120px] w-[140px] object-cover " src={item.img} alt="img-products" />
                            </Link>
                          </div>
    {/* END IMG */}
      
                          <div className="w-[100%] flex flex-col justify-center md:pl-[30px] pl-6 ">
                    {/* TEXT */}
                            <div className="  flex items-center justify-between  text-sm font-medium ">
                                <h1>{item.title}</h1>
                                      <div
                                          className="flex items-center justify-end mr-3 md:mr-0"
                                          onClick={successDel}
                                          >
                                          <button
                                            onClick={() => removeItem(item.id)}
                                            className="bg-red-600 rounded-full flex items-center justify-center text-white md:h-[20px] md:w-[20px] h-[18px] w-[18px] "
                                          >
                                            <CloseOutlined style={{ fontSize: "16px" }}/>
                                          </button>
                                      </div >
                              </div>
                            <div>
                  {/* END TEXT */}
      
                  {/* PRICE */}
                              <div className="flex mt-1 ">
                                <h1 className=" text-red-600   font-bold  text-sm ">
                                  $ {item.price}
                                </h1>
                                <h2 className="ml-2  font-medium line-through text-[#9c9c9c] text-sm ">
                                  {item.priceOld}
                                </h2>
                              </div>
                  {/* END PRICE */}
      
                  {/* NUMBER */}
                              <div className="flex justify-between mt-2">
                                <div className="flex md:w-[80px] w-[70px]  h-[20px] md:h-[24px]  items-center justify-between border-[1px] border-[#ccc]">
                                  <button
                                    onClick={() =>
                                      updateItemQuantity(item.id, item.quantity - 1)
                                    }
                                    className="flex items-center justify-center text-sm md:h-[24px] md:w-[24px] h-[18px] w-[20px]  border-r-[1px] border-[#ccc]"
                                  >
                                    -
                                  </button>
                                  <h1 className=" md:h-[24px] md:w-[24px] w-[20px]  flex items-center justify-center text-sm font-medium ">
                                    x{item.quantity}
                                  </h1>
                                  <button
                                    onClick={() =>
                                      updateItemQuantity(item.id, item.quantity + 1)
                                    }
                                    className="flex items-center justify-center text-sm md:h-[24px] md:w-[24px] h-[18px] w-[20px]  border-l-[1px] border-[#ccc]"
                                  >
                                    +
                                  </button>
                                </div>
      
                                
                              </div>
                    {/* END NUMBER */}
                            </div>
                          </div>
                        </div>
                      );
                    })}
      
            {/* DELETE & BUY */}
                    {/* <div className="font-medium mt-[20px] md:mt-[40px] md:text-[16px] text-[14px] ">
                      <div className="flex">
                        <div onClick={successDelAll}>
                          <button
                            className="  bg-[#fc2b2b] rounded-3xl md:w-[200px] px-3  text-[16px]  border-2   border-[#fc2b2b] p-3  text-white font-medium hover:bg-white hover:text-black duration-700"
                            onClick={() => emptyCart()}
                          >
                            Delete all
                          </button>
                        </div>
                      </div>
                    </div> */}
            {/*END DELETE & BUY */}
                  </div>
    
      {/* ====================== */}
                  <div className="text-sm md:mt-0 mt-4 md:ml-2">
    
                      <div className=" p-4  rounded-xl bg-white">
                        <h1 className="font-bold">Customer information</h1>
                          <div className=" flex flex-col md:flex md:flex-row items-center justify-center">
                            <input className="border-[1px] border-[#ccc] px-4 rounded p-2 outline-none m-2 w-[100%]" type="text" placeholder="First and last name"/>
                            <input className="border-[1px] border-[#ccc] px-4 rounded p-2 outline-none m-2 w-[100%]" type="text" placeholder="Phone number"/>
                          </div>
                      </div>
    
                      <div className=" mt-4  p-4 text-sm rounded-xl bg-white">
                        <h1 className="font-bold">Choose a delivery method</h1>
                          <div className="flex flex-col text-center w-[100%] ">
                            <div className="my-2 md:m-2">
                              <select  className='outline-none border-[1px] border-[#ccc] rounded p-2 px-4 w-[100%]' onChange={(e)=>handlecounty(e)}>
                                  <option value="">--Select Country--</option>
                                    {
                                        countrydata.map( (getcountry,index)=>(
                                          <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option> 
                                      ))
                                    }
                              </select>
                            </div>
    
                            <div className="my-2 md:m-2 text-sm">
                              <select className='outline-none border-[1px] border-[#ccc] rounded p-2 px-4 w-[100%]' onChange={(e)=>handlestate(e)}>
                                  <option value="">--Select State--</option>
                                      {
                                        state.map((getstate, index)=>(
                                          <option value={getstate.state_id} key={index}>{ getstate.state_name }</option>
                                        ))
                                      }
                              </select>   
                            </div>
                        </div>
    
                            <div className="flex flex-col md:flex md:flex-row items-center justify-center text-sm">
                                <input className="border-[1px] px-4 rounded border-[#ccc] p-2 outline-none m-2 w-[100%]" type="text" placeholder="House number, street name"/>
                                <input className="border-[1px] px-4 rounded border-[#ccc] p-2 outline-none m-2 w-[100%]" type="text" placeholder="Notes (If any)"/>
                            </div>
                         
                            <div className="md:m-2 my-2 text-sm">
                              <select className="outline-none border-[1px] border-[#ccc] rounded p-2 px-4 md:w-[48%] w-[100%]" name="" id="">
                                <option value="" disabled="disabled" >--Choose a delivery method--</option>
                                <option value="">Deliver to home</option>
                                <option value="">Pick up at the store</option>
                              </select>
                            </div>
    
                            <div className="flex flex-col justify-center mt-6 items-start text-sm font-medium ">
                              <span><input className="mr-3" type="checkbox"  name="" id="" />Call someone else to pick up the goods</span>
                              <span><input className="mr-3 my-3" type="checkbox" name="" id="" />Instructions for use, answer questions about the product</span>
                              <span><input className="mr-3" type="checkbox" name="" id="" />Issue company invoice</span>
                            </div>
    
                      </div>
                 
    
                      <div className="mt-4 p-4  rounded-xl bg-white text-sm">
                          <div className="flex items-center justify-between">
                              <h1 className=" font-medium">Total Unique Items:</h1>
                              <p className="">x{totalUniqueItems}</p>
                          </div>
                          <div className="flex items-center justify-between mt-2 text-sm">
                              <h1 className=" font-medium">Total Item:</h1>
                              <p className="">x{totalItems}</p>
                          </div>
                          <div className="flex items-center mt-2 justify-between text-sm">
                              <h1 className="font-bold">Total Price:</h1>
                              <p className="text-red-600 font-bold text-lg"> $ {cartTotal}</p>
                          </div>
                              <hr className="border-[#9c9c9c]  my-4" />
                          <Link to="/" onClick={successBuy}>
                            <button  className="rounded text-sm my-2 w-[100%] border-[1px]   border-[#001e2b] p-3 bg-[#001e2b] text-white font-medium hover:bg-white hover:text-black hover:font-medium duration-500">
                              Buy
                              </button>
                          </Link>
                      </div>
                  </div>
    {/* ======== */}
                </div>
  
            </div>
          </div>
  
          <Policy />
        <Footer />
      </>
      }
    </div>
  );
};


