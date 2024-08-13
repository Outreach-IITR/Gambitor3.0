"use client";
import Image from "next/image";
import fb from "./assets/facebook.png";
import insta from "./assets/instagram.png";
import yt from "./assets/youtube.png";
import linkedin from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
import logo from "./assets/footerImg.png";
import Link from "next/link";
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
      
      <div className="flex justify-between mt-[12rem] py-[12rem] lg:px-[7rem] px-[4rem]">
        <div className="">
          <Image className="lg:w-[250px] w-[200px]"  src={logo} alt="Gambtor Logo" />
          {/* <a href="Tel: 91-9558780555" className="" >
            +91-9558780555
          </a>
          <a href="mailto: gambitor@iitr.ac.in" className="">
            gambitor@iitr.ac.in
          </a> */}
        </div>
        <div className="flex flex-row justify-center items-center gap-8 ">
          {/* column 1 */}
          <div className="flex flex-col items-start gap-y-5 font-jost font-normal text-base leading-1.5 text-center tracking-wide text-white xl:text-left xl:gap-y-3 xl:text-[24px] xl:leading-normal">
            <Link href="/about">ABOUT</Link>
            <Link href="/events">EVENTS</Link>
            <Link href="/contacts">CONTACTS</Link>
          </div>

          {/* column 2 */}
          <div className="flex flex-col items-start gap-y-5 font-jost font-normal text-base leading-1.5 text-center tracking-wide text-white xl:text-left xl:gap-y-3 xl:text-[24px] xl:leading-normal">
            <Link href="/about">SYLLABUS</Link>
            {/* <a href={mockPaper} target="_blank" className="hover:translate-y-[-0.1em] hover:text-blue-500">
              MOCK PAPERS
            </a> */}
            <Link href="/about">FAQs</Link>
          </div>

          {/* column 2 */}
          <div className="flex flex-col items-start gap-y-5 font-jost font-normal text-base leading-1.5 text-center tracking-wide text-white xl:text-left xl:gap-y-3 xl:text-[24px] xl:leading-normal">
            Download Paper:
            <Link
              onClick={() => downloadPDF("GambitoR - Apollox (1).pdf", "GambitoR - Apollox")}
              href="/"
            >
              Apollox
            </Link>
            <Link
              onClick={() => downloadPDF("GambitoR - Athenox(1).pdf", "GambitoR - Athenox")}
              href="/"
            >
              Athenox
            </Link>
            <Link
              onClick={() => downloadPDF("GambitoR - Metiox(1).pdf", "GambitoR - Metiox")}
              href="/"
            >
              Metiox
            </Link>
            {/* <Link to="/about">SYLLABUS</Link>
            <a href={mockPaper} target="_blank" className="hover:translate-y-[-0.1em] hover:text-blue-500 ">
              MOCK PAPERS
            </a>
            <Link to="/about">FAQs</Link> */}
          </div>

          {/* column 3 */}
          <div className="flex flex-col items-start gap-y-5 font-jost font-normal text-base leading-1.5 text-center tracking-wide text-white xl:text-left xl:gap-y-3 xl:text-[24px] xl:leading-normal">
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
            </div>
          </div>
        </div>
      </div>
      <p className="font-normal text-white text-base leading-relaxed text-center tracking-wide text-opacity-30 pb-20">PRIVACY POLICY | COPYRIGHT | TERMS</p>
      
    </footer>
  );
}

export default Footer;
