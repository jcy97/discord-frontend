import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import { useState } from "react";
import AddFriendDialog from "./AddFriendDialog";
const additionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  background: "#3ba55d",
};

const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleOpenAddFrienDialog = () => {
    setIsDialogOpen(true);
  };
  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        lable="Add Friend"
        onClick={handleOpenAddFrienDialog}
        label="친구추가"
      />
      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseAddFriendDialog}
      />
    </>
  );
};
export default AddFriendButton;
