import styled from "styled-components";
import RawButton from "./RawButton";

interface buttonStyleProps {
  color?: string;
  backgroundColor?: string;
  outline?: boolean;
  outlineColor?: string;
  shadow?: boolean;
  width?: string;
}

export const Button = styled(RawButton)`
  width: ${(props: buttonStyleProps) => props.width};
  height: 2.5rem;
  background-color: ${(props: buttonStyleProps) => props.backgroundColor};
  color: ${(props: buttonStyleProps) => props.color};
  cursor: pointer;
  outline: inherit;
  border: none;
  border-radius: 0.5rem;
  font-family: david;
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 0.15rem;
  -webkit-user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid
    ${(props: buttonStyleProps) =>
      props.outline ? props.outlineColor : "transparent"};
  box-shadow: ${(props: buttonStyleProps) =>
    props.shadow ? "0px 0px 12px 4px #888888" : "none"};

  &:hover {
    background-color: ${(props: buttonStyleProps) => props.color};
    color: ${(props: buttonStyleProps) => props.backgroundColor};
    cursor: pointer;
    transition-duration: 0.333s;
  }

  &:active {
    background-color: ${(props: buttonStyleProps) => props.backgroundColor};
    color: ${(props: buttonStyleProps) => props.color};
  }
`;
