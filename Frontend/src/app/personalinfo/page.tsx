"use client";

import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  class: string;
  schoolName: string;
  phoneNumber: string;
  state: string;
  referralCode: string;
  profilePhoto: File | null;
}

export default function PersonalInfo() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    class: "",
    schoolName: "",
    phoneNumber: "",
    state: "",
    referralCode: "",
    profilePhoto: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "profilePhoto") {
      setFormData((prevData) => ({
        ...prevData,
        profilePhoto: files ? files[0] : null,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex text-black">
      <div className="bg-white w-1/4 flex flex-col p-8 items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={120}
          height={80}
          className="absolute top-8 left-6"
        />
        <div className="flex flex-col justify-center pt-72">
          <p className="text-black text-opacity-20 flex flex-row mb-8">
            <Image
              src="/success.png"
              alt="done"
              width={24}
              height={24}
              className="mr-2"
            />{" "}
            Sign Up
          </p>
          <p className="text-[#005EFE] font-bold flex flex-row">
            <span className="bg-[#005EFE] text-white w-6 h-6 rounded-full text-center mr-2">
              2
            </span>{" "}
            Personal Info
          </p>
        </div>
      </div>

      <div className="bg-[#FAFAFA] w-3/4 flex flex-col p-8">
        <div className="flex flex-col items-end mb-4">
          <Image
            src="/profile.png"
            alt="profile"
            width={32}
            height={32}
            className="rounded-full mr-2"
          />
          <button className="px-4 py-2 border border-black border-opacity-20 text-black text-opacity-60 text-sm items-center justify-center flex rounded">
            Sign Out
            <Image
              src="/exit.png"
              alt="profile"
              width={16}
              height={16}
              className="ml-2"
            />
          </button>
        </div>
        <h1 className="text-3xl font-bold">Personal Info</h1>
        <p className="mb-6">
          Fill out your personal information so that we can get to know you
          better.
        </p>
        <form onSubmit={handleSubmit} className="me-24">
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-1/2 px-2 mb-4">
              <label
                htmlFor="firstName"
                className="block text-black mb-1 text-sm transition-colors duration-200 ease-in-out peer-focus:text-[#005EFE]"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded peer"
              />
            </div>
            <div className="w-1/2 px-2 mb-4">
              <label
                htmlFor="lastName"
                className="block text-black mb-1 text-sm transition-colors duration-200 ease-in-out peer-focus:text-[#005EFE]"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded peer"
              />
            </div>
            <div className="w-1/3 px-2 mb-4">
              <label
                htmlFor="class"
                className="block text-black mb-1 text-sm transition-colors duration-200 ease-in-out peer-focus:text-[#005EFE]"
              >
                Class
              </label>
              <input
                type="text"
                id="class"
                name="class"
                value={formData.class}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded peer"
              />
            </div>
            <div className="w-1/3 px-2 mb-4">
              <label
                htmlFor="schoolName"
                className="block text-black mb-1 text-sm transition-colors duration-200 ease-in-out peer-focus:text-[#005EFE]"
              >
                School Name
              </label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded peer"
              />
            </div>
            <div className="w-1/3 px-2 mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-black mb-1 text-sm transition-colors duration-200 ease-in-out peer-focus:text-[#005EFE]"
              >
                Phone Number (WhatsApp Active)
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded peer"
              />
            </div>
          </div>
          <div className="w-1/4 mb-4">
            <label
              htmlFor="state"
              className="block text-black mb-1 text-sm transition-colors duration-200 ease-in-out peer-focus:text-[#005EFE]"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded peer"
            />
          </div>
          <div className="w-1/4 mb-4">
            <label
              htmlFor="referralCode"
              className="block text-black mb-1 text-sm transition-colors duration-200 ease-in-out peer-focus:text-[#005EFE]"
            >
              Referral Code (if any)
            </label>
            <input
              type="text"
              id="referralCode"
              name="referralCode"
              value={formData.referralCode}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded peer"
            />
          </div>
          <div className="w-1/4 mb-6">
            <label
              htmlFor="profilePhoto"
              className="block text-black text-sm mb-1 transition-colors duration-200 ease-in-out peer-focus:text-[#005EFE]"
            >
              Profile Photo (optional)
            </label>
            <div className="relative flex items-center px-3 py-2 border bg-white border-gray-300 focues:border-[#005EFE] cursor-pointer">
              <span className="text-gray-600">Upload a Photo</span>
              <Image
                src="/exit.png"
                alt="Upload Icon"
                width={16}
                height={16}
                className="ml-2 -rotate-90 absolute right-0 mr-2"
              />
              <input
                type="file"
                id="profilePhoto"
                name="profilePhoto"
                onChange={handleChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
          </div>

          <div className="flex justify-between mb-6 mt-16">
            <button
              type="button"
              className="px-4 py-2 border border-black border-opacity-20 text-black text-opacity-60 text-sm rounded"
            >
              Previous Step
            </button>
            <button
              type="submit"
              className="px-8 py-2 bg-[#005EFE] text-white rounded"
            >
              Done
            </button>
          </div>
          <div className="text-gray-600 flex justify-end">
            <span className="mr-1">Having troubles? </span>
            <a href="#" className="text-[#005EFE]">
              Get help
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
