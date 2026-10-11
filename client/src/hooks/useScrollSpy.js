"use client";

import { useEffect, useMemo, useState } from 'react';

// Returns active index for the section whose top is at/above the current
// scroll position (with an adjustable offset to account for fixed navbars).
export default function useScrollSpy(sectionIds, offsetPx = 120) {
  const [activeIndex, setActiveIndex] = useState(0);
  // Create a stable key so the effect dependency isn't a complex expression
  const idsKey = useMemo(() => (Array.isArray(sectionIds) ? sectionIds.join(',') : ''), [sectionIds]);

  useEffect(() => {
    const ids = idsKey ? idsKey.split(',') : [];
    const getElements = () => ids.map((id) => document.getElementById(id)).filter(Boolean);

    const calcActive = () => {
      const elements = getElements();
      if (elements.length === 0) return;

      const scrollY = window.scrollY;
      const viewportBottom = scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const tops = elements.map((el) => el.getBoundingClientRect().top + scrollY - offsetPx);

      // Find the last section whose top is <= current scroll position
      let idx = 0;
      for (let i = 0; i < tops.length; i++) {
        if (scrollY >= tops[i]) idx = i;
      }
      // If scrolled to (or very near) bottom, force last section active
      if (viewportBottom >= pageHeight - 2) {
        idx = elements.length - 1;
      }
      setActiveIndex(idx);
    };

    calcActive();
    window.addEventListener('scroll', calcActive, { passive: true });
    window.addEventListener('resize', calcActive);
    return () => {
      window.removeEventListener('scroll', calcActive);
      window.removeEventListener('resize', calcActive);
    };
  }, [idsKey, offsetPx]);

  return activeIndex;
}


