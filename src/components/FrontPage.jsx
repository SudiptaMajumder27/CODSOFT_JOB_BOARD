/* eslint-disable no-unused-vars */
import React from 'react'
import "./FrontPage.css"
import photo from "../../public/10314646.jpg"


function FrontPage() {
  return (<>

  <div className="md:px-20 px-4  mb-20 max-w-screen-2xl" >
  <br/> <br/> <br/>
    <div className=" h-1/2 top  container mx auto  flex flex-col md:flex-row ">
      <div className=" order-2 md:order-1 top-left w-full md:w-1.5/2">
       <h2  className=" text-xl font-bold "> 5000+ Jobs listed</h2>
        <h1 className="  text-4xl font-bold dark:bg-slate-900 dark:text-white ">Find the<span className="text-orange-800"> Job</span> that fits your life</h1><br/><br/>
        <h2 className="text-2xl ">
        <span className="text-blue-800 text-3xl">Looking</span> for your next career move? <br/><br/>
        <span className="text-pink-900">Our job board connects talented professionals with top companies across various industries.</span><br/><br/>
         <span className="text-green-800">Explore the latest job listings, apply effortlessly, and track your applications—all in one place!</span>
        </h2>
      
      </div>

      <div className=" order-1 top-right w-full md:w-0.5/2">
     
       <img className="photo mt-20  md:ml-8 w-82 h-82 " src={photo}alt=" "/>
 
      </div>

    </div>
    

    {/* className=" down h-1/2  max-w-screen-2xl container mx auto md:px-20 px-4 flex flex-col md:flex-row md:ml-0 dark:bg-slate-900 dark:text-white" */}
  </div>
  </>
   
  )
}

export default FrontPage