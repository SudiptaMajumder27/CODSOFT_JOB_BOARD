/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";

import list from "C:/CodSoft/L2T2/Frontend/public/list.json";

function Cards({ item }) {
  return (
    <div className="mt-4 md:px-16 px-6  ">
      <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200  dark:bg-slate-900 dark:text-white dark:border">
        <figure className="px-10 pt-10">
          <img src={item.imageUrl} alt={item.title} className="rounded-xl"
           style={{ width: '100%', height: '150px' }} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{item.title}</h2>
          <p>{item.description}</p>
          <p>{item.duration}</p>
          <div className="card-actions">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
