import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/users/logout",
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
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
        className="bg-red-500 text-white px-4 py-2 rounded-md"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
