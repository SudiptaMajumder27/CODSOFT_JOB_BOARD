/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import FooterBar from '../components/FooterBar'
import JobDetails from '../components/Pages/JobDetails'

function JobDetail() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
     <JobDetails/>
    </div>

    <FooterBar/>
    </>
  )
}

export default JobDetail