import React from "react";
import { Link } from "react-router-dom";
import Blog from "../../../assets/blog.svg";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-slate-100 text-base-content">
      <div>
        <Link to='/'>
          <img src={Blog} className="w-40" alt="" />
        </Link>
        <p>
          Blogger Buddy
          <br />
          All Right Reserved by Kawsar Khan
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <Link to='/categories' className="link link-hover">Categories</Link>
        <Link to='archive' className="link link-hover">Archive</Link>
        <Link to='/resources' className="link link-hover">Resources</Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to='/about' className="link link-hover">About us</Link>
        <Link to='/contact' className="link link-hover">Contact</Link>
        <Link to='/portfolio' className="link link-hover">Portfolio</Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link to='/termsOfUse' className="link link-hover">Terms of use</Link>
        <Link to='/privacyPolicy' className="link link-hover">Privacy policy</Link>
        <Link to='/cookiePolicy' className="link link-hover">Cookie policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
