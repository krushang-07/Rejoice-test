import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IoIosLogOut } from "react-icons/io";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    localStorage.removeItem("auth-token");
    navigate("/login");
    toast.success("Logged out successfully");
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
