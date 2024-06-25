"use client";
import Image from 'next/image';
import  { useState } from 'react';
import logo from "./_assets/Pre-Registration-page-logo.svg";
import Background from "./_assets/Background.svg";
import DownloadLogo from "./_assets/download-logo.svg";
import { url } from 'inspector';
// import "./aa.css";

const PDF_FILE_URL = "http://localhost:5173/MOKETEST.pdf";

const labelStyle = () => ({


    height: '37.84px',
    marginBottom: '12px',
    fontFamily: 'Jost',
    fontSize: '32px',
    fontWeight: 600,
    lineHeight: '46.24px',
    letterSpacing: '-0.04em',
    textAlign: 'left',

});



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

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData); // Example: Logging form data
  };

  let backgroundImageStyle = {
    // backgroundImage: url("./_assets/Background.svg"),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: "98.93vw"
  };

  const inputStyle = {
    marginBottom: '1rem',
    width: '62rem',
    height: '3.8rem',
    border: 'solid 2px #3664AF',
    borderRadius: '1rem',
    
  };

  const formStyleDiv = {
    display: 'flex',
    flexDirection: 'column',
    
  };
  const Headingcss = {
    marginTop:'0px',
    marginBottom:'6rem',
    width: '60rem',
    height: '6rem',
    fontFamily: 'Jost',
    fontSize: '4.7rem',
    fontWeight: '800',
    lineHeight: '7rem',
    letterSpacing: '0.03em',
    textAlign: 'center',

    
    textShadow: '4px 4px 2px rgba(0, 0, 0, 0.25)' 
  };

  

  return (
    <div className=' p-0 m-0 text-[#3664AF] h-screen  w-378'>
      <div className=' flex justify-between items-center  mt-10'>
        <Image src={logo} alt="Logo" className='w-76 h-20 ml-14' />
        <button className="download_Btn cursor-pointer mr-12 w-80 h-14 border-2 border-black rounded-lg flex flex-row justify-center items-center font-jost bg-white" onClick={handleDownload}>
          <p className='text-xl w-70 ml-2 text-21 font-semibold leading-36.8 tracking-wide text-center '>Download Brochure</p>
          <Image src={DownloadLogo} alt="Download" className='w-10 ml-5 mr-15 h-5'/>
        </button>
      </div>
      <form onSubmit={handleSubmit} className='mt-20 flex flex-col justify-between items-center w-full'>
        <h1 style={Headingcss}>PRE-REGISTRATION</h1>
        <div style={formStyleDiv}>
          <label htmlFor="name" style={labelStyle()}>NAME</label>
          <input type="text" id='name' style={inputStyle} className="text-3xl" value={formData.name} onChange={handleInputChange} />
        </div>
        <div style={formStyleDiv}>
          <label htmlFor="category" style={labelStyle()}>CATEGORY</label>
          <input type="text" id='category' style={inputStyle} className="text-3xl" value={formData.category} onChange={handleInputChange} />
        </div>
        <div style={formStyleDiv}>
          <label htmlFor="schoolName" style={labelStyle()}>SCHOOL NAME</label>
          <input type="text" id='schoolName' style={inputStyle} className="text-3xl" value={formData.schoolName} onChange={handleInputChange} />
        </div>
        <div style={formStyleDiv}>
          <label htmlFor="contactNumber" style={labelStyle()}>CONTACT NUMBER</label>
          <input type="text" id='contactNumber' style={inputStyle} className="text-3xl" value={formData.contactNumber} onChange={handleInputChange} />
        </div>
        <div style={formStyleDiv}>
          <label htmlFor="emailAddress" style={labelStyle()}>EMAIL ADDRESS</label>
          <input type='email' id='emailAddress' style={inputStyle} className="text-3xl" value={formData.emailAddress} onChange={handleInputChange} />
          <button className="cursor-pointer mt-1 bg-[#3664AF] w-32 h-15 border-0.5 border-[#3664AF] rounded-xl text-white font-jost font-[600] text-2xl leading-10 tracking-[-0.04em] text-center">VERIFY</button>
        </div>
        <button type="submit" className="cursor-pointer mt-12 bg-[#3664AF] w-[300px] h-12 border-0.5 border-[#3664AF] rounded-xl text-white font-jost font-[600] text-2xl leading-10 tracking-[-0.04em] text-center">REGISTER</button>
      </form>
      <div>
        <Image src={Background} alt="Background" className='m-0 w-screen ' style={backgroundImageStyle} />
      </div>
    </div>
  );
};

export default PreRegistrationPage;