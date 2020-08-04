import React from "react";
import Logo from "../Resources/images/transparent-V1-HQ.png";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";

const Nav = styled.div`
  padding: 0 1rem 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  position: fixed;
  width: 100%;
  box-shadow: 0px 0px 10px -1px black;
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
  margin-right: 2rem;
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 2px;
  background-color: #f3f3f4;
  &:focus {
    border-color: ${(props) => props.theme.colors.orange};
    background-color: ${(props) => props.theme.colors.white};
    outline: none;
  }
`;

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
const style = {
  position: "absolute",
  top: "1.9rem",
  right: "15.1rem",
  fontSize: "1rem",
};

function Navbar() {
  return (
    <Nav>
      <div>
        <Img src={Logo} alt="Majid Tech" />
      </div>
      <div>
        <Ul>
          <Li>Courses</Li>
          <Li>Hire</Li>
          <Li>Tutorials</Li>
          <Li>Login</Li>
        </Ul>
        <Search type="text" value="" placeholder="     Search..." />
        <MdSearch style={style} />
      </div>
    </Nav>
  );
}

export default Navbar;
