import React from "react";

const Register = () => {
  return (
    <div className="hero bg-white my-20">
      <div className="bg-slate-100 card flex-shrink-0 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="text"
              placeholder="Enter PhotoURL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Repeat Password</span>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              className="input input-bordered"
            />
          </div>
          <div className="mt-6">
            <button className=" bg-[#646cff] focus:outline-none hover:bg-[#5961ffdc] text-white border-0">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
