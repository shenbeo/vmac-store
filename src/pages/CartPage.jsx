import { CloseOutlined } from "@material-ui/icons";
import React from "react";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";
import Policy from "../components/Policy/Policy";
import countrydata from '../Fake_api/Countrydata.json';
import Loader from "../components/Loader/Loader";
import { Link } from "react-router-dom";


const CartPage = () => {
  const successDel = () => {
    toast.success("Product Deleted successfully!");
  };


  const[countryid, setCountryid]=useState('');
  const[state, setState]=useState([]);
  const[stateid, setStateid]= useState('');
  const [loading, setLoading] = useState(false);


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
        { loading ? <Loader/> :
          <div>
            <Header/>
                  <h1 className="flex items-center justify-center text-[30px] md:min-h-[690px]  min-h-[200px] text-black font-medium ">No Products</h1>
            <Footer />
          </div>
        }
      </div>
    );

  return (
    <div className="bg-[#f0f0f0]">
      { loading ? <Loader/>  :
      <>
        <Header />
  
          <div className=" md:px-[160px] px-[20px]">
            <div className="md:flex md:flex-col justify-between items-center ">
    
            
                <div className=" md:grid md:grid-cols-2 flex flex-col  md:mt-[40px] pt-[50px] md:min-h-[620px] ">
    {/* =====================*/}
      
                  <div className="text-[14px] md:text-[16px] overflow-y-auto md:h-[520px]">
                    {items.map((item, index) => {
                      return (
                        <div key={index} className="flex  md:mb-4 mb-3 mt-3 md:mt-0  bg-white rounded-3xl md:p-3 shadow-md ">
    {/* IMG */}
                          <div>
                            <Link to={`/productsPage/${item.id}`}>
                              <img className="md:p-1 p-2 md:w-[120px] w-[140px] object-cover " src={item.img} alt="img-products" />
                            </Link>
                          </div>
    {/* END IMG */}
      
                          <div className="w-[100%] flex flex-col justify-center md:pl-[30px] pl-6 ">
                    {/* TEXT */}
                            <div className="  flex items-center justify-between  text-[14px] md:text-[16px] font-medium ">
                                <h1>{item.title}</h1>
                                      <div
                                          className="flex items-center justify-end mr-3 md:mr-0"
                                          onClick={successDel}
                                          >
                                          <button
                                            onClick={() => removeItem(item.id)}
                                            className="bg-[#cc1f1f] rounded-full flex items-center justify-center text-white md:h-[25px] md:w-[25px] h-[20px] w-[20px] "
                                          >
                                            <CloseOutlined style={{ fontSize: "16px" }}/>
                                          </button>
                                      </div >
                              </div>
                            <div>
                  {/* END TEXT */}
      
                  {/* PRICE */}
                              <div className="flex mt-1 ">
                                <h1 className=" text-[#e84545]   font-bold  md:text-[16px] text-[14px] ">
                                  $ {item.price}
                                </h1>
                                <h2 className="ml-2  font-medium line-through text-[#9c9c9c]  md:text-[16px] text-[14px] ">
                                  {item.priceOld}
                                </h2>
                              </div>
                  {/* END PRICE */}
      
                  {/* NUMBER */}
                              <div className="flex justify-between mt-2">
                                <div className="flex md:w-[100px] w-[70px]  h-[20px] md:h-[30px]  items-center justify-between border-[1px] border-[#ccc]">
                                  <button
                                    onClick={() =>
                                      updateItemQuantity(item.id, item.quantity - 1)
                                    }
                                    className="flex items-center justify-center md:text-[20px] text-[14px] md:h-[30px] md:w-[30px] h-[18px] w-[20px]  border-r-[1px] border-[#ccc]"
                                  >
                                    -
                                  </button>
                                  <h1 className="md:text-[16px] md:w-[30px] w-[20px]  text-center text-[12px] font-medium ">
                                    x{item.quantity}
                                  </h1>
                                  <button
                                    onClick={() =>
                                      updateItemQuantity(item.id, item.quantity + 1)
                                    }
                                    className="flex items-center justify-center md:text-[20px] text-[14px] md:h-[30px] md:w-[30px] h-[18px] w-[20px]  border-l-[1px] border-[#ccc]"
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
                  <div className="text-[14px] md:text-[16px] md:mt-0 mt-4 md:ml-2">
    
                      <div className=" p-4  rounded-3xl bg-white">
                        <h1 className="font-bold">Customer information</h1>
                          <div className=" flex flex-col md:flex md:flex-row items-center justify-center">
                            <input className="border-[1px] border-[#ccc] px-4 rounded-3xl p-2 outline-none m-2 w-[100%]" type="text" placeholder="First and last name"/>
                            <input className="border-[1px] border-[#ccc] px-4 rounded-3xl p-2 outline-none m-2 w-[100%]" type="text" placeholder="Phone number"/>
                          </div>
                      </div>
    
                      <div className=" mt-4  p-4  rounded-3xl bg-white">
                        <h1 className="font-bold">Choose a delivery method</h1>
                          <div className="flex flex-col text-center w-[100%] ">
                            <div className="my-2 md:m-2">
                              <select  className='outline-none border-[1px] border-[#ccc] rounded-3xl p-2 px-4 w-[100%]' onChange={(e)=>handlecounty(e)}>
                                  <option value="">--Select Country--</option>
                                    {
                                        countrydata.map( (getcountry,index)=>(
                                          <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option> 
                                      ))
                                    }
                              </select>
                            </div>
    
                            <div className="my-2 md:m-2">
                              <select className='outline-none border-[1px] border-[#ccc] rounded-3xl p-2 px-4 w-[100%]' onChange={(e)=>handlestate(e)}>
                                  <option value="">--Select State--</option>
                                      {
                                        state.map((getstate, index)=>(
                                          <option value={getstate.state_id} key={index}>{ getstate.state_name }</option>
                                        ))
                                      }
                              </select>   
                            </div>
                        </div>
    
                            <div className="flex flex-col md:flex md:flex-row items-center justify-center">
                                <input className="border-[1px] px-4 rounded-3xl border-[#ccc] p-2 outline-none m-2 w-[100%]" type="text" placeholder="House number, street name"/>
                                <input className="border-[1px] px-4 rounded-3xl border-[#ccc] p-2 outline-none m-2 w-[100%]" type="text" placeholder="Notes (If any)"/>
                            </div>
                         
                            <div className="md:m-2 my-2">
                              <select className="outline-none border-[1px] border-[#ccc] rounded-3xl p-2 px-4 md:w-[48%] w-[100%]" name="" id="">
                                <option value="" disabled="disabled" >--Choose a delivery method--</option>
                                <option value="">Deliver to home</option>
                                <option value="">Pick up at the store</option>
                              </select>
                            </div>
    
                            <div className="flex flex-col justify-center mt-6 items-start ">
                              <span><input className="mr-3" type="radio" name="" id="" />Call someone else to pick up the goods</span>
                              <span><input className="mr-3 my-3" type="radio" name="" id="" />Instructions for use, answer questions about the product</span>
                              <span><input className="mr-3" type="radio" name="" id="" />Issue company invoice</span>
                            </div>
    
                      </div>
                 
    
                      <div className="mt-4 p-4  rounded-3xl bg-white">
                          <div className="flex items-center justify-between">
                              <h1>Total Unique Items:</h1>
                              <p className="">x{totalUniqueItems}</p>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                              <h1 className="">Total Item:</h1>
                              <p className="">x{totalItems}</p>
                          </div>
                          <div className="flex items-center mt-2 justify-between">
                              <h1 className="font-bold">Total Price:</h1>
                              <p className="text-[#fc2b2b] font-bold text-[20px]"> $ {cartTotal}</p>
                          </div>
                              <hr className="border-[#9c9c9c]  my-4" />
                          <button  className="rounded-3xl md:text-[18px] text-[16px] my-4 w-[100%] border-2   border-[#1cc053] p-3 bg-[#1cc053] text-white font-medium hover:bg-white hover:text-black duration-700">
                            Buy
                            </button>
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

export default CartPage;
