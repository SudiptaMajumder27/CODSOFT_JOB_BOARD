/* eslint-disable no-unused-vars */
import React from "react"
import FooterBar from "../FooterBar"
// import InternshipListings from '../components/Pages/InternshipListings'
import Navbar from "../Navbar"
import InternshipListings from "../Pages/InternshipListings"


function InternshipListing() {
   
  return (<>
  <Navbar/>
  <div className="min-h-screen">
  <InternshipListings/>
  </div>
  <FooterBar/>
  
  
  
  </>
    
  )
}

export default InternshipListing