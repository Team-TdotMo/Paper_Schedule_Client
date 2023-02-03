import styled from "styled-components";
import SideDesign from "../../components/AuthPage/SideDesign";

export const Conainter = styled.div`
  display: flex;
  & > div:first-child {
    width: 50%;
    @media screen and (max-width: 1100px) {
      display: none;
    }
  }
`;

export const Side = styled(SideDesign)``;
