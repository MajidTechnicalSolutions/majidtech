import React from "react";

const Testimonials = () => {
  return (
    <section
      id="Testimonials"
      className="w-full h-96 border-2 border-[#FE5000] flex flex-row p-10 rounded-lg"
    >
      <div className="leftBox w-3/5">
        <small className="text-white uppercase">What clients Have to say</small>
        <h1 className="text-white text-4xl mb-2 mt-4">Testimonials</h1>
      </div>
      <div className="rightbox w-full">
        <p className="mb-4 text-silverDark text-2xl">
          “Jamal’s passion and dedication to the tasks is impressive. I can’t say enough good things
          about him. He was a great partner, really drove the creative direction and successfully
          delivered the web app which garnered love from millions of users. We enjoyed the sprint
          progress with them. Highly recommended.”
        </p>
        <div className="rightbox_subtext flex flex-column w-1/3">
          <small className="text-white mb-2">Hana Abdul</small>
          <small>Experience design & Innovation leader at Progressive Insurance</small>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
