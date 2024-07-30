/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import Login from './Login';

function JobPost() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);
    
      return (
        <>
        <div className="flex h-screen items-center justify-center   ">
          <div id=" " className="  rounded-md " >
            <div className="modal-box md:w-auto h-auto">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
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
                <input type="Company_name" placeholder="Enter your email"  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("Company_name", { required: true })}
                />
                <br/>
                 {errors.Company_name && <span className="text-sm text-red-500">This field is required</span>}

            </div>
            {/*Title */}
           
            <div className="mt-4 space-y-2">
                <span>title</span><br/>
                <input type="title" placeholder="Enter your email"  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("title", { required: true })}
                />
                <br/>
                 {errors.title && <span className="text-sm text-red-500">This field is required</span>}

            </div>
            {/* Category */}
            
            <div className="mt-4 space-y-2">
                <span>category</span><br/>
                <input type="category" placeholder="Enter your email"  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("category", { required: true })}
                />
                <br/>
                 {errors.category && <span className="text-sm text-red-500">This field is required</span>}

            </div>
            {/* Location */}
            
            <div className="mt-4 space-y-2">
                <span>location</span><br/>
                <input type="location" placeholder="Enter your email"  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("location", { required: true })}
                />
                <br/>
                 {errors.location && <span className="text-sm text-red-500">This field is required</span>}

            </div>
            {/* Duration */}
            
            <div className="mt-4 space-y-2">
                <span>duration</span><br/>
                <input type="duration" placeholder="Enter your email"  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("duration", { required: true })}
                />
                <br/>
                 {errors.duration && <span className="text-sm text-red-500">This field is required</span>}

            </div>
            {/* Stypend */}
           
            <div className="mt-4 space-y-2">
                <span>stypend</span><br/>
                <input type="stypend" placeholder="Enter your email"  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("stypend", { required: true })}
                />
                <br/>
                 {errors.stypend && <span className="text-sm text-red-500">This field is required</span>}

            </div>
            {/* Description */}
            <div className="mt-4 space-y-2">
                <span>duration</span><br/>
                <input type="duration" placeholder="Enter your email"  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("duration", { required: true })}
                />
                <br/>
                 {errors.duration && <span className="text-sm text-red-500">This field is required</span>}

            </div>
            {/* Image URL */}
            <div className="mt-4 space-y-2">
                <span>imageUrl</span><br/>
                <input type="imageUrl" placeholder="Enter your email"  className="w-80 px-3 py-1 border rounded-md outline-none"
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

export default JobPost