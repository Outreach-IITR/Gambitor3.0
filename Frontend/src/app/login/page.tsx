"use client";
import React, { useState, Suspense } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa"; // Importing icons
import { useRouter, useSearchParams } from "next/navigation";
import axios from "../https/api";
import dynamic from "next/dynamic";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();
  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const loginwithgoogle = () => {
    window.open("http://localhost:8000/api/v1/auth/google/callback", "_self");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      let payLoad = {
        email: email,
        password: password,
      };
      const response = await axios.post("/auth/login", payLoad);
      console.log(response.data);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full h-screen font-[Public Sans]">
      {/* Left side: Form section */}
      <div className="flex items-center justify-center w-full lg:w-1/2 bg-white">
        <div className="w-full max-w-md px-8 py-10">
          <div className="flex">
            <img className="w-40 h-auto" src="logo.svg" alt="Logo" />
          </div>

          <p className="mt-6 text-2xl font-semibold text-center text-black">
            Log in to your account
          </p>
          <p className="mt-2 text-xs text-center text-gray-600">
            Welcome back! Select a method to register
          </p>
          <a
            onClick={loginwithgoogle}
            className="flex items-center cursor-pointer justify-center mt-8 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <img src="google-icon.svg" alt="Google Icon" className="w-6 h-6 mr-2" />
            <span className="text-sm font-medium text-gray-700">Google</span>
          </a>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-xs text-gray-500">or continue with email</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="relative mt-6">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="LoggingEmailAddress"
              className="block w-full pl-10 pr-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative mt-4">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="loggingPassword"
              className="block w-full pl-10 pr-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type={passwordVisible ? "text" : "password"} // Toggle between "text" and "password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordVisible ? (
              <FaEyeSlash
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaEye
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>

          <div className="mt-4 text-right">
            <a href="#" className="text-xs text-blue-600">
              Forgot Password?
            </a>
          </div>

          <div className="mt-6">
            <button
              onClick={handleSubmit}
              className="w-full py-3 text-sm font-medium tracking-wide text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Log in
            </button>
          </div>

          <div className="mt-6 text-center">
            <a href="/signup" className="text-xs text-gray-500 no-underline">
              Don't have an account?
              <span className="text-blue-600 px-2 py-1 rounded">Create an account</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right side: Image section */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-blue-600">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/dolphin.svg')",
          }}
        >
          {/* Add any additional content or styling specific to the image section here */}
        </div>
      </div>
    </div>
  );
};

const Login = dynamic(() => Promise.resolve(LoginComponent), { ssr: false });

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Login />
    </Suspense>
  );
}
