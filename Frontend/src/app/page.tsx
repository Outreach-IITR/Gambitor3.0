import Image from "next/image";
import Header from "./_components/Header"
import AboutSection from "./_components/AboutSection";
import img1 from '../../public/Vector_7.svg'


export default function Home() {
  return (
    <div>
    <Header></Header>
    <AboutSection/>
    <div className="h-[6000px] bg-[url('../../public/Vector_6.svg')] bg-no-repeat bg-cover bg-opacity">
      <Image 
      src={img1} layout="responsive"
      width={100} height={50}
      className="opacity-90 absolute top-[850px]"></Image>
    </div> 
    
    </div>
  );
}
