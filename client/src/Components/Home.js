import React, { Fragment } from "react";
import styled from "styled-components";

const Header = styled.header`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  font-family: Lobster;
  font-size: 8rem;
`;

const P = styled.p`
  display: flex;
  flex-wrap; 1;
`;

const Home = () => {
  return (
    <Fragment>
      <Header>
        <H1>Majid Tech</H1>
        <div style={{ width: "9rem" }}>
          <P>
            “If you hire people just because they can do a job, they’ll work for
            your money. But if you hire people who believe what you believe,
            they’ll work for you with blood, sweat and tears.” ― Simon Sinek
          </P>
        </div>
      </Header>
    </Fragment>
  );
};

export default Home;
