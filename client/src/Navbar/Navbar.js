import React, { useState } from "react";
import { Logo, UpArrow } from "../utils/Resources/Svgs";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-scroll";
import MobileNav from "./MobileNav";

function Navbar() {
  const isMobile = useMediaQuery("(max-width:800px)");
  

  // Declarations
  const [listItems, setListItems] = useState({
    activeObject: 0, // Home selected by default for desktop
    objects: [
      { title: "Home", id: 0 },
      { title: "Selectedwork", id: 1 },
      { title: "Services", id: 2 },
      { title: "Testimonials", id: 3 },
      { title: "Blog", id: 4 },
      { title: `Contact`, id: 5, component: UpArrow },
    ],
  });
  


  const activeClass = (id) => (id === listItems.activeObject ? "active" : "");

  const toggleActive = (index) => {
    setListItems({ ...listItems, activeObject: listItems.objects[index].id });
  };

  return (
    <nav id="top" className="Nav relative z-50 bg-transparent flex flex-row justify-between items-center mb-10 m-0">
        <Logo customStyle={{ paddingTop: "0.5rem" }} />
        <ul className="flex flex-row items-center h-4 p-0 space-x-5 right-40 font-modernEra not-italic">
        {isMobile ? (
          <MobileNav 
            activeObject={listItems.activeObject}
            toggleActive={toggleActive}
            listItems={listItems.objects}
          />
        ) : (
          <>
            {listItems.objects.map((item, index) =>
              item.title === "Home" ? (
                <li className="font-normal cursor-pointer h-4 not-italic tracking-tight flex-none text-silverLight">
                  <Link
                    className={activeClass(index)}
                    to="top"
                    key={index + "-id"}
                    // spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => {
                      toggleActive(index);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              ) : (
                <li className="font-normal cursor-pointer h-4 not-italic tracking-tight flex-none text-silverLight">
                  <Link
                    className={activeClass(index)}
                    to={`${item.title}`}
                    key={index + "-id"}
                    // spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => {
                      toggleActive(index);
                    }}
                  >
                    {item.title === "Selectedwork" ? "Selected Work" : item.title}
                    {item.component ? (
                      <item.component
                        customStyle={{
                          general: {
                            width: "23px",
                            height: "17px",
                            display: "inline",
                          },
                          color: "#fff",
                        }}
                        viewBoxSetting="-7 -1 30 25"
                      />
                    ) : null}
                  </Link>
                </li>
              )
            )}
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
