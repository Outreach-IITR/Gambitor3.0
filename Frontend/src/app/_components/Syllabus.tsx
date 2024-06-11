"use client";
import Image from "next/image";
import { useState } from "react";


function NavButton({text}:any){
    return (
       
        
        <button  className="border border-blue-2vw rounded p-[0.5vw] bg-grey w-[15vw] text-[1vw] text-white font-semibold h-[3vw]">{text}</button>
       
    );
}


export default function Syllabus(){
    const buttons = ['CLASS 9','CLASS 10','CLASS 11','CLASS 12']
    const [std, setStd] = useState("CLASS 9")
    return(
        <section className="text-white relative z-[1]  mx-[15vw] pt-[2vw] flex flex-col text-center space-y-[2vw]" id="SYLLABUS">
            <h1 className ="text-[2.5vw] my-[1vw] font-bold" >SYLLABUS</h1>
            <div>
              <ul className="flex flex-row justify-between 
              ">
                {buttons.map((text)=>(
                    <li onClick={()=>{setStd(text)}}  key={text}><NavButton text={text}/></li>
                ))}
             </ul>

            </div>
            
            {std === 'CLASS 9' && (
        <div className="mt-4 px-[15vw] pt-[2vw] text-white text-[1vw] rounded font-semibold   ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis tempora, vitae harum amet voluptas quisquam perspiciatis ipsam eligendi, soluta fugiat asperiores reiciendis, mollitia tenetur quasi maiores reprehenderit adipisci vel delectus accusamus atque pariatur culpa necessitatibus obcaecati. Saepe fuga rem ea cum recusandae neque soluta molestiae, reiciendis tempora amet non dolore impedit iusto distinctio sapiente ut molestias eveniet ipsum harum? Porro ex tempora cumque alias? Labore voluptatibus quae, aliquid atque, harum debitis dolore voluptate ea odio, maiores laboriosam laborum aspernatur tenetur eaque laudantium dolor a impedit provident magni accusamus? Consequatur, nostrum ratione praesentium distinctio iste saepe illum officiis voluptates mollitia fuga.
        </div>
      )}
         {std === 'CLASS 10' && (
        <div className="mt-4 px-[15vw] pt-[2vw] text-white text-[1vw] rounded font-semibold ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, sed saepe! Provident ratione ea dolor dolorem voluptatibus veniam accusantium temporibus excepturi! Doloribus esse ab eius, dolor, cumque fuga suscipit vel ipsa similique ducimus id nam unde. Quos hic laboriosam modi eveniet! Nesciunt animi fugiat vero inventore adipisci eius libero cupiditate mollitia doloremque. Cumque quas molestiae voluptas natus, possimus voluptatibus, ratione soluta unde architecto perspiciatis laudantium esse! Consequatur ex, error a laborum incidunt recusandae debitis voluptas sunt optio distinctio odio similique veritatis eos corrupti, doloribus mollitia numquam, laboriosam provident magni reiciendis inventore culpa? Molestias sit iure ipsam, doloremque nam eum quas?
        </div>
      )}
         {std === 'CLASS 11' && (
        <div className="mt-4 px-[15vw] pt-[2vw] text-white text-[1vw] rounded font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, eos? Corrupti, consequuntur quisquam. Ad consequuntur, exercitationem veritatis quasi modi reprehenderit quas quidem sed optio, voluptate dolor, similique asperiores dolore sunt? Consequatur, quia! Quod consequatur corrupti laudantium dolor excepturi itaque commodi, amet quam tempora suscipit odio iusto, illum, aspernatur expedita delectus nulla tempore culpa? Soluta est omnis earum aliquid vel nam optio. Labore nihil sequi repellat odio consequuntur ipsum quisquam alias minus, qui facilis itaque mollitia. Ut, voluptas aliquam! Dolorum neque iure blanditiis sequi? Iusto ratione quaerat voluptatibus error, corporis, repellat totam sapiente maiores beatae ipsa qui nulla, dignissimos iure sed.
        </div>
      )}
         {std === 'CLASS 12' && (
        <div className="mt-4 px-[15vw] pt-[2vw] text-white text-[1vw] rounded font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perspiciatis facilis, sunt cum perferendis, vitae corporis veritatis eius non hic quas consequuntur repellat amet dolores dignissimos, facere temporibus blanditiis eaque ipsa laboriosam. Aliquid, cupiditate, molestias quibusdam ut dicta optio voluptate sed delectus labore culpa voluptatibus nisi neque quo nam dolores eius? Pariatur, qui molestiae totam optio exercitationem a eaque. Esse fuga praesentium quaerat, cupiditate eveniet illo error. Odio expedita sunt deserunt atque vel velit nostrum qui dolorem. Illo reiciendis, delectus, enim qui tempora eligendi neque eius pariatur vitae aliquid atque, sunt ipsum similique laborum asperiores perspiciatis? Repellendus consectetur eaque sint.
        </div>
      )}
            
        </section>
    )
}