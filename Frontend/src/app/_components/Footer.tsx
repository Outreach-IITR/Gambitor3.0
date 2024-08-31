"use client";
import Image from "next/image";
import fb from "./assets/facebook.png";
import insta from "./assets/instagram.png";
import yt from "./assets/youtube.png";
import linkedin from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
import logo from "./assets/footerImg.png";
import Link from "next/link";
import 'boxicons/css/boxicons.min.css';

// import mockPaper from "./assets/MOCKTEST.pdf";


function Footer() {
  let backgroundImageStyle = {
    backgroundImage: `url("footerback.svg")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',

    
    
  };

  const downloadPDF = (data: string, fileName: string) => {
    fetch(data).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = fileName;
        alink.click();
      });
    });
  };

  return (
    <footer className="" style={backgroundImageStyle} >
      
      <div className="flex justify-between flex-col sm:flex-row lg:mt-[12rem] py-[12rem] space-y-20 md:space-y-0 lg:px-[7rem] px-4 md:px-[4rem]">
          <div className="flex relative top-10 sm:top-0 items-center justify-center text-white space-x-10">
            <Image className="w-[150px] lg:w-[250px]" width={250} height={250}  src="logo2.svg" alt="Gambtor Logo" />
            <div className="flex flex-col sm:hidden items-start gap-y-5  xl:gap-y-3 xl:text-[24px] ">
            <Link href="/about">FOLLOW US</Link>
            <div className="flex flex-row gap-x-2">
              <a
                href="https://www.facebook.com/Outreach-Cell-IIT-Roorkee-102873668810173"
                target={"_blank"}
                className="w-8 xl:w-6 hover:translate-y-[-0.1em] hover:text-blue-500"
              >
                <Image src={fb} alt="facebook" className="w-full" />
              </a>
              <a
                href="https://www.instagram.com/outreachiitr/"
                target={"_blank"}
                className="w-8 xl:w-6 hover:translate-y-[-0.1em] hover:text-blue-500  "
              >
                <Image src={insta} alt="instagram" className="w-full" />
              </a>
              {/* <a href="/about"  className="w-8xl:w-6 hover:translate-y-[-0.1em] hover:text-blue-500">
                <img src={twitter} alt="twitter"className="w-full" />
                
              </a> */}
              <a
                href="https://in.linkedin.com/company/outreach-cell-iit-roorkee"
                target={"_blank"}
                className="w-8 xl:w-6 hover:translate-y-[-0.1em] hover:text-blue-500"
              >
                <Image src={linkedin} alt="linkedin" className="w-full" />
              </a>
              <a
                href="https://www.youtube.com/@GambitoRIITRoorkee"
                target={"_blank"}
                className="w-10 xl:w-6 hover:translate-y-[-0.1em] relative top-1 hover:text-blue-500"
              >
                <Image src="youtube.svg" height={100} width={100} alt="linkedin" className="w-full" />
              </a>
            </div>
          </div>
          </div>
        
        <div className="flex flex-row relative top-10 sm:top-0 justify-center items-center gap-6 lg:gap-[6rem] font-jost font-normal  lg:text-base leading-1.5 text-center tracking-wide text-white xl:text-left xl:text-[24px] xl:leading-normal">
          {/* column 1 */}
          <div className="flex flex-col items-start gap-y-5 xl:gap-y-3 ">
            <Link href="/">ABOUT</Link>
            <Link href="/">EVENTS</Link>
            <div className="relative group inline-block">
              <Link href="tel:+918130109526" className="text-white">
                CONTACTS
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-lg font-semibold p-2 rounded-md shadow-lg rmd:text-sm">
              +918130109526
              </div>
            </div>

            {/* <Link href="/">INITATORS</Link> */}
          </div>

          {/* column 2 */}
          <div className="flex flex-col items-start gap-y-5 xl:gap-y-3 ">
            <Link href="#SYLLABUS">RESOURCES</Link>
            <Link href="#SYLLABUS">SYLLABUS</Link>
            {/* <a href={mockPaper} target="_blank" className="hover:translate-y-[-0.1em] hover:text-blue-500">
              MOCK PAPERS
            </a> */}
            {/* <Link href="">PRACTICE PAPERS</Link> */}
            <a href="FAQs.pdf" download>FAQs</a>
          </div>

          {/* column 2 */}
     
          <div className="sm:flex flex-col items-start gap-y-5  xl:gap-y-3 xl:text-[24px] hidden ">
            <Link href="/about">FOLLOW US</Link>
            <div className="flex flex-row lg:gap-x-10 gap-x-2">
              <a
                href="https://www.facebook.com/Outreach-Cell-IIT-Roorkee-102873668810173"
                target={"_blank"}
                className="w-8  hover:translate-y-[-0.1em] hover:text-blue-500"
              >
                <Image src={fb} alt="facebook" className="w-full" />
              </a>
              <a
                href="https://www.instagram.com/outreachiitr/"
                target={"_blank"}
                className="w-8  hover:translate-y-[-0.1em] hover:text-blue-500  "
              >
                <Image src={insta} alt="instagram" className="w-full" />
              </a>
              {/* <a href="/about"  className="w-8xl:w-6 hover:translate-y-[-0.1em] hover:text-blue-500">
                <img src={twitter} alt="twitter"className="w-full" />
                
              </a> */}
              <a
                href="https://in.linkedin.com/company/outreach-cell-iit-roorkee"
                target={"_blank"}
                className="w-8  hover:translate-y-[-0.1em] hover:text-blue-500"
              >
                <Image src={linkedin} alt="linkedin" className="w-full" />
              </a>
              <a
                href="https://www.youtube.com/@GambitoRIITRoorkee"
                target={"_blank"}
                className="w-11 hover:translate-y-[-0.1em] hover:text-blue-500"
              >
                <Image src="youtube.svg" height={140} width={100} alt="linkedin" className="w-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="font-normal text-white text-base leading-relaxed text-center tracking-wide text-opacity-30 pb-20">PRIVACY POLICY | COPYRIGHT | TERMS</p>
      
    </footer>
  );
}

export default Footer;
