'use client';
import Image from "next/image";
import logo from "../_assets/Logo2.svg"
import db from '../_assets/DB.svg'
import dbimg from '../_assets/DownloadOutline.svg'
import icon1 from '../_assets/insta.svg'
import icon2 from '../_assets/FB.svg'
import icon3 from '../_assets/yt.svg'
import icon4 from '../_assets/whatsapp.svg'

import bg from '../_assets/Group.png'
import logo2 from "../_assets/Logo.svg"

// import bg2 from '../_assets/Groupphone.png'


const Headingcss = {

    textShadow: '2px 2px 2px rgba(0, 0, 0, 0.15)' 
  };

export default function SuccessPage(){
    return(
        <div className="pt-[2vw]">
            <nav className="flex justify-between sm:mb-[5rem] px-[5vw] mb-[2rem] ">
                <Image alt='' src={logo} className="sm:w-[307px] w-[138px]"/>
                <div className="flex items-center">
                        <a href="/Brochure.pdf" download>
                            <button className="flex items-center border-2 rounded-[7.2px] border-black sm:w-[305px] sm:h-[56px] p-[0.5em]  ">
                                {/* <Image alt='' className="w-[7rem] sm:w-[12rem]" src={db}/> */}
                                <h1 className="sm:text-[25.5px] font-semibold sm:w-[247.5px] sm:h-[37px] text-[#3664AF] text-[16px]">Download Brochure</h1>
                                <Image alt=''  src={dbimg} className="w-[1rem] sm:w-[2rem]"/>
                            </button>
                        </a>
                </div>
            </nav>
            <div className="flex flex-col  items-center">
            <div className='flex flex-col px-[2rem] items-center justify-center relative z-[1] '>
                <h1 style={Headingcss} className="text-[30px] sm:text-4xl md:text-5xl font-bold text-center my-[2rem] ">YOU HAVE SUCCESSFULLY PRE-REGISTERED </h1>
                <h1 style={Headingcss} className="text-[25px] w-[90%] sm:text-[40px] md:text-[50px] font-semibold mb-[4rem] text-center text-[#3664AF]">Please check your mail for a confirmation mail.</h1>
                <h1 style={Headingcss} className="text-[25px] w-[90%] sm:text-[40px] md:text-[50px] font-semibold mb-[4rem] text-center text-[#3664AF]">Best of Luck for Gambitor !</h1>
            </div>
                <div className="pb-[4rem] ">
                    <h1 className="text-center text-2xl mb-[1rem] sm:text-4xl font-medium text-[#3664AF] ">CONTACT US:</h1>
                    <div className="flex justify-between space-x-4 sm:space-x-[2rem]">
                        <a href="https://www.instagram.com/gambitor.iitr?igsh=MXc3dWM3MW9vZzNyNA=="><Image className="w-[2rem] sm:w-[2.5rem]" alt='' src={icon1}/></a>
                        <a href="https://www.facebook.com/profile.php?id=100094215150920&mibextid=ZbWKwL"><Image className="w-[2rem] sm:w-[2.5rem]" alt='' src={icon2}/></a>
                        <a href="https://youtube.com/@gambitoriitroorkee?si=FQNreC2Tvj7nMPRz"><Image className="w-[2.5rem] sm:w-[3rem] relative -top-[4px]" alt='' src={icon3}/></a>
                        <a href="https://whatsapp.com/channel/0029VaUzMHl5fM5bRmJVk02e"><Image alt='' src={icon4} className="w-[2.5rem] sm:w-[3rem] relative -top-[5px]"/></a>
                    </div>
                </div>
            </div>
            
                <Image alt='' src={bg} className="m-0 w-full"/>
           
            <div className="sm:hidden  w-[100%] a z-[-1] ">
                {/* <Image alt='' src={bg2} className="w-full"/> */}
            </div>
        </div>
    )
}