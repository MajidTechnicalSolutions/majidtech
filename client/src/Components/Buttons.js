import React from 'react';
import styled from 'styled-components';

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
  border: none;
  border-radius: 0.2rem;
  &:hover {
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
  }
  &:active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    transform: translateY(-1px);
  }
  &:focus {
    outline: none;
  }
`;

const Primary = styled(Button)`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
`;

const Secondary = styled(Button)`
  background-color: ${(props) => props.theme.colors.orange};
  color: ${(props) => props.theme.colors.white};
`;

export const ButtonPrimary = ({ text }) => {
  return <Primary>{text}</Primary>;
};

export const ButtonSecondary = ({ text }) => {
  return <Secondary>{text}</Secondary>;
};
