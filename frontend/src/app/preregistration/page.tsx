"use client";
import Image from 'next/image';
import React, { Suspense } from 'react';
import  { useState,useEffect } from 'react';
import logo from "./_assets/Pre-Registration-page-logo.svg";
import Background from "./_assets/Background.svg"
import DownloadLogo from "./_assets/download-logo.svg";
import dynamic from 'next/dynamic';
import { CSSProperties } from 'react';
import axios from '../https/api';
import { useRouter , useSearchParams } from 'next/navigation';
import { AxiosError } from 'axios';
import ErrorBox from './errorBox';
import ResponseBox from './responseBox';
// import "./aa.css";
import db from './_assets/DB.svg'
import dbimg from './_assets/DownloadOutline.svg';



const PDF_FILE_URL = "/Brochure.pdf";


const PreRegistrationPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams();
  const flag = searchParams.get('isVerified');  
  const [formData, setFormData] = useState({
    name: '  ',
    category: '  ',
    schoolName: '  ',
    contactNumber: '  ',
    email: '  '
  });

  const [isVerified, setIsVerified] = useState(false);
  //const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');

  useEffect(() => {
    if (flag === 'true') {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  }, [flag]);
  useEffect(() => {
    const name = searchParams.get('name') || '';
    const category = searchParams.get('category') || '';
    const schoolName = searchParams.get('schoolName') || '';
    const contactNumber = searchParams.get('contactNumber') || '';
    const email = searchParams.get('email') || '';

    setFormData({
      name,
      category ,
      schoolName,
      contactNumber,
      email
    });
  }, [searchParams]);


  const [errors, setErrors] = useState({
    name: '',
    category: '',
    schoolName: '',
    contactNumber: '',
    email: '',
    text:''
  });
  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { id , value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  // const handleDownload = () => {
  //   const fileName = PDF_FILE_URL.split("/").pop() ?? '';
  //   const a = document.createElement('a');
  //   a.href = PDF_FILE_URL;
  //   a.setAttribute('download', fileName);
  //   a.style.display = 'none';
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  // };

  const handleSubmit =  async (event:any) => {
    setResponse('');
    event.preventDefault();
    console.log(formData); // Example: Logging form data
    if(isVerified){
    try {
      const response = await axios.post('/auth/register', { formData });
      console.log(response.data);
      console.log('success')
      router.push('/success'); // Redirect to a success page
    } catch (error) {
      if (error instanceof Error && 'response' in error && error.response) {
        const axiosError = error as AxiosError<{ errors?: { [key: string]: string }, error?: string }>;
        const errorMessage = axiosError.response?.data?.errors ?? 'Unknown error';
        console.log(errorMessage)
  
        // Set errors state based on errorMessage
        if(errorMessage!='Unknown error'){
        setErrors(() => ({
          name: errorMessage?.name ?? '',
          category: errorMessage?.category ?? '',
          schoolName: errorMessage?.schoolName ?? '',
          contactNumber: errorMessage?.contactNumber ?? '',
          email: errorMessage?.email ?? '',
          text:''
        }));}
        else
        {
          setErrors(() => ({
            name:'',
            category:'',
            schoolName:'',
            contactNumber: '',
            email:'',
            text:''
          }));
        }
        if (formData.name.trim() === '') {
          setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' }));
        }
    
        if (formData.schoolName.trim() === '') {
          setErrors((prevErrors) => ({ ...prevErrors, schoolName: 'Name of school is required' }));
        }
        setErrors((prevErrors) => ({ ...prevErrors, text: axiosError.response?.data?.error ?? '' }));
        
      } else {
        console.error('An error occurred:', error instanceof Error ? error.message : 'Unknown error');
      }
    }
  }
  else
  {
    setErrors((prevErrors) => ({ ...prevErrors, text: 'Registration Failed ! Verify your email first' }));
  }

  };

  const handleClick = async (event:any) => {
    event.preventDefault();
    //router.push('/otpPage'); // Redirect to a page where you need to enter OTP.
    if(formData.email === '')  setErrors((prevErrors) => ({ ...prevErrors, email: 'Email address cannot be empty' }));
    else if(!isVerified){
     //setLoading(true);
    try{
      const response = await axios.post('/sendOtp',{email : formData.email})
      console.log(response.data);
      //setResponse(response.data?.data);
      router.push(`/mailverification?email=${formData.email}&&category=${formData.category}&&name=${formData.name}&&schoolName=${formData.schoolName}&&contactNumber=${formData.contactNumber}`);
    }catch(err)
    {
      console.log(err);
    }
    //  finally{
    //   setLoading(false);
    // }
  }
  else 
    {
      //setResponse that email already verified
      setResponse('Email already verified');
    }
  };

  let backgroundImageStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    
  };


  const formStyleDiv:CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    
    
  };
  
  const Headingcss = {   
    textShadow: '4px 4px 2px rgba(0, 0, 0, 0.10)' 
  };

  

  return (
    <div className=' p-0 m-0 text-[#3664AF] h-screen  w-full flex flex-col items-center'>
      <nav className="flex justify-between  px-[5vw] w-full mt-[2vw] ">
                <Image alt='' src={logo} className="sm:w-[307px] w-[138px]"/>
                <div className="flex items-center">
                        <a href="/Brochure.pdf" download>
                            <button className="flex items-center border-2 rounded-[7.2px] border-black sm:w-[305px] sm:h-[56px] p-[0.5em]  ">
                                {/* <Image alt='' className="w-[7rem] sm:w-[12rem]" src={db}/> */}
                                <h1 className="sm:text-[25.5px] font-semibold sm:w-[247.5px] sm:h-[37px] text-[#3664AF]">Download Brochure</h1>
                                <Image alt=''  src={dbimg} className="w-[1rem] sm:w-[2rem]"/>
                            </button>
                        </a>
                </div>
            </nav>
      <form onSubmit={handleSubmit} className='mt-6 flex flex-col justify-between items-center w-full'>
      <h1 style={Headingcss} className="mt-2 mb-[4rem] w-[25rem] h-[4rem] font-jost text-[2rem] font-extrabold leading-[7rem] tracking-[0.03em] text-center lg:w-[60rem] lg:h-[6rem] lg:text-[4.7rem] lg:my-28" >PRE-REGISTRATION</h1>
        <div style={formStyleDiv} className='w-[24rem] lg:w-[62rem]'>
          <label htmlFor="name" className="mb-1 h-[37.84px] font-jost text-1rem font-semibold  leading-[3.5rem] tracking-[-0.04em] text-left lg:h-[37.84px] lg:mb-3 lg:text-[32px]">NAME</label>
          <ErrorBox message={errors.name} />
          <input type="text" id='name' required className='pl-3 mb-0 w-[100%] h-[2rem] border-2 border-[#3664AF] rounded-[0.5rem] lg:text-2xl font-normal  lg:h-[3.8rem] lg:rounded-[1rem] lg:mb-4 '  value={formData.name} onChange={handleInputChange} />
        </div>
        <div style={formStyleDiv} className='w-[24rem] lg:w-[62rem]'>
            <label htmlFor="category" className="mb-1 h-[37.84px] font-jost text-1rem font-semibold leading-[3.5rem] tracking-[-0.04em] text-left lg:h-[37.84px] lg:mb-3 lg:text-[32px]">
                CATEGORY
            </label>
            <ErrorBox message={errors.category} />
            <select 
            id="category" 
            required
            className="pl-3 mb-0  h-[2rem] border-2 border-[#3664AF] rounded-[0.5rem] lg:text-2xl font-normal  lg:h-[3.8rem] lg:rounded-[1rem] lg:mb-4"
            value={formData.category}
            onChange={handleSelectChange}
            >
            <option value="None">Choose a category</option>
            <option value="ARETEOX" >ARETEOX</option>
            <option value="METIOX" >METIOX</option>
            <option value="APOLLOX">APOLLOX</option>
            <option value="ATHENOX">ATHENOX</option>
            </select>
        </div>
        <div style={formStyleDiv} className='w-[24rem] lg:w-[62rem]'>
          <label htmlFor="schoolName" className="mb-1 h-[37.84px] font-jost text-1rem font-semibold leading-[3.5rem] tracking-[-0.04em] text-left lg:h-[37.84px] lg:mb-3 lg:text-[32px]">SCHOOL NAME</label>
          <ErrorBox message={errors.schoolName} />
          <input type="text" id='schoolName' required className='pl-3 mb-0 h-[2rem] border-2 border-[#3664AF] rounded-[0.5rem] lg:text-2xl font-normal  lg:h-[3.8rem] lg:rounded-[1rem] lg:mb-4'  value={formData.schoolName} onChange={handleInputChange} />
        </div>
        <div style={formStyleDiv} className='w-[24rem] lg:w-[62rem]'>
          <label htmlFor="contactNumber" className="mb-1 h-[37.84px] font-jost text-1rem font-semibold leading-[3.5rem] tracking-[-0.04em] text-left lg:h-[37.84px] lg:mb-3 lg:text-[32px]">CONTACT NUMBER</label>
          <ErrorBox message={errors.contactNumber} />
          {/* <div className="text-red-500 lg:text-xl mb-2 ">
           Please enter your correct mobile number. <strong>This cannot be modified later.</strong>
          </div> */}
          <input type="text" id='contactNumber' placeholder='Enter your correct mobile number.This cannot be modified later.' required className='pl-3 mb-0 w-full h-[2rem] border-2 border-[#3664AF] rounded-[0.5rem] lg:text-2xl font-normal lg:h-[3.8rem] lg:rounded-[1rem] lg:mb-4 placeholder-blue-800 lg:placeholder:text-xl sm:placeholder:text-sm placeholder-xs'  value={formData.contactNumber} onChange={handleInputChange} />
        </div>
        <div style={formStyleDiv} className='w-[24rem] lg:w-[62rem]'>
          <label htmlFor="email" className="mb-1 h-[37.84px] font-jost text-1rem font-semibold leading-[3.5rem] tracking-[-0.04em] text-left lg:h-[37.84px] lg:mb-3 lg:text-[32px]">EMAIL ADDRESS</label>
          <ErrorBox message={errors.email} />
          <input type='email' id='email' required disabled={isVerified} className='pl-3 mb-0  h-[2rem] border-2 border-[#3664AF] rounded-[0.5rem] lg:text-2xl font-normal  lg:h-[3.8rem] lg:rounded-[1rem] lg:mb-2'  value={formData.email} onChange={handleInputChange} />
          
          {!isVerified && <button className="cursor-pointer mt-1 bg-[#3664AF] w-24 h-10 border-0.5 border-[#3664AF] rounded-lg text-white font-jost font-[600] text-base leading-10 tracking-[-0.04em] text-center lg:w-[250px] lg:h-14 lg:border-0.5 lg:rounded-xl lg:text-2xl hover:bg-[#003483]" onClick={handleClick}> VERIFY</button>}
          {isVerified &&  <button className="cursor-pointer mt-1 bg-[#39b79c] w-24 h-10 border-0.5 border-[#36afa5] rounded-lg text-white font-jost font-[600] text-base leading-10 tracking-[-0.04em] text-center lg:w-[250px] lg:h-14 lg:border-0.5 lg:rounded-xl lg:text-2xl">VERIFIED</button>}
        </div>
        <ErrorBox message={errors.text} /> 
        <ResponseBox message={response} />  
        <button type="submit" className="cursor-pointer mt-12 bg-[#3664AF] w-60 h-10 border-0.5 border-[#3664AF] rounded-lg text-white font-jost font-[600] text-xl leading-10 tracking-[-0.04em] text-center
                lg:w-[300px] lg:h-14 lg:border-0.5 lg:rounded-xl lg:text-2xl lg:mt-28 hover:bg-[#003483]">REGISTER</button>
      </form>
      <div>
        <Image src={Background} alt="Background" className='m-0 w-screen' style={backgroundImageStyle} />
      </div>
    </div>
  );
};

const Preregistration = dynamic(() => Promise.resolve(PreRegistrationPage), { ssr: false });

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Preregistration />
    </Suspense>
  );
}