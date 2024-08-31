"use client";
import Image from "next/image";
import React, { useState, Suspense } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa"; // Importing icons
import { useRouter, useSearchParams } from "next/navigation";
import axios from "../https/api";
import dynamic from "next/dynamic";
import { signInStart, signInSuccess, signInFailure } from "../../redux/user/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
import Load from "../_components/load";

interface UserState {
  currentUser: any;
  loading: boolean;
  error: boolean | string;
}

interface RootState {
  user: UserState;
}

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { loading, error } = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();
  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const loginwithgoogle = async () => {
    try {
      dispatch(signInStart());

      // Step 1: Redirect the user to Google login
      window.location.href = "http://localhost:8000/api/v1/auth/google";

      // Step 2: The redirection will be handled by your backend
      // Since OAuth redirection is handled server-side and browser-based redirection to handle tokens might not be possible,
      // you should instead handle the redirection in the callback route as shown in the backend.
      // No need to poll or check login status manually in the frontend.
    } catch (error: any) {
      let errorMessage = "An unknown error occurred.";

      if (error.response) {
        errorMessage = error.response.data.message || "Google login failed. Please try again.";
      } else if (error.request) {
        errorMessage = "No response from the server. Please check your internet connection.";
      } else {
        errorMessage = error.message || "An unexpected error occurred.";
      }

      console.log(errorMessage);
      dispatch(signInFailure(errorMessage));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Input validation
    if (!email || !password) {
      const validationError = "Please provide both email and password.";
      dispatch(signInFailure(validationError));
      return;
    }

    try {
      // Start sign-in process
      dispatch(signInStart());

      let payLoad = {
        email: email,
        password: password,
      };

      // API call to login
      const response = await axios.post("/auth/login", payLoad);
      const data = response.data;

      if (data.success === false) {
        // Handle unsuccessful login from the server
        dispatch(signInFailure(data.message || "Login failed. Please try again."));
        return;
      }

      const userId = data.data.id;
      router.push(`/dashboard`);
      dispatch(signInSuccess(data));
    } catch (error: any) {
      // Handle different types of errors
      let errorMessage = "An unknown error occurred.";

      if (error.response) {
        // The request was made, but the server responded with an error
        errorMessage = error.response.data.message || "Login failed. Please try again.";
      } else if (error.request) {
        // The request was made, but no response was received
        errorMessage = "No response from the server. Please check your internet connection.";
      } else {
        // Something else happened while making the request
        errorMessage = error.message || "An unexpected error occurred.";
      }

      console.log(errorMessage);
      dispatch(signInFailure(errorMessage));
    }
  };

  return (
    <div className="flex w-full h-screen font-[Public Sans]">
      {/* Left side: Form section */}
      {loading ? (
        <Load />
      ) : (
        <div className="flex items-center justify-center w-full lg:w-1/2 bg-white">
          <div className="w-full max-w-md px-8 py-10">
            <div className="flex">
              <a href="/"><Image className="w-40 h-auto" src="logo.svg" alt="Logo" /></a>
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
              <Image src="google-icon.svg" alt="Google Icon" className="w-6 h-6 mr-2" />
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

            {/* <div className="mt-4 text-right">
            <a href="#" className="text-xs text-blue-600">
              Forgot Password?
            </a>
          </div> */}
            <p className="text-red-700 mt-5">
              {error ? error.toString() || "Something went wrong!" : ""}
            </p>
            <div className="mt-6">
              <button
                onClick={handleSubmit}
                className="w-full py-3 text-sm font-medium tracking-wide text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Log In
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
      )}

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
