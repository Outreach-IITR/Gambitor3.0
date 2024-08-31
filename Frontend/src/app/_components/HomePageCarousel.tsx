"use client";
import { useState, useEffect, useCallback } from "react";
import YouTube from "react-youtube";

import Image from "next/image";
import { slides } from "./assets/CarouselData";
import LeftArrow from "./assets/LeftArrow.svg";
import RightArrow from "./assets/RightArrow.svg";

const HomePageCarousel = () => {
  const [current, setCurrent] = useState(2);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const length = slides.length;

  //Functions to change slides
  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const onPlayHandler = () => {
    setIsVideoPlaying(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isVideoPlaying) {
        nextSlide();
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [current, nextSlide, isVideoPlaying]);

  //to check passed variable is an array and is not empty
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="YTCarousel relative mt-0 z-1 pt-[5vw] lg:top-[10rem] top-[5rem] lg:bg-transparent lg:bg-[#2445B5]" id="TESTIMONIAL">
      <div className="">
        <h3 className="text-[3rem] font-bold text-center leading-[60px] font-overpass text-white my-10">IIT Roorkee at a Glance</h3>
        {/* <p>Don't just take our word, see for yourself</p> */}
      </div>

      <section className="slider">
        <Image
          className="left-arrow"
          src={LeftArrow}
          alt="left control"
          onClick={prevSlide}
        />
        {/* To show each slide */}
        {slides.map((img, indx) => {
          return (
            <div
              className={`slide ${indx === current ? "active " : ""}${
                (indx < current && `prevImg${current - indx}`) ||
                (indx > current && `nextImg${indx - current}`) ||
                (indx === current && "currentImg")
              }`}
              key={indx}
            >
              {/* Giving each slide a class wrt to its position from current slide */}
              <YouTube
                className="Img"
                videoId={img.video}
                opts={opts}
                onPlay={onPlayHandler}
              />
            </div>
          );
        })}
        <Image
          className="right-arrow"
          src={RightArrow}
          alt="right control"
          onClick={nextSlide}
        />
      </section>
      <div className="h-[10rem]">
      {slides.map((img, indx) => {
        return (
          indx === current && (
            <div key={indx} className="text-[1.2rem] font-medium text-center leading-[30px] font-overpass text-white max-w-[50rem]">
              {img.description}
            </div>
          )
        );
      })}

      </div>
    </div>
  );
};

export default HomePageCarousel;
