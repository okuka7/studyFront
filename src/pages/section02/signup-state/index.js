import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickSignup(event) {
    console.log(email);
    console.log(password);

    //1.검증하기
    if (email.includes("@") === false) {
    } else {
      //2. 백엔드 컴퓨터에 보내주기(백엔드가 만든 함수API)
      //->나중에
      //3. 성공 알람 보여주
      alert("회원가입을 축하합니다.");
    }
  }
  return (
    <div>
      이메일: <input type="test" onChange={onChangeEmail} />
      <div>{emailError}</div>
      비밀번호:
      <input type="password" onChange={onChangePassword} />
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  );
}
