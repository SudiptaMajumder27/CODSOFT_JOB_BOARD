/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cards from '../Cards';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function JobListings() {
  const [jobPosts, setJobPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/getjobposts`)
      .then((response) => {
        setJobPosts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching job posts:', err);
        setError('Failed to load job listings.');
        setLoading(false);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredJobPosts = jobPosts.filter((item) =>
    item.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="max-w-screen-3xl px-4 py-8">
      <div className="mt-28 text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">
          Choose your dream job <span className="text-blue-600">Here!</span>
        </h1>
        <p className="mt-4">Let’s help you land your dream career</p>

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

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-center col-span-full">Loading job listings...</p>
        ) : error ? (
          <p className="text-center col-span-full text-red-500">{error}</p>
        ) : filteredJobPosts.length === 0 ? (
          <p className="text-center col-span-full">No jobs found.</p>
        ) : (
          filteredJobPosts.map((item) => (
            <div key={item._id} className="bg-base-100 p-4 rounded shadow-xl dark:bg-slate-900 dark:text-white">
              <Cards item={item} />
              <div className="mt-4 flex flex-col gap-2">
                <Link to={`/JobDetails/${item._id}`}>
                  <button className="btn btn-accent btn-outline w-full hover:scale-105 duration-200 dark:border">
                    View Details
                  </button>
                </Link>
                <Link to={`/JobApply/${item._id}`}>
                  <button className="btn btn-accent btn-outline w-full hover:scale-105 duration-200 dark:border">
                    Apply
                  </button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default JobListings;
