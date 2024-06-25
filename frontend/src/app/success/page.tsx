'use client';
import Image from "next/image";
import logo from "../_assets/Logo2.svg"
import db from '../_assets/DB.svg'
import dbimg from '../_assets/DownloadOutline.svg'

import bg from '../_assets/bgpc.svg'
import logo2 from "../_assets/Logo.svg"

import bg2 from '../_assets/phonebg.svg'


const Headingcss = {

    textShadow: '4px 4px 2px rgba(0, 0, 0, 0.25)' 
  };

export default function SuccessPage(){
    return(
        <div className="pt-[2vw]">
            <nav className="flex justify-between pb-[5rem] px-[5vw] ">
                <Image alt='' src={logo} className="sm:w-[18rem] w-[8rem]"/>
                <div className="flex items-center ">
                        <a href="/Brochure.pdf" download>
                            <button className="flex items-center border-2 rounded-xl border-black sm:px-[2em] sm:h-[4rem] p-[0.5em]  ">
                                <Image alt='' className="w-[7rem] sm:w-[12rem]" src={db}/>
                                <Image alt=''  src={dbimg} className="w-[1rem] sm:w-[2rem]"/>
                            </button>
                        </a>
                </div>
            </nav>
            <div className='flex flex-col px-[2rem] items-center justify-center relative z-[1] h-[40vh]'>
                <h1 style={Headingcss} className="sm:text-[4rem] text-[2rem] font-bold text-center pb-[2rem] ">YOU HAVE SUCCESSFULLY PRE-REGISTERED!</h1>
                <h1 style={Headingcss} className="sm:text-[3rem] text-[1.5rem] font-bold text-center text-blue-800">Best of Luck for Gambitor</h1>
            </div>
            
                <Image alt='' src={bg} className="hidden sm:block absolute bottom-0 w-full z-[-1]"/>
           
            <div className="sm:hidden  w-[100%] absolute bottom-0 z-[-1] ">
                <Image alt='' src={bg2} className="w-full"/>
            </div>
        </div>
    )
}