import React, { Fragment } from "react";
import styled from "styled-components";
import MenuBar from "../MenuBar";
import image1 from "../../Resources/images/1.png";
import image2 from "../../Resources/images/2.png";
import { RiStackLine, RiTimerLine } from "react-icons/ri";

const defaultLightgrey = {
  theme: {
    colors: {
      lightgrey: "#f3f3f4",
    },
  },
};

const defaultPalegrey = {
  theme: {
    colors: {
      lightgrey: "#FAFAFB",
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

Line.defaultProps = defaultLightgrey;

const Body = styled.div`
  background-color: ${(props) => props.theme.colors.palegrey};
  width: 100%;
  height: 100vh;
  // padding: 2rem 5rem;
`;
Body.defaultProps = defaultPalegrey;

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

Card.defaultProps = defaultLightgrey;

const Cardinfo = styled.div`
  text-align: left;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

const CardDiv = styled.div`
  color: black;
`;
const CardDivBold = styled(CardDiv)`
  fontweight: bold;
`;
const CardSpan = styled.div`
  color: #696969;
`;

const CardIconStack = styled(RiStackLine)`
  color: orange;
`;

const CardIconTimer = styled(RiTimerLine)`
  color: orange;
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
              <Image alt={course.title} img={course.image}></Image>
              <Cardinfo>
                <CardDiv className="test">{course.title}</CardDiv>
                <CardDivBold>{shortenString(course.disc, 50)}</CardDivBold>
                <CardSpan>
                  <CardIconStack />
                  {course.lessons}
                  <CardIconTimer />
                  {course.hours} {course.minutes}
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
