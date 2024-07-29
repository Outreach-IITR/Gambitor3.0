import Image from "next/image";
import img from "../../../public/map1.svg"


export default function Timeline(){
    return(
        <div className="flex items-center justify-center flex-col mb-[4rem] relative z-1" id="DATE/VENUE">
            <h1 className="text-[3rem] text-white my-[4rem] font-bold text-center leading-[60px] font-overpass">TIMELINE</h1>
           <Image src={img} alt=""></Image>
         
        </div>
            

        
    )
}