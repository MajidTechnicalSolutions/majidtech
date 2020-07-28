import React from "react";
import Logo from "../Resources/images/transparent-V1-HQ.png";
import styled from "styled-components";

const Nav = styled.div`
  padding: 0.5rem 1rem 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  width: 7rem;
  // position: relative;
  // top: 0.4rem;
`;

const Li = styled.li`
  display: inline-block;
  margin: 0 1rem 0 1rem;
`;

const Ul = styled.ul`
  display: inline-block;
  // margin-left: 40%;
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
          <Li>Blog</Li>
          <Li>Login</Li>
        </Ul>
        <input type="text" value="" placeholder="Search..." />
      </div>
    </Nav>
  );
}

export default Navbar;
