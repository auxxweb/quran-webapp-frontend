import "./App.css";
import { Route, Routes } from "react-router-dom";
import ParticipantRoutes from "./Routes/ParticipantRoutes";
import JudgeRoutes from "./Routes/JudgeRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/Home";
import ErrorPage from "./pages/error/Error";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    // Function to detect language and apply appropriate classes
    const applyLanguageClasses = () => {
      document.querySelectorAll("p, span, div").forEach((element) => {
        const text = element.textContent;

        // Arabic character range
        if (/[ء-ي]/.test(text)) {
          element.classList.add("arabic-text");
        }
        // Malayalam character range
        else if (/[\u0D00-\u0D7F]/.test(text)) {
          element.classList.add("malayalam-text");
        }
        // Default to English
        else {
          element.classList.add("english-text");
        }
      });
    };

    // Apply classes initially
    applyLanguageClasses();

    // Apply classes whenever content updates
    const observer = new MutationObserver(applyLanguageClasses);
    observer.observe(document.body, { childList: true, subtree: true });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Routes>
        <Route path="*" Component={ErrorPage} />
        <Route path="/" element={<Home />} />
        <Route path="/judge/*" element={<JudgeRoutes />} />
        <Route path="/participant/*" element={<ParticipantRoutes />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
