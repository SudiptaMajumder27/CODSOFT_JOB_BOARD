/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function JobApplys() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const apply = async (data) => {
    const formData = new FormData();
    formData.append('company_title', data.company_title);
    formData.append('fullname', data.fullname);
    formData.append('email', data.email);
    formData.append('coverLetter', data.coverLetter);
    formData.append('resumeFile', data.resumeFile[0]); // File input

    try {
      const res = await axios.post("https://job-board-backend-vnpt.onrender.com/user/apply", formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      if (res.data) {
        toast.success("Applied successfully! Check your email!");
        setTimeout(() => window.location.reload(), 1000);
      }
    } catch (err) {
      toast.error("Error! " + err.response?.data?.message);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="rounded-md">
        <div className="modal-box md:w-auto h-auto">
          <form onSubmit={handleSubmit(apply)} method="dialog" encType="multipart/form-data">
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <h3 className="font-bold text-lg">Apply For Job</h3>

            {/* Company Title */}
            <div className="mt-4">
              <span>Enter Job Title</span>
              <input type="text" placeholder="Enter Job title"
                className="w-80 px-3 py-1 border rounded-md"
                {...register("company_title", { required: true })} />
              {errors.company_title && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            {/* Applicant Name */}
            <div className="mt-4">
              <span>Applicant Name</span>
              <input type="text" placeholder="Enter your name"
                className="w-80 px-3 py-1 border rounded-md"
                {...register("fullname", { required: true })} />
              {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            {/* Applicant Email */}
            <div className="mt-4">
              <span>Applicant Email</span>
              <input type="email" placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md"
                {...register("email", { required: true })} />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            {/* Resume File */}
            <div className="mt-4">
              <span>Upload Resume</span>
              <input
                 type="file"
                 accept=".pdf,.doc,.docx"
                 className="w-80 px-3 py-1 border rounded-md"
                   {...register("resumeFile", { required: true })}
               />
              {errors.resumeFile && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            {/* Cover Letter */}
            <div className="mt-4">
              <span>Cover Letter</span>
              <input type="text" placeholder="Cover Letter"
                className="w-80 px-3 py-1 border rounded-md"
                {...register("coverLetter", { required: false })} />
            </div>

            <div className="mt-4">
              <button className="bg-blue-500 text-white rounded-md px-3 py-1">Apply</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JobApplys;


