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
            <Image src={Sharks} alt="" className="absolute top-[700px] right-[-0%]"/>
            <Image src={fish2} alt="" className="absolute top-[1120px] right-[5%]"/>
            <h1 className="w-screen absolute text-[34px] text-center top-[90px]  text-white font-normal leading-[36.7px] " style={{fontFamily:'Cooper Black'}}>ROUNDS</h1>
            <Image src={Vector} alt="" className="w-full"/>
            <div className="">
                <h2 className="font-overpass italic absolute text-2xl top-[226px] right-[5%] font-bold" >INCEPTION</h2>
                <p className="font-overpass absolute text-base top-[293px] right-[5%] h-[240px] w-[259px] text-justify ">The first round of GambitoR 3.0, where you will set your ships to 
            sail alongside other pirates online. You’ll need your logical skills 
            and grit in a 2-3 hours question paper consisting of math, puzzles,
            code crunchers, etc., and put your perception up for a challenge. 
            The top 20 performers from classes 9th and 10th, along with the top 
            20 performers from class 11th and the top 20 performers from class 
            12th, will be provided with the golden opportunity of visiting IIT
            Roorkee for the next round, Pinnacle, along with the chances of 
            winning exciting prizes and certificates. </p>

            </div> 
          


            <Image src={Vector1} alt="" className="absolute top-[550px]  left-[0px] w-screen"/>
            <Image src={Vector} alt="" className="absolute top-[989px]   left-[0px] w-screen"/>
            <div>
                <h2 className="font-overpass italic absolute text-2xl top-[840px] left-[5%] font-bold">PINNACLE</h2>
                
                <p className="font-overpass absolute text-base top-[902px] left-[5%] w-[259px] h-[240px] text-justify">When you have cleared the depths for the Inception round, we 
            eagerly await your visit to the campus of IIT Roorkee. Considering 
            the alluring beauty and extravagance of this campus and the exciting 
            technical events of the second round, you can already imagine that 
            it'll be a glorious and exhilarating experience. In this round, you 
            will need to work your wits to the end while also having fun while 
            exploring the ins and outs of the campus. The winners of the events 
            will be awarded cash rewards and certificates of excellence, along with 
            several exciting prizes in store for them. </p>
                
            </div>
            </div>
        


        </div>
    );
}
