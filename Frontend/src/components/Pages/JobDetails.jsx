/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function JobDetails() {
  const { id } = useParams(); // Get the job id from the URL
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`https://job-board-backend-vnpt.onrender.com/getjobposts/${id}`);
        setJobDetails(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch job details');
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-screen-3xl ">
      <div className="mt-28 item-center justify-center text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">
          Job Details for <span className="text-blue-600">{jobDetails?.title}</span>
        </h1>
        <Link to="/JobListing">
          <button className="mt-6 btn btn-accent btn-outline">Back to Listings</button>
        </Link>
        <p className="mt-10">{jobDetails?.description}</p>

       
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 item-center justify-center text-center">
      <div >
          <h3 className="text-xl font-bold">Job title:</h3>
          <p>{jobDetails?.title}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Company:</h3>
          <p>{jobDetails?.company_name}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Location:</h3>
          <p>{jobDetails?.location}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Salary:</h3>
          <p>{jobDetails?.stypend}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Job Type:</h3>
          <p>{jobDetails?.category}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Duration:</h3>
          <p>{jobDetails?.duration}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Required skills:</h3>
          <p>{jobDetails?.skils}</p>
        </div>
       
        
      </div>
      
    </div>
  );
}

export default JobDetails;
