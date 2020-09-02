import React, { Fragment } from "react";
import CourseComp from "./CourseComp";

const Tutorials = () => {
  const options = ["Tutorials"];
  return (
    <Fragment>
      <CourseComp options={options} />
    </Fragment>
  );
};

export default Tutorials;
