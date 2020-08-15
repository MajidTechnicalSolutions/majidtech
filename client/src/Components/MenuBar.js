import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { IoMdFunnel } from "react-icons/io";

const Li = styled.li`
  display: inline-block;
  margin: 0 1rem 0 1rem;
  transition: all 0.2s;
  cursor: pointer;
  border-radius: 0.4rem;
  height: 1.8rem;
  text-align: center;
  position: relative;
  cursor: pointer;
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
  margin-left: 7rem;
`;

const BtnWrap = styled.div`
  display: flex;
  border-radius: 2px;
  cursor: pointer;
  margin-right: 1rem;
  border: 1px solid ${(props) => props.theme.colors.lightgrey};
  background-color: ${(props) => props.theme.colors.palegrey};
`;

const MenuBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.5rem;
  height: 1.7rem;
  border: 1px solid ${(props) => props.theme.colors.lightgrey};
  cursor: pointer;
`;

const Wrapper = styled.nav`
  font-size: ${(props) => props.theme.fontSize.sm};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: normal;
`;

const Filter = styled(BtnWrap)`
  margin-left: 1rem;
  font-size: 1.2rem;
`;

const FilterBtn = styled(MenuBtn)`
  font-size: 1.2rem;
  width: 2rem;
`;

const MenuBar = ({ options }) => {
  return (
    <Wrapper>
      <Filter>
        <FilterBtn>
          <BsSearch />
        </FilterBtn>
        <FilterBtn>
          <IoMdFunnel />
        </FilterBtn>
      </Filter>
      <Ul>
        {options.map((item) => (
          <Li>{item}</Li>
        ))}
      </Ul>
      <BtnWrap>
        <MenuBtn>All</MenuBtn>
        <MenuBtn>My Courses</MenuBtn>
      </BtnWrap>
    </Wrapper>
  );
};

export default MenuBar;
