/* eslint-disable no-unused-vars */
import React from "react"
import "./App.css"
import {Navigate, Route, Routes} from "react-router-dom"
import Home from "./home/Home";
import JobListing from "./JobListings/JobListing";
import Signup from "./components/Signup";
import JobPost from "./components/JobPost";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./JobPost/JobPost";
import JobDetail from "./JobDetails/JobDetail";
import JobApplys from "./components/JobApplys";
import MyApplications from "./MyApplications/MyApplication";
import Contact from "./components/Contact";
// import MyApplication from "./components/Pages/MyApplication";




function App() {
  const [authUser, setAuthUser] =  useAuth()
  console.log(authUser);
  return (
    <> 
   <div className="dark:bg-slate-900 dark:text-white">
   <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/JobListing" element={<JobListing/>} />
      <Route path="/JobDetails/:id" element={<JobDetail/>} />
      <Route path="/MyApplications" element={<MyApplications/>} />
      <Route path="/JobApply/:id" element={authUser?<JobApplys/>:<Navigate to ="/Signup"/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/JobPost" element={authUser?<JobPost/>:<Navigate to ="/Signup"/>} />
      <Route path="/Contact" element={authUser?<Contact/>:<Navigate to ="/Signup"/>} />
      
    </Routes>
    <Toaster />
   </div>
   

  
    </>
  )
}

export default App