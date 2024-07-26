"use client";
import img1 from '../../../public/whale.svg'
import Image from "next/image";
import img2 from "../../../public/sharks.svg"
import b1 from "../../../public/bubble1.svg"
import b2 from "../../../public/bubble2.svg"
import b3 from "../../../public/bubble3.svg"
import b4 from "../../../public/bubble4.svg"
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";







export default function RoundDescription() {
    useEffect(()=>{
      AOS.init()
    },[])
    
    return (
      <section  id="ROUNDS" className="text-white relative z-[1] mt-[10rem] max-w-[1380px] mx-auto ">

        <div className='flex justify-center'>

         <h1 className="text-[3rem] mt-[4rem] font-bold text-center leading-[60px] font-overpass">ROUNDS</h1>
         <Image alt='' src={b3}/>
        </div>
        <div data-aos="fade-up"
            data-aos-duration="1000">

          <div className="flex justify-between items-center">
            <div className="hidden lg:block">
              <Image alt='' src={img1} className='w-[100%] relative right-[20rem]'></Image>
            </div>
          <div className="w-[100%] lg:w-1/2">
            <div className='flex'>
              <h1 className="text-[36px] my-2 font-semibold leading-[45px]">INCEPTION</h1>
              <Image alt='' className='ml-[10px]' src={b1}/>
            </div>
            
            <p className="text-[20px] font-overpass leading-[25px] font-medium">
            The first round of GambitoR 3.0, where you will set your ships to 
            sail alongside other pirates online. You’ll need your logical skills 
            and grit in a 2-3 hours question paper consisting of math, puzzles,
            code crunchers, etc., and put your perception up for a challenge. 
            The top 20 performers from classes 9th and 10th, along with the top 
            20 performers from class 11th and the top 20 performers from class 
            12th, will be provided with the golden opportunity of visiting IIT
            Roorkee for the next round, Pinnacle, along with the chances of 
            winning exciting prizes and certificates.
            </p>
          
          </div>
        </div>
        <div className="flex justify-between">
         

          <div className="w-full lg:w-1/2 pt-[10rem]">
            <div className="flex">
              <h1 className="text-[36px] font-semibold leading-[45px]">PINNACLE</h1>
              <Image alt='' className='ml-[10px]' src={b3}/>
            </div>
            <p className="text-[20px] font-overpass leading-[25px] font-medium">
            When you have cleared the depths for the Inception round, we 
            eagerly await your visit to the campus of IIT Roorkee. Considering 
            the alluring beauty and extravagance of this campus and the exciting 
            technical events of the second round, you can already imagine that 
            it'll be a glorious and exhilarating experience. In this round, you 
            will need to work your wits to the end while also having fun while 
            exploring the ins and outs of the campus. The winners of the events 
            will be awarded cash rewards and certificates of excellence, along with 
            several exciting prizes in store for them.
            </p>
          </div>
          <div className='flex justify-center items-center hidden lg:block'>
            <Image alt='' src={img2} className='pl-[5rem] w-[100%] '></Image>
            <Image alt='' className='ml-[10px]' src={b4}/>
          </div>
        </div>
        </div>
      </section>
    );
  }