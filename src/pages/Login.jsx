import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase.config";
import loginicon from "../assets/img/login.png"
import { CloseOutlined, Email, Lock } from "@material-ui/icons";
import Loader from "../components/Loader/Loader";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  
const login = async (e) =>{
  e.preventDefault();
  setLoading(true)

  try{
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    const user = userCredential.user;

  console.log(user)
    setLoading(false)
    toast.success('successfully logged in')
    navigate('/')

  } catch(error){
    setLoading(false)
        toast.error(error.message);
  }
}
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
  
      
        <div className="flex md:relative md:h-[100vh] md:bg-[#f0f0f0] items-center justify-center w-[100%] h-[100%]" >
            { loading ? <Loader/> :
            <div className="bg-[#fff] md:p-8 p-6 md:rounded-3xl md:shadow-2xl text-[14px]   md:text-[16px] " >
                
{/* LOSE*/}
        <Link to="/"><CloseOutlined style={{ fontSize: "25px" }} className="flex items-center justify-center bg-[#cccccc53] cursor-pointer rounded-full"/></Link>
{/* END LOSE */}


          <div className="md:flex  items-center justify-center ">
{/* IMG */}
              <div className="md:pr-[100px] flex items-center justify-center">
                  <img className="md:w-[300px] w-[100px] object-cover" src={loginicon} alt="" />
               </div>
{/* END IMG */}

{/* =======FORM======== */}
                  <div>
                    <form onSubmit={login} className="">
                        <h1 className="md:text-[40px] text-[24px] text-center  font-bold">Login</h1>
            {/* EMAIL */}
                          <div className="mt-2 flex-col flex">
                                <h1 className="font-medium mb-2 text-[16px]">Email</h1>
                                  <div className="border-[1px] py-3 w-[100%] rounded-3xl flex  items-center justify-center  border-black">
                                      <Email style={{ fontSize: "23px" }} className="mx-2"/>
                                      <input className=" w-full  outline-none mx-2 text-[16px]" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                  </div>
                          </div>
            {/* END EMAIL */}
  
            {/* PASSWORD */}
                          <div className="md:mt-3 mt-2 flex-col flex ">
                                <h1  className="font-medium mb-2 text-[16px]">Password</h1>
                                  <div className="border-[1px] py-3 w-[100%] rounded-3xl flex  items-center justify-center  border-black">
                                      <Lock style={{ fontSize: "23px" }} className="mx-2"/>
                                      <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full  outline-none mx-2 text-[16px]"/>
                                  </div>
                          </div>
            {/* END PASSWORD */}
      
            {/* SIGNUP */}
                          <div className="text-center">
                              <button type="submit" className="rounded-3xl border-[#0a1d37] hover:border-[#ccccccc2]  w-[100%] border-2 p-3 bg-[#0a1d37] text-white font-medium  hover:bg-[#ccccccc2] hover:text-black duration-700 md:mt-6 mt-5  text-[16px]">Login</button>
                                  <p className="mt-3">Don't have account?
                                      <Link  className="underline hover:no-underline hover:text-[#0a1d37]  pl-2" to="/signup">Create an Account</Link>
                                  </p>
                          </div>
            {/*END SIGNUP */}
                    </form>
                  </div>
            </div>
{/* ====END FORM======== */}
              </div>
      }
        </div>
   
  );
};

export default Login;
