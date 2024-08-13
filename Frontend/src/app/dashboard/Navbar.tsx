"use client"
import { useState } from "react";
import cross from "../../../public/cross.svg"
import Toggler from "../../../public/toggler.svg"
import Logo from  "../../../public/logo.svg"
import Bell from  "../../../public/bell.svg"
import Image from "next/image";


export default function Navbar(){
    const [isToggler, setIsToggler] = useState(true);
    return(
        <div className="sticky top-0">
            <div className="flex w-full justify-between items-center pt-5 lg:hidden px-[2rem]">
                <div>
                    <Image src={Logo} alt="" />
                </div>
                <div onClick={()=>{setIsToggler(!isToggler)}}>
                    {isToggler==true? <Image src={Toggler} alt="" />:
                        <Image src={cross} alt="" />

                    }
                </div>

            </div>
            <div className="flex justify-between px-[2rem] h-[100px] items-center w-full">
                <div className="w-[432px]">
                    <h1 className="text-[40px] font-bold leading-[47px]">Welcome, Utkarsh!</h1>
                </div>
                <div className="lg:flex space-x-5  hidden">
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