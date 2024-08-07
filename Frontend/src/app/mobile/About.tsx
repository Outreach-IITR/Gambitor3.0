"use client";
import About from './assets/about-foot.svg'
import ArtBoard from './assets/ARTBOARD_1.svg'
// import Logo from './assets/logo.svg'

import Navbar from './NavBar'


export default function Res() {
    return (
        <div className="relative h-[900px] w-full bg-[#E5F2FF]  flex flex-col m-0 pr-0 justify-between flex-wrap">
           
            <div className="mt-[00px] ml-6 w-[65%] relative left-[20px] top-[40px] ">
                <h1 className="text-[32px] w-[276px] h-[37px] mb-4">About GambitoR</h1>
                <p className="text-[20px] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta magna sed eleifend commodo. Maecenas eu tristique nulla. Nam vulputate, arcu euismod accumsan sodales, turpis dui auctor libero, vitae finibus metus ipsum quis tellus. Duis fermentum justo erat, eu porttitor lorem suscipit in. Sed pellentesque porta nunc eu facilisis. Praesent eu augue magna. Curabitur hendrerit lorem nibh, in finibus elit dictum sed. Praesent a ultricies mauris. Donec tincidunt ut leo nec suscipit. Etiam dictum orci in ante dapibus sagittis in ut justo. Cras mi risus, viverra nec.
                </p>
            </div>

            <div className="flex justify-center items-center w-screen h-[42.75px] ">
                <a href="/signup">
                <button className="w-[210px] h-[45px] font-black rounded-[14.25px] bg-[#073266] text-[24px] text-[#FEFEFE] text-center " style={{fontFamily:'Cooper Black'}}>Register Now!</button>
                </a>

            </div>
            <div className="  ">
                {/* <img src={ArtBoard} alt="ArtBoard" className="absolute top-[706px] left-[65%] h-[92.4px] w-[138.67px]" /> */}
                {/* <img src={About} alt="About" className="absolute left-0 w-screen  top-[700px]" /> */}
            </div>
        </div>
    );
}
