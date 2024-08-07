"use client"
import Image from 'next/image'
import { useState } from "react";
import Navbar from './NavBar.jsx';

import About from './assets/about-foot.svg'
import ArtBoard from './assets/ARTBOARD_1.svg'


import Box from './assets/Register/Box.svg';
import Page from './assets/Register/Page.svg';


export default function Register() {
    
    
    return (
        <div className="relative h-[Screen] w-full text-white">
             <div className="h-[750px] w-dvw  flex flex-col m-0 pr-0 justify-between flex-wrap blur-background">
                    <Navbar></Navbar>
                   
                    <div className="relative  ">
                        <Image src={ArtBoard} alt="ArtBoard" className="absolute top-[7px] left-[65%] h-[92.4px] w-[138.67px]" />
                        <Image src={About} alt="About" className="absolute left-0 w-full  " />
                    </div>
            </div>
            <div className="flex flex-col justify-center items-center non-blur text-black">
                <div className="font-CooperBlack absolute  top-[150px] w-[358.56px] h-[368.37px] flex flex-col justify-center items-center text-[#4C2D04] text-center">
                    <Image src={Page} alt="" className="h-[368.37px] w-[358.56px] " />   
                    <h1 className="font-Cooper Black absolute top-[30px] h-[37px] w-[100%] text-3xl  font-bold  ">REGISTER NOW</h1>
                    <p className="absolute top-[73px] w-[85%] text-[20px] font-semibold  ">Unlock 20+ mock paper and <br /> 10+ previous year papers. Get <br /> weekly questions and <br /> leaderboard and compete with <br /> your friends</p>  
                    <button className="absolute top-[242px] w-[144px] h-[36px] bg-[#4C2D04] text-[#FEFEFE] text-[20px] font-semibold rounded-[12px] ">Register</button>    
                    <p className="font-Overpass text-[18px] absolute top-[290px] w-[100%]">Already registered? <a href="/" className="text-white">Click <br /> here to Login</a></p>    
                </div>
                <Image src={Box} alt=""  className="absolute top-[500px] w-[347px] h-[246.33px] " />
            </div>
            
        </div>
    );
}
