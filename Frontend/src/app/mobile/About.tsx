"use client";
import About from './assets/about-foot.svg'
import ArtBoard from './assets/ARTBOARD_1.svg'
// import Logo from './assets/logo.svg'

import Navbar from './NavBar'


export default function Res() {
    return (
        <div className="relative h-[900px] w-full bg-[#E5F2FF] flex flex-col m-0 pr-0 justify-between">
           
            <div className="mt-[00px] ml-6 w-[65%] relative left-[20px] top-[40px] ">
                <h1 className="text-[32px] w-[276px] h-[37px] mb-4 text-[#073266]" style={{fontFamily:'Cooper Black'}}>About GambitoR</h1>
                <p className="sm:text-[20px] text-[15px] leading-[24px] text-justify">
                    GambitoR is a prestigious national-level exam tailored specifically for students from classes 
                    9th to 12th who strive for excellence and have a passion for tackling and conquering challenges.
                    This unique competition evaluates students' logical and analytical skills through questions
                    designed by our student community, all within the exciting and adventurous theme of Pirates of the Caribbean. 
                    Organized by the Outreach Cell of IIT Roorkee, this year marks the third edition of GambitoR, promising to bring 
                    out the best in each participant. Get ready to sail on this adventure and discover what you’re truly capable of!
                </p>
            </div>

            <div className="flex justify-center items-center w-full h-[42.75px] ">
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
