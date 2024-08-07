"use client"
import Image from 'next/image'
import { useState } from "react";
import './Res.css'
import Logo from './assets/Navbar/logo.svg'
import Cross from './assets/Navbar/cross.svg'
import Box from './assets/Navbar/box.svg'
import Toggler from './assets/Navbar/toggler.svg'

export default function Navbar() {
    const [isTogglerVisible, setIsTogglerVisible] = useState(Toggler);
    const [modal, setModal] = useState(false);

    function childClick(event:any) {
        event.stopPropagation();
        
    }

    function toggleIcons(event:any) {
        event.preventDefault();
        setIsTogglerVisible((prevSrc:any) => (prevSrc === Toggler ? Cross : Toggler));
    }
    const toggleModal = ()=>{
        setModal(!modal);
    }
    let backgroundImageStyle = {
        backgroundImage: `url("popbg.svg")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        
        
      };
    

    return (
            <div>
            <div className="bg-transparent backdrop-blur-md h-[10vh] w-[100%] flex justify-between items-center pl-4 fixed top-0">
            <div>
                <Image src={Logo} alt="Logo" className="h-12" />
            </div>
            <div className="flex flex-row mr-6 mt-1">
                
                    <Image  src={Box} alt="Box" className="mr-1 h-16 w-16  " onClick={toggleModal} />
                
                <Image src={isTogglerVisible} alt="Toggle Icon" onClick={toggleIcons} className=" w-8 " />
            </div>
            </div>
            {modal &&  
            <div className='fixed top-0 w-[100%] h-[100vh] bg-transparent backdrop-blur-sm z-[3] flex justify-center items-center flex-col' onClick={toggleModal}>
                <div className="max-w-[360px] h-[370px] p-[2rem] flex flex-col justify-center items-center space-y-5" style={backgroundImageStyle} onClick={childClick}>
                    <h1 style={{fontFamily:'Cooper Black'}} className='text-[32px] leading-[37px] text-[#4C2D04] font-normal'>Register Now</h1>
                    <p className='text-center font-overpass font-normal leading-[25.32px] text-[20px]'>Unlock 20+ mock paper and 10+ previous year papers. Get weekly questions and leaderboard and compete with your friends</p>
                    <a href="/signup">
                    <button className="w-[144px] h-[36px] rounded-[12px] bg-[#4C2D04] text-[20px] leading-[23px] text-[#FEFEFE] text-center " style={{fontFamily:'Cooper Black'}}>Register</button>
                    </a>
                    <p className='font-overpass font-normal text-lg leading-[28px] text-white text-center'><span className='text-[#4C2D04]'>Already registered?</span><a href="/login" className='cursor-pointer'> Click here to Login</a> </p>
                </div>
                <Image src="/chest.svg" alt="" height={250} width={347} onClick={childClick}></Image>
            </div>
            }
            </div>
            

        
    );
}
