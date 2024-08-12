import Image from "next/image";


export default function Header(){
    return(
        <div className="py-[2rem] pb-[4rem] relative z-1 max-w-[1380px] mx-auto flex justify-between items-center">
           <img alt="" src="/logo.svg" className="w-[392px]"/>
           <div className="flex space-x-6">
                <a href="/dashboard">
                    <button className="text-[20px] font-overpass leading-[25px] font-medium  border border-slate-200 rounded-xl bg-white w-[100px]  text-black  h-[45px] active:bg-slate-200 cursor-pointer">Updates</button>
                </a>
                <a href="/signup">
                <button className="text-[20px] font-overpass leading-[25px] font-medium  border border-blue-500 rounded-xl bg-white w-[100px]  text-black  h-[45px] active:bg-slate-200 cursor-pointer">Sign up</button>
                </a>
                <a href="/login">
                <button className="text-[20px] font-overpass leading-[25px] font-medium  border border-blue-500 rounded-xl bg-white w-[100px]  text-black  h-[45px] active:bg-slate-200 cursor-pointer">Log in</button>
                </a>
           </div>
         
        </div>
            

        
    )
}