"use client"
import { useState } from "react"
import Image from "next/image"
import Nav from "./nav"
import Navbar from "./Navbar"
import Home from "./Home"
import 'boxicons/css/boxicons.min.css';

import PrivateRoute from "../_components/PrivateRoute"



export default function Dashboard(){
    

    return(
  
            
                
                
            <PrivateRoute>
            <div className="">
             
               <Home/>
       
            </div>
            </PrivateRoute>
     
    )
}