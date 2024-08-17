/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";

function Cards({item}) {
 
  return (
  
    <div className="mt-4 md:px-16 px-6  ">
      <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure className="px-10 pt-10">
          <img src={item.imageUrl} alt={item.title} className="rounded-xl"
           style={{ width: '100%', height: '150px' }} />
        </figure>
        <div className="card-body items-center ">
          <h2 className="card-title">{item.title}</h2>
          <p><span className="text-orange-800">Category is :</span> {item.category}</p>
          <p><span className="text-orange-800">Stypend :</span> {item.stypend}</p>
          <p><span className="text-orange-800">Location :</span> {item.location}</p>
          <br/>
        </div>
      </div>
      
    </div>
    
   
   
  );
  
  }


export default Cards;
