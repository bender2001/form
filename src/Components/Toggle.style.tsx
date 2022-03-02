import styled from "styled-components";
import RawToggle from "./RawToggle";

const Toggle = styled(RawToggle)`
  & {
    cursor: pointer;
    height: 2rem;
    width: 4rem;
    box-shadow: 0px 0px 16px 1px black inset;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    background-color: ${(props) => (props.toggleStatus ? "lime" : "red")};
    transition: 1s;
  }

  & div.toggle-circle {
    margin-left: ${(props) => (props.toggleStatus ? "2rem" : "0.2rem")};
    background-color: white;
    height: 1.75rem;
    width: 1.75rem;
    box-shadow: 0px 0px 3px 0px black;
    border-radius: 50%;
    transition: 0.33s;
  }
`;

export default Toggle;
