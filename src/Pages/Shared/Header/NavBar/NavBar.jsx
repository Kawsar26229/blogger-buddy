import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  const navList = [
    <Link className="mr-6 text-slate-700" to="/categories">
      Categories
    </Link>,
    <Link className="mr-6 text-slate-700" to="/about">
      About
    </Link>,
    <Link className="mr-6 text-slate-700" to="/contact">
      Contact
    </Link>,
    <Link className="mr-6 text-slate-700" to="/portfolio">
      Portfolio
    </Link>,
    <Link className="mr-5 text-slate-700" to="/login">
      Login
    </Link>,
    <Link className="mr-4 text-slate-700" to="/register">
      Register
    </Link>,
  ];
  return (
    <div className="navbar bg-slate-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navList}
          </ul>
        </div>
        <Link to="/" className="normal-case text-2xl font-semibold ml-3">
          Blogger Buddy
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
    </div>
  );
};

export default NavBar;
