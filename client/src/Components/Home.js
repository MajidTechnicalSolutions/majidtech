import React, { Fragment } from "react";
import { ButtonPrimary } from "./Buttons";
import styled from "styled-components";

const Header = styled.header`
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

const Home = () => {
  return (
    <Fragment>
      <Header>
        <H1>Majid Tech</H1>
        <P>
          Learn the skills to become a professional Web Developer{" "}
          <span role="img">👨🏽‍💻</span>
        </P>
        <P>land your dream job making over six figures 🤑</P>
        <ButtonPrimary />
      </Header>
    </Fragment>
  );
};

export default Home;
