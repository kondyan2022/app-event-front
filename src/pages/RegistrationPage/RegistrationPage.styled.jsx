import styled from "@emotion/styled";

export const RegistrationPageWrapper = styled.div`
  max-width: 450px;
  border-radius: 10px;
  border: 3px solid steelblue;
  color: steelblue;
  padding: 30px;
  margin-top: 120px;
  margin-left: auto;
  margin-right: auto;
  .panel {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    /* padding: 0px 20px 30px 20px; */
    p {
      font-size: xx-large;
      font-weight: 600;
      color: steelblue;
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
  }
`;
