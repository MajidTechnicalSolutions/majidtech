import React from "react";

// Components
import Header from "./Header";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import SelectedWork from "./SelectedWork";
import Services from "./Services";
import Blog from "./Blog";

// assets
import Pattern from "./Resources/images/Pattern.svg";

function App() {
  return (
    <>
      <div
        className="App bg-black font-modernEra"
        id="App"
        style={{ backgroundImage: `url(${Pattern})` }}
      >
        <div className="m-auto w-9/12">
          <Navbar />
          <Header />
          <SelectedWork />
        </div>
        <div className="">
          <Services />
          <Blog />
        </div>
        <div className="m-auto w-9/12">
          <Testimonials />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
