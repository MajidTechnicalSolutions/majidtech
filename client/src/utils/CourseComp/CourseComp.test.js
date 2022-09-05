import React from "react";
import CoursesComp from "./CourseComp";
import { shallow, mount } from "enzyme";
import { ThemeProvider } from "styled-components";
import { shallowTheme, mountTheme } from "../../styles/Theme";
import toJson from "enzyme-to-json";

const options = [{ key: 1, data: "Front-End" }];

const courses = [
  {
    image: 1,
    hours: 1,
    minutes: 30,
    id: 1,
    title: "sunt",
    disc:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
];

describe("mock test for CourseComp", () => {
  it("accepts courses props", () => {
    const wrapper = mountTheme(
      <CoursesComp courses={courses} options={options} />
    );
    expect(wrapper.props().courses).toEqual(courses);
    expect(wrapper.props().options).toEqual(options);
  });
  it("able to use props", () => {
    const wrapper = mountTheme(
      <CoursesComp courses={courses} options={options} />
    );

    const value = wrapper.find(".test").text();
    expect(value).toEqual("sunt");
  });
});

describe("snapshot test for CourseComp", () => {
  const tree = shallow(<CoursesComp courses={courses} options={options} />);
  expect(toJson(tree)).toMatchSnapshot();
});
