"use client";

import React, { useState } from "react";
// import logo from "./assets/Personalinfo/logo.svg";
// import burger from "./assets/Personalinfo/Burger.svg";


// import upload from "./assets/Personalinfo/upload.svg";

const Personal = () => {
  const [formData, setFormData] = useState({
    class: "",
    schoolname: "",
    state: "",
    profile: "",
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
  };

  return (
    <div className="w-full bg-[#FFFFFF] h-[724px] flex flex-col items-start ml-4 ">
      

      <div className="flex mt-6  ">
        <div className=" text-4xl text-[#ffffff] font-bold rounded-full w-[50px] h-[50px] bg-[#FF00C7]  ">
            <p className="text-center flex justify-center items-center">s</p>
        </div>

        <div className="ml-2 flex flex-col justify-center">
            <h1 className="text-lg leading-none font-semibold  ">Shashvat Papne</h1>
            <h3 className="text-sm leading-none font-normal  ">Appolox</h3>
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
              id="class"
              value={formData.class}
              onChange={handleChange}
              className="border-[#00000033] border-[1.5px] rounded-t-[4px] w-[93%]  h-[35px] px-2"
            />
          </div>

          <div className="w-[68%] h-[58px] mb-6">
            <label htmlFor="schoolname " className="font-semibold">School Name</label>
            <input
              type="text"
              id="schoolname"
              value={formData.schoolname}
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

        
        <div className="mx-[1%] flex flex-col w-full mb-2">
          <label htmlFor="profile" className="font-semibold">Profile Photo (Optional)</label>
          <input
            type="file"
            id="profile"
            accept="image/*"
            onChange={handleChange}
            className="hidden" // This hides the file input completely
          />

          <label
              htmlFor="profile"
              className="cursor-pointer border-[#00000033] border-[1.5px] rounded-[4px] w-[95%] h-[35px] flex items-center justify-center mb-2 "
            >
              {/* <img src={upload} alt="Upload Icon" className="w-5 h-5 ml-[90%] " /> */}
              
            </label>

          
        </div>

      </form>

      
    </div>
  );
};

export default Personal;