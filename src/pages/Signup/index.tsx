import SideDesign from "../../components/AuthPage/SideDesign";
import SignupForm from "../../components/AuthPage/SignupFrom";
import * as _ from "./style";

function Signup(): JSX.Element {
  return (
    <_.Conainter>
      <div>
        <SideDesign />
      </div>
      <SignupForm />
    </_.Conainter>
  )
}

export default Signup;