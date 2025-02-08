import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import * as roomHandler from "../../../realtime-Communication/roomHandler";
const CloseRoomButton = () => {
  const handleToggleRoom = () => {
    roomHandler.leaveRoom();
  };
  return (
    <IconButton onClick={handleToggleRoom} style={{ color: "white" }}>
      <CloseIcon />
    </IconButton>
  );
};
export default CloseRoomButton;
