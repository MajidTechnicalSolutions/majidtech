import React, { Fragment } from "react";
import CourseComp from "./CourseComp";

const Courses = () => {
  const options = [
    { key: 1, data: "Front-End" },
    { key: 2, data: "Back-End" },
    { key: 3, data: "Full-Stack" },
    { key: 4, data: "Mobile" },
  ];
  return (
    <Fragment>
      <CourseComp options={options} />
    </Fragment>
  );
};

export default Courses;
