"use client";
import { useState } from "react";
import 'boxicons/css/boxicons.min.css';


interface tabs{
    text:string,
    ico: string,
}

function Abc({text, ico}:tabs){
    return(
        <div className="flex items-center pl-6">
            <i className={`${ico}`}></i>
            <h1 className= "py-4 pl-3 cursor-pointer">{text}</h1>
            
        </div>
    )
}

export default function Nav(){
    const [nav , setNav] = useState("Dashboard")


    const pages = [{text:"Dashboard", ico:'bx bxs-home-alt-2'}, {text:"Updates", ico:"bx bxs-bell"}, {text:"Practice Papers", ico:"bx bx-file"}, {text:"School Ambassador",ico:"bx bx-medal"}, {text:"Help Section", ico:"bx bxs-help-circle"}, {text:"Settings", ico:"bx bxs-cog"}]
    return(
        <div className="lg:flex flex-col space-y-4 mt-[50px] ml-[3rem] text-[16px] font-medium  rounded-bl-xl rounded-tl-xl hidden">
            {pages.map(({text,ico})=>(
                <div onClick={()=>{setNav(text)}} key={text} className={nav==text?"bg-white rounded-bl-xl rounded-tl-xl": "bg-transparent text-white"}>
                    <Abc text={text} ico={ico}/>

                </div>
                ))}
        </div>
    )
}