"use client";
import Image from 'next/image';
import  { useState } from 'react';
import logo from "./_assets/Pre-Registration-page-logo.svg";
import Background from "./_assets/Background.svg";
import DownloadLogo from "./_assets/download-logo.svg";

// import "./aa.css";

const PDF_FILE_URL = "/MOKETEST.pdf";


const PreRegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '  ',
    category: '  ',
    schoolName: '  ',
    contactNumber: '  ',
    emailAddress: '  '
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleDownload = () => {
    const fileName = PDF_FILE_URL.split("/").pop();
    const a = document.createElement('a');
    a.href = PDF_FILE_URL;
    a.setAttribute('download', fileName);
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData); // Example: Logging form data
  };

  let backgroundImageStyle = {
    // backgroundImage: url("/Background.svg"),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: "98.93vw"
  };


  const formStyleDiv = {
    display: 'flex',
    flexDirection: 'column',
    
  };
  
  const Headingcss = {   
    textShadow: '4px 4px 2px rgba(0, 0, 0, 0.25)' 
  };

  

  return (
    <div className=' p-0 m-0 text-[#3664AF] h-screen  w-screen flex flex-col items-center'>
      <div className=' flex justify-between items-center  w-screen mt-6 lg:mt-10'>
        <Image src={logo} alt="Logo" className='w-40 h-20 ml-6 lg:w-[320px] lg:ml-16' />
        <button className=" cursor-pointer mr-6 w-40 h-6 border-2 border-black rounded-lg flex flex-row justify-center items-center font-jost bg-white lg:mr-12 lg:w-80 lg:h-14 " onClick={handleDownload}>
          <p className='text-base mr-0 w-full lg:ml-2 text-[0.70rem] font-semibold leading-36.8 tracking-wide text-center lg:text-2xl'>Download Brochure</p>
          <Image src={DownloadLogo} alt="Download" className='w-4 h-4 mr-2 ml-0 lg:ml-5 lg:mr-15  lg:w-10 lg:h-8'/>
        </button>
      </div>
      <form onSubmit={handleSubmit} className='mt-6 flex flex-col justify-between items-center w-full'>
        <h1 style={Headingcss} className="mt-2 mb-[4rem] w-[25rem] h-[4rem] font-jost text-[2rem] font-extrabold leading-[7rem] tracking-[0.03em] text-center lg:width-[60rem] lg:h-[6rem] lg:text-[4.7rem] lg:my-28" >PRE-REGISTRATION</h1>
        <div style={formStyleDiv}>
          <label htmlFor="name" className="mb-1 h-[37.84px] font-jost text-1rem font-semibold  leading-[3.5rem] tracking-[-0.04em] text-left lg:h-[37.84px] lg:mb-3 lg:text-[32px]">NAME</label>
          <input type="text" id='name' required className='mb-0 w-[24rem] h-[2rem] border-2 border-[#3664AF] rounded-[0.5rem] lg:text-3xl font-normal lg:w-[62rem] lg:h-[3.8rem] lg:rounded-[1rem] lg:mb-4 '  value={formData.name} onChange={handleInputChange} />
        </div>
        <div style={formStyleDiv}>
            <label htmlFor="category" className="mb-1 h-[37.84px] font-jost text-1rem font-semibold leading-[3.5rem] tracking-[-0.04em] text-left lg:h-[37.84px] lg:mb-3 lg:text-[32px]">
                CATEGORY
            </label>
            <select 
            id="category" 
            className="mb-0 w-[24rem] h-[2rem] border-2 border-[#3664AF] rounded-[0.5rem] lg:text-3xl font-normal lg:w-[62rem] lg:h-[3.8rem] lg:rounded-[1rem] lg:mb-4"
            value={formData.category}
            onChange={handleInputChange}
            required
            >
            <option value="None">Choose a category</option>
            <option value="METIOX">METIOX</option>
            <option value="APOLLOX">APOLLOX</option>
            <option value="ATHENOX">ATHENOX</option>
            </select>
        </div>
        <div style={formStyleDiv}>
          <label htmlFor="schoolName" className="mb-1 h-[37.84px] font-jost text-1rem font-semibold leading-[3.5rem] tracking-[-0.04em] text-left lg:h-[37.84px] lg:mb-3 lg:text-[32px]">SCHOOL NAME</label>
          <input type="text" id='schoolName' className='mb-0 w-[24rem] h-[2rem] border-2 border-[#3664AF] rounded-[0.5rem] lg:text-3xl font-normal lg:w-[62rem] lg:h-[3.8rem] lg:rounded-[1rem] lg:mb-4'  value={formData.schoolName} onChange={handleInputChange} />
        </div>
        <div style={formStyleDiv}>
          <label htmlFor="contactNumber" className="mb-1 h-[37.84px] font-jost text-1rem font-semibold leading-[3.5rem] tracking-[-0.04em] text-left lg:h-[37.84px] lg:mb-3 lg:text-[32px]">CONTACT NUMBER</label>
          <input type="text" id='contactNumber' required className='mb-0 w-[24rem] h-[2rem] border-2 border-[#3664AF] rounded-[0.5rem] lg:text-3xl font-normal lg:w-[62rem] lg:h-[3.8rem] lg:rounded-[1rem] lg:mb-4'  value={formData.contactNumber} onChange={handleInputChange} />
        </div>
        <div style={formStyleDiv}>
          <label htmlFor="emailAddress" className="mb-1 h-[37.84px] font-jost text-1rem font-semibold leading-[3.5rem] tracking-[-0.04em] text-left lg:h-[37.84px] lg:mb-3 lg:text-[32px]">EMAIL ADDRESS</label>
          <input type='email' id='emailAddress' className='mb-0 w-[24rem] h-[2rem] border-2 border-[#3664AF] rounded-[0.5rem] lg:text-3xl font-normal lg:w-[62rem] lg:h-[3.8rem] lg:rounded-[1rem] lg:mb-2'  value={formData.emailAddress} onChange={handleInputChange} />
          
          <button className="cursor-pointer mt-1 bg-[#3664AF] w-24 h-10 border-0.5 border-[#3664AF] rounded-lg text-white font-jost font-[600] text-base leading-10 tracking-[-0.04em] text-center lg:w-[250px] lg:h-14 lg:border-0.5 lg:rounded-xl lg:text-2xl">VERIFY</button>
        </div>
        <button type="submit" className="cursor-pointer mt-12 bg-[#3664AF] w-60 h-10 border-0.5 border-[#3664AF] rounded-lg text-white font-jost font-[600] text-xl leading-10 tracking-[-0.04em] text-center
                lg:w-[300px] lg:h-14 lg:border-0.5 lg:rounded-xl lg:text-2xl lg:mt-28">REGISTER</button>
      </form>
      <div>
        <img src={Background} alt="Background" className='m-0 w-screen bg1' style={backgroundImageStyle} />
      </div>
    </div>
  );
};

export default PreRegistrationPage;