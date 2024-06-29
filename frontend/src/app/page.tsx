
import Image from "next/image";
import logo from "./_assets/Logo2.svg"
import db from './_assets/DB.svg'
import dbimg from './_assets/DownloadOutline.svg'
import heading from './_assets/heading.svg'
import ptext from './_assets/ptext.svg'
import Background from './_assets/Group.png'
import icon1 from './_assets/insta.svg'
import icon2 from './_assets/FB.svg'
import icon3 from './_assets/yt.svg'
import bg2 from './_assets/Groupphone.png'
import icon4 from './_assets/whatsapp.svg'
export default function UnderConstruction(){

    let backgroundImageStyle = {
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        
      };

      const Headingcss = {   
        textShadow: '1px 1px 1px rgba(0, 0, 0, 0.25)' 
      };
    
      

    return(
        <div className="pt-[2vw] " >
            <nav className="flex justify-between pb-[5rem] px-[5vw] ">
                <Image alt='' src={logo} className="sm:w-[307px] w-[138px]"/>
                <div className="flex items-center">
                        <a href="/Brochure.pdf" download>
                            <button className="flex items-center border-2 rounded-[7.2px] border-black sm:w-[305px] sm:h-[56px] p-[0.5em]  ">
                                {/* <Image alt='' className="w-[7rem] sm:w-[12rem]" src={db}/> */}
                                <h1 className="sm:text-[25.5px] font-semibold sm:w-[247.5px] sm:h-[37px] text-[#3664AF]">Download Brochure</h1>
                                <Image alt=''  src={dbimg} className="w-[1rem] sm:w-[2rem]"/>
                            </button>
                        </a>
                </div>
            </nav>
            <div className='flex flex-col  items-center relative z-[1] mx-1'>
                <h1 style={Headingcss} className="text-[30px] sm:text-[96px] md:text-8xl font-bold text-center my-[2rem]">Website is under <span className="text-[#3664AF]" >construction</span> !</h1>
                <h1 className="text-[17px] w-[90%] sm:text-[40px] md:text-4xl font-semibold mb-[4rem] text-center md:w-[55%]">Secure your spot and be the first to experience our exciting things by <span className="text-blue-700">pre-registering</span> through the following link!</h1>
                {/* <Image alt='' src={heading} className="pb-[2rem]"/> */}
                {/* <Image alt='' src={ptext} className="sm:pb-[3.5rem] pb-[2rem]"/> */}
                <a href="/preregistration">
                    <div className="sm:border-4 border-2 rounded-xl border-[#3664AF] h-[39px] w-[156px] cursor-pointer sm:h-[61px] sm:w-[277px] mb-[1rem] flex items-center justify-center  " >
                        <h1 className="sm:text-[32px] text-[18px] font-semibold text-center ">REGISTER</h1>
                    </div>
                </a>
                <div className="py-[4rem]">
                    <h1 className="text-center text-2xl mb-[1rem] sm:text-4xl font-medium text-[#3664AF] ">CONTACT US:</h1>
                    <div className="flex justify-between space-x-4 sm:space-x-[2rem]">
                        <a href="https://www.instagram.com/gambitor.iitr?igsh=MXc3dWM3MW9vZzNyNA=="><Image className="w-[2rem] sm:w-[2.5rem]" alt='' src={icon1}/></a>
                        <a href="https://www.facebook.com/profile.php?id=100094215150920&mibextid=ZbWKwL"><Image className="w-[2rem] sm:w-[2.5rem]" alt='' src={icon2}/></a>
                        <a href="https://youtube.com/@gambitoriitroorkee?si=FQNreC2Tvj7nMPRz"><Image className="w-[2.5rem] sm:w-[3rem] relative -top-[4px]" alt='' src={icon3}/></a>
                        <a href="https://whatsapp.com/channel/0029VaUzMHl5fM5bRmJVk02e"><Image alt='' src={icon4} className="w-[2.5rem] sm:w-[3rem] relative -top-[5px]"/></a>
                    </div>
                </div>
            </div>
            
                <Image src={Background} alt="Background" className='m-0 w-full' />
           
            {/* <div className="sm:hidden  w-[100%]  z-[-1] ">
                <Image alt='' src={bg2} className="w-full"/>
            </div> */}
        </div>
    )
}