"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// A link to a section of a page ("/#Contact"). On that page it scrolls there
// itself (with `scroll`, given the element, or smoothly to its top); from
// another page it navigates and ScrollToHash scrolls once the page is in.
export default function HashLink({ to, scroll, onClick, children, ...rest }) {
  const pathname = usePathname();
  const [path, id = ""] = to.split("#");
  const handleClick = (e) => {
    onClick?.(e);
    if (pathname !== (path || pathname)) return;
    e.preventDefault();
    window.history.pushState(null, "", to);
    window.dispatchEvent(new Event("hashpush"));
    const el = document.getElementById(id);
    if (scroll) scroll(el);
    else el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <Link href={to} scroll={false} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
