"use client"
import Image from "next/image";
import Header from "./_components/Header"
import AboutSection from "./_components/AboutSection";
import RoundDescription from "./_components/RoundDescription";
import NavButtons from "./_components/Navbuttons";
import Syllabus from "./_components/Syllabus";
import Prizes from "./_components/Prizes";
import Categories from "./_components/Categories";
import Footer from "./_components/Footer";
import HomePageCarousel from "./_components/HomePageCarousel";
import Timeline from "./_components/Timeline";
import { useMediaQuery } from "react-responsive";
import Mobile from "./mobile/Mobile";



export default function Home() {
    const isMobile = useMediaQuery({query: '(max-width: 1200px)'})
  return (
    <div>
      {isMobile? <Mobile/>:
      <div>

      {/* <div className=""> */}
      <div className="bg-gradient-to-b from-indigo-600 to-[#1d1d7a]">
        <img alt="" src="/homebg.svg" className="absolute -top-[20rem] w-[100%]"></img>
        
        <Header></Header>
        <AboutSection/>
        {/* <Image alt="" height={500} width={500}
         src="/Vector_6.svg" 
          className="opacity-95 absolute left-0 top-[25rem] w-[100vw]"></Image>
        <Image alt=""
         src="/Vector_7.svg" height={500} width={500}
          className="opacity-95 absolute top-[35rem] left-0 z-[0] w-[100vw]"></Image> */}
        <Image src="/wave1.svg" height={500} width={500} alt="" className="w-full absolute z-1 mt-[20rem]"/>
        <NavButtons/>
        <RoundDescription />
        <Image src="/wave3.svg" alt="" height={500} width={500} className="w-full absolute z-1"/>
        <Categories/>
        <Image src="/wave2.png" height={500} width={500} alt="" className='absolute z-1 w-full'/>
        <Prizes/>
        <Syllabus/>
        <Timeline/>
        
        <HomePageCarousel/>
        
     
     
    
      
      
      
      
      
        

      
        <Footer/>
    </div>
    </div>
      }
    </div>
  );
}
