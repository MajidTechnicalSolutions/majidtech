import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 0.6rem 0.8rem;
  width: 10rem;
  height: 2.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  transition: all 0.2s;
  display: inline-block;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  border-radius: 0.4rem;
  &:hover {
    box-shadow: 0 1rem 1rem rgba(${(props) => props.theme.colors.black}, 0.2);
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: 0 0.5rem 1rem rgba(${(props) => props.theme.colors.black}, 0.2);
    transform: translateY(2px);
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonPrimary = () => {
  return <Button>Sign up</Button>;
};
