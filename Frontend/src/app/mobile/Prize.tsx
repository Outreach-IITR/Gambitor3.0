"use client";
import Image from 'next/image'

import { useState } from "react";

import Navbar from './NavBar1.jsx'


import First from './assets/Prize/First.svg'
import Second from './assets/Prize/Second.svg'
import Third from './assets/Prize/Third.svg'
import V1 from './assets/Prize/v1.svg'
import V2 from './assets/Prize/v2.svg'
import W2 from './assets/Prize/w2.svg'
import W1 from './assets/Prize/w1.svg'





export default function Prize() {
    
    return (
        <div id='PRIZES' className="relative bg-[#2445B5] z-[4] h-[1550px] w-full text-white mb-0 pb-0">
            {/* <Navbar></Navbar> */}
            <div className="flex flex-col items-center">
                <h1 className="font-cooper w-screen absolute text-[32px] text-center top-[100px]  text-white font-normal leading-[36.7px] " style={{fontFamily:'Cooper Black'}}>PRIZES</h1>
                
                
                <Image src={W1} alt=""  className="absolute top-[90px] left-[15%]"/>
                <Image src={W2} alt="" className="absolute top-[1300px] right-[10%]"/>
                <Image src={V1} alt="" className="absolute top-[75px] left-[0%] w-screen"/>
                <Image src={V2} alt="" className="absolute top-[700px] left-[0%] w-screen"/>

                <div className="absolute top-[180px]  h-[1300px] flex flex-col items-center justify-between   ">
                        <div  className=" flex flex-col items-center text-center">
                            <Image src={First} alt="" className="h-[60%]"/>
                            <div className="font-overpass border-2 w-[70%] rounded-[10%] mt-[15px] hover:border-[#FFE909] hover:bg-[#FFF8DD] hover:text-[#003874]">
                                <h1 className="text-3xl mt-[10px] ">1st place</h1>
                                <h2 className="text-2xl my-[5px]">Cash prize <br />+ <br />exciting gifts <br /> from IIT Roorkee</h2>
                            </div>
                        </div>

                        <div className=" flex flex-col items-center text-center">
                            <Image src={Second} alt="" />
                           <div className="font-overpass border-2 w-[70%] rounded-[10px] mt-[15px] hover:border-[#FFE909] hover:bg-[#FFF8DD] hover:text-[#003874] ">
                                <h1 className="text-3xl mt-[10px] ">2nd place</h1>
                                <h2 className="text-2xl my-[5px]" >Cash prize</h2>
                           </div>
                        </div>

                        <div className="  flex flex-col items-center text-center">
                            <Image src={Third} alt="" />
                            <div className="font-overpass border-2 w-[70%] rounded-[10px] mt-[15px] hover:border-[#FFE909] hover:bg-[#FFF8DD] hover:text-[#003874]">
                                <h1 className="text-3xl mt-[10px] ">3rd place</h1>
                                <h2 className="text-2xl my-[5px]">Cash prize</h2>
                            </div>
                        </div>
                </div>
                
            </div>
        </div>
    );
}
