"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import HashLink from "../components/HashLink";

// The phone menu: a button that opens a white panel of links. A menu item with
// children (Services) shows as a heading over its indented links. It closes on
// a pick, Escape or a tap outside.
export default function MobileNav({ toggleActive, listItems }) {
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState(null);
  const ref = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    // Keyboard and screen reader users land on the first link.
    listRef.current?.querySelector("a")?.focus();
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const rows = listItems.flatMap((item, index) =>
    item.children
      ? [{ heading: item.title, id: `heading-${item.id}` }, ...item.children.map((child) => ({ ...child, index, indent: true }))]
      : [{ ...item, index }]
  );

  const scrollTo = (item) => (el) => {
    if (item.title === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (el) {
      const offset = item.title === "Contact" ? 0 : 120;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      const maxTop = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({ top: Math.max(0, Math.min(top, maxTop)), behavior: "smooth" });
    }
  };

  return (
    <li ref={ref} className="relative list-none">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
        className="w-[50px] h-[50px] rounded-md bg-white flex items-center justify-center"
      >
        <span aria-hidden="true" className="w-8 h-8 rounded-md bg-[#f0f4f8] text-[#32383e] flex items-center justify-center text-[18px]">☰</span>
      </button>
      {open && (
        <ul
          id="mobile-menu"
          ref={listRef}
          className="absolute right-0 top-full mt-4 w-[288px] max-h-[80vh] overflow-y-auto bg-white rounded-md py-1.5 shadow-lg z-[9999] font-[system-ui,-apple-system,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif] text-[14px] leading-[18px]"
        >
          {rows.map((item) => {
            if (item.heading) {
              return (
                <li key={item.id} className="px-2.5 py-[5px] text-black">
                  {item.heading}
                </li>
              );
            }
            const selected = picked === item.id;
            const className = `block w-full py-[5px] outline-none ${item.indent ? "pl-[33px] pr-2.5" : "px-2.5"} ${selected ? "bg-majidTech text-white" : "text-black"} hover:bg-majidTech hover:text-white focus:bg-majidTech focus:text-white`;
            const pick = () => {
              setOpen(false);
              toggleActive(item.index);
              setPicked(item.id);
            };
            return (
              <li key={`menu-item-${item.id}`}>
                {item.type === "route" ? (
                  <Link href={item.href} onClick={pick} className={className}>
                    {item.title}
                  </Link>
                ) : (
                  <HashLink
                    to={item.title === "Home" ? "/#home" : `/#${item.hash || item.title}`}
                    scroll={scrollTo(item)}
                    onClick={pick}
                    className={className}
                  >
                    {item.title === "Selectedwork" ? "Selected Work" : item.title}
                  </HashLink>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
