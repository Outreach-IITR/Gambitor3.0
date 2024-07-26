"use client"
import Image from "next/image";
import Header from "./_components/Header"
import AboutSection from "./_components/AboutSection";
import img1 from '../../public/Vector_7.svg'
import RoundDescription from "./_components/RoundDescription";
import NavButtons from "./_components/Navbuttons";
import Syllabus from "./_components/Syllabus";
import img2 from '../../public/Vector_6.svg'
import Prizes from "./_components/Prizes";
import img3 from '../../public/waves2.svg'
import Categories from "./_components/Categories";
import Footer from "./_components/Footer";
import HomePageCarousel from "./_components/HomePageCarousel";
import Timeline from "./_components/Timeline";
import wave from "../../public/wave1.svg"
import wave2 from "../../public/wave2.png"
import wave3 from "../../public/wave3.svg"
import { useMediaQuery } from "react-responsive";
import Mobile from "./mobile/Mobile";



export default function Home() {
    const isMobile = useMediaQuery({query: '(max-width: 1200px)'})
  return (
    <div>
      {isMobile? <Mobile/>:
      <div>

      {/* <div className=""> */}
      <div className="bg-gradient-to-b from-indigo-500 to-[#1d1d7a]">
        <Image alt="" height={800} src={img3} className="absolute w-[100%]"></Image>
      
        <Header></Header>
        <AboutSection/>
        {/* <Image alt=""
         src={img2} 
          className="opacity-95 absolute left-0 top-[25rem] w-[100vw]"></Image>
        <Image alt=""
         src={img1} 
          className="opacity-95 absolute top-[35rem] left-0 z-[0] w-[100vw]"></Image> */}
        <Image src={wave} alt="" className="w-full absolute z-1 mt-[20rem]"/>
        <NavButtons/>
        <RoundDescription />
        <Image src={wave3} alt="" className="w-full absolute z-1"/>
        <Categories/>
        <Image src={wave2} alt="" className='absolute z-1 w-full'/>
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
