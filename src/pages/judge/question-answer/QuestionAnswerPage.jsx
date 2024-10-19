import React, { useEffect, useState } from "react";
import styles from "./QuestionAnswerPage.module.css";
import QuestionsList from "../../../components/questions-answers/QuestionList";
import QuestionAnswerCard from "../../../components/questionanswercard/QuestionAnswerCard";
import CircularTimer from "../../../components/timer/Timer";
import NextButton from "../../../components/buttons/next-button/NextButton";
import { useAppSelector } from "../../../redux/store";
import { useHttpRequests } from "../../../api/api";
import { useParams } from "react-router-dom";

function QuestionAnswerPage() {
  const { judge } = useAppSelector((state) => state.judge);
  const [questionData, setQuestionData] = useState({
    questions:[]
  });
  const [currentQuestion,setCurrentQuestion] = useState(0)
  const { get } = useHttpRequests();
  const { id } = useParams();
  const [userData, setUserData] = useState({
    name: "David Cooper",
    place: "Calicut Zone",
    profileImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const data = await get(`/judge/users/questions/${id}`);
    console.log(data?.data, "data ------------------");

    setQuestionData(data?.data);
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
            QuestionNumber={currentQuestion+1}
            Questions={questionData?.questions}
          />
          <div className={styles.question_main}>
            <QuestionAnswerCard
              titile={`Question ${currentQuestion+1}`}
              border={"#C19D5C"}
              descrption={questionData?.questions[currentQuestion]?.question}
            />
            <QuestionAnswerCard
              titile={"Answer"}
              border={"#0B9D64"}
              descrption={
                questionData?.questions[currentQuestion]?.answer
              }
            />
            <textarea
              rows={8}
              cols="50"
              type="text"
              className={styles.main_section}
              placeholder="Participant’s Answer"
            />
          </div>
        </div>
        <div className={styles.score_btn_div}>
          <div className={styles.score_div}>
            <h1>
              <span>Score</span> <span className={styles.score_text}>44</span>
            </h1>
          </div>
          <NextButton text={"Submit"} />
        </div>
      </div>
    </div>
  );
}

export default QuestionAnswerPage;
