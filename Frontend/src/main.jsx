/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import JobPost from "./JobPost/JobPost.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 <BrowserRouter>
 <JobPost>
 <div className="dark:bg-slate-900 dark:text-white">
 <App />
 </div>
 </JobPost>
 
 </BrowserRouter>
    
 
);
