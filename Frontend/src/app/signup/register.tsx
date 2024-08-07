"use client"
import React, { useState } from 'react';
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from 'react-icons/fa'; // Importing icons
import axios from '../https/api'
import { useRouter , useSearchParams } from 'next/navigation';
import { AxiosError } from 'axios';
import ErrorBox from '../_components/ErrorBox';

interface ApiError {
    statusCode: number;
    message: string;
    errors: { [key: string]: string };
    success: boolean;
  }

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()
    const [isVerified, setIsVerified] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [message, setMessage] = useState('');  
    const handleSubmit = async(e:any) => {
        e.preventDefault();
        // Handle form submission logic here
        if(isVerified){
        try {
            const response = await axios.post('/auth/register', { email:email,password:password });
            console.log(response.data);
            setMessage('User created successfully!');
            setErrors({});
            router.push('/personalinfo')
          } catch (error) {
             console.log(error)
             if (error && typeof error === 'object' && 'response' in error) {
                const axiosError = error as { response?: { data?: ApiError } };
                const apiError = axiosError.response?.data as ApiError;
                if (apiError) {
                  setMessage(apiError.message);
                  setErrors(apiError.errors);
                } else {
                  setMessage('An unexpected error occurred.');
                }
              } else {
                setMessage('An unexpected error occurred.');
              }
          }
        }
        else
         setMessage('Email not verified . Verify your email first !')
    };
    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // To verify email address

    const handleVerify = async(e:any) => {
      
    }

    return (
        <div className="flex w-full h-screen font-[Public Sans]">
            {/* Left side: Form section */}
            <div className="flex items-center justify-center w-full lg:w-1/2 bg-white">
                <div className="w-full max-w-md px-8 py-10">
                    <div className="flex">
                        <img
                            className="w-40 h-auto"
                            src="logo.svg"
                            alt="Logo"
                        />
                    </div>

                    <p className="mt-6 text-2xl font-semibold text-center text-black">
                        Create a new account
                    </p>
                    <p className="mt-2 text-xs text-center text-gray-600">
                        Welcome back! Select a method to sign up
                    </p>

                    <a
                        href="http://localhost:8000/api/v1/auth/google"
                        className="flex items-center justify-center mt-8 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                        <img src="google-icon.svg" alt="Google Icon" className="w-6 h-6 mr-2" />
                        <span className="text-sm font-medium text-gray-700">
                            Google
                        </span>
                    </a>

                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-2 text-xs text-gray-500">or continue with email</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>
                    <form onSubmit={handleSubmit}>
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
                    <ErrorBox message={errors.email}/>
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
                    <ErrorBox message={errors.password}/>
                    <div className="mt-4 text-right">
                        <a href="#" className="text-xs text-blue-600">
                            Forgot Password?
                        </a>
                    </div>
                    <div className='text-center'><ErrorBox message={message}/></div>
                    <div className="mt-6">
                        <button className="w-full py-3 text-sm font-medium tracking-wide text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Sign up
                        </button>
                        
                    </div>
                    </form>
                    <div className="mt-6 text-center text-xs text-gray-500 no-underline">
                        
                            Already have an account?
                        <a href="/login" className="">
                            <span className="text-blue-600 px-2 py-1 rounded">
                                Click here to Login
                            </span>
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

export default Register;
