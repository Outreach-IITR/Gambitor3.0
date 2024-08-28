"use client";
import { Public_Sans } from "next/font/google"
import school from "../../../../public/school.svg"
import Image from "next/image"
import { useMediaQuery } from "react-responsive";
import Mobile from "./Moble"
import { useSelector } from "react-redux";

interface UserState {
    currentUser: any;
    loading: boolean;
    error: boolean | string;
  }
  interface RootState {
    user: UserState
  }

export default function Ambassador(){
    const isMobile = useMediaQuery({query: '(max-width: 900px)'})
    const user = useSelector(((state:RootState) => state.user.currentUser.data))
    console.log(user)
    console.log(user.myReferral)
    
    return(
        <div>
        {isMobile? <Mobile/> :

        <div className="h-[calc(100%-100px)] px-[100px] flex flex-col  pb-[20px]" >
            <div className="flex flex-col items-center">
                    <div className="w-[370px] h-[82px] rounded-[12px] bg-[#0452D8] text-center flex items-center justify-center">
                        <h1 className="font-bold text-[42px] leading-[50px] text-white">{user.myReferral}</h1>
                    </div>
                    <div className="w-[726px]">
                    <p className="font-semibold text-[28px] leading-[32.9px] tracking-[0.5px] text-center mt-10">Share this referral code with your friends and get a chance to visite IIT roorkee</p>

                    </div>
                    <div className="flex flex-col mt-10 space-y-10">
                        <h1 className="font-semibold text-[28px] leading-[32.9px] tracking-[0.5px]">Your referral count</h1>
                        <div className="w-[99px] h-[82px] text-[42px] leading-[50px] flex items-center justify-center text-white text-center font-bold mx-auto bg-[#676767] rounded-[12px]">{user.referralCount}</div>
                    </div> 
                
            </div>
            <div className="flex justify-center gap-[10vw] mt-20">
                <Image src={school} className="w-[410px] hidden xl:block" alt="" />
                <div className="bg-[#0452D8] rounded-[20px] w-[500px]  p-10">
                    <h1 className="font-extrabold text-[32px] leading-[24px] tracking-[0.5px] text-white text-center mb-[25px]">Perks</h1>
                    <div className="text-[22px] tracking-[0.5px] leading-[24px] text-center text-white flex flex-col gap-5">
                        <h1>At 100 referrals you get certificate from IIT Roorkee</h1>
                        <h1>At 500 referrals you get IIT Roorkee Goodies</h1>
                        <h1>At 2000 referrals you will be invited to IIT Roorkee </h1>
                    </div>
                </div>
            </div>
        </div>
        
        }
        </div>
    )
}