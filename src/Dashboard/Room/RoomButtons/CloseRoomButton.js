import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const CloseRoomButton = () => {
  const handleToggleRoom = () => {};
  return (
    <IconButton onClick={handleToggleRoom} style={{ color: "white" }}>
      <CloseIcon />
    </IconButton>
  );
};
export default CloseRoomButton;
