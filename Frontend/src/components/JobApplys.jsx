/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import axios from 'axios';
// import React from 'react'
// import { useForm } from 'react-hook-form';
// import toast from 'react-hot-toast';
// import { Link } from 'react-router-dom';
// import Login from './Login';
// import { useState } from 'react';

// function JobApplys() {
//   // eslint-disable-next-line no-undef

//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = async (data) =>{
//     const applyInfo ={
//       company_title: data.company_title,
//       fullname : data.fullname,
//       email : data.email,
//       resumeLink : data.resumeLink,
//       coverLetter : data.coverLetter,
//     };
//     try {
//       const res = await axios.post("http://localhost:5001/user/apply",applyInfo );
//       if(res.data){
//         toast.success("Applyed successfully");
//         document.getElementById("my_modal_3").close();
//         setTimeout(()=>{
//           window.location.reload();
//           localStorage.setItem("Users", JSON.stringify(res.data.user));

//         }, 1000);
//       }
//     }catch(err){
//       if(err.response){
//         toast.error("Error! " + err.response.data.message);
//       }
      
//     }

//   };
//   return (<>
    
//     <div className="flex h-screen items-center justify-center   ">
//            <div id="my_modal_3" className="  rounded-md " >
//              <div className="modal-box md:w-auto h-auto">
//                  <form onSubmit={handleSubmit(onSubmit)} method="dialog">

//                    <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//                      ✕
//                   </Link>
                
//                  <h3 className="font-bold text-lg">Apply For Job</h3>
//                 <br/>
//                 {/* company title */}
//                 <div className="mt-4 space-y-2">
//                 <span>Enter Job Title </span><br/>
//                  <input type="company_title" placeholder="Enter Job title"  className="w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("company_title", { required: true })}
//                 />
//                  <br/>
//                  {errors.company_title && <span className="text-sm text-red-500">This field is required</span>}
//                 </div>
//                  {/* applicantName */}
//                 <div className="mt-4 space-y-2">
//                 <span>Applicant Name</span><br/>
//                  <input type="fullname" placeholder="Enter your name"  className="w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("fullname", { required: true })}
//                 />
//                  <br/>
//                  {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
//                 </div>

//                 {/* Company Name */}
//             <div className="mt-4 space-y-2">
//                 <span>Applicant Email</span><br/>
//                 <input type="email" placeholder="Enter your email"  className="w-80 px-3 py-1 border rounded-md outline-none"
//                   {...register("email", { required: true })}
//                 />
//                 <br/>
//                  {errors.email && <span className="text-sm text-red-500">This field is required</span>}

//             </div>
            
//             {/*  URL */}
//             <div className="mt-4 space-y-2">
//                 <span>Upload resume </span><br/>
//                 <input type="resumeLink" accept=".pdf , .doc, .docx"   placeholder="resume Link"  className="w-80 px-3 py-1 border rounded-md outline-none"
//                   {...register("resumeLink", { required: true })}
//                 />
//                 <br/>
//                  {errors.resumeLink && <span className="text-sm text-red-500">This field is required</span>}

//             </div>
//             {/* cover letter */}
//             <div className="mt-4 space-y-2">
//                 <span>Cover Letter</span><br/>
//                 <input type="coverLetter" placeholder="Cover Letter"  className="w-80 px-3 py-1 border rounded-md outline-none"
//                  {...register("coverLetter", { required: true })}
//                 />
//                 <br/>
//                  {errors.coverLetter && <span className="text-sm text-red-500">This field is  required</span>}

//             </div>

//                 {/* Button */}
//                 <div className="flex justify-around mt-4">
//                     <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-700 duration-200">Apply</button>
//                     <p className="text-4">Have a account? {" "} 
//                     <button  className="underline text-blue-500 cursor-pointer"
//                      onClick={()=> document.getElementById("my_modal_3").showModal()}
//                     >
//                      Login
//                     </button>
//                     <Login/>
                   
//                     </p>
    
//                 </div>
//                 </form>
    
//             </div>
//            </div>
//         </div>
        
    
//     </>
//   );
// }

// export default JobApplys



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
      const res = await axios.post("http://localhost:5001/user/apply", formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      if (res.data) {
        toast.success("Applied successfully");
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


