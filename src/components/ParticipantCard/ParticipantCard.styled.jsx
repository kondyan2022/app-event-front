import styled from "@emotion/styled";

export const ParticipantCardWrapper = styled.div`
  width: 320px;
  height: 150px;
  border-radius: 10px;
  border: 3px solid steelblue;
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: navy;

  a,
  span {
    font-weight: 500;
    text-align: center;
  }
  a:hover,
  a:focus {
    color: navy;
    text-decoration: underline;
  }
`;
