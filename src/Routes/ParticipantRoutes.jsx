import React, { useEffect, useRef, useState } from "react";
import { Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "../pages/participant/home/Home";
import Question from "../pages/participant/question/Question";
import CurrentParticipant from "../pages/participant/currentParticipant/CurrentParticipan";
import { getZoneDetailsHandler } from "../api/participantApi.";
import { Bounce, toast } from "react-toastify";
import Loading from "../components/loading/Loading";
import { BASE_URL } from "../utils/constant";
import { io } from "socket.io-client";
var socket
const ParticipantRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [zoneDetails, setZoneDetails] = useState(null);

  

  const zoneId = location.pathname.split("/")[2]; 

  const effectRan = useRef(false); // Ref to track if the effect has run

  useEffect(() => {
    if (!zoneId) {
      navigate("/"); 
      return;
    }

    // Avoid running effect twice in strict mode
    if (!effectRan.current) {
      getZoneDetails();
      effectRan.current = true; // Set it to true after the first run
    }
  }, [zoneId]);

  const getZoneDetails = async () => {
    try {
      const data = await getZoneDetailsHandler(zoneId);
      console.log(data,"data-apple");
      
      if (data?.success) {
        alert("calling")
        setZoneDetails(data?.zone);
        toast.success(data?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        toast.error(data?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        navigate("/"); // Redirect if zone validation fails
      }
      setLoading(false);
    } catch (error) {
      console.log(`Error in fetching zone details: ${error}`);
      navigate("/"); // Redirect on error
      setLoading(false);
    }
  };

  useEffect(() => {
    socket = io(BASE_URL);

    socket.emit("join", zoneDetails?._id);

    socket.on("selected-participant", ({ success, userId }) => {
      if (success && userId) {
        navigate(
          `/participant/${zoneDetails?._id}/current-participant/${userId}`
        );
      }
    });
    socket.on("proceed-question", ({ success, resultId,questionId }) => {
      if (success && resultId&& questionId) {
        navigate(`/participant/${zoneDetails?._id}/question/${resultId}/${questionId}`);
      }
    });
    socket.on("question-completed", ({ success }) => {
      if (success) {
        navigate(`/participant/${zoneDetails?._id}`);
      }
    });
    return () => {
      socket.off("selected-participant");
      socket.off("proceed-question");
      socket.off("question-completed");
    };
  }, [zoneDetails?._id]);


  if (loading) {
    return (
      <div
        style={{ backgroundImage: `url("/images/backgroundimage.png")` }}
        className="section h-screen bg-cover bg-center"
      >
        <Loading />
      </div>
    );
  }

  return (
    <Routes>
      {/* Parent route for zoneId */}
      <Route path="/:zoneId" element={<Layout zoneDetails={zoneDetails} />}>
        {/* Nested routes */}
        <Route path="" element={<Home zoneDetails={zoneDetails} />} />
        <Route
          path="current-participant/:id"
          element={<CurrentParticipant zoneDetails={zoneDetails} />}
        />
        <Route
          path="question/:resultId/:questionId"
          element={<Question zoneDetails={zoneDetails} />}
        />
      </Route>
    </Routes>
  );
};

// Layout component to pass zoneDetails to children
const Layout = ({ zoneDetails }) => {
  return (
    <div>
      {/* Pass zoneDetails to children if needed */}
      {/* Outlet is where nested routes are rendered */}
      <Outlet context={zoneDetails} />
    </div>
  );
};

export default ParticipantRoutes;
