/* eslint-disable react/prop-types */
import * as React from "react";
import Chip from "@mui/material/Chip";
const Chips = ({ label }) => {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <Chip
      label={label}
      variant="outlined"
      onClick={handleClick}
      onDelete={handleDelete}
    />
  );
};
export { Chips };