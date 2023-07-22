import {
  Apple,
  ArrowForwardIosOutlined,
  ExitToAppOutlined,
  HomeOutlined,
  LocalOfferOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
  Notifications
} from "@material-ui/icons";
import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useState } from "react";
import useAuth from "../../Custom-hooks/useAuth";
import usericon from "../../assets/img/user.png";
import './Header.css';
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import Float_btn from "../Loader/Float_btn";


export default function Header ()  {

  const [loading, setLoading] = useState(false);
  const {currentUser} = useAuth()
  const profileActionRef = useRef(null)
  const navigate = useNavigate()
  const { totalUniqueItems } = useCart();
  let [open, setOpen] = useState(false);


const toggleProfileActions = () => profileActionRef.current.classList.toggle('show__profileActions') // HOVER ACTION

// LOGOUT
const logout = ()=>{
  signOut(auth).then(()=>{
    toast.success('Logged out')
    navigate('/')
  }).catch(err=>{
    toast.error(err.message)
  })
}

// LOADING
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

// FAKE API MENU
  let Links = [
    { name: "Home", link: "/", icon: <HomeOutlined style={{ fontSize: "20px" }} />  },
    { name: "Products", link: "/productsPage", icon: <LocalOfferOutlined style={{ fontSize: "20px" }} /> },
    { name: "Cart", link: "/cartPage", icon: <ShoppingCartOutlined style={{ fontSize: "20px" }}/> },
  ];


  return (
      <div>
        {/* <Float_btn /> */}

          <div className=" w-full fixed top-0 left-0  text-xl z-10">
              <div className="bg-red-500 pt-1 text-white md:font-medium md:text-base text-xs">
                  <marquee behavior="alternate">Record SALE OFF !! 20% only today </marquee>
              </div>
            <div className="md:flex flex items-center shadow-md justify-around md:h-[60px] h-[50px] bg-[#001e2b] text-white  md:px-0 px-2">
{/*MENU MOBI*/}
            <div onClick={() => setOpen(!open)}className="cursor-pointer md:hidden">
                  <MenuOutlined style={{ fontSize: "30px" }}></MenuOutlined>
            </div>

  
{/* LOGO */}
              <div className="flex-auto  md:flex-initial">
                <NavLink to="/">
                  <div className="flex items-center justify-center ">
                    <div className="bg-red-600 rounded-l-3xl md:text-[26px] text-[25px] font-bold flex">
                      <h1 className="pl-2 py-1 pr-1">V.</h1>
                    </div>
                    <div className="flex items-end px-1 border-2 border-red-600 md:text-[16px] text-[15px]  font-medium">
                      <h1>m</h1>
                      <h2 className="mb-1">
                        <Apple style={{ fontSize: "20px" }} />
                      </h2>
                      <h3 className="">c</h3>
                    </div>
                  </div>
                </NavLink>
              </div>

  
{/* TEXT */}
              <div>
                <ul className={` bg-[#000] bg-opacity-90  md:flex  md:items-center  md:pb-0 h-screen md:h-0  absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0  transition-all duration-500  ease-in ${
                    open ? "top-[50px]" : "top-[-1800px]"
                  }`}>
                  <div className=" mt-8  md:mt-0   md:flex">
                    {Links.map((link) => (
                      <li key={link.name} className=" md:text-base text-[18px]  md:h-[62px] md:w-[100px] md:flex md:items-center md:justify-center hover:bg-[#49474769] transition-all duration-600 ease-in h-[50px] flex items-center  md:mx-3 ">
                        <NavLink to={link.link} className="text-white items-center justify-center duration-500 ml-6 md:ml-0 flex">
                              <h1 className="md:hidden">{link.icon}</h1>
                              <p className="ml-3 md:ml-0 text-sm md:text-base">{link.name}</p>
                        </NavLink>
                      </li>
                    ))}
                  </div>
                  {/* <li
                    onClick={() => loading()}
                    className=" text-[18px]  transition-all duration-600 ease-in h-[50px] flex items-center"
                  >
                    <Link
                      className="md:hidden text-white duration-500   ml-6 md:ml-0 border-[#d70018] hover:bg-[#d70018] border-2 rounded-3xl"
                      to="/login"
                    >
                      <p className="p-1 px-6">
                        {
                          currentUser ? ( <span>Logout</span>):(<div>Login</div>)
                        }
                       
                        </p>
                    </Link>
                  </li> */}
                </ul>
              </div>
  
              <div className="flex items-center justify-end">
              <div>
                  <NavLink to="/">
                      <div className="flex  cursor-pointer mr-3 ">
                          <h1 className="w-10 h-10 items-center justify-center duration-300 hover:bg-[#58585875] rounded-full text-[#ccc] flex"><Notifications/></h1>
                            <div className="flex items-center justify-center bg-red-600 text-white rounded-full mt-1  absolute ml-6 w-3 h-3">
                            </div>
                      </div>
                  </NavLink>
                </div>
{/* CART */}
                <div>
                  <NavLink to="/cartPage">
                      <div className="flex  cursor-pointer mr-3   ">
                          <h1 className="w-10 h-10 items-center justify-center duration-300 hover:bg-[#58585875] text-[#ccc] rounded-full flex"><ShoppingCartOutlined /></h1>
                            <div className="flex items-center justify-center bg-red-600 text-white rounded-full text-[13px] absolute ml-6 w-4 h-4">
                                <h2 className="text-[#ccc] font-medium">{totalUniqueItems}</h2>
                            </div>
                      </div>
                  </NavLink>
                </div>
  
{/* LOGIN*/} 
            <div className="profile z-[9] relative md:ml-2 ml-1 ">
            
                <img  className="w-[40px] h-[40px]  ease-in duration-200  cursor-pointer rounded-full" src={ currentUser ? currentUser.photoURL : usericon} alt="icon-user" onClick={toggleProfileActions}  />
                      
                        <div  ref={profileActionRef} className="md:mt-[14px] mt-2 right-0 duration-500 p-[15px] w-35 absolute bg-[#555151d5] cursor-pointer hidden  text-black rounded-xl" onClick={toggleProfileActions}>
                          {
                                currentUser ? (<span className="flex items-center justify-between font-medium hover:underline text-white" onClick={logout}><ExitToAppOutlined className="mr-2"/> Logout</span>) : 
                                (
                                    <div className="flex flex-col">
                                        <NavLink  className="flex items-center justify-between text-[16px] w-38 font-medium hover:underline text-white" to="/signup">Signup<ArrowForwardIosOutlined className="ml-2" style={{ fontSize: "16px" }}/></NavLink>
                                        <NavLink  className="flex items-center pt-2 text-[16px] justify-between hover:underline w-38 font-medium text-white" to="/login">Login<ArrowForwardIosOutlined className="ml-2" style={{ fontSize: "16px" }}/></NavLink>
                                    </div>
                                )
                          }
                        </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
  );
};


