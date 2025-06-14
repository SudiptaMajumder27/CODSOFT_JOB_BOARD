/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cards from '../Cards'; // Assuming Cards component exists

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function JobListings() {
  const [jobposts, setJobPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5001/getjobposts')
      .then((response) => setJobPosts(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredJobPosts = jobposts.filter((item) =>
    item.title.toLowerCase().includes(searchQuery)
  );

 

  return (
    <>
      <div className="max-w-screen-3xl">
        <div className="mt-28 item-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            Choose your dream job <span className="text-blue-600">Here!</span>
          </h1>
          <p className="mt-10">Let’s help you land your dream career</p>
             
          <input
            type="text"
            placeholder="Search by job title..."
            value={searchQuery}
            onChange={handleSearch}
            className="mt-6 input input-bordered w-full max-w-xs"
          />



          <Link to="/">
            <button className="mt-6 btn btn-accent btn-outline">Back</button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 bgColor:white-800">
          {filteredJobPosts.map((item) => (
            <div key={item._id}>
              <Cards item={item} />
              <Link to={`/JobDetails/${item._id}`}>
                <button className="mt-4 md:ml-20 btn btn-accent btn-outline  bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">View Details</button>
              </Link>
              <Link to={`/JobApply/${item._id}`}>
                <button className="mt-4 md:ml-20 btn btn-accent btn-outline  bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">Apply</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default JobListings;
