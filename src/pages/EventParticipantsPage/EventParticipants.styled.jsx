import styled from "@emotion/styled";

export const EventParticipantWrapper = styled.div`
  padding-top: 120px;
  height: 90vh;
  background-color: white;
  border-radius: 20px;
  width: 90vw;
  overflow: hidden;
  ul {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 10px;
    justify-content: center;
    overflow: auto;
    height: calc(100% - 150px);
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid steelblue;
    transition: transform 300ms ease-in-out;
  }
  button:hover {
    transform: scale(1.07);
  }
  .panel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px 30px 20px;

    p {
      font-size: xx-large;
      color: steelblue;
      font-weight: 600;
    }
  }
`;
