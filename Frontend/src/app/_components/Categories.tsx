import Image from "next/image";
import sub from "../../../public/sub.svg"
import light from "../../../public/light.svg"




const Categories = () => {
    return (
        <div className="text-white relative z-10 flex flex-col space-y-20 max-w-[1380px] mx-auto" id="CATEGORIES">
            <div className="mb-12 text-center">
                <h1 className="text-[3rem] mb-[4rem] font-bold text-center leading-[60px] font-overpass">CATEGORIES</h1>
                <div className="flex flex-wrap justify-center space-x-8">
                    <div className="flex-1 p-16 transition-colors duration-300 border border-white cursor-pointer rounded-3xl">
                        <h2 className="mb-4 text-2xl font-medium">Class IX & X</h2>
                        <h3 className="text-3xl font-semibold">METIOX</h3>
                    </div>
                    <div className="flex-1 p-16 text-black transition-colors duration-300 bg-yellow-100 border-4 border-yellow-300 cursor-pointer rounded-3xl">
                        <h2 className="mb-4 text-2xl font-medium text-blue-900">Class XI</h2>
                        <h3 className="text-3xl font-semibold text-blue-900">APPOLOX</h3>
                    </div>
                    <div className="flex-1 p-16 transition-colors duration-300 border border-white cursor-pointer rounded-3xl">
                        <h2 className="mb-4 text-2xl font-medium">Class XII</h2>
                        <h3 className="text-3xl font-semibold">ATHENOX</h3>
                    </div>
                </div>

            </div>

            <div className="flex flex-wrap justify-between relative">
                <div className="w-full text-left  lg:w-6/12 rounded-[100%] bg-[#FFF8DB] text-black flex flex-col justify-center p-[6em]">
                    <h2 className="text-[36px] font-semibold leading-[45px]">APPOLOX</h2>
                    <p className="text-[20px] font-overpass leading-[25px] font-medium ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut blandit nibh, 
                        nec laoreet augue. Aliquam ultrices gravida cursus. Aenean id pretium neque, eget vulputate dolor. Integer dignissim nibh id erat lobortis, eget 
                        fringilla tortor posuere. Nulla tempus erat eros, a luctus neque lobortis sit amet. Mauris ornare tristique accumsan. In id aliquet quam, vel aliquam 
                        tellus. Integer placerat purus in magna pharetra, vel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci 
                        luctus et ultrices posuere cubilia curae; In id aliquet quam, vel aliquam tellus. Integer placerat purus in magna pharetra, vel ultricies risus fringilla.
                        Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In id aliquet quam, vel aliquam tellus. 
                        Integer placerat purus in magna pharetra, vel ultricies
                    </p>
                </div>
                <Image src={light} alt="" className="absolute ml-[27rem] mt-[14px] z-[-1]"/>
                <Image src={sub} alt="" className="mt-[120px] mr-[2rem]"/>
            </div>
            <div className="flex justify-end w-full text-left text-white bg-transparent rounded-lg">
                <div className="w-full lg:w-6/12">
                    <h2 className="text-[36px] font-semibold leading-[45px]">ATHENOX</h2>
                    <p className="text-[20px] font-overpass leading-[25px] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut blandit nibh, nec laoreet augue. Aliquam ultrices gravida cursus. Aenean id pretium neque, eget vulputate dolor. Integer dignissim nibh id erat lobortis, eget fringilla tortor posuere. Nulla tempus erat eros, a luctus neque lobortis sit amet. Mauris ornare tristique accumsan. In id aliquet quam, vel aliquam tellus. Integer placerat purus in magna pharetra, vel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;pharetra, vel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuerecurae;pharetra, vel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; </p>
                </div>
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="w-full text-left text-white bg-transparent rounded-lg lg:w-6/12">
                    <h2 className="text-[36px] font-semibold leading-[45px]">METIOX</h2>
                    <p className="text-[20px] font-overpass leading-[25px] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut blandit nibh, nec laoreet augue. Aliquam ultrices gravida cursus. Aenean id pretium neque, eget vulputate dolor. Integer dignissim nibh id erat lobortis, eget fringilla tortor posuere. Nulla tempus erat eros, a luctus neque lobortis sit amet. Mauris ornare tristique accumsan. In id aliquet quam, vel aliquam tellus. Integer placerat purus in magna pharetra, vel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curaevel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; </p>
                </div>
            </div>


        </div>
    );
};

export default Categories;
