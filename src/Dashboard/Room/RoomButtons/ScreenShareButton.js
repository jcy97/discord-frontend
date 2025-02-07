import IconButton from "@mui/material/IconButton";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";
import { useState } from "react";

const ScreenShareButton = () => {
  const [isScreenSharingActvie, setIsScreenSharingActvie] = useState(false);

  const handleScreenShareToggle = () => {
    setIsScreenSharingActvie(!isScreenSharingActvie);
  };
  return (
    <IconButton onClick={handleScreenShareToggle} style={{ color: "white" }}>
      {isScreenSharingActvie ? <StopScreenShareIcon /> : <ScreenShareIcon />}
    </IconButton>
  );
};
export default ScreenShareButton;
