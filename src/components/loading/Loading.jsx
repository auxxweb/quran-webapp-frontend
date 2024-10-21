import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full transform transition duration-150">
      <dotlottie-player
        src="https://lottie.host/d2ac467c-fca6-4428-a7de-36d84ff47e8d/0uH76ZaDaC.json"
        background="transparent"
        speed="1"
        style={{ width: "1000px", height: "`1000px" }}
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
};

export default Loading;
