import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../userLayout/landingPage/login";
import Success from "../userLayout/successPage/successPage";
import School from "../userLayout/school/school";
import NavBarScheduler from "../userLayout/NavBarScheduler/NavBarScheduler";
import Schedules from "../userLayout/schedules/schedules";


const userRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/success" element={<Success />} />
      <Route path="/scheduler/school" element={<School />} />
      <Route path="/scheduler/scheduler" element={<NavBarScheduler />} />
      <Route path="/scheduler/schedules" element={<Schedules />} />
    </Routes>
  );
};

export default userRoutes;
