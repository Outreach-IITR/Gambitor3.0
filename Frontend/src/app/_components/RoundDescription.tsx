"use client";
import img1 from '../../../public/whale.svg'
import Image from "next/image";
import img2 from "../../../public/sharks.svg"





export default function RoundDescription() {
    
    return (
      <section  id="ROUNDS" className="text-white relative z-[1]  ">
        <h1 className="text-[2.5vw] my-[2vw] font-bold text-center">ROUNDS</h1>
        <div className="flex  justify-between items-center ">
          <div className="">
            <Image src={img1} className='w-[35vw]'></Image>
          </div>
          <div className="w-1/2 pr-[15vw]">
          
            <h1 className="text-[2vw] my-2 font-bold">INCEPTION</h1>
            
            <p className="text-[1vw] font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              odio iste illum obcaecati? Quisquam exercitationem molestias
              perferendis repellat eaque rerum quasi harum maiores eos distinctio
              aspernatur deleniti facere architecto explicabo quo dolor sint ad,
              veniam quod modi. Aspernatur totam iusto est, vitae placeat pariatur
              reiciendis itaque. Repellendus ut odit repellat similique doloremque
              a esse laborum laboriosam nulla saepe recusandae at consequuntur,
              accusamus sunt odio itaque repudiandae expedita quisquam maxime
              officiis id voluptatem magni sit! Commodi similique deleniti neque
              sunt cupiditate in obcaecati laboriosam nam, impedit repellat iure
              molestias tenetur quia id. Itaque nostrum sapiente dolorum nulla,
              hic repudiandae laborum eaque.
            </p>
          
          </div>
        </div>
        <div className="flex justify-between mx-[15vw]  ">
         

          <div className="w-1/2 pt-[5vw]">
            <h1 className="text-[2vw] font-bold">PINNACLE</h1>
            <p className="text-[1vw] font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              odio iste illum obcaecati? Quisquam exercitationem molestias
              perferendis repellat eaque rerum quasi harum maiores eos distinctio
              aspernatur deleniti facere architecto explicabo quo dolor sint ad,
              veniam quod modi. Aspernatur totam iusto est, vitae placeat pariatur
              reiciendis itaque. Repellendus ut odit repellat similique doloremque
              a esse laborum laboriosam nulla saepe recusandae at consequuntur,
              accusamus sunt odio itaque repudiandae expedita quisquam maxime
              officiis id voluptatem magni sit! Commodi similique deleniti neque
              sunt cupiditate in obcaecati laboriosam nam, impedit repellat iure
              molestias tenetur quia id. Itaque nostrum sapiente dolorum nulla,
              hic repudiandae laborum eaque.
            </p>
          </div>
          <div className=''>
            <Image src={img2} className='pl-[3vw] w-[30vw]'></Image>
          </div>
        </div>
      </section>
    );
  }