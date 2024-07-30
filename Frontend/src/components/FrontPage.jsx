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
        <h1 className="  text-4xl font-bold dark:bg-slate-900 dark:text-white ">Find the<span className="text-orange-800"> Job</span> that fits your life</h1>
        <p className="text-l ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum facere nemo.
        </p>
        <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
<button className="btn mt-6 btn-active btn-info">Submit</button>
      </div>

      <div className=" order-1 top-right w-full md:w-0.5/2">
       <img className="photo mt-20  md:ml-8 w-82 h-82 " src={photo}alt=" "/>
 
      </div>

    </div>

    {/* className=" down h-1/2  max-w-screen-2xl container mx auto md:px-20 px-4 flex flex-col md:flex-row md:ml-0 dark:bg-slate-900 dark:text-white" */}

    <div className="  down h-1/2 upload ">
     <h3 className=" text-xl font-bold ">Upload your resume</h3>
     <br/>
     <div className="  w-full input-group mb-3 flex  md:flex-row  ">
       <input type="file" className=" form-control" id="inputGroupFile02"/>
       <label className="input-group-text dark:bg-slate-900 dark:text-white" htmlFor="inputGroupFile02">Resume </label>
      </div>
      
    </div>
  </div>
  </>
   
  )
}

export default FrontPage