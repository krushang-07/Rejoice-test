import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/slices/authSlice";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const response = await dispatch(logoutUser());
      if (response.payload) {
        localStorage.removeItem("auth-token");
        navigate("/login");
        toast.success("Logged out successfully");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error logging out");
    }
  };
  return (
    <div>
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-600"
        onClick={handleLogout}
      >
        <div className="flex items-center gap-2">
          Sign Out <IoIosLogOut size={20} />
        </div>
      </button>
    </div>
  );
};

export default Logout;
