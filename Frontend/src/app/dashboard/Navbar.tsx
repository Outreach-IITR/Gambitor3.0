"use client"
import { useState } from "react";


export default function Navbar(){
    const [isToggler, setIsToggler] = useState(true);
    return(
        <div className="">
            <div className="flex w-full justify-between items-center mt-5 lg:hidden px-[2rem]">
                <div>
                    <img src="logo.svg" alt="" />
                </div>
                <div onClick={()=>{setIsToggler(!isToggler)}}>
                    {isToggler==true? <img src="toggler.svg" alt="" />:
                        <img src="cross.svg" alt="" />

                    }
                </div>

            </div>
            <div className="flex justify-between px-[2rem] h-[100px] items-center w-full">
                <div className="w-[432px]">
                    <h1 className="text-[40px] font-bold leading-[47px]">Welcome, Utkarsh!</h1>
                </div>
                <div className="lg:flex space-x-5  hidden">
                    <img src="bell.svg" alt="" />
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