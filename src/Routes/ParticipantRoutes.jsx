import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/participant/home/Home";
import Question from "../pages/participant/question/Question";

const ParticipantRoutes = () => {
  return (
    <Routes>
      <Route path="/:id" element={<Home />} />
      <Route path="/question" element={<Question />} />
    </Routes>
  );
};

export default ParticipantRoutes;
