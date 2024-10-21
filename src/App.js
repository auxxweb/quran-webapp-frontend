import "./App.css";
import { Route, Routes } from "react-router-dom";
import ParticipantRoutes from "./Routes/ParticipantRoutes";
import JudgeRoutes from "./Routes/JudgeRoutes";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/home/Home";
import ErrorPage from "./pages/error/Error";
function App() {
  return (
    <>
      <Routes>
        <Route path="*" Component={ErrorPage}/>
        <Route path="/" element={<Home />} />
        <Route path="/judge/*" element={<JudgeRoutes />} />
        <Route path="/participant/*" element={<ParticipantRoutes />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
