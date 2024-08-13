"use client"

import About from './About'
import Image from 'next/image'
import HomePageCarousel from '../_components/HomePageCarousel'
import Categories from './Categories'
import Rounds from './Rounds'
import Prize from './Prize'
import Syllabus from './Syllabus'
import Register from './Register'
import PostAbout from './PostAbout'
import bottomgp from './assets/bottomgp.svg';

import NavBar1 from './NavBar1'
import NavBar from './NavBar'

import OpenPage from './OpenPage'

const Mobile = () => {
   
  return (
    <div >
      
      
      
      

      <OpenPage></OpenPage>
      
      <About></About>
      
      <PostAbout></PostAbout>
      
      
      <div>
        <Image src={bottomgp} alt="" className='-bottom-[3rem] w-full fixed'></Image>
      </div>
      <Rounds></Rounds>
      {/* <NavBar1></NavBar1> */}
      
      <Categories></Categories>
      
      <Prize></Prize>
      
      <Syllabus></Syllabus>
      <div className='bg-[#2445B5] relative z-20'>
        <HomePageCarousel/>

      </div>
      <NavBar></NavBar>
      
      
      

       
    </div>
  )
}

export default Mobile
