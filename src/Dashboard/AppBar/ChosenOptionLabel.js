import { Typography } from "@mui/material";
import { connect } from "react-redux";
const ChosenOptionLabel = ({ name }) => {
  return (
    <Typography sx={{ fontSize: "16px", color: "white", fontWeight: "bold" }}>
      {`${name ? name : ""}`}
    </Typography>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    name: state.chat.chosenChatDetails?.name,
  };
};

export default connect(mapStoreStateToProps)(ChosenOptionLabel);
