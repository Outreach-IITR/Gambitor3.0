"use client"
import Image from 'next/image'
import { useState } from "react";
import './Res.css';
import Navbar from './NavBar1.jsx';


import V1 from './assets/Syllabus/v1.svg';
import W1 from './assets/Syllabus/w1.svg';
import Timemap from './assets/Syllabus/Timemap.svg';


export default function Syllabus() {
    const [selectedClass, setSelectedClass] = useState('XI');

    const showPara = (className:string) => {
        setSelectedClass(className);
    }
    
    return (
        <div className="relative bg-[#2445B5]  w-full text-white">
           
            <Image src={V1} alt="" className="absolute left-0 top-[12%] w-full "/>
            <Image src={W1} alt="" className="absolute left-[3%] top-[40%] " />
            <div className="flex flex-col items-center">
                <h1 className="font-cooper my-10 text-[32px] text-center text-white font-normal leading-[36.7px]" style={{fontFamily:'Cooper Black'}}>SYLLABUS</h1>
                <div className='w-[80%]'>
                    <div className=" w-full relative z-20 my-10  flex flex-row justify-between">
                        <a href="class9.pdf" download>
                        <div onClick={() => showPara('IX')} className="cursor-pointer w-[70px]  text-center h-[36px] flex flex-row justify-center items-center border-[3px] rounded-[12px] border-[#013369] hover:border-[#FFE909] hover:bg-[#FFF8DD] hover:text-[#003874]">IX</div>
                        </a>
                        <a href="class10.pdf" download>
                        <div onClick={() => showPara('X')} className="cursor-pointer w-[70px]  text-center h-[36px] flex flex-row justify-center items-center border-[3px] rounded-[12px] border-[#013369] hover:border-[#FFE909] hover:bg-[#FFF8DD] hover:text-[#003874]">X</div>
                        </a>
                        <a href="class11.pdf" download>
                        <div onClick={() => showPara('XI')} className="cursor-pointer w-[70px]  text-center h-[36px] flex flex-row justify-center items-center border-[3px] rounded-[12px] border-[#013369] hover:border-[#FFE909] hover:bg-[#FFF8DD] hover:text-[#003874]">XI</div>
                        </a>
                        <a href="class12.pdf" download>
                        <div onClick={() => showPara('XII')} className="cursor-pointer w-[70px]  text-center h-[36px] flex flex-row justify-center items-center border-[3px] rounded-[12px] border-[#013369] hover:border-[#FFE909] hover:bg-[#FFF8DD] hover:text-[#003874]">XII</div>
                        </a>
                    </div>
                </div>
{/* 
                <div className="font-overpass flex flex-col items-center w-[70%] absolute top-[300px] text-center text-[22px]">
                    {selectedClass === 'IX' && (
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta magna sed eleifend commodo. Maecenas eu tristique nulla. Nam vulputate, arcu euismod accumsan sodales, turpis dui auctor libero, vitae finibus metus ipsum quis tellus. Duis fermentum justo erat, eu porttitor lorem suscipit in. Sed pellentesque porta nunc eu facilisis. Praesent eu augue magna. Curabitur hendrerit lorem nibh, in finibus elit dictum sed. Praesent a ultricies mauris. Donec tincidunt ut leo nec suscipit. Etiam dictum orci in ante dapibus sagittis in ut justo. Cras mi risus, viverra nec.</p>
                    )}
                    {selectedClass === 'X' && (
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta magna sed eleifend commodo. Maecenas eu tristique nulla. Nam vulputate, arcu euismod accumsan sodales, turpis dui auctor libero, vitae finibus metus ipsum quis tellus. Duis fermentum justo erat, eu porttitor lorem suscipit in. Sed pellentesque porta nunc eu facilisis. Praesent eu augue magna. Curabitur hendrerit lorem nibh, in finibus elit dictum sed. Praesent a ultricies mauris. Donec tincidunt ut leo nec suscipit. Etiam dictum orci in ante dapibus sagittis in ut justo. Cras mi risus, viverra nec.</p>
                    )}
                    {selectedClass === 'XI' && (
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos vero expedita optio alias placeat ab officia, excepturi vitae impedit aut cum nulla obcaecati consequuntur eveniet deleniti laborum, voluptatem minus eaque?</p>
                    )}
                    {selectedClass === 'XII' && (
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sit corrupti earum fugiat distinctio repellendus ad facere doloribus eaque veniam nam minus ab, assumenda, iure qui facilis dolore? Sed, laudantium!</p>
                    )}
                </div> */}
            </div>
            <h1 className="font-cooper my-10 mt-20 w-full  text-[32px] text-center top-[720px] text-white font-normal leading-[36.7px]" style={{fontFamily:'Cooper Black'}}>TIMELINE MAP</h1>
            <div className=" w-full flex justify-center items-center">
            <Image src={Timemap} alt="" className="h-[324.99px] my-10 w-[329px] "/>   

            </div>
        </div>
    );
}
