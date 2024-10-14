import Image from "next/image";



export default function Timeline(){
    return(
        <div className="flex items-center justify-center flex-col mt-[5vw] relative z-1" id="DATE/VENUE">
            <h1 className="text-[3rem] text-white my-[4rem] font-bold text-center leading-[60px] font-overpass">TIMELINE</h1>
           <Image src="map1.svg"   width="997" height="1036" alt=""></Image>
         
        </div>
            

        
    )
}