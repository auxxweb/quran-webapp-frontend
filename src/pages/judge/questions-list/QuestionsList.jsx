import React, { useEffect, useState } from "react";
import styles from "./QuestionsList.module.css";
import QuestionsList from "../../../components/Questions/QuestionsList";
import NextButton from "../../../components/buttons/next-button/NextButton";
import { useAppSelector } from "../../../redux/store";
import { useNavigate, useParams } from "react-router-dom";
import { useHttpRequests } from "../../../api/api";
import { io } from "socket.io-client";
import { BASE_URL } from "../../../utils/constant";
import { Bounce, toast } from "react-toastify";
var socket;
const QuestionsListPage = () => {
  const { judge } = useAppSelector((state) => state.judge);
  const [questionData, setQuestionData] = useState({
    questions: [],
  });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { get, post } = useHttpRequests();
  const { id, questionId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    socket = io(BASE_URL);

    socket.emit("join", judge?.zoneId);

    socket.on("proceed-question", ({ success, resultId, questionId }) => {
      if (success && resultId && questionId) {
        navigate("/judge/question-answer/" + resultId + "/" + questionId);
      }
    });
    socket.on("question-completed", ({ success }) => {
      if (success) {
        navigate("/judge");
      }
    });

    return () => {
      socket.off("proceed-question");
      socket.off("question-completed");
    };
  }, []);

  useEffect(() => {
    fetchQuestionAndAnswer();
  }, []);

  const fetchQuestionAndAnswer = async () => {
    const data = await get(`/judge/users/questions/${id}`);
    

    setQuestionData(data?.data);
    findNextUnansweredQuestion(data?.data?.questions);
  };

  const findNextUnansweredQuestion = (questions) => {
    const currentQuestionIndexFind = questions?.findIndex(
      (que) => que?._id === questionId
    );
    setCurrentQuestionIndex(currentQuestionIndexFind);
    setCurrentQuestion(questions[currentQuestionIndexFind]);
  };
  const judgeAnswer = currentQuestion?.submittedAnswers?.find(
    (answer) => answer.judge_id === judge?.id
  );
  const handleNext = async () => {


    const isLastSubmit =
      questionData?.questions?.length === currentQuestionIndex + 1;
    const data = await post("/judge/users/proceed-to-next-question", {
      question_id: questionData?.questions[currentQuestionIndex + 1]?._id,
      old_question_id: questionData?.questions[currentQuestionIndex]?._id,
      result_id: id,
      startTime: new Date(),
      answer_id: judgeAnswer?._id,
      isLastSubmit,
    });

    if (data?.success) {
      if (isLastSubmit) {
        socket.emit("question-completed", {
          success: true,
          zoneId: judge?.zoneId,
        });
      } else {
        socket.emit("proceed-question", {
          success: true,
          resultId: id,
          zoneId: judge?.zoneId,
          questionId: questionData?.questions[currentQuestionIndex + 1]?._id,
        });
      }
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
      return;
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
              {judge?.zone}
            </h2>
            <h2 className={styles.nameText}>
              {questionData?.participant_name}
            </h2>
          </div>
        </div>
        <h1 className={styles.main_title}>Questions List</h1>
        <div className={styles.currentparticipant}>
          <QuestionsList
            QuestionNumber={currentQuestionIndex + 1}
            Questions={questionData?.questions}
          />
        </div>

        <div className={styles.header}>
          <div className={styles.userDetailes}>
            {judge?.isMain && (
              <NextButton
                onClick={handleNext}
                text={
                  questionData?.questions?.length === currentQuestionIndex + 1
                    ? "submit"
                    : "Next"
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsListPage;
