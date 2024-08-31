"use client"
import Image from 'next/image'
import { useState } from 'react';
import Buttongp from './Buttongp';
import bottomgp from './assets/bottomgp.svg';
import shipgp from './assets/shipgp.svg';

function PostAbout() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col h-[852px] relative bg-[#E5F2FF] z-[-1]' >
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        marginTop: '10vh' 
      }}>
        <Buttongp text="Rounds"  />
        <Buttongp text="Categories" />
        <Buttongp text="Prizes" />
        <Buttongp text="Syllabus" />
        <Buttongp text="Timeline" />
        <Buttongp text="Testimonial" />
      </div>
      
      {/* <Image 
        src={shipgp} 
        alt="Ship Graphic" 
        style={{ 
          position: 'absolute', 
          bottom: '8%', 
          right: '0', 
          transform: 'translateY(50%)', 
          zIndex:'-1'
        }} 
      /> */}
      
    </div>
  );
}

export default PostAbout;
