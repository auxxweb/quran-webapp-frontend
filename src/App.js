import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/judge/login/Login";
import Home from "./pages/judge/home/Home";
import QuestionsList from "./pages/judge/questions-list/QuestionsList";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login"  element={<LoginPage />} />
        <Route path="/questions-list" element={<QuestionsList />} />
      </Routes>
    </Router>
  );
}

export default App;
