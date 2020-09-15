import React, { Fragment } from "react";
import styled from "styled-components";
import MenuBar from "./MenuBar";
import image1 from "../Resources/images/1.png";
import image2 from "../Resources/images/2.png";

const Header = styled.header`
  font-size: 2rem;
  text-align: center;
`;

const Title = styled.h1``;
const Wrapper = styled.h1`
  margin: 8rem 0 0 0;
  width: 100%;
`;

const Line = styled.div`
  width: 100%;
  height: 2.5px;
  z-index: 100;
  background-color: ${(props) => props.theme.colors.lightgrey};
`;

const Body = styled.div`
  background-color: ${(props) => props.theme.colors.palegrey};
  width: 100%;
  height: 100vh;
  // padding: 2rem 5rem;
`;

const Card = styled.div`
  width: 19rem;
  height: 24rem;
  border: 3px solid ${(props) => props.theme.colors.lightgrey};
  color: red;
  border-radius: 1%;
  position: relative;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-20px);
    box-shadow: 0 2rem 47px -1px rgba(153, 153, 153, 0.2)};

  }
`;

const Grid = styled.div`
  display: grid;
  text-align: center;
  // grid-gap: -9rem;
  padding: 15rem 20rem;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
`;

const Image = styled.div`
  width: 100%;
  height: 60%;
  background-image: url(${(props) => props.img});
  background-size: cover;
`;

const CourseComp = ({ options, courses }) => {
  return (
    <Fragment>
      <Wrapper>
        <Header>
          <Title>Courses</Title>
        </Header>
        <MenuBar options={options} />
        <Line />
      </Wrapper>
      <Body>
        <Grid>
          {courses.map((course) => (
            <Card>
              <Image alt={course.title} img={course.image}></Image>
              <div>{course.title}</div>
              <div>{course.dic}</div>
              <div>{course.hours}</div>
              <div>{course.minutes}</div>
            </Card>
          ))}
        </Grid>
      </Body>
    </Fragment>
  );
};

export default CourseComp;
