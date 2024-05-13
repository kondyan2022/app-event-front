import styled from "@emotion/styled";

export const EventCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  width: 320px;
  height: 250px;

  border-radius: 10px;
  border: 3px solid lightblue;

  h1 {
    font-size: x-large;
  }

  div {
    display: flex;
  }
  div:first-of-type {
    padding: 10px 20px;
    background-color: lightskyblue;
    justify-content: space-between;
    span {
      font-weight: 600;
      color: white;
    }
  }
  div:last-of-type {
    padding: 10px 5px;
    border-top: 2px solid lightskyblue;
    justify-content: space-around;
  }
  div:nth-of-type(2) {
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 10px 20px;
    color: navy;
  }
  button {
    border: none;
    color: steelblue;
    transition: all 300ms ease-in-out;

    &:hover,
    &:focus {
      color: navy;
      transform: scale(1.05);
    }
  }
`;
