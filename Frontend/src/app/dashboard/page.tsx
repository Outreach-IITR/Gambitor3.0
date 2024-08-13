
import Image from "next/image"
import Nav from "./nav"
import Navbar from "./Navbar"


export default function Dashboard(){
    const updates = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, helu my frnd",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, ",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,",
                     
    ]


    return(
        <div className="w-full"> 
            <div className="bg-[#0452D8] h-full lg:w-[300px] rounded-br-[20px] fixed top-0 left-0 z-[1] w-0 lg:block close">
                <div className="bg-white lg:flex justify-center p-3 rounded-bl-xl hidden">
                <a href="/">
                    <Image src='logo.svg' priority={true} width={200} height={200} alt="" className="h-auto w-auto"></Image>
                </a>
                
                </div>
                <Nav/>
                
                
            </div>
            <div className="close lg:w-[calc(100%-300px)] z-0 lg:h-screen relative lg:left-[300px] min-w-[650px] w-full xl:min-w-[1140px]" >
                <div className="w-full sticky top-0">

                    <Navbar/>
                </div>
        

                <div className="grid  max-w-[600px] text-white xl:grid-cols-[1.2fr_1fr] xl:grid-rows-[1fr_1fr_1fr] grid-cols-1 grid-rows-[1fr_1fr_1fr_1fr_1fr] 2xl:mx-auto xl:mx-10 mx-auto h-[calc(100%-100px)] xl:max-w-[1200px] lg:min-w-[600px] ">
                    {/* 1st block */}
                    <div className="bg-[#0452D8] xl:mr-10 mb-10 rounded-[20px] pb-7 ">
                        <h1 className="text-center font-semibold text-[32px] leading-[24px] my-[1rem]">Updates</h1>
                        

                        <div className="overflow-y-scroll max-h-[200px] text-justify">
                        <ol className="flex flex-col">
                            {updates.map((updates, key)=>(
                                <li key={key} className={key%2==0?'bg-blue-600 py-4 px-10':'bg-blue-500 py-4 px-10'}>{updates}</li>
                            )

                            )}
                        </ol>
                       
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className="bg-[#0452D8]  mb-10 rounded-[20px] p-7">
                        <h1 className="text-center font-semibold text-[32px] leading-[24px] mb-[2rem]">Practice Papers</h1>
                        <div className="flex items-center justify-between h-[70%]">
                            <div className="flex flex-col justify-center">
                                <p className="font font-semibold text-[24px] w-[250px] leading-[24px]">Practice more than 10 mock papers and become number 1 among more than 20000 students</p>
                                <button className="w-[144px] transition-colors duration-300 h-[36px] hover:bg-black text-black hover:text-white bg-white rounded-xl mt-7">Practice Now</button>
                            </div>
                            <div>

                                <img src="sheets.svg" alt="" className="w-[170px]" />
                            </div>

                        </div>
                    </div>

                    {/* third block */}
                    <div className="bg-[#0452D8] xl:mr-10 mb-10 rounded-[20px]  px-7 pt-[20px]">
                        <h1 className="text-center font-semibold text-[32px] leading-[24px]">Weekly Question</h1>
                        <div className="flex h-full justify-between items-center">
                            <div className="">
                                <p className="font font-semibold text-[24px] w-[336px] leading-[24px]">Compete with your peers and win chance to get cool IIT Roorkee goodies</p>
                                <button className="w-[144px] transition-colors duration-300 h-[36px] mt-5 text-black bg-white hover:bg-black hover:text-white rounded-xl">Coming Soon</button>
                            </div>
                            <div>
                                <img src="weekly.svg" alt="" className="w-[170px]"/>
                            </div>
                        </div>
                    </div>

                    {/* 4th block */}
                    <div className="bg-[#0452D8]  mb-10 rounded-[20px] pb-10 px-5 ">
                    <h1 className="text-center font-semibold text-[32px] leading-[24px] my-5">Join Our Community</h1>
                        <div className="flex justify-between items-center h-[calc(100%-24px)]">
                        <div className="">
                            <p className="font font-semibold text-[24px] w-[336px] leading-[24px]">Get in contact with the team GambitoR and get all your doubts cleared</p>
                            <button className="w-[144px] transition-colors duration-300 h-[36px] mt-5 text-black bg-white hover:bg-black hover:text-white rounded-xl">Join Now</button>
                        </div>
                            <div className="">

                                    <img src="join.svg" alt="" className="w-[170px]"/>
                         

                            </div>
                        </div>
                    </div>

                    {/* 5th block */}
                    <div className="bg-[#0452D8]  mb-10 rounded-[20px] xl:col-span-2 p-10">
                        <div className="flex justify-between h-full">
                            <div className="w-[635px] flex flex-col justify-between">
                                <h1 className="text-center font-semibold text-[32px] leading-[24px]">Become a School Ambassador and get a chance to win a free trip to IIT Roorkee</h1>
                                <button className="w-[144px] transition-colors duration-300 h-[36px] mt-5 text-black bg-white hover:bg-black hover:text-white rounded-xl">Try Now</button> 
                            </div>
                            <img src="school.svg" alt="" className="w-[160px]" />
                        </div>
                    </div>


                </div>
                
            </div>
            

        </div>
    )
}