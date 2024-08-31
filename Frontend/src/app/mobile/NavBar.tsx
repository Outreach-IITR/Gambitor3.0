"use client"
import Image from 'next/image'
import { useState } from "react";
import './Res.css'
import Logo from './assets/Navbar/logo.svg'
import Cross from './assets/Navbar/cross.svg'
import Box from './assets/Navbar/box.svg'
import Toggler from './assets/Navbar/toggler.svg'
import Link from 'next/link';
import { useDispatch,useSelector} from "react-redux";
import axios from "../https/api"
import {useRouter} from 'next/navigation'
import { deleteUserFailure,deleteUserStart,deleteUserSuccess } from "@/redux/user/userSlice";

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
                {/* <i className={`${ico}`}></i> */}
                <Link href={path} className= "py-4 pl-3 cursor-pointer">{text}</Link>
        </li>
    )
        
}



export default function Navbar() {
    const [isTogglerVisible, setIsTogglerVisible] = useState(Toggler);
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    const user = useSelector(((state:RootState) => state.user.currentUser))
    console.log(user)
    const handleLogoutClick = async (e: any) => {
        try{
            dispatch(deleteUserStart())
            const response = axios.get('/logout');
            console.log(response)
            console.log('User Logged Out Successfully');
            dispatch(deleteUserSuccess());
            console.log('User Logged Out Successfully');
            router.push('/');
        }catch(error)
        {
            deleteUserFailure(error);
        }
      };

    function childClick(event:any) {
        event.stopPropagation();
        
    }

    function toggleIcons(event:any) {
        event.preventDefault();
        setIsTogglerVisible((prevSrc:any) => (prevSrc === Toggler ? Cross : Toggler));
    }
    const toggleModal = ()=>{
        setModal(!modal);
    }
    let backgroundImageStyle = {
        backgroundImage: `url("popbg.svg")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        
        
      };

      const pages = [{text:"Dashboard", ico:'bx bxs-home-alt-2', path:"/dashboard"}, 
        {text:"Logout", ico:"bx bxs-bell", path:"", onClick: handleLogoutClick}, 
   
     ]
    

    return (
            <div>
            <div className="bg-transparent backdrop-blur-md h-[10vh] w-[100%] flex justify-between z-20 items-center pl-4 fixed top-0">
            <div>
                <a href="/"><Image src={Logo} alt="Logo" className="h-12" /></a>
            </div>
            <div className="flex flex-row mr-6 mt-1 relative z-[50]">
                
                    <Image  src={Box} alt="Box" className="mr-1 h-16 w-16 relative z-50" onClick={toggleModal} />
                
                {user && <Image src={isTogglerVisible} alt="Toggle Icon" onClick={toggleIcons} className="relative w-8 z-50" />}
            </div>
            </div>
            {modal &&  
            <div className='fixed z-50 top-0 w-[100%] h-[100vh] bg-transparent backdrop-blur-sm  flex justify-center items-center flex-col' onClick={toggleModal}>
                <div className="max-w-[360px] h-[370px] p-[2rem] flex flex-col justify-center items-center space-y-5" style={backgroundImageStyle} onClick={childClick}>
                    <h1 style={{fontFamily:'Cooper Black'}} className='text-[32px] leading-[37px] text-[#4C2D04] font-normal'>Register Now</h1>
                    <p className='text-center font-overpass font-normal leading-[25.32px] text-[20px]'></p>
                    <a href="/signup">
                    <button className="w-[144px] h-[36px] rounded-[12px] bg-[#4C2D04] text-[20px] leading-[23px] text-[#FEFEFE] text-center " style={{fontFamily:'Cooper Black'}}>Register</button>
                    </a>
                    <p className='font-overpass font-normal text-lg leading-[28px] text-white text-center'><span className='text-[#4C2D04]'>Already registered?</span><a href="/login" className='cursor-pointer'> Click here to Login</a> </p>
                </div>
                <Image src="/chest.svg" alt="" height={250} width={347} onClick={childClick}></Image>
            </div>
            }
            {isTogglerVisible==Cross && user &&
                <div className="lg:hidden fixed top-0 right-0 w-[250px] h-[213px] rounded-bl-[8px] border-[1px] z-[20] border-[#222934] bg-[#222934]">
                    <div className="w-full h-[10vh] bg-white rounded-br-[8px] mb-[10px] rounded-bl-[8px] relative flex justify-end px-5 items-center">
                    <Image  src={Box} alt="Box" className="mr-1 h-16 w-16  " onClick={toggleModal} />    
                    <Image src={isTogglerVisible} alt="Toggle Icon" onClick={toggleIcons} className="relative w-8 z-50" />
                      <div>
                            <h1 className="font-medium leading-normal text-[14px]">{user.name}</h1>
                            <p className="font-normal text-[12px] opacity-60">{user.category}</p>
                    </div>
                    </div>
                        <ul onClick={()=>(setIsTogglerVisible(Toggler))} className="mx-[10px]">
                            {pages.map(({text, ico, path,onClick})=>(
                                <Buttons key={text} text={text} ico={ico} path={path} onClick={onClick}/>
                            ))}
                        </ul>
                    
            </div>
            }
            </div>
            

        
    );
}
