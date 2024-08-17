/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import FooterBar from '../components/FooterBar'

import MyApplication from '../components/Pages/MyApplication'

function MyApplications() {
  return (
    <>
     <Navbar/>
     <div className="min-h-screen">
        <MyApplication/>
 
  </div>

     <FooterBar/>
    </>
  )
}

export default MyApplications