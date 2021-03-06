import React from "react";
import Lottie from "lottie-react";
import LoadingAnimation from "../Assets/Animations/Loading.json";

const Loading = () => {
  return (
    <Lottie
      animationData={LoadingAnimation}
      loop={true}
      autoPlay={true}
      style={{ width: "30%", marginLeft: "35%", marginTop: "8%" }}
    />
  );
};

export default Loading;
