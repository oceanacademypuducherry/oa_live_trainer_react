import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import SeeAllBatch from "./Components/SeeAllBatch/SeeAllBatch";
import SeeAllSchedule from "./Components/SeeAllSchedule/SeeAllSchedule";
import Schedule from "./Components/Schedule/Schedule";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/all/batch" element={<SeeAllBatch />} />
          <Route path="/all/schedule" element={<SeeAllSchedule />} />
          <Route path="/add/schedule" element={<Schedule />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
