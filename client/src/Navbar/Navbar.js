import React, { useEffect, useRef, useState } from "react";
import { Logo, UpArrow } from "../utils/Resources/Svgs";
import useMediaQuery from "@mui/material/useMediaQuery";
import { NavLink, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import MobileNav from "./MobileNav";

// Services opens a small menu: the skills section on the home page, and the
// app creation page. It opens on hover or click and closes on Escape or a click outside.
function ServicesMenu({ item, active, onPick }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  const pick = () => {
    setOpen(false);
    onPick();
  };
  const linkClass = "flex flex-col gap-0.5 p-3 rounded-md text-silverLight hover:bg-backgroundDark hover:text-white";
  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="services-menu"
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1.5 ${active}`}
      >
        {item.title}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-[-1rem] top-full pt-3 z-50">
          <ul id="services-menu" className="w-[300px] bg-[#0b0b0c] border-[1px] border-[#1f1f20] rounded-lg p-2 flex flex-col">
            {item.children.map((child) => (
              <li key={`nav-${child.title}`}>
                {child.type === "route" ? (
                  <NavLink to={child.href} onClick={pick} className={linkClass}>
                    {child.title}
                    <span className="text-silverDark text-sm">{child.note}</span>
                  </NavLink>
                ) : (
                  <NavHashLink
                    to={`/#${child.hash}`}
                    scroll={(el) => el && el.scrollIntoView({ behavior: "smooth", block: "start" })}
                    onClick={pick}
                    className={linkClass}
                  >
                    {child.title}
                    <span className="text-silverDark text-sm">{child.note}</span>
                  </NavHashLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Navbar() {
  const isMobile = useMediaQuery("(max-width:800px)");
  const location = useLocation();
  

  // Declarations
  const [listItems, setListItems] = useState({
    activeObject: 0, // Home selected by default for desktop
    objects: [
      { title: "Home", id: 0 },
      { title: "Selectedwork", id: 1 },
      {
        title: "Services",
        id: 2,
        children: [
          { title: "Skills and services", hash: "Services", id: 21, note: "What we work with" },
          { title: "App creation", href: "/app-creation", type: "route", id: 22, note: "Web and mobile apps, built for you" },
        ],
      },
      { title: "Blog", id: 4 },
      { title: "Testimonials", id: 3 },
      { title: "Founder", id: 6, href: "/founder", type: "route" },
      { title: `Contact`, id: 5, component: UpArrow },
    ],
  });
  


  const getActiveClassForItem = (item) => {
    // A menu (Services): active when one of its links is
    if (item.children) {
      return item.children.some((child) => getActiveClassForItem(child)) ? 'nav-active' : '';
    }
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
    const expectedHash = `#${item.hash || item.title}`;
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
                <li key={`nav-${item.title}`} className="font-normal cursor-pointer h-4 not-italic tracking-tight flex-none text-silverLight">
                  <NavHashLink
                    className={getActiveClassForItem(item)}
                    to="/#home"
                    scroll={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    onClick={() => {
                      toggleActive(index);
                    }}
                  >
                    {item.title}
                  </NavHashLink>
                </li>
              ) : item.children ? (
                <li key={`nav-${item.title}`} className="font-normal cursor-pointer h-4 not-italic tracking-tight flex-none text-silverLight">
                  <ServicesMenu
                    item={item}
                    active={getActiveClassForItem(item)}
                    onPick={() => toggleActive(index)}
                  />
                </li>
              ) : item.type === 'route' ? (
                <li key={`nav-${item.title}`} className="font-normal cursor-pointer h-4 not-italic tracking-tight flex-none text-silverLight">
                  <NavLink
                    className={getActiveClassForItem(item)}
                    to={item.href}
                    onClick={() => {
                      toggleActive(index);
                    }}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ) : (
                <li key={`nav-${item.title}`} className="font-normal cursor-pointer h-4 not-italic tracking-tight flex-none text-silverLight">
                  <NavHashLink
                    className={getActiveClassForItem(item)}
                    to={`/#${item.title}`}
                    scroll={(el) => {
                      if (!el) return;
                      const block = item.title === 'Contact' ? 'end' : 'start';
                      el.scrollIntoView({ behavior: 'smooth', block });
                    }}
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
