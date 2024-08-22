import { useRouter} from "next/navigation";

import axios from "../https/api"
import {useDispatch, useSelector } from "react-redux";
import { ambassadorStart,ambassadorSuccess,ambassadorFailure } from "@/redux/user/userSlice";

interface UserState {
  currentUser: any;
  loading: boolean;
  error: boolean | string;
}
interface RootState {
  user: UserState
}

export default function Home(){


   const router = useRouter();
    const updates = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, helu my frnd",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, ",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,",
         
]
const user = useSelector(((state:RootState) => state.user.currentUser.data))
console.log(user)
const dispatch = useDispatch()
const handleClick = async (e: any) => {
    try {
        dispatch(ambassadorStart())
      const response = await axios.get(`user/school-ambassador/${user.id}`)
      console.log(response.data);
      dispatch(ambassadorSuccess(response.data))
      router.push('/dashboard/ambassador')

    } catch (error) {
      console.log(error);
      //error to be handled in a better way
      dispatch(ambassadorFailure('Error occured'))
};
}


const heading = "text-center font-semibold lg:text-[32px] lg:leading-[24px] my-[1rem] text-[20px] leading-[17px]"
const desc = "font font-semibold lg:text-[24px] text-[16px] leading-[19px] w-[250px] lg:leading-[24px]"
const button= "w-[144px] font-bold lg:text-[20px] text-[14px] leading-[16.45px] lg:leading-[23.5px] transition-colors duration-300 h-[36px] hover:bg-black text-black hover:text-white bg-white rounded-xl mt-7"
    return(
        <div className="w-full h-[calc(100%-100px)]" >
                
                <div className="grid  max-w-[600px] text-white xl:grid-cols-[1.2fr_1fr] xl:grid-rows-[1fr_1fr_1fr] grid-cols-1 grid-rows-[1fr_1fr_1fr_1fr_1fr] 2xl:mx-auto xl:mx-10 mx-auto h-[calc(100%-100px)] xl:max-w-[1200px] lg:min-w-[600px] ">
                    {/* 1st block */}
                    <div className="bg-[#0452D8] xl:mr-10 mb-10 rounded-[20px] pb-7 ">
                        <h1 className={heading}>Updates</h1>
                        
                        <div className="overflow-y-scroll max-h-[200px] text-justify">
                        <ol className="flex flex-col">
                            {updates.map((updates, key)=>(
                                <li key={key} className={key%2==0?'bg-blue-600 py-4 px-10':'bg-blue-500 py-4 px-10'}>{updates}</li>
                            )

                            )}
                        </ol>
                       
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className="bg-[#0452D8]  mb-10 rounded-[20px] p-7 pt-0">
                        <h1 className={heading}>Practice Papers</h1>
                        <div className="flex items-center justify-between h-[70%] pt-4">
                            <div className="flex flex-col justify-center">
                                <p className={desc}>Practice more than 10 mock papers and become number 1 among more than 20000 students</p>
                                <button className={button}>Practice Now</button>
                            </div>
                            <div>

                                <img src="sheets.svg" alt="" className="w-[170px]" />
                            </div>

                        </div>
                    </div>

                    {/* third block */}
                    <div className="bg-[#0452D8] xl:mr-10 mb-10 rounded-[20px] px-7 ">
                        <h1 className={heading}>Weekly Question</h1>
                        <div className="flex justify-between items-center">
                            <div className="">
                                <p className={desc}>Compete with your peers and win chance to get cool IIT Roorkee goodies</p>
                            <button className={button}>Coming Soon</button>
                            </div>
                            <div>
                                <img src="weekly.svg" alt="" className="w-[170px]"/>
                            </div>
                        </div>
                    </div>

                    {/* 4th block */}
                    <div className="bg-[#0452D8]  mb-10 rounded-[20px] pb-10 px-5">
                    <h1 className={heading}>Join Our Community</h1>
                        <div className="flex justify-between items-center h-[calc(100%-24px)]">
                        <div className="">
                            <p className={desc}>Get in contact with the team GambitoR and get all your doubts cleared</p>
                            <button className={button}>Join Now</button>
                        </div>
                            <div className="">

                                    <img src="join.svg" alt="" className="w-[170px]"/>
                         

                            </div>
                        </div>
                    </div>

                    {/* 5th block */}
                    <div className="bg-[#0452D8]  mb-10 rounded-[20px] xl:col-span-2 p-10 pb-4 pt-0">
                        <div className="flex flex-col justify-between h-full">                  
                        <div>
                            <h1 className={heading}>School Ambassador Programme</h1>
                        </div>
                        <div className="flex justify-between h-full">
                            <div className="w-[635px] flex flex-col justify-between">
                                <p className='font font-semibold text-[16px]  lg:text-[24px] lg:leading-[24px]'>Become a School Ambassador and get a chance to win a free trip to IIT Roorkee</p>
                                <button className={button} onClick={handleClick}>Try Now</button> 
                            </div>
                            <img src="school.svg" alt="" className="w-[160px]" />
                        </div>
                        </div>
                    </div>


                </div>
                
            </div>
    )
}

