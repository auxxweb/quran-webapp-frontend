import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JudgeRoutes from "./Routes/JudgeRoutes";
import ParticipantRoutes from "./Routes/ParticipantRoutes";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/judge/*"  element={<JudgeRoutes />} />
        <Route path="/participant/*" element={<ParticipantRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
