import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/judge/home/Home";
import LoginPage from "../pages/judge/login/Login";
import QuestionsListPage from "../pages/judge/questions-list/QuestionsList";
import CurrentParticipantPage from "../pages/judge/currentparticipant/CurrentParticipantPage";
import QuestionAnswerPage from "../pages/judge/question-answer/QuestionAnswerPage";
import JudgePublicRoutes from "./JudgePublicRoutes";
import JudePrivateRoutes from "./JudgePrivateRoutes";

const JudgeRoutes = () => {
  return (
    <Routes>
      <Route Component={JudgePublicRoutes}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route Component={JudePrivateRoutes}>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/questions-list"
          element={
            <Layout>
              <QuestionsListPage />
            </Layout>
          }
        />
        <Route
          path="/current-participant/:id"
          element={
            <Layout>
              <CurrentParticipantPage />
            </Layout>
          }
        />
        <Route
          path="/question-answer/:id"
          element={
            <Layout>
              <QuestionAnswerPage />
            </Layout>
          }
        />
      </Route>
    </Routes>
  );
};

export default JudgeRoutes;
