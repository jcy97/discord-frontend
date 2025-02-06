import { display, height, styled, width } from "@mui/system";
import { useState } from "react";
import { connect } from "react-redux";
import { sendDirectMessage } from "../../realtime-Communication/socketConnection";

const MainConatiner = styled("div")({
  height: "60px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Input = styled("input")({
  backgroundColor: "#2f3136",
  width: "98%",
  height: "44px",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "14px",
  padding: "0 10px",
});

const NewMessageInput = ({ chosenChatDetails }) => {
  const [message, setMessage] = useState("");
  const handleMessageValueChange = (event) => {
    setMessage(event.target.value);
  };
  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (message.length > 0) {
      sendDirectMessage({
        receiverUserId: chosenChatDetails.id,
        content: message,
      });
      setMessage("");
    }
  };
  return (
    <MainConatiner>
      <Input
        placeholder={`${chosenChatDetails.name}님에게 메세지를 보내세요`}
        value={message}
        onChange={handleMessageValueChange}
        onKeyDown={handleKeyPressed}
      />
    </MainConatiner>
  );
};
const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};
export default connect(mapStoreStateToProps)(NewMessageInput);
