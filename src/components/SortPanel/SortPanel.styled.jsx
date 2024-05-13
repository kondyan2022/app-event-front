import styled from "@emotion/styled";

export const SortPanelWrapper = styled.div`
  position: fixed;
  right: 7%;
  top: 50px;
  z-index: 11;

  display: flex;
  gap: 10px;
  align-items: center;
  color: steelblue;
  @media screen and (min-width: 768px) {
    top: 16px;
  }
`;
