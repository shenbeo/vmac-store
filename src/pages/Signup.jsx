
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
import RotateLoader from "react-spinners/RotateLoader"



export default function Signup  ()  {

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
    <div className=" start text-white">
      <div className="flex md:relative md:h-[100vh]  items-center justify-center w-[100%] h-[100%]" >
      { loading ?   <div className="flex  h-[100vh] items-center justify-center">
        <RotateLoader color="#fff" 
              height={8}
              width={400}
              loading={loading}/>
      </div>:
        <div className=" bg-[#1f1f1f7c] border-[#5c5c5c] md:w-auto md:h-auto  w-full h-full md:border-2 md:p-8 p-2 md:rounded-3xl md:shadow-2xl text-sm ">
  {/* LOSE */}
              <Link to="/"><CloseOutlined style={{ fontSize: "20px" }} className="flex items-center justify-center bg-[#cccccc53] cursor-pointer rounded-full"/></Link>
  {/*END LOSE */}
              <div className="md:flex items-center justify-center" >
   {/*ICON-USER  */}
              <div className="md:pr-[100px] flex items-center justify-center
              ">
                  <img className="md:w-[300px] w-[100px] object-cover " src="https://cdn-icons-png.flaticon.com/512/8911/8911501.png" alt="icon-user" />
              </div>
  {/*END IMG-USER */}
  
  {/* FORM */}
               <div>
                  <form onSubmit={signup} >
                  <h1 className="md:text-[40px] text-xl text-center  font-bold">Signup</h1>
        {/* USER NAME*/}
                    <div className="md:mt-4 flex-col flex">
                      <h1 className="font-medium mb-2 text-sm">User Name</h1>
                        <div className="border-[1px] py-3 w-[100%] rounded-xl flex  items-center justify-center  border-[#5c5c5c]">
                            <Person style={{ fontSize: "18px" }} className="mx-2"/>
                                <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} className=" w-full  outline-none mx-2 bg-transparent text-sm"/>
                        </div>
                    </div>
        {/* END USER NAME*/}
      
        {/* EMAIL */}
                    <div className="md:mt-3 mt-2 flex-col flex">
                      <h1 className="font-medium mb-2 text-sm">Email</h1>
                        <div className="border-[1px] py-3 w-[100%] rounded-xl flex  items-center justify-center  border-[#5c5c5c]">
                            <Email style={{ fontSize: "18px" }} className="mx-2"/>
                                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className=" w-full bg-transparent  outline-none mx-2 text-sm"/>
                        </div>
                    </div>
        {/* END EMAIL */}
      
        {/* PASSWORD */}
                    <div className="md:mt-3 mt-2 flex-col flex">
                      <h1 className="font-medium mb-2 text-sm">Password</h1>
                        <div className="border-[1px] py-3 w-[100%] rounded-xl flex  items-center justify-center  border-[#5c5c5c]">
                            <Lock style={{ fontSize: "18px" }} className="mx-2"/>
                              <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} className=" w-full bg-transparent  outline-none mx-2 text-sm"/>
                        </div>
                    </div>
        {/* END PASSWORD */}
      
        {/* FILE*/}
     
                    <div className="md:mt-3 mt-2 flex-col flex">
                      <h1 className="font-medium text-sm">Your file</h1>
                        <input type="file"  onChange={(e) => setFile(e.target.files[0])} className="pt-2 cursor-pointer flex flex-wrap text-xs md:text-sm"/>
                    </div>
        {/* END FILE */}
  
        {/* LOGIN */}
                    <div className="flex-col flex items-center justify-center">
                      <button
                        type="submit"
                        className="rounded-xl border-[#0a1d37] hover:border-[#5c5c5c]  w-[100%] border-[1px] p-3 bg-[#001e2b] text-white font-medium  hover:bg-[#f0f0f0c2] hover:text-[#5c5c5c] duration-500 md:mt-6 mt-5  text-sm "
                      >
                        Create an Account
                      </button>
                      <p className="mt-3">
                        Already have account?
                        <Link
                          className="underline hover:no-underline hover:text-[#5c5c5c]  pl-2"
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
    </div>
  );
};


