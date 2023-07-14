import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase.config";
import loginicon from "../assets/img/login.png"
import { CloseOutlined, Email, Lock } from "@material-ui/icons";

import RotateLoader from "react-spinners/RotateLoader"

export default function Login  ()  {
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
  
      
        <div className=" start text-white">
          <div className="flex md:relative md:h-[100vh]  items-center justify-center w-[100%] h-[100%]" >
              { loading ?  <div className="flex  h-[100vh] items-center justify-center">
        <RotateLoader color="#fff" 
              height={8}
              width={400}
              loading={loading}/>
      </div>
               :
              <div className="bg-[#1f1f1f7c] border-[#5c5c5c] w-full md:w-auto h-full md:h-auto md:border-2 md:p-8 p-2 md:rounded-3xl md:shadow-2xl text-sm" >
                  
  {/* LOSE*/}
          <Link to="/"><CloseOutlined style={{ fontSize: "20px" }} className="flex items-center justify-center bg-[#cccccc53]  cursor-pointer rounded-full"/></Link>
  {/* END LOSE */}
  
  
            <div className="md:flex  items-center justify-center ">
  {/* IMG */}
                <div className="md:pr-[100px] flex items-center justify-center">
                    <img className="md:w-[300px] w-[100px] object-cover" src="https://cdn-icons-png.flaticon.com/512/8911/8911501.png" alt="" />
               
                 </div>
  {/* END IMG */}
  
  {/* =======FORM======== */}
                    <div>
                      <form onSubmit={login} className="">
                          <h1 className="md:text-[40px] text-xl text-center  font-bold">Login</h1>
              {/* EMAIL */}
                            <div className="mt-4 flex-col flex">
                                  <h1 className="font-medium mb-2 text-sm">Email</h1>
                                    <div className="border-[1px] py-3 w-[100%] rounded-xl flex  items-center justify-center  border-[#5c5c5c]">
                                        <Email style={{ fontSize: "18px" }} className="mx-2"/>
                                        <input className=" bg-transparent w-full  outline-none mx-2 text-sm" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                            </div>
              {/* END EMAIL */}
    
              {/* PASSWORD */}
                            <div className="md:mt-3 mt-2 flex-col flex ">
                                  <h1  className="font-medium mb-2 text-sm">Password</h1>
                                    <div className="border-[1px] py-3 w-[100%] rounded-xl flex  items-center justify-center  border-[#5c5c5c]">
                                        <Lock style={{ fontSize: "18px" }} className="mx-2"/>
                                        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-transparent  outline-none mx-2 text-sm"/>
                                    </div>
                            </div>
              {/* END PASSWORD */}
        
              {/* SIGNUP */}
                            <div className="text-center text-sm">
                                <button type="submit" className="rounded-xl border-[#0a1d37] hover:border-[#5c5c5c]  w-[100%] border-[1px] p-3 bg-[#001e2b] text-white font-medium  hover:bg-[#5c5c5c] hover:text-[#001e2b] duration-500 md:mt-6 mt-5  text-sm">Login</button>
                                    <p className="mt-3">Don't have account?
                                        <Link  className="underline hover:no-underline hover:text-[#5c5c5c]  pl-2" to="/signup">Create an Account</Link>
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
        </div>
   
  );
};


