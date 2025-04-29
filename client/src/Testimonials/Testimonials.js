import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="Testimonials"
      className={`w-full border-2 border-[#FE5000] p-10 rounded-lg flex ${isMobile ? 'flex-col' : 'flex-row'}`}
    >
      <div className={`leftBox ${isMobile ? 'w-full mb-8' : 'w-3/5'}`}>
        <small className="text-white uppercase">What clients Have to say</small>
        <h1 className="text-white text-4xl mb-2 mt-4">Testimonials</h1>
      </div>
      <div className={`rightbox ${isMobile ? 'w-full' : 'w-full'}`}>
        <p className="mb-4 text-silverDark text-md lg:text-xl">
          "Jamal's passion and dedication to the tasks is impressive. I can't say enough good things
          about him. He was a great partner, really drove the creative direction and successfully
          delivered the web app which garnered love from millions of users. We enjoyed the sprint
          progress with them. Highly recommended."
        </p>
        <div className={`rightbox_subtext ${isMobile ? 'w-full' : 'flex flex-column w-1/3'}`}>
          <small className="text-white mb-2">Katherine A.</small>
          <small>Experience design & Innovation leader at Progressive Insurance</small>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
