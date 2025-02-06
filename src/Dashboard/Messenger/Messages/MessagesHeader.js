import { styled, Typography } from "@mui/material";
import Avatar from "../../../shared/components/Avatar";
const MainContainer = styled("div")({
  width: "98%",
  display: "column",
  marginTop: "10px",
});
const MessagesHeader = ({ name = "" }) => {
  return (
    <MainContainer>
      <Avatar large username={name} />
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "white",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          color: "#b9bbbe",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        {name}님과의 대화 시작입니다.
      </Typography>
    </MainContainer>
  );
};
export default MessagesHeader;
