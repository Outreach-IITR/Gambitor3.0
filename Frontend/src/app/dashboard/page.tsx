
import Image from "next/image"
import Nav from "./nav"
import Navbar from "./Navbar"


export default function Dashboard(){
    const updates = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, laudantium!",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, laudantium!",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, laudantium!",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, laudantium!",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, laudantium!",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, laudantium!",
                     
    ]


    return(
        <div className="flex flex-row w-full h-full min-w-[1600px]">
            <div className="bg-[#0452D8] h-full w-[350px] fixed top-0 left-0 z-[1]">
                <div className="bg-white flex justify-center p-3 rounded-bl-xl">
                <a href="/">
                    <Image src='logo.svg' priority={true} width={200} height={200} alt="" className="h-auto w-auto"></Image>
                </a>
                
                </div>
                <Nav/>
                
                
            </div>
            <div className=" w-[calc(100%-350px)] min-w-[1200px] pl-10 h-screen relative left-[350px]" >
                <div className="w-full">

                    <Navbar/>
                </div>
            

                <div className="grid text-white grid-cols-[1.2fr_1fr] grid-rows-[1fr_1fr_1fr] mx-auto w-[1200px] h-[calc(100%-100px)]">
                    {/* 1st block */}
                    <div className="bg-[#0452D8] mr-10 mb-10 rounded-[20px] p-7 ">
                        <h1 className="text-center font-semibold text-[32px] leading-[24px] mb-[2rem]">Updates</h1>
                        <div className="overflow-y-scroll max-h-[200px]">

                        <ul className="flex flex-col space-y-2 pl-[40px]">
                            {updates.map((updates, key)=>(
                                <li key={key}>{updates}</li>
                            )

                            )}
                        </ul>
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className="bg-[#0452D8] mr-10 mb-10 rounded-[20px] p-7">
                        <h1 className="text-center font-semibold text-[32px] leading-[24px] mb-[2rem]">Practice Papers</h1>
                        <div className="flex items-center justify-between h-[70%]">
                        <div className="flex flex-col justify-center">
                            <p className="font font-semibold text-[24px] w-[250px] leading-[24px]">Practice more than 10 mock papers and become number 1 among more than 20000 students</p>
                            <button className="w-[144px] h-[36px] hover:bg-black text-black hover:text-white bg-white rounded-xl mt-7">Practice Now</button>
                        </div>
                        <img src="sheets.svg" alt="" />

                        </div>
                    </div>

                    {/* third block */}
                    <div className="bg-[#0452D8] mr-10 mb-10 rounded-[20px]  px-7 pt-[20px]">
                        <h1 className="text-center font-semibold text-[32px] leading-[24px]">Weekly Question</h1>
                        <div className="flex justify-between items-center">
                        <div className="">
                            <p className="font font-semibold text-[24px] w-[336px] leading-[24px]">Compete with your peers and win chance to get cool IIT Roorkee goodies</p>
                            <button className="w-[144px] h-[36px] mt-5 text-black bg-white hover:bg-black hover:text-white rounded-xl">Coming Soon</button>
                        </div>
                        <img src="weekly.svg" alt="" className="w-[170px]"/>
                        </div>
                    </div>

                    {/* 4th block */}
                    <div className="bg-[#0452D8] mr-10 mb-10 rounded-[20px] pt-4 px-5 ">
                    <h1 className="text-center font-semibold text-[32px] leading-[24px]">Join Our Community</h1>
                        <div className="flex justify-between items-center h-[calc(100%-24px)]">
                        <div className="">
                            <p className="font font-semibold text-[24px] w-[336px] leading-[24px]">Get in contact with the team GambitoR and get all your doubts cleared</p>
                            <button className="w-[144px] h-[36px] mt-5 text-black bg-white hover:bg-black hover:text-white rounded-xl">Join Now</button>
                        </div>
                            <div className="">

                                    <img src="join.svg" alt="" className="w-[170px]"/>
                         

                            </div>
                        </div>
                    </div>

                    {/* 5th block */}
                    <div className="bg-[#0452D8] mr-10 mb-10 rounded-[20px] col-span-2 p-10">
                        <div className="flex justify-between">
                            <div className="w-[635px] flex flex-col justify-between">
                                <h1 className="text-center font-semibold text-[32px] leading-[24px]">Become a School Ambassador and get a chance to win a free trip to IIT Roorkee</h1>
                                <button className="w-[144px] h-[36px] mt-5 text-black bg-white hover:bg-black hover:text-white rounded-xl">Try Now</button> 
                            </div>
                            <img src="school.svg" alt="" className="w-[160px]" />
                        </div>
                    </div>


                </div>
                
            </div>
            

        </div>
    )
}