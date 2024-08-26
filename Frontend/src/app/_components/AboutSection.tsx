import Image from "next/image";



export default function AboutSection(){
    return(
        <div className="flex flex-col lg:justify-between lg:text-black text-white lg:flex-row relative z-[1] max-w-[1380px] mx-auto">
            <div className="lg:w-[50%] order-2 lg:order-1 flex flex-col justify-center">
                <h1 className="text-[36px] leading-[45px] my-2 font-medium font-overpass">ABOUT US</h1>
                <p className="text-[20px] font-overpass leading-[25px] font-medium">
                GambitoR is a prestigious national-level exam tailored specifically for students from classes 9th to 12th who strive for excellence and have a passion for tackling and conquering challenges. This unique competition evaluates students' logical and analytical skills through questions designed by our student community, all within the exciting and adventurous theme of Pirates of the Caribbean. Organized by the Outreach Cell of IIT Roorkee, this year marks the third edition of GambitoR, promising to bring out the best in each participant. Get ready to sail on this adventure and discover what you’re truly capable of!                </p>

            </div>
            <div className=" pl-[10vw] flex relative order-1 flex-col items-center lg:it lg:w-[50%]  top-[2rem] justify-center">
                 
                    {/* <div className="relative -left-[10rem] top-2 ">

                        <h1 className="text-[1.5rem] text-blue-900 ">Registrations</h1>
                        <h1 className="text-[2rem]">12000+</h1>

                    </div> */}
                    <div className="">
                        <Image alt="" className="relative " width={500} height={330} src="/aboutimg.svg"></Image>
                    </div>
                    {/* <div className="relative -top-[5rem] ">
                        <h1 className="text-[1.5rem] text-blue-900 ">Cities</h1>
                        <h1 className="text-[2rem] ">900+</h1>
                    </div> */}
                
            </div>
            

        </div>
    )
}