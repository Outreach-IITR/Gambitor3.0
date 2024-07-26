import Image from "next/image";
import img1 from "../../../public/logo.svg"

export default function Header(){
    return(
        <div className="my-[2rem] mb-[4rem] relative z-1 max-w-[1380px] mx-auto">
           <Image alt="" src={img1} className="w-[392px]"/>
           
         
        </div>
            

        
    )
}