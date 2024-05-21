import styled from "@emotion/styled";

export const RegisterFormWrapper = styled.div`
  form {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
  }
  /* .ant-picker-input > input::placeholder {
    color: lightblue;
  } */
  .ant-picker {
    width: 250px;
    border: 2px solid steelblue;
    & svg {
      width: 18px;
      height: 18px;
      color: #0869b8;
    }
    & input {
      transition: background-color 400ms ease-in-out;
      color: #0869b8;
      font-size: 16px;
      font-family: inherit;
      &::placeholder {
        color: lightblue;
        font-size: 16px;
      }
      &:focus-visible {
        color: #0869b8;
        border-color: #0869b8;
        outline-color: #0869b8;
      }
    }
  }
  p {
    text-align: right;
    color: tomato;
    font-size: small;
    height: 20px;
  }
  label {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    input {
      width: 250px;
      border: 2px solid steelblue;
      border-radius: 5px;
      padding: 5px 10px;
      transition: background-color 400ms ease-in-out;
      &::placeholder {
        color: lightblue;
      }
      &:focus-visible {
        color: #0869b8;
        border-color: #0869b8;
        outline-color: #0869b8;
      }
    }
  }
  fieldset {
    display: flex;
    border-color: steelblue;
    gap: 20px;
    border-radius: 7px;
    input {
      width: min-content;
    }
    input[type="radio"] {
      accent-color: steelblue;
    }
  }
  button {
    /* padding: 10px 0; */
    border-radius: 5px;
    background-color: steelblue;
    border: none;
    color: white;
    font-family: inherit;
    font-weight: 500;
    transition: background-color 400ms ease-in-out;
    &:hover,
    &:focus {
      background-color: #0869b8;
    }
  }
`;
