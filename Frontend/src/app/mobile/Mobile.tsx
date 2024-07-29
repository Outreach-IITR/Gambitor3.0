"use client"

import About from './About'

import Categories from './Categories'
import Rounds from './Rounds'
import Prize from './Prize'
import Syllabus from './Syllabus'
import Register from './Register'
import PostAbout from './PostAbout'

import NavBar1 from './NavBar1'
import NavBar from './NavBar'

import OpenPage from './OpenPage'

const Mobile = () => {
  return (
    <div >
      <NavBar></NavBar>
      <div>
        
        <OpenPage></OpenPage>
        <About></About>
        <PostAbout></PostAbout>
      </div>
      <div>
      {/* <NavBar1></NavBar1> */}
      <Rounds></Rounds>
      <Categories></Categories>
      <Prize></Prize>
      <Syllabus></Syllabus>
      </div>

       
    </div>
  )
}

export default Mobile
