import React, { Fragment } from "react";
import styled from "styled-components";
import { ButtonPrimary } from "./Buttons";

const Wrapper = styled.header`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
`;

const H1 = styled.h1`
  font-family: Lobster;
  font-size: 8rem;
  color: ${(props) => props.theme.colors.black};
`;

const P = styled.p`
  font-size: 2vw;
  color: ${(props) => props.theme.colors.black};
`;

const Header = () => {
  return (
    <Fragment>
      <Wrapper>
        <H1>Majid Tech</H1>
        <P>
          Learn the skills to become a professional Web Developer{" "}
          <span role="img">👨🏽‍💻</span>
        </P>
        <P>
          From a professional Web Developer <span role="img">🤯</span>
        </P>
        <ButtonPrimary />
      </Wrapper>
    </Fragment>
  );
};

export default Header;
