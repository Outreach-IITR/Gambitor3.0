"use client"
import { useState } from "react"
import Link from "next/link";
import 'boxicons/css/boxicons.min.css';
import Image from "next/image"
import Logo from "../../../public/logo.svg"
import axios from "../https/api"
import { usePathname } from "next/navigation";
import { useDispatch,useSelector} from "react-redux";
import { ambassadorFailure,ambassadorStart,ambassadorSuccess } from "@/redux/user/userSlice";
interface tabs{
    text:string,
    ico: string,
    path: string,
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => Promise<void> | void;
}
interface UserState {
    currentUser: any;
    loading: boolean;
    error: boolean | string;
  }
  interface RootState {
    user: UserState
  }

function Abc({text, ico, path,onClick}:tabs){
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (onClick) {
            onClick(e); // Call the onClick function if provided
        }
    };
    return(
        <div className="flex items-center pl-6" onClick={handleClick}>
            <i className={`${ico}`}></i>
            <Link href={path} className= "py-4 pl-3 cursor-pointer">{text}</Link>
            
        </div>
    )
}

export default function Sidebar(){
    const dispatch = useDispatch()
    const user = useSelector(((state:RootState) => state.user.currentUser.data))
    const pathname= usePathname();
    const [nav , setNav] = useState("Dashboard")
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
                   {text:"School Ambassador",ico:"bx bx-medal", path:"/dashboard/ambassador",onClick: handleAmbassadorClick}, 
                   {text:"Help Section", ico:"bx bxs-help-circle", path:"/dashboard/help"}, 
                   {text:"Settings", ico:"bx bxs-cog", path:"/dashboard/settings"}]

    return(
        <div className="w-full"> 
            <div className="bg-[#0452D8] h-full lg:w-[300px] rounded-br-[20px] fixed top-0 left-0 z-[1] w-0 lg:block close">
                <div className="bg-white lg:flex justify-center p-3 rounded-bl-xl hidden">
                    <a href="/">
                        <Image src={Logo} priority={true} width={200} height={200} alt="" className="h-auto w-auto"></Image>
                    </a>
                
                </div>
                <div className="lg:flex flex-col space-y-4 mt-[50px] ml-[3rem] text-[16px] font-medium  rounded-bl-xl rounded-tl-xl hidden">
                    {pages.map(({text,ico,path,onClick})=>(
                    <div onClick={()=>{setNav(text); console.log(pathname)}} key={text} className={pathname==path?"bg-white rounded-bl-xl rounded-tl-xl": "bg-transparent text-white"}>
                        <Abc text={text} ico={ico} path={path} onClick={onClick}/>

                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}