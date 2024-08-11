"use client";
import Image from "next/image";
import sub from "../../../public/sub.svg"
import light from "../../../public/light.svg"
import { useState } from "react";




const Categories = () => {
    const [cat, setCat] = useState("ARETEOX")


    return (
        <div className="text-white relative z-10 flex flex-col space-y-20 max-w-[1380px] mx-auto" id="CATEGORIES">
            <div className="mb-12 text-center">
                <h1 className="text-[3rem] mb-[4rem] font-bold text-center leading-[60px] font-overpass">CATEGORIES</h1>
                <div className="flex flex-wrap justify-between " 
                // onClick ={(event)=>{
                // //scroll to section
                // event.preventDefault();
                // const target = event.target as HTMLAnchorElement;
                // const id = target.getAttribute('href')?.replace('#','')
                // const element = document.getElementById(String(id))
                // element?.scrollIntoView({
                //     behavior: 'smooth'
                // })}}
                >
                    <a href="#ARETEOX" onClick={()=>{setCat("ARETEOX")}}>
                    <div className={cat=="ARETEOX"?`cat1`: `cat2`} >
                        <h2 className="mb-4 text-2xl font-medium">Class XI</h2>
                        <h3 className="text-3xl font-semibold">ARETEOX</h3>
                    </div>
                    </a>
                    <a href="#METIOX" onClick={()=>{setCat("METIOX")}}>                      
                    <div className={cat=="METIOX"?`cat1`: `cat2`} >
                        <h2 className="mb-4 text-2xl font-medium">Class IX</h2>
                        <h3 className="text-3xl font-semibold">METIOX</h3>
                    </div>
                    </a>
                    <a href="#APOLLOX" onClick={()=>{setCat("APOLLOX")}}>                      
                    <div className={cat=="APOLLOX"?`cat1`: `cat2`}  >
                        <h2 className="mb-4 text-2xl font-medium">Class X</h2>
                        <h3 className="text-3xl font-semibold">APOLLOX</h3>
                    </div>
                    </a>
                    <a href="#ATHENOX" onClick={()=>{setCat("ATHENOX")}}>                    
                    <div className={cat=="ATHENOX"?`cat1`: `cat2`} >
                        <h2 className="mb-4 text-2xl font-medium">Class XII</h2>
                        <h3 className="text-3xl font-semibold">ATHENOX</h3>
                    </div>
                    </a>
                </div>

            </div>

            {/* <div className="flex flex-wrap justify-between relative">
                <div className="w-full text-left  lg:w-6/12 rounded-[100%] bg-[#FFF8DB] text-black flex flex-col justify-center p-[6em]" id="ARETEOX">
                    <h2 className="text-[36px] font-semibold leading-[45px]">ARETEOX</h2>
                    <p className="text-[20px] font-overpass leading-[25px] font-medium ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut blandit nibh, 
                        nec laoreet augue. Aliquam ultrices gravida cursus. Aenean id pretium neque, eget vulputate dolor. Integer dignissim nibh id erat lobortis, eget 
                        fringilla tortor posuere. Nulla tempus erat eros, a luctus neque lobortis sit amet. Mauris ornare tristique accumsan. In id aliquet quam, vel aliquam 
                        tellus. Integer placerat purus in magna pharetra, vel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci 
                        luctus et ultrices posuere cubilia curae; In id aliquet quam, vel aliquam tellus. Integer placerat purus in magna pharetra, vel ultricies risus fringilla.
                        Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In id aliquet quam, vel aliquam tellus. 
                        Integer placerat purus in magna pharetra, vel ultricies
                    </p>
                </div>
                <Image src={light} alt="" className="absolute ml-[27rem] mt-[14px] z-[-1]"/>
                <Image src={sub} alt="" className="mt-[120px] mr-[2rem]"/>
            </div>
            <div className="flex justify-end w-full text-left text-white bg-transparent rounded-lg" id="METIOX" >
                <div className="w-full lg:w-6/12">
                    <h2 className="text-[36px] font-semibold leading-[45px]">METIOX</h2>
                    <p className="text-[20px] font-overpass leading-[25px] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut blandit nibh, nec 
                        laoreet augue. Aliquam ultrices gravida cursus. Aenean id pretium neque, eget vulputate dolor. Integer dignissim nibh id erat lobortis, eget fringilla 
                        tortor posuere. Nulla tempus erat eros, a luctus neque lobortis sit amet. Mauris ornare tristique accumsan. In id aliquet quam, vel aliquam tellus. Integer 
                        placerat purus in magna pharetra, vel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
                        posuere cubilia curae;pharetra, vel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
                        posuerecurae;pharetra, vel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; </p>
                </div>
            </div>
            <div className="flex flex-wrap justify-between" id="APOLLOX">
                <div className="w-full text-left text-white bg-transparent rounded-lg lg:w-6/12">
                    <h2 className="text-[36px] font-semibold leading-[45px]">APOLLOX</h2>
                    <p className="text-[20px] font-overpass leading-[25px] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut blandit nibh, nec 
                        laoreet augue. Aliquam ultrices gravida cursus. Aenean id pretium neque, eget vulputate dolor. Integer dignissim nibh id erat lobortis, eget fringilla 
                        tortor posuere. Nulla tempus erat eros, a luctus neque lobortis sit amet. Mauris ornare tristique accumsan. In id aliquet quam, vel aliquam tellus. 
                        Integer placerat purus in magna pharetra, vel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus 
                        et ultrices posuere cubilia curaevel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
                        posuere cubilia ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; </p>
                </div>
            </div>
            <div className="flex justify-end w-full text-left text-white bg-transparent rounded-lg" id="ATHENOX">
                <div className="w-full lg:w-6/12">
                    <h2 className="text-[36px] font-semibold leading-[45px]">ATHENOX</h2>
                    <p className="text-[20px] font-overpass leading-[25px] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut blandit nibh, nec 
                        laoreet augue. Aliquam ultrices gravida cursus. Aenean id pretium neque, eget vulputate dolor. Integer dignissim nibh id erat lobortis, eget fringilla 
                        tortor posuere. Nulla tempus erat eros, a luctus neque lobortis sit amet. Mauris ornare tristique accumsan. In id aliquet quam, vel aliquam tellus. Integer 
                        placerat purus in magna pharetra, vel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
                        posuere cubilia curae;pharetra, vel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
                        posuerecurae;pharetra, vel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; </p>
                </div>
            </div> */}


        </div>
    );
};

export default Categories;
