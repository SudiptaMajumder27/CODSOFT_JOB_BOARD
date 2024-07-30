/* eslint-disable no-unused-vars */
import React from "react"

import Navbar from "./components/Navbar"
import FrontPage from "./components/FrontPage"
 import "./App.css"
import Footer from "./components/FooterBar";


function Home() {
  return (
    <>
     <Navbar/>
    <FrontPage/>
    <Footer/>
    </>
  )
}

export default Home