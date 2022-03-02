import styled from "styled-components";
import RawForm from "./RawForm";

const Form: any = styled(RawForm)`
  & {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: auto;
    width: 30rem;
    box-shadow: 0px 0px 12px 8px #888888;
    border-radius: 1rem;
  }

  & div.header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props) =>
      props.closeButton ? "space-between" : "center"};
    padding: 0 1rem 0 1rem;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: black;
  }

  & div.header p {
    color: white;
    -webkit-user-select: none;
    text-transform: capitalize;
    letter-spacing: 0.15rem;
    font-weight: 700;
    font-size: 1.25rem;
  }

  & div.content-container {
    display: flex;
    flex-direction: column;
    margin: 0.75rem;
  }

  & div.content-container div.toggle-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    -webkit-user-select: none;
    text-transform: capitalize;
    letter-spacing: 0.15rem;
    font-weight: 700;
    font-size: 1.25rem;
    margin-right: 9rem;
  }

  & div.content-container div.button-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    -webkit-user-select: none;
    text-transform: capitalize;
    letter-spacing: 0.15rem;
    font-weight: 700;
    font-size: 1.25rem;
  }
`;

export default Form;
