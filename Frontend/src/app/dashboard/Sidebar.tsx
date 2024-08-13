"use client"
import { useState } from "react"
import Link from "next/link";
import 'boxicons/css/boxicons.min.css';
import Image from "next/image"
import Logo from "../../../public/logo.svg"
interface tabs{
    text:string,
    ico: string,
    path: string,
}

function Abc({text, ico, path}:tabs){
    return(
        <div className="flex items-center pl-6">
            <i className={`${ico}`}></i>
            <Link href={path} className= "py-4 pl-3 cursor-pointer">{text}</Link>
            
        </div>
    )
}

export default function Sidebar(){


    const [nav , setNav] = useState("Dashboard")


    const pages = [{text:"Dashboard", ico:'bx bxs-home-alt-2', path:"/dashboard"}, 
                   {text:"Updates", ico:"bx bxs-bell", path:"/dashboard/updates"}, 
                   {text:"Practice Papers", ico:"bx bx-file", path:"/dashboard/papers"}, 
                   {text:"School Ambassador",ico:"bx bx-medal", path:"/dashboard/ambassador"}, 
                   {text:"Help Section", ico:"bx bxs-help-circle", path:"/dashboard/help"}, 
                   {text:"Settings", ico:"bx bxs-cog", path:"/dashboard/settings"}]

    return(
        <div className="w-full"> 
            <div className="bg-[#0452D8] h-full lg:w-[300px] rounded-br-[20px] fixed top-0 left-0 z-[1] w-0 lg:block close">
                <div className="bg-white lg:flex justify-center p-3 rounded-bl-xl hidden">
                    <a href="/">
                        <Image src={Logo} priority={true} width={200} height={200} alt="" className="h-auto w-auto"></Image>
                    </a>
                
                </div>
                <div className="lg:flex flex-col space-y-4 mt-[50px] ml-[3rem] text-[16px] font-medium  rounded-bl-xl rounded-tl-xl hidden">
                    {pages.map(({text,ico,path})=>(
                    <div onClick={()=>{setNav(text)}} key={text} className={nav==text?"bg-white rounded-bl-xl rounded-tl-xl": "bg-transparent text-white"}>
                        <Abc text={text} ico={ico} path={path}/>

                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}