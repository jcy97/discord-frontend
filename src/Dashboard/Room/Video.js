import { styled } from "@mui/material";
import { useEffect, useRef } from "react";

const MainContainer = styled("div")({
  height: "50%",
  width: "50%",
  backgroundColor: "black",
  borderRadius: "8px",
});
const VideoEl = styled("video")({
  width: "100%",
  height: "100%",
});
const Video = ({ stream, isLocalStream }) => {
  const videoRef = useRef();
  useEffect(() => {
    const video = videoRef.current;
    video.srcObject = stream;

    video.onloadmetadata = () => {
      video.play();
    };
  }, [stream]);
  return (
    <MainContainer>
      <VideoEl ref={videoRef} autoPlay muted={isLocalStream ? true : false} />
    </MainContainer>
  );
};
export default Video;
