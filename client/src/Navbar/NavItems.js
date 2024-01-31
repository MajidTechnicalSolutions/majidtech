import React, { useState } from "react";
import { UpArrow } from "../utils/Resources/Svgs";
import { ButtonPrimary } from "../utils/buttons";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-scroll";
import MobileNav from "./MobileNav";

const NavItems = () => {
  const [listItems, setListItems] = useState({
    activeObject: 0,
    objects: [
      { title: "Home", id: 0 },
      { title: "Selectedwork", id: 1 },
      { title: "Services", id: 2 },
      { title: "Testimonials", id: 3 },
      { title: "Blog", id: 4 },
      { title: `Contact`, id: 5, component: UpArrow },
    ],
  });
  return <div>NavItems</div>;
};

export default NavItems;
