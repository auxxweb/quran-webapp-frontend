import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { clearJudge } from "../redux/features/judgeSlice";

const JudePrivateRoutes = () => {
  const { judge } = useAppSelector((state) => state.judge);
  
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };
  useEffect(() => {
    if(judge?.token) {
      const decodedJwt = parseJwt(judge.token);
      if (decodedJwt.exp * 1000 < Date.now()) {
        console.log("token expired");

        try {
          dispatch(clearJudge());
          navigate("/judge/login");
        } catch (error) {
          console.log(error.response.data.message);
        }
      }
    }
  }, [judge?.token, dispatch, navigate]);
  return judge ? <Outlet /> : <Navigate to="/judge/login" />;
};

export default JudePrivateRoutes;
