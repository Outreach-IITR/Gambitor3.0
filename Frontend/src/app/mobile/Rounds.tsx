"use client"
import Image from "next/image"
import { useState } from "react";
import './Res.css'
import Navbar from './NavBar1.jsx'
import Vector from './assets/Navbar/Vector.svg'
import Vector1 from './assets/Navbar/Vector2.svg'
import Vector3 from './assets/Navbar/vector3.svg'
import fish from './assets/Navbar/fish.svg'
import fish1 from './assets/Navbar/fish1.svg'
import fish2 from './assets/Navbar/fish2.svg'
import Sharks from './assets/Navbar/Sharks.svg'
import bottomgp from './assets/bottomgp.svg';
import Footer from "../_components/Footer";


export default function Rounds() {
    
    return (
        <div className="relative   h-[1240px] w-full text-white m-0">
            <div className="bg-transparent">

            <Image src={bottomgp} alt="Bottom Graphic" style={{ width: '100%', marginTop: 'auto' }} className="rleative z-[10]"/>
            </div>
            <div className="bg-[#2445B5] h-full">

            <Image src={fish} alt="" className="absolute top-[166.79px] left-[0%]"/>
            <Image src={fish1} alt="" className="absolute top-[570px] left-[6%]"/>
            <Image src={Sharks} alt="" className="absolute top-[551px] right-[-0%]"/>
            <Image src={fish2} alt="" className="absolute top-[1020px] right-[5%]"/>
            <h1 className="font-cooper w-screen absolute text-[32px] text-center top-[90px]  text-white font-normal leading-[36.7px] ">Rounds</h1>
            <Image src={Vector} alt="" className="w-full"/>
            <div className="">
                <h2 className="font-overpass italic absolute text-2xl top-[226px] right-[5%] ">INCEPTION</h2>
                <p className="font-overpass absolute text-base top-[293px] right-[5%] h-[240px] w-[259px] text-justify ">Lorem ipsum dolor sit am, consectetur adipiscing elit. Praesent porta magna sed eleifend commodo. Maecenas eu tristique nulla. Nam vulputate, arcu euismod accumsan sodales, turpis dui auctor libero, vitae finibus metus ipsum quis tellus. Duis fermentum justo erat, eu porttitor lorem suscipit in. Sed pellentesque porta nunc eu facilisis. Praesent eu augue magna. </p>

            </div> 
          


            <Image src={Vector1} alt="" className="absolute top-[550px]  left-[0px] w-screen"/>
            <Image src={Vector} alt="" className="absolute top-[989px]   left-[0px] w-screen"/>
            <div>
                <h2 className="font-overpass italic absolute text-2xl top-[685px] left-[5%] ">PINNACLE</h2>
                
                <p className="font-overpass absolute text-base top-[752px] left-[5%] w-[259px] h-[240px] text-justify">Lorem ipsum dolor sit am, consectetur adipiscing elit. Praesent porta magna sed eleifend commodo. Maecenas eu tristique nulla. Nam vulputate, arcu euismod accumsan sodales, turpis dui auctor libero, vitae finibus metus ipsum quis tellus. Duis fermentum justo erat, eu porttitor lorem suscipit in. Sed pellentesque porta nunc eu facilisis. Praesent eu augue magna. </p>
                
            </div>
            </div>
        


        </div>
    );
}
