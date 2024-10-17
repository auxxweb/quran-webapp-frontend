import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/judge/login/Login";
import Home from "./pages/judge/home/Home";
import CurrentParticipantPage from "./pages/judge/currentparticipant/CurrentParticipantPage";
import QuestionsListPage from "./pages/judge/questions-list/QuestionsList";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login"  element={<LoginPage />} />
        <Route path="/questions-list" element={<QuestionsListPage />} />
        <Route path="/current-participant" element={<CurrentParticipantPage />} />
      </Routes>
    </Router>
  );
}

export default App;
