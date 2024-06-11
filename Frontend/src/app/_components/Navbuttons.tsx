
function NavButton({text}:any){
    return (
       <a href={`#${text}`}>
        
           <button className="border border-blue-500 rounded p-3 bg-white w-[10vw] text-base text-black font-semibold">{text}</button>
       </a> 
    );
}

export default function NavButtons() {
    const buttons = ['ROUNDS','CATEGORIES','PRIZES','SYLLABUS','DATE/VENUE','TESTIMONAL']
    return (
        <div className="py-[10vh] z-[1] relative">
            <ul className="flex flex-row justify-between px-[15vw]">
                {buttons.map((text)=>(
                    <li key={text}><NavButton text={text}/></li>
                ))}
            </ul>
        </div>
    );
}