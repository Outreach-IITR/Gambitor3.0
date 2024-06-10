import Image from "next/image";
import img1 from "../../../public/dolphine.svg"


export default function AboutSection(){
    return(
        <div className="flex mx-[15vw] justify-between mb-20">
            <div className="w-1/2">
                <h1 className="text-3xl my-2 font-bold">ABOUT US</h1>
                <p className="text-xl font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odio iste illum obcaecati? Quisquam exercitationem molestias perferendis repellat eaque rerum quasi harum maiores eos distinctio aspernatur deleniti facere architecto explicabo quo dolor sint ad, veniam quod modi. Aspernatur totam iusto est, vitae placeat pariatur reiciendis itaque. Repellendus ut odit repellat similique doloremque a esse laborum laboriosam nulla saepe recusandae at consequuntur, accusamus sunt odio itaque repudiandae expedita quisquam maxime officiis id voluptatem magni sit! Commodi similique deleniti neque sunt cupiditate in obcaecati laboriosam nam, impedit repellat iure molestias tenetur quia id. Itaque nostrum sapiente dolorum nulla, hic repudiandae laborum eaque.
                </p>

            </div>
            <div className="flex align-middle ">
                <Image src={img1}></Image>
            </div>
            

        </div>
    )
}