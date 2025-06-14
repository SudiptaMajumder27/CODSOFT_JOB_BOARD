/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Login from "./Login";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.pathname || "/";

  
  const API = import.meta.env.VITE_API_URL;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(`${API}/user/signup`, userInfo);

      if (res.data) {
        toast.success("Signup successful");
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        navigate(from, { replace: true });
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error! " + err.response.data.message);
      } else {
        toast.error("Something went wrong");
      }
      console.error(err);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md w-96">
        <div className="flex justify-end">
          <Link to="/" className="text-gray-400 hover:text-gray-600">
            ✕
          </Link>
        </div>

        <h2 className="text-xl font-bold mb-4 text-center">Signup</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("fullname", { required: "Name is required" })}
            />
            {errors.fullname && (
              <span className="text-sm text-red-500">
                {errors.fullname.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Signup
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Have an account?{" "}
          <button
            className="text-blue-500 underline"
            onClick={() => document.getElementById("my_modal_3")?.showModal()}
          >
            Login
          </button>
        </p>
        <Login />
      </div>
    </div>
  );
}

export default Signup;
