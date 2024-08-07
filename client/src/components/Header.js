import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {

  const {currentUser} = useSelector((state) => state.user)
  return (
    <header className="bg-slate-200">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-green-700">Real</span>
            <span className="text-slate-500">Estate</span>
          </h1>
        </Link>

        <form className="bg-slate-100 p-3 rounded-md flex items-center">
          <input
            type="text"
            placeholder="Search.."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          ></input>
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-8 items-center">
          <Link to="/">
            {" "}
            <li className="hidden sm:inline text-slate-500 hover:text-green-700">
              Home
            </li>
          </Link>
          <Link to="about">
            {" "}
            <li className="hidden sm:inline text-slate-500 hover:text-green-700">
              About
            </li>
          </Link>
          <Link to="/profile">
              {currentUser ? (
                <img className="rounded-full h-10 w-10 object-cover" src={currentUser.avatar} alt="Profile_image"/>
              ): (<li className="text-slate-500 hover:text-green-700">Sign In</li>)}
          </Link>
        </ul>
      </div>
    </header>
  );
}
