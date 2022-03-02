import styled from "styled-components";
import RawInptLine from "./RawInptLine";

const InptLine: any = styled(RawInptLine)`
  & {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & input {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    padding: 0 1rem 0 1rem;
    cursor: pointer;
    border-radius: 0.75rem;
    border: 1px solid;
    outline: none;
    width: 18rem;
    letter-spacing: 0.15rem;
    height: 2.75rem;
    font-weight: 500;
    transition-duration: 0.2;
    text-transform: capitalize;
  }

  & input:active {
    border: 3px solid;
  }

  & p {
    font-size: 1.25rem;
    text-transform: capitalize;
    -webkit-user-select: none;
    font-weight: 600;
    letter-spacing: 0.1rem;
  }
`;

export default InptLine;
