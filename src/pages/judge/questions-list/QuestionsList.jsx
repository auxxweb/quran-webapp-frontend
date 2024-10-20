import React, { useEffect, useState } from "react";
import NavBar from "../../../components/navBar/NavBar";
import styles from "./QuestionsList.module.css";
import QuestionsList from "../../../components/Questions/QuestionsList";
import NextButton from "../../../components/buttons/next-button/NextButton";
import { useAppSelector } from "../../../redux/store";
import { useNavigate, useParams } from "react-router-dom";
import { useHttpRequests } from "../../../api/api";
import { io } from "socket.io-client";
import { BASE_URL } from "../../../utils/constant";
var socket;
const QuestionsListPage = () => {
  const [userData, setUserData] = useState({
    name: "Adarsh Raj",
    place: "Calicut Zone",
  });
  const { judge } = useAppSelector((state) => state.judge);
  const [questionData, setQuestionData] = useState({
    questions: [],
  });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [latestCurrentQuestionIndex, setLatestCurrentQuestionIndex] =
    useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { get, post } = useHttpRequests();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    socket = io(BASE_URL);
    socket.emit("join", judge?.zoneId);

    socket.on("proceed-question", ({ success, resultId }) => {
      console.log(resultId, "resultId");
      if (success && resultId) {
        navigate("/judge/question-answer/" + resultId);
      }
    });

    return () => {
      socket.off("selected-participant");
    };
  }, []);

  useEffect(() => {
    fetchQuestionAndAnswer();
  }, []);

  const fetchQuestionAndAnswer = async () => {
    const data = await get(`/judge/users/questions/${id}`);
    console.log(data?.data, "data ------------------");

    setQuestionData(data?.data);
    findNextUnansweredQuestion(data?.data?.questions);
  };

  // Function to find the next unanswered question
  const findNextUnansweredQuestion = (questions) => {
    const judgeId = judge?.id; // Get current judge's ID
    console.log(questions, "questions");
    console.log(judge, "judge");
    console.log(questions.length === 0, "questions.length === 0");
    console.log(judgeId, "judgeIdjudgeIdjudgeIdjudgeId");

    if (!questions || questions.length === 0 || !judgeId) return;
    console.log("hey hello---------------------");

    // Loop through questions to find the first one the current judge hasn't answered
    for (let i = 0; i < questions.length; i++) {
      const notSubmitted = questions[i].submittedAnswers.find(
        (answer) => answer.judge_id === judgeId && answer.isCompleted === true
      );
      // const submitted = questions[i].submittedAnswers.find(
      //   (answer) => answer.judge_id === judgeId && answer.isCompleted === fals
      // );
      console.log(notSubmitted, "submittedAnswer");

      // If no answer is found for the current judge, set that as the current question
      if (!notSubmitted) {
        setCurrentQuestion(notSubmitted);
        setCurrentQuestionIndex(i);
        setLatestCurrentQuestionIndex(i);
        break;
      }
    }
  };

  const handleNext = async () => {
    console.log(  questionData?.questions[currentQuestionIndex]?._id,
      id,
     new Date(),"afdsfa");
    const data = await post("/judge/users/proceed-to-next-question", {
      question_id: "670fdcb399bae2a31ac29c5b",
      result_id:id,
      startTime: new Date(),
    });
    console.log(data, "data");

    console.log(data?.success, "ssssd");
    if (data?.success) {
      console.log(data?.result?._id, "result id");
      console.log(data?._id, "result id");

      const resultId = data?._id ?? data?.result?._id;
      console.log(resultId, "resultId");

      socket.emit("proceed-question", {
        success: true,
        resultId:id,
        zoneId:judge?.zoneId,
      });
    }
  };
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.userDetailes}>
            <h2 className={styles.WelcomeText}>
              <img
                className={styles.locationImage}
                src="/images/homeLocation.png"
                alt="location-img"
              />
              {userData.place}
            </h2>
            <h2 className={styles.nameText}>{userData.name}</h2>
          </div>
        </div>
        <h1 className={styles.main_title}>Questions List</h1>
        <div className={styles.currentparticipant}>
          <QuestionsList
            QuestionNumber={latestCurrentQuestionIndex + 1}
            Questions={questionData?.questions}
          />
        </div>

        <div className={styles.header}>
          <div className={styles.userDetailes}>
            {judge?.isMain && (
              <NextButton onClick={handleNext} text={"Next"} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsListPage;
