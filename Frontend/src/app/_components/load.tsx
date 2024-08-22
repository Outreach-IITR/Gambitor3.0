import {Wave} from 'react-css-spinners'

export default function Load(){
    return(
        <div className="flex items-center justify-center w-[100vw] h-[100vh] space-x-3">
            <h1 className="text-[4rem] text-[#3664AF] font-medium">Loading</h1>
            <div><Wave
    color="#3664AF"
    size={80}
    thickness={12}
  /> 
            </div>
        </div>
    )
}