
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { setDoc, doc } from 'firebase/firestore';
import { toast } from "react-toastify";

import loginicon from "../assets/img/login.png"

import { auth } from '../Firebase.config';
import { storage } from '../Firebase.config';
import { db } from '../Firebase.config';


import { useNavigate } from "react-router-dom";
import { CloseOutlined, Email, Lock, Person } from "@material-ui/icons";
import Loader from "../components/Loader/Loader";



const Signup = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()







  const signup = async (e) => {
    e.preventDefault();
    setLoading(true)

    try{
        const userCredential = await  createUserWithEmailAndPassword(auth, email, password);
        const  user = userCredential.user;
        const storageRef = ref(storage, `images/${ Date.now() + username}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
        
        uploadTask.on((error)=>{
          toast.error(error.message)
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
            await updateProfile(user, {
              // update user profile
              displayName: username,
              photoURL: downloadURL,
            });
            // store user data in firestore database
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
            });
          });
        });
        setLoading(false);
        toast.success('Account created')
        navigate('/login')
    } catch (error){
        setLoading(false)
        toast.error("someting went wrong");
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);


  return (
    <div className="flex md:relative md:h-[100vh] md:bg-[#f0f0f0] items-center justify-center w-[100%] h-[100%]" >
    { loading ? <Loader/> :
      <div className=" bg-[#fff] md:p-8 p-6 md:rounded-3xl md:shadow-2xl text-[14px]   md:text-[16px] ">
{/* LOSE */}
            <Link to="/"><CloseOutlined style={{ fontSize: "25px" }} className="flex items-center justify-center bg-[#cccccc53] cursor-pointer rounded-full"/></Link>
{/*END LOSE */}
            <div className="md:flex items-center justify-center" >
 {/*ICON-USER  */}
            <div className="md:pr-[100px] flex items-center justify-center
            ">
                <img className="md:w-[300px] w-[100px] object-cover " src={loginicon} alt="icon-user" />
            </div>
{/*END IMG-USER */}

{/* FORM */}
             <div>
                <form onSubmit={signup} >
                <h1 className="md:text-[40px] text-[24px] text-center  font-bold">Signup</h1>
      {/* USER NAME*/}
                  <div className="mt-2 flex-col flex">
                    <h1 className="font-medium mb-2 text-[16px]">User Name</h1>
                      <div className="border-[1px] py-3 w-[100%] rounded-3xl flex  items-center justify-center  border-black">
                          <Person style={{ fontSize: "23px" }} className="mx-2"/>
                              <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} className=" w-full  outline-none mx-2 text-[16px]"/>
                      </div>
                  </div>
      {/* END USER NAME*/}
    
      {/* EMAIL */}
                  <div className="md:mt-3 mt-2 flex-col flex">
                    <h1 className="font-medium mb-2 text-[16px]">Email</h1>
                      <div className="border-[1px] py-3 w-[100%] rounded-3xl flex  items-center justify-center  border-black">
                          <Email style={{ fontSize: "23px" }} className="mx-2"/>
                              <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className=" w-full  outline-none mx-2 text-[16px]"/>
                      </div>
                  </div>
      {/* END EMAIL */}
    
      {/* PASSWORD */}
                  <div className="md:mt-3 mt-2 flex-col flex">
                    <h1 className="font-medium mb-2 text-[16px]">Password</h1>
                      <div className="border-[1px] py-3 w-[100%] rounded-3xl flex  items-center justify-center  border-black">
                          <Lock style={{ fontSize: "23px" }} className="mx-2"/>
                            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} className=" w-full  outline-none mx-2 text-[16px]"/>
                      </div>
                  </div>
      {/* END PASSWORD */}
    
      {/* FILE*/}
                  <div className="md:mt-3 mt-2 flex-col flex">
                    <h1 className="font-medium text-[16px]">Your file</h1>
                      <input type="file"  onChange={(e) => setFile(e.target.files[0])} className="py-3"/>
                  </div>
      {/* END FILE */}

      {/* LOGIN */}
                  <div className="flex-col flex items-center justify-center">
                    <button
                      type="submit"
                      className="rounded-3xl border-[#0a1d37] hover:border-[#ccccccc2] text-[16px] w-[100%] border-2 p-3 bg-[#0a1d37] text-white font-medium  hover:bg-[#ccccccc2] hover:text-black duration-700 md:mt-6 mt-5 "
                    >
                      Create an Account
                    </button>
                    <p className="mt-3 ">
                      Already have account?
                      <Link
                        className="underline hover:no-underline hover:text-[#0a1d37]  pl-2"
                        to="/login"
                      >
                        Login
                      </Link>
                    </p>
                  </div>
      {/* END LOGIN */}
                </form>
             </div>
{/* END FROM */}

          </div>
      </div>
    }
    </div>
  );
};

export default Signup;
