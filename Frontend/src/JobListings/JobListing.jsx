/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import FooterBar from '../components/FooterBar'
import JobListings from '../components/Pages/JobListings'


function JobListing() {
   
  return (<>
  <Navbar/>
  <div className="min-h-screen">
  <JobListings/>
  </div>
  


  <FooterBar/>
  
  
  
  </>
    
  )
}

export default JobListing