import React, { useState } from "react";
import { Logo, UpArrow } from "../utils/Resources/Svgs";
import useMediaQuery from "@mui/material/useMediaQuery";
import { NavLink, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import MobileNav from "./MobileNav";

function Navbar() {
  const isMobile = useMediaQuery("(max-width:800px)");
  const location = useLocation();
  

  // Declarations
  const [listItems, setListItems] = useState({
    activeObject: 0, // Home selected by default for desktop
    objects: [
      { title: "Home", id: 0 },
      { title: "Selectedwork", id: 1 },
      { title: "Services", id: 2 },
      { title: "Blog", id: 4 },
      { title: "Testimonials", id: 3 },
      { title: "Founder", id: 6, href: "/founder", type: "route" },
      { title: `Contact`, id: 5, component: UpArrow },
    ],
  });
  


  const getActiveClassForItem = (item) => {
    // Route link (e.g., Founder)
    if (item.type === 'route') {
      return location.pathname === item.href ? 'nav-active' : '';
    }
    // Home link
    if (item.title === 'Home') {
      const isHome = location.pathname === '/';
      const isTop = location.hash === '' || location.hash === '#home';
      return isHome && isTop ? 'nav-active' : '';
    }
    // Section links on the home page
    const expectedHash = `#${item.title}`;
    return location.pathname === '/' && location.hash === expectedHash ? 'nav-active' : '';
  };

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
                  <NavHashLink
                    className={getActiveClassForItem(item)}
                    to="/#home"
                    scroll={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    key={index + "-id"}
                    onClick={() => {
                      toggleActive(index);
                    }}
                  >
                    {item.title}
                  </NavHashLink>
                </li>
              ) : item.type === 'route' ? (
                <li className="font-normal cursor-pointer h-4 not-italic tracking-tight flex-none text-silverLight">
                  <NavLink
                    className={getActiveClassForItem(item)}
                    to={item.href}
                    key={index + "-id"}
                    onClick={() => {
                      toggleActive(index);
                    }}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ) : (
                <li className="font-normal cursor-pointer h-4 not-italic tracking-tight flex-none text-silverLight">
                  <NavHashLink
                    className={getActiveClassForItem(item)}
                    to={`/#${item.title}`}
                    scroll={(el) => {
                      if (!el) return;
                      const block = item.title === 'Contact' ? 'end' : 'start';
                      el.scrollIntoView({ behavior: 'smooth', block });
                    }}
                    key={index + "-id"}
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
                  </NavHashLink>
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
