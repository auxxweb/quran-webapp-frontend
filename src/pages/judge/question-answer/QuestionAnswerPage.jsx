import React, { useEffect, useState } from "react";
import styles from "./QuestionAnswerPage.module.css";
import QuestionsList from "../../../components/questions-answers/QuestionList";
import QuestionAnswerCard from "../../../components/questionanswercard/QuestionAnswerCard";
import CircularTimer from "../../../components/timer/Timer";
import NextButton from "../../../components/buttons/next-button/NextButton";
import { useAppSelector } from "../../../redux/store";
import { useHttpRequests } from "../../../api/api";
import { useNavigate, useParams } from "react-router-dom";

function QuestionAnswerPage() {
  const { judge } = useAppSelector((state) => state.judge);
  const [questionData, setQuestionData] = useState({
    questions: [],
  });
  const [updateData, setUpdateData] = useState({ answer: "", mark: "" });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [latestCurrentQuestionIndex, setLatestCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { get,post } = useHttpRequests();
  const { id } = useParams();
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    name: "David Cooper",
    place: "Calicut Zone",
    profileImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  });

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
        (answer) => answer.judge_id === judgeId &&  answer.isCompleted === true
      );
      // const submitted = questions[i].submittedAnswers.find(
      //   (answer) => answer.judge_id === judgeId && answer.isCompleted === fals
      // );
      console.log(notSubmitted, "submittedAnswer");

      // If no answer is found for the current judge, set that as the current question
      if (!notSubmitted ) {
        setCurrentQuestion(notSubmitted);
        setCurrentQuestionIndex(i);
        setLatestCurrentQuestionIndex(i)
        break;
      }
    }
  };
  console.log(currentQuestionIndex, "current question");
  const judgeAnswer = currentQuestion?.submittedAnswers?.find(
    (answer) => answer.judge_id === judge?.id 
  );
  const handleSubmit = async () => {
    if (!judge?.isMain &&!judgeAnswer?.isCompleted) {
      if(!updateData?.answer){
        alert("Please enter answer ")
        
        
      }else if(!updateData?.mark){
        alert("Please enter mark ")

      }
      else{
        // setCurrentQuestionIndex(currentQuestionIndex+1)
       
        const data = await post("/judge/users/submit-answers", {
          answer_id: currentQuestion?._id,
          result_id: id,
          question_id:questionData?.questions[currentQuestionIndex]?._id,
          answer:updateData?.answer,
          score:updateData?.mark,
          endTime: new Date(),
        });
        if (data?.success) {
          navigate(`/judge/questions-list/${id}`)

          alert("submitted")
        }
      }
    }else{
      navigate(`/judge/questions-list/${id}`)
    }
  };
  console.log(currentQuestion,"current question");
  

  const handleChange = (value, field) => {
    setUpdateData((prev) => ({ ...prev, [field]: value }));
  };

  console.log(judgeAnswer,"judgeAnswer");
  
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
                src={userData.profileImage}
                alt="location-img"
              />
              <span className={styles.nameText}>{userData.name}</span>
            </h2>
          </div>
        </div>
        <div className="flex">
          <h1 className={styles.main_title}>Questions List</h1>
        </div>

        <div className={styles.currentparticipant}>
          <QuestionsList
            QuestionNumber={latestCurrentQuestionIndex + 1}
            setCurrentQuestion={setCurrentQuestion}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            Questions={questionData?.questions}
          />
          <div className={styles.question_main}>
            <QuestionAnswerCard
              titile={`Question ${currentQuestionIndex + 1}`}
              border={"#C19D5C"}
              descrption={questionData?.questions[currentQuestionIndex]?.question}
            />
            <QuestionAnswerCard
              titile={"Answer"}
              border={"#0B9D64"}
              descrption={questionData?.questions[currentQuestionIndex]?.answer}
            />
            {!judge?.isMain && (
              <textarea
                rows={8}
                cols="50"
                type="text"
                disabled={judgeAnswer?.isCompleted}
                value={judgeAnswer?.isCompleted? judgeAnswer?.answer: updateData?.answer}
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
                  value={judgeAnswer?.isCompleted? judgeAnswer?.score :updateData?.mark}
                  disabled={judgeAnswer?.isCompleted}
                  onChange={(e) => handleChange(e.target.value, "mark")}
                  min={0}
                  className={`bg-transparent w-28 px-2 py-1 text-center text-[#0B9D64] text-3xl`}
                />
              </div>
            </div>
          )}
          <button onClick={handleSubmit}>
            <NextButton text={(judge?.isMain||judgeAnswer?.isCompleted)  ? "Next" : "Submit"} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionAnswerPage;
