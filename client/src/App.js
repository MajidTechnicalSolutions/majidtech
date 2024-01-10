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
  const Footer = () => {
    return (
      <footer className="w-full tex-red">
        <small>© 2023 All rights reserved – Privacy Policy • Terms & Conditions</small>
      </footer>
    );
  };

  return (
    <>
      <main
        className="App bg-black font-modernEra py-4"
        id="App"
        style={{ backgroundImage: `url(${Pattern})`, backgroundRepeat: "no-repeat" }}
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
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
