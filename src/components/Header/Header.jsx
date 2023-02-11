import {
  Apple,
  ArrowForwardIosOutlined,
  ExitToAppOutlined,
  HomeOutlined,
  LocalOfferOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
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
const Header = ( ) => {
  const [loading, setLoading] = useState(false);
  const {currentUser} = useAuth()
  const profileActionRef = useRef(null)
  const navigate = useNavigate()
  const { totalUniqueItems } = useCart();
  let [open, setOpen] = useState(false);







const toggleProfileActions = () => profileActionRef.current.classList.toggle('show__profileActions') // HOVER ACTION

const logout = ()=>{
  signOut(auth).then(()=>{
    toast.success('Logged out')
    navigate('/')
  }).catch(err=>{
    toast.error(err.message)
  })
}

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  let Links = [
    { name: "Home", link: "/", icon: <HomeOutlined style={{ fontSize: "20px" }} />  },
    { name: "Products", link: "/productsPage", icon: <LocalOfferOutlined style={{ fontSize: "20px" }} /> },
    { name: "Cart", link: "/cartPage", icon: <ShoppingCartOutlined style={{ fontSize: "20px" }}/> },
  ];

  return (
      <div>
          <div className="shadow-md w-full fixed top-0 left-0  text-xl z-10">
            <div className="md:flex flex items-center justify-between md:h-[62px] h-[50px] bg-[#171717] text-white  md:px-[160px] px-[20px]">

{/*MENU MOBI*/}
            <div onClick={() => setOpen(!open)}className="cursor-pointer md:hidden">
                  <MenuOutlined style={{ fontSize: "30px" }}></MenuOutlined>
            </div>
{/*END MENU MOBI */}
  
{/* LOGO */}
              <div className="flex-auto  md:flex-initial">
                <NavLink to="/">
                  <div className="flex items-center justify-center ">
                    <div className="bg-[#d70018] md:text-[26px] text-[25px] font-bold ">
                      <h1 className="p-1">V.</h1>
                    </div>
                    <div className="flex items-end px-1 border-2 border-[#d70018] md:text-[16px] text-[15px]  font-medium">
                      <h1>m</h1>
                      <h2 className="mb-1">
                        <Apple style={{ fontSize: "20px" }} />
                      </h2>
                      <h3 className="">c</h3>
                    </div>
                  </div>
                </NavLink>
              </div>
{/* END LOGO */}
  
{/* TEXT */}
              <div>
                <ul className={` bg-[#000] bg-opacity-90 md:flex md:items-center  md:pb-0 h-screen md:h-0  absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0  transition-all duration-500  ease-in ${
                    open ? "top-[50px]" : "top-[-1800px]"
                  }`}>
                  {Links.map((link) => (
                    <li key={link.name} className="md:text-[20] text-[18px] md:h-[62px] md:w-[100px] md:flex md:items-center md:justify-center hover:bg-[#49474769] transition-all duration-600 ease-in h-[50px] flex items-center  md:mx-3 ">
                      <NavLink to={link.link} className="text-white duration-500 ml-6 md:ml-0 flex">
                            <h1 className="md:hidden">{link.icon}</h1>
                            <p className="ml-3 md:ml-0 text-[14px] md:text-[18px]">{link.name}</p>
                      </NavLink>
                    </li>
                  ))}
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
                  <NavLink to="/cartPage">
                      <div className="flex  cursor-pointer mr-3 ">
                          <h1><ShoppingCartOutlined /></h1>
                            <div className="flex items-center justify-center bg-[#d70018] text-white rounded-full text-[13px] absolute ml-[18px] w-4 h-4">
                                <h2 className="">{totalUniqueItems}</h2>
                            </div>
                      </div>
                  </NavLink>
                </div>
{/* END TEXT */}
  
{/* LOGIN & CART */} 
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
{/*END LOGIN & CART */}

              </div>
            </div>
          </div>
      </div>
  );
};

export default Header;
