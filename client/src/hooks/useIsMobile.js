import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check if window is defined (for SSR)
      if (typeof window === 'undefined') return false;
      setIsMobile(window.innerWidth <= breakpoint);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]); // Re-run if breakpoint changes

  return isMobile;
};

export default useIsMobile; 