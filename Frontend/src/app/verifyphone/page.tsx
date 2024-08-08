"use client";
import { useState,Suspense } from "react";
import OTPInput from "../verify/otp";
import axios from '../https/api'
import { AxiosError } from "axios";
import { useRouter, useSearchParams } from 'next/navigation';
interface ResponseData {
  message?: string;
  data?: string;
}
import ErrorBox from "../_components/ErrorBox";
import ResponseBox from "../_components/ResponseBox";
import dynamic from "next/dynamic";

const PhoneVerificationComponent = ()=>{

    const [otp, setOtp] = useState(Array(4).fill(''));
    const searchParams = useSearchParams();
    const router=useRouter()
    const firstName = searchParams.get('firstName');
    const id = searchParams.get('id');
    const lastName = searchParams.get('lastName');
    const state = searchParams.get('state');
    const category = searchParams.get('category');
    const schoolName = searchParams.get('schoolName');
    const contactNumber = searchParams.get('contactNumber');
    const referralCode = searchParams.get('referralCode');
    const [response, setResponse] = useState<string>('');
    const [error, setError] = useState<string>('');
    const handleInputChange = (e:any, index:any) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };
  const handleVerify = async () => {
    const otpVal = otp.join('');
    setError('');
    setResponse('');
    try {
      const response = await axios.post<ResponseData>('/verifyOtpPhone', { contactNumber, otp: otpVal });
      setResponse(response.data?.data || '');
      router.push(`/personalinfo?isVerified=true&firstName=${firstName}&&category=${category}&&lastName=${lastName}&&schoolName=${schoolName}&&contactNumber=${contactNumber}&&state=${state}&&referralCode=${referralCode}&&id=${id}`);
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage = (error.response.data as ResponseData)?.message || 'An error occurred';
        setError(errorMessage);
      }
    }
  };

  const handleCancel = () => {
    setError('');
    setResponse('Account not verified');
    router.push(`/personalinfo?isVerified=false&firstName=${firstName}&&category=${category}&&lastName=${lastName}&&schoolName=${schoolName}&&contactNumber=${contactNumber}&&state=${state}&&referralCode=${referralCode}&&id=${id}`);
  };

  const handleResend = async () => {
    setError('');
    setResponse('');
    try {
      const response = await axios.post<ResponseData>('/sendOtpPhone', { contactNumber });
      setResponse(response.data?.data || '');
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage = (error.response.data as ResponseData)?.message || 'An error occurred';
        setError(errorMessage);
      }
    }
  };


    return(
        <div className=' w-screen h-screen bg-slate-300 flex justify-center items-center'>
      <div className='bg-white h-[400px] w-[85%] flex flex-col justify-center items-center rounded-[0.9rem] md:h-[450px] md:w-[50%] lg:w-[39%] lg:h-[490px] lg:rounded-[1.5rem]'>
        <div className='text-center'>
          {/* <img src={emailLogo} alt='' className='h-16 w-16 mt-8 md:h-24 md:w-24' /> */}
          <ResponseBox message={response} />
          <ErrorBox message={error} /> 
        </div>
        <div className='mt-4 text-center'>
          <h2 className='font-semibold font-600 text-[1.2rem] h-8 md:text-[1.5rem]'>Please check your Messages</h2>
          <p className='mt-1 text-[1rem] font-normal md:text-[1.2rem]'>We’ve sent a code to </p>
        </div>
        <div className='text-center mt-8 flex flex-row w-full justify-center'>
        <OTPInput length={4} onChange={handleInputChange} />
        </div>
        <div className='mt-2 text-center md:mt-4'>
          <p className='md:text-[1.2rem]'>Didn’t get the code? <a href="#" className='text-[#0452D8] underline underline-offset-4' onClick={handleResend} >Click to resend</a></p>
        </div>
        <div className='text-center mt-8 flex flex-row w-[80%] justify-center'>
          <button onClick={handleCancel} className='w-28 h-8 mr-8 text-center text-[#0452D8] border-2 border-[#0452D8] rounded-[0.2rem]' >Cancel</button>
          <button onClick={handleVerify} className='w-28 h-8 mb-4 text-center text-white bg-[#0452D8] border-2 border-[#3664AF] rounded-[0.2rem]' >Verify</button>
        </div>
      </div>
    </div>
    )
}

const PhoneVerify = dynamic(() => Promise.resolve(PhoneVerificationComponent), { ssr: false });

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PhoneVerify />
    </Suspense>
  );
}