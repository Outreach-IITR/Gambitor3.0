"use client"
import Image from 'next/image'
import { useState } from "react";
import './Res.css'
import Logo from './assets/Navbar/logo.svg'
import Cross from './assets/Navbar/cross.svg'
import Box from './assets/Navbar/box.svg'
import Toggler from './assets/Navbar/toggler.svg'

export default function Navbar() {
    const [isTogglerVisible, setIsTogglerVisible] = useState(Toggler);

    function toggleIcons(event:any) {
        event.preventDefault();
        setIsTogglerVisible((prevSrc) => (prevSrc === Toggler ? Cross : Toggler));
    }

    

    return (
        <div className="sticky top-0" >
            <div className="pt-1 pl-6 flex flex-row justify-between items-center backdrop-blur ">
            <div>
                <Image src={Logo} alt="Logo" className="h-12" />
            </div>
            <div className="flex flex-row mr-6 mt-1">
                <a href="/">
                    <Image  src={Box} alt="Box" className="mr-1 h-16 w-16  " />
                </a>
                <Image src={isTogglerVisible} alt="Toggle Icon" onClick={toggleIcons} className=" w-8 " />
            </div>
            </div>
        </div>
    );
}
