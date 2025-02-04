import InputWithLabels from "../../shared/components/InputWithLabel";

const RegisterPageInputs = (props) => {
  const { mail, setMail, username, setUsername, password, setPassword } = props;
  return (
    <>
      <InputWithLabels
        value={mail}
        setValue={setMail}
        label="이메일"
        type="text"
        placeholder="이메일을 입력해 주세요"
      />
      <InputWithLabels
        value={username}
        setValue={setUsername}
        label="이름"
        type="text"
        placeholder="이름을 입력해 주세요"
      />
      <InputWithLabels
        value={password}
        setValue={setPassword}
        label="비밀번호"
        type="password"
        placeholder="패스워드를 입력해 주세요"
      />
    </>
  );
};
export default RegisterPageInputs;
