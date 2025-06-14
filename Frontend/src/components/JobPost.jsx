/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import Login from './Login';

function JobPost() {
  const API = import.meta.env.VITE_API_URL;
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const jobInfo = {
      email: data.email,
      company_name: data.company_name,
      title: data.title,
      skils: data.skils,
      category: data.category,
      location: data.location,
      duration: data.duration,
      stypend: data.stypend,
      description: data.description,
      imageUrl: data.imageUrl,
    };

    try {
      const res = await axios.post(`${API}/user/jobpost`, jobInfo);
      if (res.data) {
        toast.success("Job post created successfully");
        document.getElementById("my_modal_3").close();
        setTimeout(() => {
          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        }, 1000);
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error! " + err.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div id="my_modal_3" className="rounded-md">
          <div className="modal-box md:w-auto h-auto">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>

              <h3 className="font-bold text-lg mb-4">Post a Job</h3>

              {/* Input Fields */}
              {[
                { label: "Email", name: "email", type: "email" },
                { label: "Company Name", name: "company_name" },
                { label: "Title", name: "title" },
                { label: "Skills", name: "skils" },
                { label: "Category", name: "category" },
                { label: "Location", name: "location" },
                { label: "Duration", name: "duration" },
                { label: "Stipend", name: "stypend" },
                { label: "Description", name: "description" },
                { label: "Image URL", name: "imageUrl" },
              ].map(({ label, name, type = "text" }) => (
                <div className="mt-4 space-y-2" key={name}>
                  <span>{label}</span><br />
                  <input
                    type={type}
                    placeholder={`Enter ${label.toLowerCase()}`}
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register(name, { required: true })}
                  />
                  {errors[name] && <span className="text-sm text-red-500">This field is required</span>}
                </div>
              ))}

              {/* Action Buttons */}
              <div className="flex justify-around mt-6">
                <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">
                  Create
                </button>
                <p className="text-sm">
                  Have an account?{" "}
                  <button
                    type="button"
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() => document.getElementById("my_modal_3").showModal()}
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Login />
    </>
  );
}

export default JobPost;
