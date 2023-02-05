import { PaperLogo, ScheduleLogo, PaperExplain, ScheduleExplain, FooterLogo, Github } from "../../assets";
import * as _ from "./styles";

function Mainhome(): JSX.Element {
  return (
    <div>
      <_.Background1>
        <_.Nav>
          <_.SLinkNav to="/login">로그인</_.SLinkNav>
          <_.SLinkNav to="/signup">회원가입</_.SLinkNav>
        </_.Nav>
        <_.Warpper>
          <_.Title>대마고</_.Title>
          <_.Title>프로젝트 관리 - 협업툴</_.Title>
          <_.Flex>
            <_.SPaperLogo1 src={PaperLogo} />
            <_.SScheduleLogo src={ScheduleLogo} />
          </_.Flex>
        </_.Warpper>
        <_.SLinkImgFlex>
            <_.SLinkImg to="/">Paper 바로가기 →</_.SLinkImg>
            <_.SLinkImg to="/">Schedule 바로가기 →</_.SLinkImg>
        </_.SLinkImgFlex>
      </_.Background1>
      
      <_.Background2>
        <_.ExplainImg src={PaperExplain}/>
      </_.Background2>
      
      <_.Background3>
        <_.ExplainImg src={ScheduleExplain}/>
      </_.Background3>
      
      <_.Footer>
        <_.FooterImg src={FooterLogo}/>
        <div>
          <h1>FrontEnd</h1>
          <p>강진현</p>
          <p>김규하</p>
          <p>안윤지</p>
        </div>
        <div>
          <h1>BackEnd</h1>
          <p>김민채</p>
          <p>최성현</p>
        </div>
        <_.GithubLogo target="_blank" to="https://github.com/Team-TdotMo/Paper_Schedule_Client">
          <img src={Github}/>
        </_.GithubLogo>
      </_.Footer>
    </div>
  );
}

export default Mainhome;
