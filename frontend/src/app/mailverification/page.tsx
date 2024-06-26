'use client';
import React, { useState , useEffect,useRef } from 'react';
import emailLogo from './_assets/Email-logo.svg'
import { useRouter,useSearchParams } from 'next/navigation';
import axios from "../https/api"
import { AxiosError } from 'axios';
//import "./aa.css";
import ErrorBox from '../preregistration/errorBox';
import ResponseBox from '../preregistration/responseBox'
import OTPInput from './otp';

const mailVerification = () => {

  const searchParams = useSearchParams();
  const email = searchParams.get('email');  
  const name = searchParams.get('name');  
  const category = searchParams.get('category');  
  const schoolName = searchParams.get('schoolName');  
  const contactNumber = searchParams.get('contactNumber');  
  const [otp, setOtp] = useState(Array(4).fill(''));

  const handleInputChange = (e:any, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  // const handleInputChange = (e:any) => {
  //   const { name, value } = e.target;
  //   if (value.length <= 1) {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value
  //     }));
  //   }
  // };

  const handleVerify = async (e:any) => {
    const otpVal =otp.join('') ;
    console.log(otpVal)
    setError('');
    setResponse('');
    try{

        const response = await axios.post('/verifyOtp',{email:email,otp:otpVal});
        console.log(response.data.message);
        //set response verified successfuly
        setResponse(response.data?.data);
        router.push(`/preregistration?isVerified=${true}&&email=${email}&&category=${category}&&name=${name}&&schoolName=${schoolName}&&contactNumber=${contactNumber}`)
        //if invalid set response 

    }catch(error)
    {
        if (error instanceof Error && 'response' in error && error.response) {
            const axiosError = error as AxiosError;
            const errorMessage = axiosError.response?.data?.message;
            console.log(axiosError.response?.data?.message);
            setError(errorMessage)
            // set Error invalid OTP
        }
    }
  }
  const handleCancel = ()=>{
    // set response account not verified
    setError('');
    setResponse('Account not verified');
    router.push(`/preregistration?isVerified=${false}`)
  }
  const handleResend = async (e:any) => {
    //const otp = formData.num1+formData.num2+formData.num3+formData.num4;
    setError('');
    setResponse('');
    try{

        const response = await axios.post('/sendOtp',{email});
        console.log(response.data?.data);
        setResponse(response.data?.data);
        //set response mail sent successfully

    }catch(error)
    {
        if (error instanceof Error && 'response' in error && error.response) {
            const axiosError = error as AxiosError;
            console.log(axiosError.response?.data?.message);
            setError(axiosError.response?.data?.message)
            // const errorMessage = (axiosError.response?.data as { errors?: { [key: string]: string } })?.errors ?? 'Unknown error';
            // console.log(errorMessage);
            // set error
            
        }
    }
  }

  return (
    <div className=' w-screen h-screen bg-slate-300 flex justify-center items-center'>
      <div className='bg-white h-[400px] w-[85%] flex flex-col justify-center items-center rounded-[0.9rem] md:h-[450px] md:w-[50%] lg:w-[39%] lg:h-[490px] lg:rounded-[1.5rem]'>
        <div className='text-center'>
          {/* <img src={emailLogo} alt='' className='h-16 w-16 mt-8 md:h-24 md:w-24' /> */}
          <ResponseBox message={response} />
          <ErrorBox message={error} />
        </div>
        <div className='mt-4 text-center'>
          <h2 className='font-semibold font-600 text-[1.2rem] h-8 md:text-[1.5rem]'>Please check your email</h2>
          <p className='mt-1 text-[1rem] font-normal md:text-[1.2rem]'>We’ve sent a code to {email}</p>
        </div>
        <div className='text-center mt-8 flex flex-row w-full justify-center'>
        <OTPInput length={4} onChange={handleInputChange} />
        </div>
        <div className='mt-2 text-center md:mt-4'>
          <p className='md:text-[1.2rem]'>Didn’t get the code? <a href="#" className='text-[#0452D8] underline underline-offset-4' onClick={handleResend}>Click to resend</a></p>
        </div>
        <div className='text-center mt-8 flex flex-row w-[80%] justify-center'>
          <button className='w-28 h-8 mr-8 text-center text-[#0452D8] border-2 border-[#0452D8] rounded-[0.2rem]' onClick={handleCancel}>Cancel</button>
          <button className='w-28 h-8 mb-4 text-center text-white bg-[#0452D8] border-2 border-[#3664AF] rounded-[0.2rem]' onClick={handleVerify}>Verify</button>
        </div>
      </div>
    </div>
  );
}

export default mailVerification;