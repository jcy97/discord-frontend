import { styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseFullscreenICon from "@mui/icons-material/CloseFullscreen";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
const MainContainer = styled("div")({
  position: "absolute",
  bottom: "15px",
  right: "10px",
});
const ResizeRoomButton = ({ isRoomMinimized, handleRoomResize }) => {
  return (
    <MainContainer>
      <IconButton style={{ color: "white" }} onClick={handleRoomResize}>
        {isRoomMinimized ? <OpenInFullIcon /> : <CloseFullscreenICon />}
      </IconButton>
    </MainContainer>
  );
};

export default ResizeRoomButton;
