import styled from "styled-components";

export const Conainter = styled.div`
  display: flex;
  & > div:first-child {
    width: 50%;
    @media screen and (max-width: 1100px) {
      display: none;
    }
  }
`;