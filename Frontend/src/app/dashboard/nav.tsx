"use client";
import { useState } from "react";

interface text {
  text: string;
}

function Abc({ text }: text) {
  return (
    <div>
      <h1 className="py-4 pl-3 cursor-pointer">{text}</h1>
    </div>
  );
}

export default function Nav() {
  const [nav, setNav] = useState("Dashboard");

  const pages = [
    "Dashboard",
    "Updates",
    "Practice Papers",
    "School Ambassador",
    "Help Section",
    "Settings",
  ];
  return (
    <div className="flex flex-col space-y-4 mt-[50px] ml-[3rem] text-[16px] font-medium  rounded-bl-xl rounded-tl-xl">
      {pages.map((text) => (
        <div
          onClick={() => {
            setNav(text);
          }}
          key={text}
          className={
            nav == text ? "bg-white rounded-bl-xl rounded-tl-xl" : "bg-transparent text-white"
          }
        >
          <Abc text={text} />
        </div>
      ))}
    </div>
  );
}
