"use client";
import Image from 'next/image'
import { useState } from "react";
import './Res.css'
import Navbar from './NavBar1'
import CatDiv from "./CatDiv";

import Submarine from './assets/CATEGORIES/Submarine.svg'
import Vector1 from './assets/CATEGORIES/Vector1.svg'
import Vector2 from './assets/CATEGORIES/Vector2.svg'
import Drops from './assets/CATEGORIES/Drops.svg'



export default function Categories() {
    
    return (
        <div className="relative bg-[#2445B5]  h-[1052px] w-full text-white">
            {/* <Navbar></Navbar> */}
            <div>
                <h1 className="font-cooper w-full absolute text-[32px] text-center top-[100px]  text-white font-normal leading-[36.7px] ">CATEGORIES</h1>
                <div className="absolute w-screen top-[22%] h-[700px]  flex flex-col items-center justify-between ">
                    <CatDiv Name="ARETEOX" Class="CLASS IX "></CatDiv>
                    <CatDiv Name="METIOX" Class="CLASS X"></CatDiv>
                    <CatDiv Name="APPOLOX" Class="CLASS XI"></CatDiv>
                    <CatDiv Name="ATHENOX" Class="CLASS XII"></CatDiv>
                </div>
            </div>
            <Image src={Submarine} alt="" className="absolute bottom-[0%] right-[0%]"/>
            <Image src={Vector1} alt="" className="absolute top-[9%] left-[0%]  w-screen"/>
            <Image src={Vector2} alt="" className="absolute bottom-[2%] left-[0%] w-screen"/>
            <Image src={Drops} alt="" className="absolute top-[17%] right-[10%]"/>
        </div>
    );
}
