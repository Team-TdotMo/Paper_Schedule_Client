import LoginForm from "../../components/AuthPage/loginForm";
import SideDesign from "../../components/AuthPage/SideDesign";
import * as _ from "./style";

function Login(): JSX.Element {
  return (
    <_.Conainter>
      <div>
        <SideDesign />
      </div>
      <LoginForm />
    </_.Conainter>
  )
}

export default Login;