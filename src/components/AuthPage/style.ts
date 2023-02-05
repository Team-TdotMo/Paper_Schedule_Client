import styled from "styled-components";
import { AuthBackground } from "../../assets";

const gray = "#818181";

export const SideContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${AuthBackground});
  background-size: cover;
  background-repeat: no-repeat;
  & > h1 {
    font-size: 3em;
    margin-left: 15%;
    &:first-child {
      padding-top: 25%;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100vh;
  & > div {
    border: 3px solid ${gray};
    border-radius: 10px;
    padding: 40px;
    & > h1 {
      margin-bottom: 20px;
    }
    & > div:last-child {
      margin-top: 30px;
      justify-content: center;
      display: flex;
      gap: 10px;
      & > p:last-child {
        color: #2a92be;
      }
    }
  }
`;

export const SubmitButton = styled.button`
  width: 350px;
  height: 57px;
  font-size: 20px;
  font-weight: bold;
  color: #2a92be;
  background-color: #c9ebeb;
  border: none;
  border-radius: 30px;
  cursor: pointer;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0px;
  margin-bottom: 0px;
`;

export const Input = styled.input<{ padding?: number }>`
  height: 40px;
  width: 100%;
  border: none;
  border-bottom: 4px solid ${gray};
  margin-bottom: 10px;
  padding-right: ${(prop) => prop.padding ?? 0}px;
  box-sizing: border-box;
  &::placeholder {
    color: ${gray};
    font-size: 17px;
    & > p {
      color: red;
    }
  }
  &:focus {
    outline: none;
    &::placeholder {
      color: black;
    }
  }
`;

export const EyeButton = styled.button<{ bottom: string }>`
  width: 0px;
  height: 0px;
  position: relative;
  bottom: ${(props) => props.bottom};
  left: calc(100% - 30px);
  border: none;
  background-color: white;
  & > img {
    width: 25px;
    height: 25px;
  }
`;

export const EmailLabel = styled.p<{ bottom: string }>`
  color: ${gray};
  position: relative;
  left: 265px;
  bottom: ${(props) => props.bottom};
  width: fit-content;
`;
