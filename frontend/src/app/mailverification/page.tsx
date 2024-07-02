'use client';
import React, { useState , Suspense} from 'react';
import dynamic from 'next/dynamic';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from "../https/api";
import { AxiosError } from 'axios';
import ErrorBox from '../preregistration/errorBox';
import ResponseBox from '../preregistration/responseBox';
import OTPInput from './otp';

interface ResponseData {
  message?: string;
  data?: string;
}
const MailVerificationComponent = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const name = searchParams.get('name');
  const category = searchParams.get('category');
  const schoolName = searchParams.get('schoolName');
  const contactNumber = searchParams.get('contactNumber');

  const [otp, setOtp] = useState<string[]>(Array(4).fill(''));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  const [response, setResponse] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleVerify = async () => {
    const otpVal = otp.join('');
    setError('');
    setResponse('');
    try {
      const response = await axios.post<ResponseData>('/verifyOtp', { email, otp: otpVal });
      setResponse(response.data?.data || '');
      router.push(`/preregistration?isVerified=true&email=${email}&category=${category}&name=${name}&schoolName=${schoolName}&contactNumber=${contactNumber}`);
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
    router.push(`/preregistration?isVerified=false`);
  };

  const handleResend = async () => {
    setError('');
    setResponse('');
    try {
      const response = await axios.post<ResponseData>('/sendOtp', { email });
      setResponse(response.data?.data || '');
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage = (error.response.data as ResponseData)?.message || 'An error occurred';
        setError(errorMessage);
      }
    }
  };

  return (
    <div className='w-screen h-screen bg-slate-300 flex justify-center items-center'>
      <div className='bg-white h-[400px] w-[85%] flex flex-col justify-center items-center rounded-[0.9rem] md:h-[450px] md:w-[50%] lg:w-[39%] lg:h-[490px] lg:rounded-[1.5rem]'>
        <div className='text-center'>
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

const MailVerification = dynamic(() => Promise.resolve(MailVerificationComponent), { ssr: false });

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MailVerification />
    </Suspense>
  );
}

