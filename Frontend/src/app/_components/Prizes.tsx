import Image from "next/image";

import firstPrize from "../../../public/firstPrize.svg";
import secondPrize from "../../../public/secondPrize.svg";
import thirdPrize from "../../../public/thirdPrize.svg";


function Prizes(){

    return (
        <section id='PRIZES' className=" relative z-[2] flex flex-col items-center justify-center pt-[5rem]">
            <h1 className="text-[3rem] text-white my-[4rem] font-bold text-center leading-[60px] font-overpass">PRIZES</h1>
            <div className="flex">
                <div className="mr-[5rem] flex flex-col items-center">
                    <a target="_blank" rel="noreferrer" className="flex flex-col items-center">
                     <Image alt="img" src={thirdPrize} className="w-[15vw]" />
                     <h2 className="m-0 mt-1 text-white text-2xl font-semibold">3rd place</h2>
                     <h4 className="m-0 mt-1 text-white font-medium">Cash prize</h4>
                    </a>
                </div>
              
            <div className="mr-8">
                    <a  target="_blank" rel="noreferrer" className="flex flex-col items-center">
                        <Image alt="img" src={secondPrize} className="w-[18vw] "/>
                        <h2 className="m-0 mt-1 text-white text-2xl font-semibold">2nd place</h2>
                        <h4 className="m-0 mt-1 text-white font-medium">Cash prize</h4>
                    </a>
                </div>
                <div className="mr-8">
                    <a  target="_blank" rel="noreferrer" className="flex flex-col items-center">
                        <Image alt="img" src={firstPrize} className="w-[20vw] "/>
                        <h2 className="m-0 mt-1 text-white text-2xl font-semibold">1st place</h2>
                        <h4 className="m-0 mt-1 text-white ">Cash prize</h4>
                        <h4 className="m-0 text-white font-medium">+</h4>
                        <h4 className="m-0 text-white font-medium">excited gifts</h4>
                        <h4 className="m-0 text-white font-medium">from</h4>
                        <h4 className="m-0 text-white font-medium">IIT Roorkee</h4>
                    </a>
                </div>
            </div>
  
        </section>
    );
}


export default Prizes ;