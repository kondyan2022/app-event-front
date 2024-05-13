import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  padding: 10px 20px;
  background-color: white;
  z-index: 10;
  border-bottom: 2px solid lightblue;
  color: steelblue;
  height: 100px;
  h1 {
    margin-left: 7%;
    font-size: x-large;
  }
  @media screen and (min-width: 768px) {
    height: auto;
    h1 {
      font-size: xx-large;
    }
  }
`;
