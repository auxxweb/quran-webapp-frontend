import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/participant/home/Home";
import Question from "../pages/participant/question/Question";
import CurrentParticipant from "../pages/participant/currentParticipant/CurrentParticipan";

const ParticipantRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<CurrentParticipant />} />
      <Route path="/question" element={<Question />} />
    </Routes>
  );
};

export default ParticipantRoutes;
