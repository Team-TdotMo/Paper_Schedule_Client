import styled, { css } from "styled-components";
import { MainColor, MainhomeColor } from "../../styles";
import { Link } from "react-router-dom";

export const Background1 = styled.div`
  background: linear-gradient(
    to right top,
    ${MainhomeColor.MainBackground1},
    ${MainhomeColor.MainBackground2}
  );
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 50px;
  width: 100%;
  height: 120px;
`;

export const SLinkNav = styled(Link)`
  margin-right: 2%;
  color: ${MainhomeColor.MainFontColor};
  text-decoration: none;
  font-size: 22px;
`;

export const Warpper = styled.div`
  width: 80%;
  max-width: 900px;
  margin-top: 4%;
`;

export const Title = styled.div`
  font-size: 40px;
  color: ${MainhomeColor.MainFontColor};
  font-weight: bold;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10%;
`;

export const SPaperLogo = styled.img`
  width: 45%;
  height: 200px;
`;

export const SScheduleLogo = styled.img`
  width: 20%;
  height: 25%;
  margin-right: 4%;
`;
export const SLinkImgFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
`;

export const SLinkImg = styled(Link)`
  color: ${MainhomeColor.MainFontColor};
  text-decoration: none;
  font-size: 27px;
  margin-top: 50px;
  margin-left: 100px;
  &:hover{
    color: ${MainColor.Paper};
    transition: all 0.3s;
  }
`;

export const Background2 = styled.div`
  background: white;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ExplainImg = styled.img`
    width: 65%;
`;

export const Background3 = styled.div`
  background: ${MainhomeColor.MainBackground3};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.footer`
    width: 100%;
    height: 200px;
    background-color: ${MainhomeColor.MainBackground4};
    & > div{
    display: flex;
    align-items: center;
    color: white;
    font-family: "sans-serif";
    margin: 10px 0 0 20px;
    & > h1{
        font-size: 24px;
        font-weight: 400;
    }
    & > p{
        font-size: 18px;
        margin-left: 15px;
    }
  }
`;

export const FooterImg = styled.img`
    width: 15%;
    margin: 30px 0 0 20px;
`;

export const GithubLogo = styled(Link)`
    & > img{
        width: 50px;
        position: absolute;
        top: 315%;
        right: 100px;
    }
`;