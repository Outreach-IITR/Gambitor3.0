"use client"
import { useState } from "react";
import cross from "../../../public/cross.svg"
import Toggler from "../../../public/toggler.svg"
import Logo from  "../../../public/logo.svg"
import Bell from  "../../../public/bell.svg"
import Image from "next/image";
import Link from "next/link";
import axios from '../https/api'
import { useDispatch,useSelector} from "react-redux";
import { ambassadorFailure,ambassadorStart,ambassadorSuccess } from "@/redux/user/userSlice";

interface UserState {
  currentUser: any;
  loading: boolean;
  error: boolean | string;
}
interface RootState {
  user: UserState
}

interface abc{
    text:string,
    ico: string,
    path: string,
    onClick?: (e: React.MouseEvent<HTMLLIElement>) => Promise<void> | void;
}

function Buttons({text, ico , path,onClick }:abc){
    const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
        if (onClick) {
            onClick(e); // Call the onClick function if provided
        }
    };
    return(
        <li key={text} className="w-[231px] h-[56px] py-[16px] pl-[28px] rounded-[12px] hover:bg-white text-white hover:text-[#222934]" onClick={handleClick}>
                <i className={`${ico}`}></i>
                <Link href={path} className= "py-4 pl-3 cursor-pointer">{text}</Link>
        </li>
    )
        
}

function getFirstName(fullName: string | null | undefined): string {
    // Handle null or undefined fullName
    if (!fullName) {
        return '';
    }
    
    // Split the full name by spaces
    const nameParts = fullName.split(' ');
    
    // Return the first part as the first name
    return nameParts[0];
}

export default function Navbar(){
    const dispatch = useDispatch()
    const handleAmbassadorClick = async (e: any) => {
        try {
            dispatch(ambassadorStart())
          const response = await axios.get(`user/school-ambassador/${user.id}`)
          console.log(response.data);
          dispatch(ambassadorSuccess(response.data))

        } catch (error) {
          console.log(error);
          //error to be handled in a better way
          dispatch(ambassadorFailure('Error occured'))
    };
  }

    const pages = [{text:"Dashboard", ico:'bx bxs-home-alt-2', path:"/dashboard"}, 
        {text:"Updates", ico:"bx bxs-bell", path:"/dashboard/updates"}, 
        {text:"Practice Papers", ico:"bx bx-file", path:"/dashboard/papers"}, 
        {text:"School Ambassador",ico:"bx bx-medal", path:"/dashboard/ambassador", onClick: handleAmbassadorClick}, 
        {text:"Help Section", ico:"bx bxs-help-circle", path:"/dashboard/help"}, 
        {text:"Settings", ico:"bx bxs-cog", path:"/dashboard/settings"}]
    const [isToggler, setIsToggler] = useState(true);
    const user = useSelector(((state:RootState) => state.user.currentUser.data))
    console.log(user)
    const firstName = getFirstName(user.name);

    return(
        <div className="sticky top-0">
            <div className="flex w-full justify-between items-center pt-5 lg:hidden lg:px-[2rem]">
                <a href="/">
                    <Image src={Logo} alt="" />
                </a>
                <div className="relative z-10" onClick={()=>{setIsToggler(!isToggler)}}>
                    {isToggler==true? <Image src={Toggler} alt="" />:
                        <Image src={cross} alt="" />

                    }
                </div>

            </div>
            {!isToggler &&
            <div className="lg:hidden fixed top-0 right-0 w-[250px] h-[513px] rounded-bl-[8px] border-[1px] border-[#222934] bg-[#222934]">
                    <div className="w-full h-[110px] bg-white rounded-br-[8px] mb-[40px] rounded-bl-[8px]  flex justify-center items-center flex-col">
                        <div>
                            <h1 className="font-medium leading-normal text-[14px]">{user.name}</h1>
                            <p className="font-normal text-[12px] opacity-60">{user.category}</p>
                        </div>
                    </div>
                        <ul onClick={()=>(setIsToggler(!isToggler))} className="mx-[10px]">
                            {pages.map(({text, ico, path,onClick})=>(
                                <Buttons key={text} text={text} ico={ico} path={path} onClick={onClick}/>
                            ))}
                        </ul>
                    
            </div>
            }
            <div className="flex justify-between lg:px-[2rem] h-[100px] items-center w-full">
                <div className="">
                    <h1 className="text-[40px] font-bold leading-[47px]">Welcome, {firstName}!</h1>
                </div>
                <div className="lg:flex space-x-5 hidden">
                    <Image src={Bell} alt="" />
                    <div className="flex">
                    
                        <div className="">
                            <h1>{user.name}</h1>
                            <h1>{user.category}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
