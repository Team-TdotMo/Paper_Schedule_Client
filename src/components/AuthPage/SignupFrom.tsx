import { AuthTypes } from "../../interface/Auth";
import * as _ from "./style";
import React, { useState } from "react";
import { CloseEye, OpenEye } from "../../assets";

function SignupForm(): JSX.Element {
  const [inputs, setInputs] = useState({
    "name": "",
    "studentId": 0,
    "schoolEmail": "",
    "password": "",
    "passwordCheck": ""
  });

  const [secret, setSecret] = useState<boolean>(false);
  const [secretCheck, setSecretCheck] = useState<boolean>(false);
  const passwordType = secret ? "text" : "password"
  const passwordCheckType = secretCheck ? "text" : "password"

  const inputValue: AuthTypes[] = [
    { title: "name", type: "string", name: "name" },
    { title: "Student ID(학번만 입력 ex)1111)", type: "number", name: "studentId" },
    { title: "School - Email", type: "email", name: "schoolEmail", padding: 93 },
    { title: "Password", type: passwordType, name: "password", padding: 40 },
    { title: "Password Check", type: passwordCheckType, name: "passwordCheck", padding: 40 },
  ];


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
  const pwCheckChange = () => {
    setSecretCheck(!secretCheck);
  }

  return (
    <_.FormContainer>
      <div>
        <h1>Sign Up</h1>
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
          <_.EyeButton onClick={pwChange} bottom="95px" >
            {

              secret ? <img src={OpenEye} /> : <img src={CloseEye} />
            }
          </_.EyeButton>
          <_.EyeButton onClick={pwCheckChange} bottom="43px">
            {
              secretCheck ? <img src={OpenEye} /> : <img src={CloseEye} />
            }
          </_.EyeButton>
          <_.EmailLabel bottom="145px" >@dsm.hs.kr</_.EmailLabel>
        </_.Form>
        <_.SubmitButton>Sign up</_.SubmitButton>
      </div >
    </_.FormContainer >
  );
}

export default SignupForm;