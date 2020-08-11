import React, { useState } from "react";
import Logo from "../Resources/images/transparent-V1-HQ.png";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Nav = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  // position: fixed;
  // width: 100%;
  // box-shadow: 0px 0px 10px -1px black;
`;

const Li = styled(NavLink)`
  display: inline-block;
  margin: 0 1.2rem 0 1.2rem;
  transition: all 0.2s;
  cursor: pointer;
  border-radius: 0.4rem;
  height: 1.8rem;
  text-align: center;
  position: relative;
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  &:hover {
    // color: ${(props) => props.theme.colors.orange};
    transform: translateY(-1.5px);
  }
`;

const Img = styled.img`
  width: 7rem;
  // position: relative;
  // top: 0.4rem;
`;

const Search = styled.input`
  width: 13rem;
  height: 2rem;
  ling-hight: 5px;
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 2px;
  background-color: ${(props) => props.theme.colors.lightgrey};
  &:focus {
    border-color: ${(props) => props.theme.colors.orange};
    background-color: ${(props) => props.theme.colors.white};
    outline: none;
  }
`;

const Ul = styled.ul`
  display: inline-block;
  // margin-left: 40%;
`;
const style = {
  search: {
    position: "absolute",
    top: "1.9rem",
    right: "11.1rem",
    fontSize: "1rem",
  },
};

function Navbar() {
  return (
    <Nav>
      <div>
        <Li to="/">
          <Img src={Logo} alt="Majid Tech" />
        </Li>
      </div>
      <div>
        <Ul>
          <Li to="/courses">Courses</Li>
          <Li to="/hire">Hire</Li>
          <Li to="/tutorials">Tutorials</Li>
          <Li to="/login">Login</Li>
        </Ul>
        <Search type="text" value="" placeholder="     Search..." />
        <MdSearch style={style.search} />
      </div>
    </Nav>
  );
}

export default Navbar;
