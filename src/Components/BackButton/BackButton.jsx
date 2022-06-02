import { IconButton } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = ({route,handleClick}) => {

  return (
    <IconButton
      size="large"
      color="primary"
      component="span"
      as={NavLink}
      to={""}
      onClick={handleClick}
    >
      <ArrowBackIcon />
    </IconButton>
  );
};

export default BackButton;
