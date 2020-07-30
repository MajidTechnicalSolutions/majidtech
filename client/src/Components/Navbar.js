import React from "react";
import Logo from "../Resources/images/transparent-V1-HQ.png";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";

const Nav = styled.div`
  padding: 0.5rem 1rem 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  box-shadow: 0px 10px 47px -10px rgba(153, 153, 153, 0.2);
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
  // width: 6vw;
  height: 1.8rem;
  text-align: center;
  &:after {
    position: absolute;
    display: inline-block;
    content: "";
    background: ${(props) => props.theme.colors.black};
    z-index: 100;
    width: 0;
    height: 2px;
    left: 0;
    bottom: -6px;
    transition: all 0.3s;
  }
  &:hover:after {
    width: 100%;
  }
  &:hover {
    color: ${(props) => props.theme.colors.orange};
    box-shadow: 0 1rem 1rem rgba(#000, 0.2);
    transform: translateY(-1.5px);
  }
`;

const Ul = styled.ul`
  display: inline-block;
  // margin-left: 40%;
`;
const Icon = styled.div`
  postition: relative;
  top: 0rem;
`;

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
        <MdSearch
          style={{
            position: "absolute",
            top: "2.4rem",
            right: "13.2rem",
            fontSize: "1rem",
          }}
        />
      </div>
    </Nav>
  );
}

export default Navbar;
