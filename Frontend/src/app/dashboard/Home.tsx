import { useRouter} from "next/navigation";
import Image from "next/image";
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
    const updates = ["Exam will be conducted on 13th October." ,
"Students registered for Areteox category kindly refer to previous year papers from the Metiox category.",
"You can enroll as a School Ambassador now!!"
         
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


const heading = "text-center font-semibold sm:text-[32px] sm:leading-[24px] my-[1rem] text-[20px] leading-[17px]"
const desc = "font font-semibold sm:text-[24px] text-[16px] leading-[19px] sm:w-[250px] sm:leading-[24px]"
const button= "w-[144px] font-bold sm:text-[20px] text-[14px] leading-[16.45px] sm:leading-[23.5px] transition-colors duration-300 h-[36px] hover:bg-black text-black hover:text-white bg-white rounded-xl sm:mt-7"
    return(
        <div className="w-full mt-10 lg:mt-0" >
                
                <div className="grid  max-w-[600px] text-white xl:grid-cols-[1.2fr_1fr] xl:grid-rows-[1fr_0.5fr_1fr] grid-cols-1 grid-rows-[1fr_1fr_1fr_1fr_1fr] 2xl:mx-auto xl:mx-10 mx-auto h-[calc(100%-100px)] xl:max-w-[1200px] lg:min-w-[600px] ">
                    {/* 1st block */}
                    <div className="bg-[#0452D8] xl:mr-10 mb-10 rounded-[20px] h-[232px] sm:h-[320px] pb-7 ">
                        <h1 className={heading}>Updates</h1>
                        
                        <div className="h-[calc(100%-33px-28px)] text-justify flex ">
                        <ul className="flex flex-col list-inside list-disc">
                            {updates.map((updates, key)=>(
                                <li key={key} className={key%2==0?'bg-blue-600 sm:py-4 py-1 px-5 sm:px-10 h-[7rem]':'bg-blue-500 h-[7rem] px-5 py-1 sm:py-4 sm:px-10'}>{updates}</li>
                            )
                            )}
                        </ul>
                       
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className="bg-[#0452D8] mb-10 rounded-[20px] sm:p-7 sm:px-7 px-4 pb-2 pt-0 sm:pt-0">
                        <h1 className={heading}>Practice Papers</h1>
                        <div className="flex justify-between sm:pt-4 h-[calc(100%-33px-28px)]">
                            <div className="flex flex-col justify-between">
                                <p className={desc}>Practice more than 10 mock papers and become number 1 among more than 20000 students</p>
                                <a href="/dashboard/papers"><button className={button}>Practice Now</button></a>
                            </div>
                            

                            <Image width={120} height={130} src="sheets.svg" alt="" className="sm:w-[170px]" />
                            

                        </div>
                    </div>

                    {/* third block */}
                    <div className="bg-[#0452D8] xl:mr-10 mb-10 rounded-[20px] sm:p-7 sm:px-7 px-4 pb-2 pt-0 sm:pt-0">
                        <h1 className={heading}>Weekly Question</h1>
                        <div className="flex justify-between sm:pt-4 h-[calc(100%-33px-28px)]">
                            <div className="flex flex-col justify-between">
                                <p className={desc}>Compete with your peers and win chance to get cool IIT Roorkee goodies</p>
                                <button className={button}>Coming soon</button>
                            </div>
                            

                            <Image width={120} height={130} src="weekly.svg" alt="" className="sm:w-[210px] sm:h-[210px]" />
                            

                        </div>
                    </div>

                    {/* 4th block */}
                    <div className="bg-[#0452D8] mb-10 rounded-[20px] sm:p-7 sm:px-7 px-4 pb-2 pt-0 sm:pt-0">
                    <h1 className={heading}>Join Our Community</h1>
                    <div className="flex justify-between sm:pt-4 h-[calc(100%-33px-28px)]">
                            <div className="flex flex-col justify-between">
                                <p className={desc}>Get in contact with the team GambitoR and get all your doubts cleared</p>
                                <a href="https://whatsapp.com/channel/0029VaUzMHl5fM5bRmJVk02e"><button className={button}>Join now</button></a>
                            </div>
                            

                            <Image width={120} height={130} src="join.svg" alt="" className="sm:w-[180px] relative top-[3rem] hidden lg:block" />
                            <Image width={120} height={130} src="join2.svg" alt="" className="sm:w-[180px] relative -right-6 lg:hidden block" />

                        </div>
                    </div>

                    {/* 5th block */}
                    <div className="bg-[#0452D8]  mb-10 rounded-[20px] xl:col-span-2 lg:p-6 p-5  ">
                        <div className="flex flex-col justify-between h-full">                  
                        <div className="flex justify-between h-full">
                            <div className="w-[635px] flex flex-col justify-between">
                                <p className={"font-semibold  sm:text-[24px] sm:leading-[24px] my-[1rem] text-[20px] leading-[17px]"}>Become a School Ambassador and get a chance to win a free trip to IIT Roorkee</p>
                                <button className={button} onClick={handleClick}>Try Now</button> 
                            </div>
                            <Image  width="249" height="211" src="school.svg" alt="" className="relative lg:w-[250px] w-[170px]"/>
                        </div>
                        </div>
                    </div>


                </div>
                
            </div>
    )
}

