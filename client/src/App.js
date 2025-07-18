import React from "react";
import { Toaster } from "sonner";

// Components
import Header from "./Header";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import SelectedWork from "./SelectedWork";
import Services from "./Services";
import Blog from "./Blog";

// assets
import Pattern from "./utils/Resources/images/Pattern.svg";

function App() {
  const Footer = () => {
    return (
      <footer className="w-full tex-red">
        <small>© 2023 All rights reserved – Privacy Policy • Terms & Conditions</small>
      </footer>
    );
  };

  return (
    <div 
      className="bg-black min-h-screen m-0 p-0 font-modernEra"
      style={{ backgroundImage: `url(${Pattern})`, backgroundRepeat: "no-repeat" }}
    >
      <Toaster 
        position="top-right"
        theme="dark"
        richColors
        expand={true}
        duration={4000}
        toastOptions={{
          style: {
            background: '#1a1a1a',
            border: '1px solid #FD5A1E',
            color: '#ffffff',
          },
          className: 'sonner-toast',
        }}
      />
      <main className="App py-4" id="App">
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
    </div>
  );
}

export default App;
