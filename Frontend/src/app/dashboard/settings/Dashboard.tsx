"use client";

import React, { useState } from "react";
// import logo from "./assets/Personalinfo/logo.svg";
// import burger from "./assets/Personalinfo/Burger.svg";


// import upload from "./assets/Personalinfo/upload.svg";
import axios from "../../https/api"
import {useDispatch, useSelector } from "react-redux";
import { updateUserStart,updateUserSuccess,updateUserFailure } from "@/redux/user/userSlice";

interface UserState {
  currentUser: any;
  loading: boolean;
  error: boolean | string;
}
interface RootState {
  user: UserState
}


const Personal = () => {
  const user = useSelector(((state:RootState) => state.user.currentUser.data))
  console.log(user)
  const [formData, setFormData] = useState({
    category: user.category,
    schoolName: user.schoolName,
    state: user.state,
    contactNumber : user.contactNumber
  });
  const dispatch = useDispatch()
  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
    try{
     dispatch(updateUserStart())
     const response = await axios.put(`/user/${user.id}/update`,{formData})
     console.log(response.data)
     dispatch(updateUserSuccess(response.data))
    }catch(error)
    {
      console.log(error)
    }
  };
  const fletter = user.name.charAt(0).toLowerCase()
  console.log(fletter);

  return (
    <div className="w-full bg-[#FFFFFF] h-[724px] flex flex-col items-start ml-4 ">
      

      <div className="flex mt-6  ">
        <div className=" text-4xl text-[#ffffff] font-bold rounded-full w-[50px] h-[50px] bg-[#FF00C7]  ">
            <p className="text-center flex justify-center items-center">{fletter}</p>
        </div>

        <div className="ml-2 flex flex-col justify-center">
            <h1 className="text-lg leading-none font-semibold  ">{user.name}</h1>
            <h3 className="text-sm leading-none font-normal  ">{user.category}</h3>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[95%] content-center   h-full  pr-[15px] mt-[7%] "
      >
        
        <h1 className="text-2xl font-bold mb-4 ">Personal Info</h1>
        

        <div className="flex flex-row justify-between items-center ml-[1%] mt-0 pt-0 w-full  ">
          

          <div className="w-[68%] h-[58px] flex flex-col mb-6">
            <label htmlFor="class " className="font-semibold">Class</label>
            <input
              type="text"
              id="category"
              value={formData.category}
              onChange={handleChange}
              className="border-[#00000033] border-[1.5px] rounded-t-[4px] w-[93%]  h-[35px] px-2"
            />
          </div>

          <div className="w-[68%] h-[58px] mb-6">
            <label htmlFor="schoolname " className="font-semibold">School Name</label>
            <input
              type="text"
              id="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              className="border-[#00000033] border-[1.5px] rounded-t-[4px] w-[93%]  h-[35px] px-2"
            />
          </div>
        </div>

        

        <div className="mx-[1%] flex flex-col w-full mb-6">
          <label htmlFor="state" className="font-semibold">State</label>
          <input
            type="text"
            id="state"
            value={formData.state}
            onChange={handleChange}
            className="border-[#00000033] border-[1.5px] rounded-t-[4px] w-[95%] h-[35px] px-2"
          />
        </div>

        <div className="mx-[1%] flex flex-col w-full mb-6">
          <label htmlFor="state" className="font-semibold">Phone Number(Whatsapp Active)</label>
          <input
            type="text"
            id="state"
            value={formData.contactNumber}
            onChange={handleChange}
            className="border-[#00000033] border-[1.5px] rounded-t-[4px] w-[95%] h-[35px] px-2"
          />
        </div>

        <button
          type="submit"
          className="bg-[#0452D8] text-white rounded-[4px] w-[25%] h-[35px] flex items-center justify-center rmd:w-[43%]"
        >
          Save Changes
        </button>

      </form>

      
    </div>
  );
};

export default Personal;