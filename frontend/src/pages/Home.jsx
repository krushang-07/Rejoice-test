import React from "react";
import SideBar from "../components/SideBar";
import Data from "../components/Data";

const Home = () => {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex-1 ml-64 p-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Your hub for managing and monitoring your data
          </p>
        </div>
        <Data />
      </div>
    </div>
  );
};

export default Home;
