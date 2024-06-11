import Image from "next/image";
import img1 from "../../../public/logo.svg"

export default function Header(){
    return(
        <div className="my-[5vw] mx-[15vw]  mt-[2vw]">
           <Image src={img1} className="w-[20vw]"/>
         
        </div>
            

        
    )
}