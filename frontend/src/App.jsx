import React from "react";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
import { RouterProvider } from "react-router-dom";
import router from "./utils/Router";

function App() {
  return (
    // <div>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/signup" element={<Signup />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/" element={<Home />} /
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <RouterProvider router={router} />
  );
}

export default App;
