"use client";

import Image from "next/image";
import { useEffect } from 'react';








export default function RoundDescription() {
    
    
    return (
      <section  id="ROUNDS" className="text-white relative z-[1] mt-[12rem] max-w-[1380px] mx-auto ">

        <div className='flex justify-center'>

         <h1 className="text-[3rem] mt-[4rem] font-bold text-center leading-[60px] font-overpass">ROUNDS</h1>
         <Image  width={34} height={60} alt='' src="bubble3.svg"/>
        </div>
        <div >

          <div className="flex justify-between items-center">
            <div className="hidden lg:block">
              <Image alt='' src="whale.svg" className='w-[100%] relative right-[20rem]' width={577} // Width from SVG dimensions
        height={501} ></Image>
            </div>
          <div className="w-[100%] lg:w-1/2">
            <div className='flex'>
              <h1 className="text-[36px] my-2 font-semibold leading-[45px]">INCEPTION</h1>
              <Image alt=''  className='ml-[10px]' width={44} height={45} src="bubble1.svg"/>
            </div>
            
            <p className="text-[20px] font-overpass leading-[25px] font-medium text-justify">
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
              <Image alt='' width={34} height={60} className='ml-[10px]' src="bubble3.svg"/>
            </div>
            <p className="text-[20px] font-overpass leading-[25px] font-medium text-justify">
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
          <div className='lg:flex justify-center items-center hidden'>
            <Image alt='' width="616" height="701" src="sharks.svg" className='pl-[5rem] w-[100%] '></Image>
            <Image alt='' width="44" height="119" className='ml-[10px]' src="bubble4.svg"/>
          </div>
        </div>
        </div>
      </section>
    );
  }