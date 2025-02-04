import { useEffect, useState } from "react";
import { validateMail } from "../../shared/utils/validators";
import InputWithLabel from "../../shared/components/InputWithLabel";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {},
}) => {
  const [mail, setMail] = useState("");
  const [isFormValid, setIsFormValid] = useState("");

  const handleSendInvitation = () => {
    // 친구 추가 요청
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail("");
  };

  useEffect(() => {
    setIsFormValid(validateMail(mail));
  }, [mail, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>친구 초대</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>초대할 친구의 이메일을 입력하세요</Typography>
          </DialogContentText>
          <InputWithLabel
            label="이메일"
            type="text"
            value={mail}
            setValue={setMail}
            placeHolder="이메일을 입력하세요"
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label={"초대 전송"}
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          />
        </DialogActions>
      </Dialog>{" "}
    </div>
  );
};
export default AddFriendDialog;
