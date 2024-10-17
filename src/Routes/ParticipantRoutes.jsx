import React from 'react'
import {  Route, Routes } from "react-router-dom";
import Home from '../pages/participant/home/Home';

const ParticipantRoutes = () => {
  return (
    <Routes>
        <Route path="/question" element={<Home />} />
    </Routes>
  )
}

export default ParticipantRoutes
