"use client";

import React, { useState } from "react";


const Dashboard = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    class: "",
    schoolname: "",
    phonenbr: "",
    state: "",
    refferel: "",
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
    <div className="w-full bg-[#FFFFFF] h-[724px] flex flex-col content-center items-center">
      <div className="navbar flex flex-row justify-between px-[5%] h-[10%] w-full pt-[5%]  ">
        <div className="img mr-[20px]">
          <img src="logo.svg" alt="Logo" className="h-[38px] w-[134px]" />
        </div>
        <button className="logout h-[38px] w-[131px] border-[#00000033] border-[0.5px] rounded-[4px] flex justify-evenly items-center ml-[20px]">
          <h1 className="text-md text-[#00000099] text-md font-semibold tracking-[0.5px] ">Sign Out</h1>
          <img src="signout.svg" alt="Sign Out" className="h-[90%] w-[20%]" />
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[95%] content-center items-center justify-around h-full pl-[15px] pr-[15px] mt-[7%] "
      >
        <h1 className="flex w-[100%] justify-center text-3xl font-bold mb-0 pb-0 ">Personal Info</h1>
        <p className="flex w-[95%] justify-center text-center text-md font-light pb-[8%] leading-4 mt-0 pt-0">
          Fill out your personal information so that we can get to know you
          better.
        </p>

        <div className="flex flex-row justify-between items-center mb-0 pb-0 w-full">
          <div className="w-[50%] h-[58px] mb-2">
            <label htmlFor="firstname"  className="font-semibold">First Name</label>
            <input
              type="text"
              id="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="border-[#00000033] border-[1.5px] rounded-t-[4px] w-[90%] h-[35px] px-2 "
            />
          </div>

          <div className="w-[50%] h-[58px] mb-2">
            <label htmlFor="lastname" className="font-semibold">Last Name</label>
            <input
              type="text"
              id="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="border-[#00000033] border-[1.5px] rounded-t-[4px] w-[90%]  h-[35px] px-2"
            />
          </div>
        </div>

        <div className="flex flex-row justify-between items-center ml-[1%] mt-0 pt-0 w-full mb-2 ">
          

          <div className="w-[68%] h-[58px] flex flex-col mb-2">
            <label htmlFor="class " className="font-semibold">Class</label>
            <input
              type="text"
              id="class"
              value={formData.class}
              onChange={handleChange}
              className="border-[#00000033] border-[1.5px] rounded-t-[4px] w-[93%]  h-[35px] px-2"
            />
          </div>

          <div className="w-[68%] h-[58px] mb-2">
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

        <div className=" flex flex-col w-full mb-2">
          <label htmlFor="phonenbr" className="font-semibold">Phone Number (WhatsApp active)</label>
          <input
            type="text"
            id="phonenbr"
            value={formData.phonenbr}
            onChange={handleChange}
            className="border-[#00000033] border-[1.5px] rounded-t-[4px] w-[95%] h-[35px] px-2"
          />
        </div>

        <div className="mx-[1%] flex flex-col w-full mb-2">
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
          <label htmlFor="refferel" className="font-semibold">Referral Code (if any)</label>
          <input
            type="text"
            id="refferel"
            value={formData.refferel}
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
              <img src="upload.svg" alt="Upload Icon" className="w-5 h-5 ml-[90%] " />
              
            </label>

          
        </div>


        <div className="flex flex-row justify-betweeen w-full  ">
          <button className="border-[#00000033] border-[1.5px] rounded-[4px] w-[50%] h-[50px] justify-start font-semibold  hover:bg-[#005EFE] hover:text-[#FFFFFF]">
            Previous Step
          </button>
          <button className="border-[#00000033] border-[1.5px] rounded-[4px] w-[50%] h-[50px] font-semibold  justify-items-end ml-4 hover:bg-[#005EFE] hover:text-[#FFFFFF]">Done </button>
        </div>



      </form>

      <div className="Footer flex flex-row justify-around items-center absolute top-[115%] w-full h-[10%] bg-[#ffffff] mt-6 pb-8">
        <div className="flex flex-row w-[30%] h-[20px] justify-center items-center">
          <img src="right.svg" alt="Next Step"className="mr-2" />
          <h1 className="text-[#00000033] font-bold mr-3">Sign Up</h1>
        </div>
        <div className="flex flex-row w-[39%] h-[20px] justify-center items-center">
          <img src="nbr.svg" alt="Personal Info" className="mr-2" />
          <h1 className="text-[#005EFE] font-bold ">Personal Info</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
