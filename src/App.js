import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/judge/login/Login";
import Home from "./pages/judge/home/Home";
import CurrentParticipantPage from "./pages/judge/currentparticipant/CurrentParticipantPage";
import QuestionsListPage from "./pages/judge/questions-list/QuestionsList";
import QuestionAnswerPage from "./pages/judge/question-answer/QuestionAnswerPage";
import Layout from "./components/Layout/Layout";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login"  element={<LoginPage />} />
        <Route path="/questions-list" element={<Layout><QuestionsListPage /></Layout>} />
        <Route path="/current-participant/:id" element={<Layout><CurrentParticipantPage /></Layout>} />
        <Route path="/question-answer/:id" element={<Layout><QuestionAnswerPage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
