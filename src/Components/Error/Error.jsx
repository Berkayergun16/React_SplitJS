import React from "react";
import Lottie from "lottie-react";
import ErrorAnimation from "../../Assets/Animations/Error.json";

const Error = () => {
  return (
    <Lottie
      animationData={ErrorAnimation}
      loop={true}
      autoPlay={true}
      style={{ width: "30%", marginLeft: "35%", marginTop: "8%" }}
    />
  );
};

export default Error;
