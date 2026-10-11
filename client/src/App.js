import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

// Components
import Header from "./Header";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import SelectedWork from "./SelectedWork";
import Services from "./Services";
import Blog from "./Blog";
import Founder from "./Founder/Founder";
import AppCreation from "./AppCreation";
import HomeScrollStatus from "./components/HomeScrollStatus";
import ScrollToHash from "./components/ScrollToHash";

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
    <Router>
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
          <ScrollToHash offset={140} />
          <div className="m-auto w-9/12">
            <Navbar />
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HomeScrollStatus />
                  <div className="m-auto w-9/12 relative" data-reveal>
                    <Header />
                    <SelectedWork />
                  </div>
                  <div className="" data-reveal>
                    <Services />
                    <Blog />
                  </div>
                  <div className="m-auto w-9/12" data-reveal>
                    <Testimonials />
                    <Contact />
                    <Footer />
                  </div>
                </>
              }
            />
            <Route path="/founder" element={<Founder />} />
            <Route
              path="/app-creation"
              element={
                <>
                  <AppCreation />
                  <div className="m-auto w-9/12">
                    <Footer />
                  </div>
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
