
import Image from "next/image";
import logo from "./_assets/Logo.svg"
import db from './_assets/DB.svg'
import dbimg from './_assets/DownloadOutline.svg'
import heading from './_assets/heading.svg'
import ptext from './_assets/ptext.svg'
import bg from './_assets/bgpc.svg'
import icon1 from './_assets/insta.svg'
import icon2 from './_assets/FB.svg'
import icon3 from './_assets/Linkedin.svg'
import bg2 from './_assets/phonebg.svg'
export default function UnderConstruction(){
    return(
        <div className="pt-[2vw]">
            <nav className="flex justify-between pb-[2rem] px-[5vw] ">
                <Image alt='' src={logo} className="sm:w-[15rem] w-[8rem]"/>
                <div className="flex items-center">
                        <button className="flex items-center border-2 rounded-xl border-black sm:px-[2em] sm:h-[3.5rem] p-[0.5em]  ">
                        <Image alt='' className="w-[7rem] sm:w-[11rem]" src={db}/>
                        <Image alt=''  src={dbimg} className="w-[1rem] sm:w-[1.5rem]"/>
                        </button>
                </div>
            </nav>
            <div className='flex flex-col px-[2rem] items-center relative z-[1]'>
                <Image alt='' src={heading} className="pb-[2rem]"/>
                <Image alt='' src={ptext} className="sm:pb-[3.5rem] pb-[2rem]"/>
                <a href="https://forms.gle/ZCQ1e6RgWqDpCYAx7">
                    <div className="sm:border-4 border-2 rounded-xl border-blue-600 sm:px-[4em] cursor-pointer h-[2rem] mb-[1rem] flex items-center sm:p-[1.5em] p-[1rem] " >
                        <h1 className="sm:text-2xl font-bold">REGISTER</h1>
                    </div>
                </a>
                <div className="py-[1.5rem]">
                    <h1 className="text-center mb-[1rem] sm:text-4xl font-semibold text-black ">CONTACT US:</h1>
                    <div className="flex justify-between space-x-2">
                        <a href=""><Image alt='' src={icon1}/></a>
                        <a href=""><Image alt='' src={icon2}/></a>
                        <a href=""><Image alt='' src={icon3}/></a>
                    </div>
                </div>
            </div>
            <div className="hidden sm:block w-[100vw] absolute bottom-0 opacity-50">
                <Image alt='' src={bg} className="w-[100%]"/>
            </div>
            <div className="sm:hidden  w-[100%] absolute bottom-0 z-0 opacity-50">
                <Image alt='' src={bg2} className="w-full"/>
            </div>
        </div>
    )
}