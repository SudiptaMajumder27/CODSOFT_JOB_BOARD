/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
 import Login from './Login';
//  import emailjs from '@emailjs/browser';

function JobPost() {
  const navigate = useNavigate();
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
      const res = await axios.post("http://localhost:5001/user/jobpost", jobInfo);
      console.log(res);
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
    <div className="flex h-screen items-center justify-center   ">
           <div id="my_modal_3" className="  rounded-md " >
             <div className="modal-box md:w-auto h-auto">
             
                 <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                   <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                     ✕
                  </Link>
                
                 <h3 className="font-bold text-lg">Post a Job</h3>
                <br/>
                 {/* email */}
                <div className="mt-4 space-y-2">
                <span>Email</span><br/>
                 <input type="email" placeholder="Enter your email"  className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
                />
                 <br/>
                 {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                </div>

                {/* Company Name */}
            <div className="mt-4 space-y-2">
                <span>Company name</span><br/>
                <input type="company_name" placeholder="Enter company name"  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("company_name", { required: true })}
                />
                <br/>
                 {errors.company_name && <span className="text-sm text-red-500">This field is required</span>}

            </div>
            {/*Title */}
           
            <div className="mt-4 space-y-2">
                <span>title</span><br/>
                <input type="title" placeholder="Enter title"  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("title", { required: true })}
                />
                <br/>
                 {errors.title && <span className="text-sm text-red-500">This field is required</span>}

            </div>
            {/* skils */}
            <div className="mt-4 space-y-2">
                <span>skils</span><br/>
                <input type="skils" placeholder="Enter skils"  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("skils", { required: true })}
                />
                <br/>
                 {errors.skils && <span className="text-sm text-red-500">This field is required</span>}

            </div>
            {/* Category */}
            
            <div className="mt-4 space-y-2">
                <span>category</span><br/>
                <input type="category" placeholder="Enter category"  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("category", { required: true })}
                />
                <br/>
                 {errors.category && <span className="text-sm text-red-500">This field is required</span>}

            </div>
            {/* Location */}
            
            <div className="mt-4 space-y-2">
                <span>location</span><br/>
                <input type="location" placeholder="Give location"  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("location", { required: true })}
                />
                <br/>
                 {errors.location && <span className="text-sm text-red-500">This field is required</span>}

            </div>
            {/* Duration */}
            
            <div className="mt-4 space-y-2">
                <span>duration</span><br/>
                <input type="duration" placeholder="Enter duration"  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("duration", { required: true })}
                />
                <br/>
                 {errors.duration && <span className="text-sm text-red-500">This field is required</span>}

            </div>
            {/* Stypend */}
           
            <div className="mt-4 space-y-2">
                <span>stypend</span><br/>
                <input type="stypend" placeholder="Enter stypend"  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("stypend", { required: true })}
                 />
                <br/>
                 {errors.stypend && <span className="text-sm text-red-500">This field is required</span>}

            </div>
            {/* Description */}
            <div className="mt-4 space-y-2">
                <span>description</span><br/>
                <input type="description" placeholder="Give description"  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("description", { required: true })}
                />
                <br/>
                 {errors.description && <span className="text-sm text-red-500">This field is required</span>}

            </div>
            {/* Image URL */}
            <div className="mt-4 space-y-2">
                <span>imageUrl</span><br/>
                <input type="imageUrl" placeholder="Give imageUrl"  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("imageUrl", { required: true })}
                />
                <br/>
                 {errors.imageUrl && <span className="text-sm text-red-500">This field is required</span>}

            </div>

                {/* Button */}
                <div className="flex justify-around mt-4">
                    <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-700 duration-200">Create</button>
                    <p className="text-4">Have a account? {" "} 
                    <button  className="underline text-blue-500 cursor-pointer"
                     onClick={()=> document.getElementById("my_modal_3").showModal()}
                    >
                     Login
                    </button>
                    <Login/>
                   
                    </p>
    
                </div>
                </form>
               
    
            </div>
           </div>
        </div>
        
    
    </>
  )
}
 export default JobPost;