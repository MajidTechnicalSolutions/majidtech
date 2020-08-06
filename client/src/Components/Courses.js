import React, { Fragment } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import MenuBar from "./MenuBar";

const Header = styled.header`
  width: 90vw;
  height: 90vh;
`;

const Title = styled.h1``;

const Courses = () => {
  return (
    <Fragment>
      <Header>
        <Title>Courses</Title>
      </Header>
    </Fragment>
  );
};

export default Courses;
