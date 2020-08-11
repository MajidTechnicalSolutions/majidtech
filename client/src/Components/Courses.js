import React, { Fragment } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import MenuBar from "./MenuBar";

const Header = styled.header`
  font-size: 2rem;
  text-align: center;
`;

const Title = styled.h1``;
const Wrapper = styled.h1`
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -25%);
  width: 100%;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.colors.lightgrey};
`;

const Courses = () => {
  return (
    <Fragment>
      <Wrapper>
        <Header>
          <Title>Courses</Title>
        </Header>
        <MenuBar />
        <Line />
      </Wrapper>
    </Fragment>
  );
};

export default Courses;
