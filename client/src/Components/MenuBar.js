import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { BsFunnel } from "react-icons/bs";

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
    background: ${(props) => props.theme.colors.orange};
    z-index: 100;
    width: 0;
    height: 2px;
    left: 0;
    bottom: -1.1rem;
    transition: all 0.3s;
  }
  &:hover:after {
    width: 100%;
  }
`;

const Ul = styled.ul`
  display: inline-block;
  // margin-left: 40%;
`;

const Filter = styled.div``;
const Wrapper = styled.nav`
  font-size: ${(props) => props.theme.fontSize.sm};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  // padding: 0 2rem;
`;

const MenuBar = () => {
  return (
    <Wrapper>
      <Search>
        <MdSearch></MdSearch>
      </Search>
      <Ul>
        <Li>All</Li>
        <Li>My Courses</Li>
      </Ul>
      <Filter>
        <BsFunnel />
      </Filter>
    </Wrapper>
  );
};

export default MenuBar;
