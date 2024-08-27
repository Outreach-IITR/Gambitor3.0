"use client";

interface list{
    desc: String,
    download: String,
    index: number
}

function List({desc,download, index}: list){
    return(
        <div className={index%2==0?"flex justify-between px-10 p-2 bg-gray-200":"flex bg-gray-300 justify-between px-10 p-2"}>
            <li className="text-[16px] flex items-center text-justify font-semibold tracking-[0.5px]">
                <h1>{desc}</h1></li>
            <button className="text-[16px] ml-5 font-semibold leading-[51px] tracking-[0.5px] text-[#0452D8]" type="button" data-download>Download</button>
        </div>
    )
}

export default function Papers(){

        const papers = [{desc:"This is the update the weekly questions will be uploaded from the next week", download: "leclerc"},
                        {desc:"This is the update the weekly questions will be uploaded from the next week", download: "leclerc"},
                        {desc:"This is the update the weekly questions will be uploaded from the next week", download: "leclerc"}

        ]

    return(
        <div className= "lg:mx-10 h-[80vh] mb-10 overflow-hidden">
            <h1 className="text-[32px] font-semibold leading-[24px] tracking-[0.5px] text-center p-5">Practice Papers</h1>
            <div className="w-full h-full">
                <ol>
                    {papers.map(({desc,download}, index)=>(
                        <div key={index}>
                            <List desc={desc} download={download} index={index}/>
                        </div>
                    ))}
                </ol>
            </div>
        </div>
    )
}