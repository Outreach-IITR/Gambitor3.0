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
        <div className="relative bg-[#2445B5] h-[1284px] w-full text-white">
           
            <Image src={V1} alt="" className="absolute left-0 top-[12%] w-full "/>
            <Image src={W1} alt="" className="absolute left-[3%] top-[40%] " />
            <div className="flex flex-col items-center">
                <h1 className="font-cooper w-screen absolute text-[32px] text-center top-[120px] text-white font-normal leading-[36.7px]">SYLLABUS</h1>
                <div>
                    <div className="absolute top-[200px] left-[10%] flex flex-row justify-between w-[80%]">
                        <div onClick={() => showPara('IX')} className="cursor-pointer w-[70px]  text-center h-[36px] flex flex-row justify-center items-center border-[3px] rounded-[12px] border-[#013369] hover:border-[#FFE909] hover:bg-[#FFF8DD] hover:text-[#003874]">IX & X</div>
                        <div onClick={() => showPara('X')} className="cursor-pointer w-[70px]  text-center h-[36px] flex flex-row justify-center items-center border-[3px] rounded-[12px] border-[#013369] hover:border-[#FFE909] hover:bg-[#FFF8DD] hover:text-[#003874]">IX & X</div>
                        <div onClick={() => showPara('XI')} className="cursor-pointer w-[70px]  text-center h-[36px] flex flex-row justify-center items-center border-[3px] rounded-[12px] border-[#013369] hover:border-[#FFE909] hover:bg-[#FFF8DD] hover:text-[#003874]">XI</div>
                        <div onClick={() => showPara('XII')} className="cursor-pointer w-[70px]  text-center h-[36px] flex flex-row justify-center items-center border-[3px] rounded-[12px] border-[#013369] hover:border-[#FFE909] hover:bg-[#FFF8DD] hover:text-[#003874]">XII</div>
                    </div>
                </div>

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
                </div>
            </div>
            <h1 className="font-cooper w-full absolute text-[32px] text-center top-[720px] text-white font-normal leading-[36.7px]">TIMELINE MAP</h1>
            <div className="absolute bottom-[120px] w-full flex justify-center items-center">
            <Image src={Timemap} alt="" className="h-[324.99px] w-[329px] "/>   

            </div>
        </div>
    );
}
