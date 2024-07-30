// /* eslint-disable no-unused-vars */
// // /* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react"
import list from "C:/CodSoft/L2T2/Frontend/public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../Cards';
import {Link} from "react-router-dom"

// import list from "../../public/list.json";
function InternshipListings() {
  const filterData = list.filter((data)=> data.category === "Internship");
  
  return (
    <>
    <div className=" max-w-screen-3xl">
      <div className = " item-center justify-center text-center">
        <br/>  <br/>  <br/> <br/>
        <h1 className=" mt-19 text-2xl font-semibold md:text-4xl"> Choose your dream internship <span className="text-blue-600">  Here!</span> </h1>
        <p className="mt-10">
        Let’s help you land your dream career
        </p>
       
        <Link to="/">
        <button className="mt-6 btn btn-accent btn-outline">Back</button>
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3" >
      
       {filterData.map((item)=>(
        <Cards item={item} key={item.id}/>
       ))}
       
      
    
      </div>
    </div>
    </>
  )
}

export default InternshipListings;


