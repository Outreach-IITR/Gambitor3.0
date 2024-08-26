
import {useDispatch, useSelector } from "react-redux";
import axios from "../https/api"
import { deleteUserFailure,deleteUserStart,deleteUserSuccess } from "@/redux/user/userSlice";

interface UserState {
    currentUser: any;
    loading: boolean;
    error: boolean | string;
  }
  interface RootState {
    user: UserState
  }

export default function Header(){
    const { currentUser } = useSelector((state: any) => state.user);
    console.log(currentUser)
    const dispatch = useDispatch()
    const handleClick = async (e: any) => {
        try{
            dispatch(deleteUserStart())
            const response = axios.get('/logout');
            console.log('User Logged Out Successfully');
            dispatch(deleteUserSuccess());
            console.log('User Logged Out Successfully');
        }catch(error)
        {
            deleteUserFailure(error);
        }
      };
    return(
        <div className="py-[2rem] pb-[4rem] relative z-1 max-w-[1380px] pt-[6rem] mx-auto flex justify-between items-center">
           <img alt="" src="/logo.svg" className="w-[392px]"/>
           <div className="flex space-x-6">
            {currentUser?(<a href="/dashboard">
                    <button className="text-[20px] font-overpass leading-[25px] font-medium  border border-slate-200 rounded-xl bg-white w-[100px]  text-black  h-[45px] active:bg-slate-200 cursor-pointer">Dashboard</button>
                </a>):(null)}
                <a href="/signup">
                <button className="text-[20px] font-overpass leading-[25px] font-medium  border border-blue-500 rounded-xl bg-white w-[100px]  text-black  h-[45px] active:bg-slate-200 cursor-pointer">Sign up</button>
                </a>
                {!currentUser?(<a href="/login">
                <button className="text-[20px] font-overpass leading-[25px] font-medium  border border-blue-500 rounded-xl bg-white w-[100px]  text-black  h-[45px] active:bg-slate-200 cursor-pointer">Log in</button>
                </a>):(<a href="#">
                <button className="text-[20px] font-overpass leading-[25px] font-medium  border border-blue-500 rounded-xl bg-white w-[100px]  text-black  h-[45px] active:bg-slate-200 cursor-pointer" onClick={handleClick}>LogOut</button>
                </a>)}

           </div>
         
        </div>
            

        
    )
}