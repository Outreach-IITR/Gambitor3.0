import Image from "next/image";
import Header from "./_components/Header"
import AboutSection from "./_components/AboutSection";
import img1 from '../../public/Vector_7.svg'
import RoundDescription from "./_components/RoundDescription";
import NavButtons from "./_components/Navbuttons";
import Syllabus from "./_components/Syllabus";
import img2 from '../../public/Vector_6.svg'



export default function Home() {
  return (
    <div className=" ">
      
    <Header></Header>
    <AboutSection/>
    <div className="  relative w-[100%] h-[500vh] pt-[35vh] -top-[35vh] z-1">
      
      <Image 
      src={img1} layout="responsive"
      width={100} height={100}
      className="opacity-95 absolute top-[30vh] z-[0]"></Image>
      <Image 
      src={img2} layout="responsive"
      width={100} height={100}
      className="opacity-95 absolute top-[10vh] z-[-1]"></Image>
      <NavButtons/>
      <RoundDescription />
      <Syllabus></Syllabus>
      
    </div> 
    
    
    
    </div>
  );
}
