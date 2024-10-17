import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/judge/login/Login";
import Home from "./pages/judge/home/Home";
import QuestionsList from "./pages/judge/questions-list/QuestionsList";
import CurrentParticipant from "./pages/judge/currentparticipant/CurrentParticipant.jsx";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login"  element={<LoginPage />} />
        <Route path="/questions-list" element={<QuestionsList />} />
        <Route path="/current-participant" element={<CurrentParticipant />} />
      </Routes>
    </Router>
  );
}

export default App;
