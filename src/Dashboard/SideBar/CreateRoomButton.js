import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import * as roomHandler from "../../realtime-Communication/roomHandler";

const CreateRoomButton = () => {
  const createNewRoomHandler = () => {
    //새로운 대화방을 만들고 해당 정보를 서버에 전송한다.
    roomHandler.createNewRoom();
  };
  return (
    <Button
      onClick={createNewRoomHandler}
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "16px",
        margin: 0,
        padding: 0,
        minWidth: 0,
        marginTop: "10px",
        color: "white",
        backgroundColor: "#5865F2",
      }}
    >
      <AddIcon />
    </Button>
  );
};
export default CreateRoomButton;
