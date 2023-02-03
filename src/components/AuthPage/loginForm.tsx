import { useState } from "react";
import { CloseEye, OpenEye } from "../../assets";
import { AuthTypes } from "../../interface/Auth";
import * as _ from "./style";

function LoginForm(): JSX.Element {
  const [inputs, setInputs] = useState({
    "email": "",
    "password": ""
  });

  const [secret, setSecret] = useState<boolean>(false);
  const passwordType = secret ? "text" : "password";
  const inputValue: AuthTypes[] = [
    { title: "Email", type: "string", name: "email", padding: 93 },
    { title: "Password", type: passwordType, name: "password", padding: 40 }
  ]

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const pwChange = () => {
    setSecret(!secret);
  }

  return (
    <_.FormContainer>
      <div>
        <h1>Log in</h1>
        <_.Form>
          {inputValue.map((data) => {
            return (
              <div>
                <_.Input
                  padding={data.padding}
                  placeholder={data.title}
                  type={data.type}
                  name={data.name}
                  onChange={onChange}
                  key={data.name}
                />
              </div>
            )
          })}
          <_.EyeButton onClick={pwChange} bottom="45px" >
            {
              secret ? <img src={OpenEye} /> : <img src={CloseEye} />
            }
          </_.EyeButton>
          <_.EmailLabel bottom="95px">@dsm.hs.kr</_.EmailLabel>
        </_.Form>
        <_.SubmitButton>Login</_.SubmitButton>
        <div>
          <p>계정이 없으신가요?</p>
          <p>회원가입하기</p>
        </div>
      </div >
    </_.FormContainer >
  )
}

export default LoginForm;