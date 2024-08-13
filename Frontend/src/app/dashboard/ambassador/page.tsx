import { Public_Sans } from "next/font/google"
import school from "../../../../public/school.svg"
import Image from "next/image"

export default function Ambassador(){
    return(
        <div className="h-[calc(100%-100px)] px-[100px] flex flex-col  pb-[20px]" >
            <div className="flex flex-col items-center">
                    <div className="w-[520px] h-[82px] rounded-[12px] bg-[#0452D8] text-center flex items-center justify-center">
                        <h1 className="font-bold text-[42px] leading-[50px] text-white">GMBT20001</h1>
                    </div>
                    <div className="w-[726px]">
                    <p className="font-semibold text-[28px] leading-[32.9px] tracking-[0.5px] text-center mt-10">Share this referral code with your friends and get a chance to visite IIT roorkee</p>

                    </div>
                    <div className="flex flex-col space-y-10">
                        <h1 className="font-semibold text-[28px] leading-[32.9px] tracking-[0.5px]">Your referral count</h1>
                        <div className="w-[99px] h-[82px] text-[42px] leading-[50px] flex items-center justify-center text-white text-center font-bold mx-auto bg-[#676767] rounded-[12px]">24</div>
                    </div> 
                
            </div>
            <div className="flex justify-between mt-20">
                <Image src={school} className="w-[410px]" alt="" />
                <div className="bg-[#0452D8] rounded-[20px] w-[500px] mr-20 p-10">
                    <h1 className="font-extrabold text-[32px] leading-[24px] tracking-[0.5px] text-white text-center mb-[25px]">Perks</h1>
                    <div className="text-[22px] tracking-[0.5px] leading-[24px] text-center text-white flex flex-col gap-5">
                        <h1>At 100 referrals you get certificate from IIT Roorkee</h1>
                        <h1>At 500 referrals you get IIT Roorkee Goodies</h1>
                        <h1>At 2000 referrals you will be invited to IIT Roorkee </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}