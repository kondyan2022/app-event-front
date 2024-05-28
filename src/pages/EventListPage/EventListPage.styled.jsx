import styled from "@emotion/styled";

export const EventListWrapper = styled.div`
  padding-top: 80px;
  .list {
    padding-top: 130px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px 50px;
    @media screen and (min-width: 768px) {
      padding-top: 100px;
    }
  }
  .pag {
    padding: 50px 0 100px 0;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
`;
