"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// The current URL hash ("#Contact"), kept up to date when it changes by a link
// on the same page (HashLink fires "hashpush") or by the browser's back button.
export default function useHash() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  useEffect(() => {
    const read = () => setHash(window.location.hash);
    read();
    window.addEventListener("hashchange", read);
    window.addEventListener("hashpush", read);
    return () => {
      window.removeEventListener("hashchange", read);
      window.removeEventListener("hashpush", read);
    };
  }, [pathname]);
  return hash;
}
