import InputWithLabels from "../../shared/components/InputWithLabel";

const LoginPageInputs = ({ mail, setMail, password, setPassword }) => {
  return (
    <>
      <InputWithLabels
        value={mail}
        setValue={setMail}
        label="이메일"
        type="text"
        placeHolder="이메일을 입력하세요"
      />
      <InputWithLabels
        value={password}
        setValue={setPassword}
        label="비밀번호"
        type="password"
        placeHolder="비밀번호를 입력하세요"
      />
    </>
  );
};
export default LoginPageInputs;
