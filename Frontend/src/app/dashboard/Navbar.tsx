


export default function Navbar(){
    return(
        <div className="flex justify-between px-[2rem] h-[100px] items-center w-full">
            <div className="w-[432px]">
                <h1 className="text-[40px] font-bold leading-[47px]">Welcome, Utkarsh!</h1>
            </div>
            <div className="flex space-x-5">
                <img src="bell.svg" alt="" />
                <div className="flex">
                    
                    <div>
                    <h1>Full Name</h1>
                    <h1>Appolox</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}