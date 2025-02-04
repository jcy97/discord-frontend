import { Tooltip } from "@mui/material";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";

const getFormNotValidMessage = () => {
  return "이메일 주소와 6~12자리의 비밀번호를 입력해 주세요";
};
const getFormValidMessage = () => {
  return "로그인 버튼을 눌러주세요";
};
const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();
  const handlePushToReegisterPage = () => {
    navigate("/register");
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="로그인"
            additionalStyles={{ marginTop: "3px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="계정이 필요하신가요?"
        redirectText="회원가입"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToReegisterPage}
      />
    </>
  );
};
export default LoginPageFooter;
