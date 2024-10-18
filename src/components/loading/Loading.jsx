import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <dotlottie-player
        src="https://lottie.host/d2ac467c-fca6-4428-a7de-36d84ff47e8d/0uH76ZaDaC.json"
        background="transparent"
        speed="1"
        style={{ width: "600px", height: "600px" }}
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
};

export default Loading;
