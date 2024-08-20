"use client"
import { useState } from "react";
import cross from "../../../public/cross.svg"
import Toggler from "../../../public/toggler.svg"
import Logo from  "../../../public/logo.svg"
import Bell from  "../../../public/bell.svg"
import Image from "next/image";
import Link from "next/link";

interface abc{
    text:string,
    ico: string,
    path: string,
}

function Buttons({text, ico , path}:abc){
    return(
        <li key={text} className="w-[231px] h-[56px] py-[16px] pl-[28px] rounded-[12px] hover:bg-white text-white hover:text-[#222934]">
                <i className={`${ico}`}></i>
                <Link href={path} className= "py-4 pl-3 cursor-pointer">{text}</Link>
        </li>
    )
        
}


export default function Navbar(){
    const pages = [{text:"Dashboard", ico:'bx bxs-home-alt-2', path:"/dashboard"}, 
        {text:"Updates", ico:"bx bxs-bell", path:"/dashboard/updates"}, 
        {text:"Practice Papers", ico:"bx bx-file", path:"/dashboard/papers"}, 
        {text:"School Ambassador",ico:"bx bx-medal", path:"/dashboard/ambassador"}, 
        {text:"Help Section", ico:"bx bxs-help-circle", path:"/dashboard/help"}, 
        {text:"Settings", ico:"bx bxs-cog", path:"/dashboard/settings"}]
    const [isToggler, setIsToggler] = useState(true);
    return(
        <div className="sticky top-0">
            <div className="flex w-full justify-between items-center pt-5 lg:hidden lg:px-[2rem]">
                <div>
                    <Image src={Logo} alt="" />
                </div>
                <div className="relative z-10" onClick={()=>{setIsToggler(!isToggler)}}>
                    {isToggler==true? <Image src={Toggler} alt="" />:
                        <Image src={cross} alt="" />

                    }
                </div>

            </div>
            {!isToggler &&
            <div className="lg:hidden fixed top-0 right-0 w-[250px] h-[513px] rounded-bl-[8px] border-[1px] border-[#222934] bg-[#222934]">
                    <div className="w-full h-[110px] bg-white rounded-br-[8px] mb-[40px] rounded-bl-[8px]  flex justify-center items-center flex-col">
                        <div>
                            <h1 className="font-medium leading-normal text-[14px]">Utkarsh Anand</h1>
                            <p className="font-normal text-[12px] opacity-60">Appolox</p>
                        </div>
                    </div>
                        <ul onClick={()=>(setIsToggler(!isToggler))} className="mx-[10px]">
                            {pages.map(({text, ico, path})=>(
                                <Buttons key={text} text={text} ico={ico} path={path}/>
                            ))}
                        </ul>
                    
            </div>
            }
            <div className="flex justify-between lg:px-[2rem] h-[100px] items-center w-full">
                <div className="w-[432px]">
                    <h1 className="text-[40px] font-bold leading-[47px]">Welcome, Utkarsh!</h1>
                </div>
                <div className="lg:flex space-x-5 hidden">
                    <Image src={Bell} alt="" />
                    <div className="flex">
                    
                        <div className="">
                            <h1>Utkarsh Anand</h1>
                            <h1>Appolox</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}