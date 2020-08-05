import React, { Fragment } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";

const Title = styled.div``;
const Search = styled.div``;

const Li = styled.li`
  display: inline-block;
  margin: 0 1.2rem 0 1.2rem;
  transition: all 0.2s;
  cursor: pointer;
  border-radius: 0.4rem;
  height: 1.8rem;
  text-align: center;
  position: relative;
  &:after {
    position: absolute;
    display: inline-block;
    content: "";
    background: ${(props) => props.theme.colors.black};
    z-index: 100;
    width: 0;
    height: 2px;
    left: 0;
    bottom: -1.4rem;
    transition: all 0.3s;
  }
  &:hover:after {
    width: 100%;
  }
  &:hover {
    color: ${(props) => props.theme.colors.orange};
    transform: translateY(-1.5px);
  }
`;

const Ul = styled.ul`
  display: inline-block;
  // margin-left: 40%;
`;

const Filter = () => {};

const MenuBar = () => {
  return (
    <Fragment>
      <Search>
        <MdSearch></MdSearch>
      </Search>
      <Ul>
        <Li>Courses</Li>
        <Li>Hire</Li>
        <Li>Tutorials</Li>
        <Li>Login</Li>
      </Ul>
      <Filter></Filter>
    </Fragment>
  );
};

export default MenuBar;
