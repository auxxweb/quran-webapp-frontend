import "./App.css";
import { Route, Routes } from "react-router-dom";
import ParticipantRoutes from "./Routes/ParticipantRoutes";
import JudgeRoutes from "./Routes/JudgeRoutes";

function App() {
  return (
    <Routes>
      <Route path="/judge/*" element={<JudgeRoutes />} />
      <Route path="/participant/*" element={<ParticipantRoutes />} />
    </Routes>
  );
}

export default App;
