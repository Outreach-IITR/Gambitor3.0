import Image from "next/image";
import img1 from "../../../public/logo.svg"

export default function Header(){
    return(
        <div className="my-[10vh] mx-[15vw] mb-15 mt-10">
           <Image src={img1} />
         
        </div>
            

        
    )
}