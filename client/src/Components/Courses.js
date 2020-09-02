import React, { Fragment } from "react";
import CourseComp from "./CourseComp";

const Courses = () => {
  const options = [
    { key: 1, data: "Front-End" },
    { key: 2, data: "Back-End" },
    { key: 3, data: "Full-Stack" },
    { key: 4, data: "Mobile" },
  ];
  const courses = [
    {
      image: 1,
      hours: 1,
      minutes: 30,
      id: 1,
      title: "sunt aut facere repellat provident ",
      disc:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      image: 2,
      id: 2,
      hours: 1,
      minutes: 30,
      title: "qui est esse",
      disc:
        "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      image: 3,
      hours: 1,
      minutes: 30,
      id: 3,
      title: "ea molestias quasi exercitationem ",
      disc:
        "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
      image: 4,
      hours: 1,
      minutes: 30,
      id: 4,
      title: "eum et est occaecati",
      disc:
        "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
  ];

  const tutorials = [
    {
      image: 1,
      id: 1,
      title: "sunt aut facere repellat provident ",
      disc:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      image: 2,
      id: 2,
      title: "qui est esse",
      disc:
        "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      image: 3,
      id: 3,
      title: "ea molestias quasi exercitationem ",
      disc:
        "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
      image: 4,
      id: 4,
      title: "eum et est occaecati",
      disc:
        "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
  ];

  return (
    <Fragment>
      <CourseComp options={options} courses={courses} tutorials={tutorials} />
    </Fragment>
  );
};

export default Courses;
