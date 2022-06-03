import React from "react";

const Logo = () => {
  return (
    <div className="m-5">
      <img
        className="mb-5 bg-cover bg-center"
        src={require("Assets/images/sitelogo.png")}
      />
    </div>
  );
};

export default Logo;
