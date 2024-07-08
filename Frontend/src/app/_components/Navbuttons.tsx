"use client";
function NavButton({text}:any){
    return (
       <a href={`#${text}`}>
        
           <button className="pointer-events-none border border-blue-500 rounded p-[0.5vw] bg-white w-[10vw] text-[0.9vw] text-black font-semibold h-[2.8vw]">{text}</button>
       </a> 
    );
}

export default function NavButtons() {
    const buttons = ['ROUNDS','CATEGORIES','PRIZES','SYLLABUS','DATE/VENUE','TESTIMONAL']
    return (
        <div className="py-[5vw] z-[1] relative" >
            <ul className="flex flex-row justify-between px-[15vw]"
            onClick ={(event)=>{
                event.preventDefault();
                const target = event.target as HTMLAnchorElement;
                const id = target.getAttribute('href')?.replace('#','')
                const element = document.getElementById(String(id))
                element?.scrollIntoView({
                    behavior: 'smooth'
                })
            }}
            >
                {buttons.map((text)=>(
                    <li key={text}><NavButton text={text}/></li>
                ))}
            </ul>
        </div>
    );
}