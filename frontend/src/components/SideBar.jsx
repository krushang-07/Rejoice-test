import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { SlNote } from "react-icons/sl";
import { BsClipboard2Data } from "react-icons/bs";
import { IoIosLogIn } from "react-icons/io";
import { toast } from "react-toastify";

const SideBar = () => {
  const token = localStorage.getItem("auth-token");

  const handleLoginClick = (e) => {
    if (token) {
      e.preventDefault();
      toast.info("You are already logged in!");
    }
  };

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-gray-100 shadow-lg">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 hover:text-gray-900 cursor-pointer group"
            >
              <span className="ms-3 flex items-center gap-2">
                <BsClipboard2Data size={20} /> Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              onClick={handleLoginClick}
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 hover:text-gray-900 cursor-pointer group"
            >
              <span className="flex-1 ms-3 ">
                <div className="flex items-center gap-2">
                  <IoIosLogIn size={20} /> Sign In
                </div>
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 hover:text-gray-900 cursor-pointer group"
            >
              <span className="flex-1 ms-3">
                <div className="flex items-center gap-2">
                  <SlNote size={20} /> Sign Up
                </div>
              </span>
            </Link>
          </li>
          <li>
            <div className="absolute bottom-0 left-0 w-full p-4">
              <button className="w-full flex items-center p-2 text-gray-900 rounded-lg cursor-pointer group">
                <span className="flex-1 ms-3">
                  <Logout />
                </span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
