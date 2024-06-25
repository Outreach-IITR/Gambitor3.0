
import Image from "next/image";
import logo from "./_assets/Logo2.svg"
import db from './_assets/DB.svg'
import dbimg from './_assets/DownloadOutline.svg'
import heading from './_assets/heading.svg'
import ptext from './_assets/ptext.svg'
import bg from './_assets/bgpc.svg'
import icon1 from './_assets/insta.svg'
import icon2 from './_assets/FB.svg'
import icon3 from './_assets/yt.svg'
import bg2 from './_assets/phonebg.svg'
import icon4 from './_assets/whatsapp.svg'
export default function UnderConstruction(){
    return(
        <div className="pt-[2vw]">
            <nav className="flex justify-between pb-[5rem] px-[5vw] ">
                <Image alt='' src={logo} className="sm:w-[18rem] w-[8rem]"/>
                <div className="flex items-center">
                        <a href="/Brochure.pdf" download>
                            <button className="flex items-center border-2 rounded-xl border-black sm:px-[2em] sm:h-[4rem] p-[0.5em]  ">
                                <Image alt='' className="w-[7rem] sm:w-[12rem]" src={db}/>
                                <Image alt=''  src={dbimg} className="w-[1rem] sm:w-[2rem]"/>
                            </button>
                        </a>
                </div>
            </nav>
            <div className='flex flex-col px-[2rem] items-center relative z-[1]'>
                <Image alt='' src={heading} className="pb-[2rem]"/>
                <Image alt='' src={ptext} className="sm:pb-[3.5rem] pb-[2rem]"/>
                <a href="/preregistration">
                    <div className="sm:border-4 border-2 rounded-xl border-blue-600 sm:px-[4em] cursor-pointer h-[2rem] mb-[1rem] flex items-center sm:p-[1.5em] p-[1rem] " >
                        <h1 className="sm:text-2xl font-bold">REGISTER</h1>
                    </div>
                </a>
                <div className="py-[1.5rem]">
                    <h1 className="text-center mb-[1rem] sm:text-4xl font-semibold text-black ">CONTACT US:</h1>
                    <div className="flex justify-between space-x-4 sm:space-x-2">
                        <a href="https://www.instagram.com/gambitor.iitr?igsh=MXc3dWM3MW9vZzNyNA=="><Image className="w-[2.5rem]" alt='' src={icon1}/></a>
                        <a href="https://www.facebook.com/profile.php?id=100094215150920&mibextid=ZbWKwL"><Image className="w-[2.5rem]" alt='' src={icon2}/></a>
                        <a href="https://youtube.com/@gambitoriitroorkee?si=FQNreC2Tvj7nMPRz"><Image className="w-[3rem] relative -top-[4px]" alt='' src={icon3}/></a>
                        <a href="https://whatsapp.com/channel/0029VaUzMHl5fM5bRmJVk02e"><Image alt='' src={icon4} className="w-[3rem] relative -top-[5px]"/></a>
                    </div>
                </div>
            </div>
            
                <Image alt='' src={bg} className="hidden xl:block xl:w-[100%] xl:absolute xl:top-[500px]  sm:block w-[100%] sm:absolute sm:bottom-[0]"/>
           
            <div className="sm:hidden  w-[100%] absolute bottom-0 z-0 ">
                <Image alt='' src={bg2} className="w-full"/>
            </div>
        </div>
    )
}