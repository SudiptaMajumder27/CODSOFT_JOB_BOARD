/* eslint-disable no-unused-vars */
import React from "react"
import { Link,  useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import axios from 'axios';
function Contact() {
    const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
   
      const onSubmit = async(data) => {
        const contInfo = {
            name : data.name,
            email: data.email,
            description: data.description
        };

        try {
            const res = await axios.post("https://job-board-backend-vnpt.onrender.com/user/contact", contInfo);
            if (res.data) {
              toast.success("Your message was submitted successfully! Check your email!");
              
              setTimeout(() => {
                window.location.reload();
                localStorage.setItem("User", JSON.stringify(res.data.user));
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
   <div className="flex h-screen items-center justify-center  ">
   <div className="  rounded-md " >
        <div className="modal-box w-auto">
            <form onSubmit={handleSubmit(onSubmit)}  method="dialog ">
               {/* if there is a button in form, it will close the modal */}
              <Link  to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
               
              >✕</Link>
            
            <h3 className="font-bold text-lg">Contact</h3><br/>
            <div className="mt-4 space-y-2">
                <span>Name</span><br/>
                <input type="name" placeholder="Enter your full name"  className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })}
                />
                 <br/>
                 {errors.text && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="mt-4 space-y-2">
                <span>Email</span><br/>
                <input type="email" placeholder="Enter your email"  className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
                />
                 <br/>
                 {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>
           
            {/* Description */}
            <div className="mt-4 space-y-2">
                <span>Description</span>
                <input type="description" placeholder="Type your message" className="input input-bordered input-lg w-full max-w-xs" 
                 {...register("description", { required: true })}
                />
                  <br/>
                  {errors.description && <span className="text-sm text-red-500">This field is required</span>}

            </div>


            {/* Button */}
            <div className="  flex justify-around mt-4">
                <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-700 duration-200">Contact</button>
                
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

export default Contact
