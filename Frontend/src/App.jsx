/* eslint-disable no-unused-vars */
import React from "react"
import "./App.css"
import {Route, Routes} from "react-router-dom"
import Home from "./home/Home";
import JobListing from "./JobListings/JobListing";
import InternshipListing from "./components/InternshipListings/InternshipListing";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import JobPost from "./components/JobPost";


function App() {
  return (
    <> 
   <div className="dark:bg-slate-900 dark:text-white">
   <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/JobListing" element={<JobListing/>} />
      <Route path="/InternshipListing" element={<InternshipListing/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/JobPost" element={<JobPost/>} />
    </Routes>
   </div>
   

  
    </>
  )
}

export default App