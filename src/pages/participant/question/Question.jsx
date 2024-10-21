import React, { useEffect, useState } from "react";
import styles from "./Question.module.css";
import ParticipantNavBar from "../../../components/participant/participant-navBar/ParticipantNavBar";
import CircularTimer from "../../../components/timer/Timer";
import UserQuestions from "../../../components/user-questions-show/UserQuestionsShow";
import { getQuestionDetailsHandler } from "../../../api/participantApi.";
import { useParams } from "react-router-dom";
import Loading from "../../../components/loading/Loading";

const Question = () => {
  const [questionData, setQuestionData] = useState(null);
  const [loading, setLoading] = useState(false);

  const { resultId, questionId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await getQuestionDetailsHandler(resultId, questionId);
        setQuestionData(data?.result);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        setLoading(false);
        console.log(`Error occured in getQuestionDetailsHandler:${error}`);
        return;
      }
    })();
  }, [resultId, questionId]);

  return (
    <div className={styles.section}>
      {loading ? (
        <Loading />
      ) : (
        <div className=" w-full max-w-screen-2xl">


        <ParticipantNavBar data={questionData}>
          <div className="h-full space-y-10">
            <h1 className={styles.award_text}>ASLAM HOLY QUR’AN AWARD</h1>
            <div className={styles.main_div}>
              <CircularTimer />
            </div>
            <div className={styles.question_div}>
              <UserQuestions
                titile={`Question ${questionData?.questionNumber}`}
                border={"#C19D5C"}
                descrption={questionData?.question?.question}
              />
            </div>
          </div>
        </ParticipantNavBar>
        </div>
      )}
    </div>
  );
};

export default Question;
