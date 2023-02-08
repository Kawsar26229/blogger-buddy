import React from "react";
import { Link } from "react-router-dom";
import LoginImg from "../../../assets/login.svg";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div className="hero bg-white">
      <div className="hero-content flex-col lg:flex-row lg:my-30 md:my-20 sm:my-10 my-5">
        <div className="text-center lg:text-left w-1/2 mr-20 mb-10">
          <img className="" src={LoginImg} alt="" srcset="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="Enter Password"
                className="input input-bordered"
              />
              <label className="label">
                <Link
                  to="/forgetPassword"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-[#646cff] focus:outline-none hover:bg-[#5961ffdc] text-white border-0">
                Login
              </button>
              <div className="divider">OR</div>
              <div className="flex justify-around">
                <button className="btn bg-[#646cff] focus:outline-none hover:bg-[#5961ffdc] text-white border-0">
                  <FaGoogle></FaGoogle>
                </button>
                <button className="btn bg-[#646cff] focus:outline-none hover:bg-[#5961ffdc] text-white border-0">
                  <FaFacebook></FaFacebook>
                </button>
                <button className="btn bg-[#646cff] focus:outline-none hover:bg-[#5961ffdc] text-white border-0">
                  <FaGithub></FaGithub>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
