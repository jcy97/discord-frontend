import { styled, Typography } from "@mui/material";

const Wrapper = styled("div")({
  flexGrow: 1,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const MessengerContent = () => {
  return (
    <Wrapper>
      <Typography variant="h6" sx={{ color: "white" }}>
        대화 상대를 선택하세요
      </Typography>
    </Wrapper>
  );
};
export default MessengerContent;
