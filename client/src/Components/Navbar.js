import React, { useState } from "react";
import Logo from "../Resources/images/transparent-V1-HQ.png";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { GrUserSettings } from "react-icons/gr";
import { AiOutlineUserAdd } from "react-icons/ai";

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
  margin-right: 2rem;
  transition: all 0.2s;
  cursor: pointer;
  border-radius: 0.4rem;
  height: 1.8rem;
  text-align: center;
  position: relative;
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  &:hover {
    transform: translateY(-1.5px);
  }
`;

const Img = styled.img`
  width: 7rem;
  position: relative;
  top: 0.3rem;
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
  padding: 0px;
`;
const style = {
  user: {
    fontSize: "1.6rem",
    cursor: "pointer",
  },
};

function Navbar() {
  return (
    <Nav>
      <Ul>
        <Li to="/">
          <Img src={Logo} alt="Majid Tech" />
        </Li>
        <Li to="/courses">Courses</Li>
        <Li to="/hire">Hire</Li>
        <Li to="/tutorials">Tutorials</Li>
      </Ul>
      <div>
        <Link to="/login" style={{ color: "black" }}>
          <AiOutlineUserAdd style={style.user} />
        </Link>
      </div>
    </Nav>
  );
}

export default Navbar;
