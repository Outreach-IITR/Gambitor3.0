import { useSelector } from "react-redux";

interface UserState {
    currentUser: any;
    loading: boolean;
    error: boolean | string;
  }
  interface RootState {
    user: UserState
  }


export default function Mobile(){
    const user = useSelector(((state:RootState) => state.user.currentUser.data))
    return(
        <div className="m-5 p-5 bg-[#0452D8] space-y-10 flex rounded-[20px] py-10 flex-col items-center justify-center">
            <h1 className="font-semibold text-[20px] leading-[14px] tracking-[0.31px] text-white">School Ambassador Programme</h1>
            <p className="text-white text-center text-[15px] font-normal leading-normal tracking-[0.5px]">Share this referral code with your friends and get a chance to visite IIT roorkee</p>
            <div className="w-[301px] h-[64px] rounded-[12px] bg-white text-center flex items-center justify-center">
                <h1 className="font-bold text-[32px] leading-normal text-[#0452D8] text-center">{user.myReferral}</h1>
            </div>
            <div className="bg-[#0452D8] rounded-[20px]  border-[5px] h-[276px] w-[318px] p-5">
                    <h1 className="font-extrabold text-[32px] leading-[24px] tracking-[0.5px] text-white text-center">Perks</h1>
                    <div className="text-[14px] tracking-[0.5px] leading-[24px] text-center text-white flex flex-col gap-5">
                        <h1>At 100 referrals you get certificate from IIT Roorkee</h1>
                        <h1>At 500 referrals you get IIT Roorkee Goodies</h1>
                        <h1>At 2000 referrals you will be invited to IIT Roorkee </h1>
                    </div>
            </div>
            <div className="flex flex-col space-y-5">
                <h1 className="font-semibold text-[28px] text-white leading-[32.9px] tracking-[0.5px]">Your referral count</h1>
                 <div className="w-[99px] h-[82px] text-[42px] leading-[50px] flex items-center justify-center text-white text-center font-bold mx-auto border-[4px] rounded-[12px]">{user.referralCount}</div>
            </div> 

        </div>

    )
}