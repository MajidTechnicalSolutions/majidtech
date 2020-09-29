import React, { Fragment } from "react";
import styled from "styled-components";
import MenuBar from "../MenuBar";
import { RiStackLine, RiTimerLine } from "react-icons/ri";

const defaultColor = {
  theme: {
    colors: {
      lightgrey: "#f3f3f4",
      palegrey: "#FAFAFB",
      dimgrey: "#696969",
      black: "#121212",
    },
  },
};

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

Line.defaultProps = defaultColor.lightgrey;

const Body = styled.div`
  background-color: ${(props) => props.theme.colors.palegrey};
  width: 100%;
  height: 100vh;
  // padding: 2rem 5rem;
`;
Body.defaultProps = defaultColor.palegrey;

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

Card.defaultProps = defaultColor.lightgrey;

const Cardinfo = styled.div`
  text-align: left;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

const CardDiv = styled.div`
  color: ${(props) => props.theme.colors.black};
`;

CardDiv.defaultProps = defaultColor.dimgrey;

const CardDivBold = styled.div`
  color: black;
  font-weight: bold;
`;

const CardSpan = styled.div`
  color: ${(props) => props.theme.colors.dimgrey};
  display: flex;
  justify-content: space-between;
  // font-size: ${(props) => props.theme.fontSize.sm};
`;

CardSpan.defaultProps = defaultColor.dimgrey;

const CardIconStack = styled(RiStackLine)`
  color: ${(props) => props.theme.colors.orange};
  position: relative;
  bottom: -0.1rem;
`;

const CardIconTimer = styled(RiTimerLine)`
  color: ${(props) => props.theme.colors.orange};
  position: relative;
  bottom: -0.1rem;
`;

const Grid = styled.div`
  display: grid;
  text-align: center;
  grid-row-gap: 6rem;
  padding: 12rem 10rem;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
`;

const Image = styled.div`
  width: 100%;
  height: 60%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  object-fit: cover;
`;

const shortenString = (str, n) => {
  const newStr = str.slice(0, n);
  return str.length > n ? (
    <Fragment>{newStr.slice(0, newStr.lastIndexOf(" "))}&hellip;</Fragment>
  ) : (
    str
  );
};

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
              <Image alt={course.title} img={course.image} />
              <Cardinfo>
                <CardDiv className="test">{course.title}</CardDiv>
                <CardDivBold>{shortenString(course.disc, 50)}</CardDivBold>
                <CardSpan>
                  <span>
                    {" "}
                    <CardIconStack /> {course.lessons} Lessons
                  </span>
                  <span>
                    {" "}
                    <CardIconTimer /> {course.hours} hr {course.minutes} min{" "}
                  </span>
                </CardSpan>
              </Cardinfo>
            </Card>
          ))}
        </Grid>
      </Body>
    </Fragment>
  );
};

export default CourseComp;
