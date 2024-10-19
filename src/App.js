import "./App.css";
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { io } from "socket.io-client";
import ParticipantRoutes from "./Routes/ParticipantRoutes";
import JudgeRoutes from "./Routes/JudgeRoutes";
import { useEffect } from "react";
import { BASE_URL } from "./utils/constant";
var socket;
function App() {
  const navigate = useNavigate();

  return (

      <Routes>
        <Route path="/judge/*" element={<JudgeRoutes />} />
        <Route path="/participant/*" element={<ParticipantRoutes />} />
      </Routes>

  );
}

export default App;
