
import Image from "next/image"
import Nav from "./nav"
import Navbar from "./Navbar"
import Home from "./home"


export default function Dashboard(){
    const updates = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, helu my frnd",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, ",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,",
                     
    ]
    const heading = "text-center font-semibold lg:text-[32px] lg:leading-[24px] my-[1rem] text-[20px] leading-[17px]"
    const desc = "font font-semibold lg:text-[24px] text-[16px] leading-[19px] w-[250px] lg:leading-[24px]"
    const button= "w-[144px] font-bold lg:text-[20px] text-[14px] leading-[16.45px] lg:leading-[23.5px] transition-colors duration-300 h-[36px] hover:bg-black text-black hover:text-white bg-white rounded-xl mt-7"


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
            <Home/>
            

        </div>
    )
}