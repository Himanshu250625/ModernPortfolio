import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo.jpg";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const Navbar = ({ onThemeChange, currentTheme }) => {
  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    onThemeChange(newTheme);
  };

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 backdrop-blur-md px-2 sm:px-4">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-sm lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-base-100 rounded-box w-52 font-serif"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link
          to="/home"
          className="btn btn-ghost normal-case text-xl font-bold text-primary font-mono"
        >
          <div className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-3 rounded-lg shadow-sm hover:scale-105 transition-transform text-sm sm:text-base">
            Himanshu Singh
          </div>
          <div className="badge badge-warning text-black font-semibold ml-1 ">
            🔥Dev
          </div>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold font-serif gap-4 text-base">
          <li>
            <Link
              to="/home"
              className="hover:text-primary hover:scale-105 transition-all"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-primary hover:scale-105 transition-all"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-primary hover:scale-105 transition-all"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="hover:text-primary hover:scale-105 transition-all"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-primary hover:scale-105 transition-all"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-3 sm:gap-2 xs:gap-1 flex-wrap justify-end">
        {/* Dark/Light Toggle */}
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle swap swap-rotate hover:bg-base-200"
        >
          <input
            type="checkbox"
            checked={currentTheme === "dark"}
            onChange={toggleTheme}
            className="hidden"
          />
          {/* Sun Icon */}
          <BsSunFill className="swap-on w-5 h-5 text-yellow-400" />
          {/* Moon Icon */}
          <BsMoonFill className="swap-off w-5 h-5 text-primary" />
        </button>

        {/* Avatar */}
        {/* <div className="avatar online mr-4">
          <div className="w-7 sm:w-9 xs:w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              className="object-cover w-full h-full rounded-full"
              src={logo}
              alt="avatar"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
