"use client";






function NavButton({text}:any){
    return (
       
        
           <button id={`b${text}`} className="text-[20px] font-overpass leading-[25px] font-medium pointer-events-none border border-blue-500 rounded bg-white w-[166px]  text-black  h-[60px] active:bg-blue-700">{text}</button>
       
    );
}

export default function NavButtons() {
    

    const buttons = ['ROUNDS','CATEGORIES','PRIZES','SYLLABUS','DATE/VENUE','TESTIMONAL']
    return (
        <div className="py-[9rem] z-[1] relative hidden lg:block max-w-[1380px] mx-auto" >
            <ul className="flex flex-row justify-between "
            onClick ={(event)=>{
                //scroll to section
                event.preventDefault();
                const target = event.target as HTMLAnchorElement;
                const id = target.getAttribute('href')?.replace('#','')
                const element = document.getElementById(String(id))
                element?.scrollIntoView({
                    behavior: 'smooth'
                })
            }}>
                {buttons.map((text)=>(
                    <a href={`#${text}`} className="" onClick={(event)=>{ console.log(event.target)}} key={text}><NavButton text={text}/></a>
                ))}
            </ul>
        </div>
    );
}