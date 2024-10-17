import { useCallback, useEffect, useRef, useState } from "react";
const Timer5 = () => {
  const [countDownTime, setCountDownTime] = useState({ seconds: 0 });
  const secondCircle = useRef();

  const changeCircleOffset = (seconds) => {
    if (secondCircle.current) {
      secondCircle.current.style.strokeDashoffset = `${
        seconds > 0 ? 251 - (seconds * 251) / 60 : 251
      }px`;
    }
  };

  const getTimeDifference = useCallback((countDownDate) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownDate - currentTime;
    const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

    if (timeDifference < 0) {
      changeCircleOffset(seconds);
      setCountDownTime({ seconds: 0 });
      clearInterval();
    } else {
      changeCircleOffset(seconds);
      setCountDownTime({ seconds });
    }
  }, []);

  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth(),
      customDate.getDate(),
      customDate.getHours(),
      customDate.getMinutes(),
      customDate.getSeconds() + 60 // 60-second countdown
    );

    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, [getTimeDifference]);

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  return (
    <div className="relative bg-[#E9EAF0] rounded-full h-20 w-20">
      <svg className="-rotate-90 h-24 w-24">
        <circle
          r="40"
          cx="50"
          cy="50"
          className="fill-transparent stroke-[#0B9D64] stroke-[7px]"
        ></circle>
        <circle
          r="40"
          ref={secondCircle}
          cx="50"
          cy="50"
          style={{ strokeDasharray: "251px" }}
          className="fill-transparent stroke-white stroke-[7px]"
        ></circle>
      </svg>
      <div className="text-white absolute top-7 left-6 text-xl font-semibold flex flex-col items-center ">
        <span className="text-center">{countDownTime?.seconds}</span>
   
      </div>
    </div>
  );
};

export default Timer5;
