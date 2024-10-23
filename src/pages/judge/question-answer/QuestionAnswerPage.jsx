import React, { useEffect, useState } from "react";
import styles from "./QuestionAnswerPage.module.css";
import QuestionsList from "../../../components/questions-answers/QuestionList";
import QuestionAnswerCard from "../../../components/questionanswercard/QuestionAnswerCard";
import CircularTimer from "../../../components/timer/Timer";
import NextButton from "../../../components/buttons/next-button/NextButton";
import { useAppSelector } from "../../../redux/store";
import { useHttpRequests } from "../../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

function QuestionAnswerPage() {
  const { judge } = useAppSelector((state) => state.judge);
  const [questionData, setQuestionData] = useState({
    questions: [],
  });
  const [updateData, setUpdateData] = useState({ answer: "", mark: "" });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [latestCurrentQuestionIndex, setLatestCurrentQuestionIndex] =
    useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { get, post } = useHttpRequests();
  const { id, questionId } = useParams();

  const navigate = useNavigate();


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
    setLatestCurrentQuestionIndex(currentQuestionIndexFind);
    setCurrentQuestion(questions[currentQuestionIndexFind]);
  };
  const judgeAnswer = currentQuestion?.submittedAnswers?.find(
    (answer) => answer.judge_id === judge?.id
  );
  const handleSubmit = async () => {
    if (!judge?.isMain && !judgeAnswer?.isCompleted) {
      if (!updateData?.answer) {
        toast.error("Please enter answer ", {
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
      } else if (!updateData?.mark) {
        toast.error("Please enter Score", {
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

        const data = await post("/judge/users/submit-answers", {
          answer_id: judgeAnswer?._id,
          result_id: id,
          question_id: questionId,
          answer: updateData?.answer,
          score: updateData?.mark,
          endTime: new Date(),
        });
        if (data?.success) {
          navigate(`/judge/questions-list/${id}/${questionId}`);
          toast.success("Submitted successfully", {
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
        }
      }
    } else {
      navigate(`/judge/questions-list/${id}/${questionId}`);
    }
  };

  const handleChange = (value, field) => {
    setUpdateData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.WelcomeText}>
            <img
              className={styles.locationImage}
              src="/images/homeLocation.png"
              alt="location-img"
            />
            <h1 className={styles.zone_text}> {judge.zone}</h1>
          </div>
          <div className="ml-10">
            <CircularTimer />
          </div>

          <div className={styles.userDetailes}>
            <h2 className={styles.WelcomeText}>
              <img
                className={styles.profileImage}
                src={questionData?.participant_image}
                alt="location-img"
              />
              <span className={styles.nameText}>{questionData?.participant_name}</span>
            </h2>
          </div>
        </div>
        <div className="flex">
          <h1 className={styles.main_title}>Questions List</h1>
        </div>

        <div className={styles.currentparticipant}>
          <QuestionsList
            QuestionNumber={currentQuestionIndex + 1}
            setCurrentQuestion={setCurrentQuestion}
            setLatestCurrentQuestionIndex={setLatestCurrentQuestionIndex}
            Questions={questionData?.questions}
          />
          <div className={styles.question_main}>
            <QuestionAnswerCard
              titile={`Question ${latestCurrentQuestionIndex + 1}`}
              border={"#C19D5C"}
              descrption={currentQuestion?.question}
            />
            <QuestionAnswerCard
              titile={"Answer"}
              border={"#0B9D64"}
              descrption={currentQuestion?.answer}
            />
            {!judge?.isMain && (
              <textarea
                rows={8}
                cols="50"
                type="text"
                disabled={judgeAnswer?.isCompleted}
                value={
                  judgeAnswer?.isCompleted
                    ? judgeAnswer?.answer
                    : updateData?.answer
                }
                onChange={(e) => handleChange(e.target.value, "answer")}
                className={styles.main_section}
                placeholder="Participant’s Answer"
              />
            )}
          </div>
        </div>
        <div className={styles.score_btn_div}>
          {!judge?.isMain && (
            <div className={styles.score_div}>
              <div className="max-w-max  flex items-center space-x-5">
                <span>Score</span>{" "}
                <input
                  type="number"
                  value={
                    judgeAnswer?.isCompleted
                      ? judgeAnswer?.score
                      : updateData?.mark
                  }
                  disabled={judgeAnswer?.isCompleted}
                  onChange={(e) => handleChange(e.target.value, "mark")}
                  min={0}
                  placeholder="Enter"
                  className={`border border-green-500 rounded-lg bg-transparent w-28 px-2 py-1 text-center text-[#0B9D64] text-2xl`}
                />
              </div>
            </div>
          )}
          {!judgeAnswer?.isCompleted && (
            <button onClick={handleSubmit}>
              <NextButton
                text={
                  judge?.isMain || judgeAnswer?.isCompleted ? "Next" : "Submit"
                }
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuestionAnswerPage;
