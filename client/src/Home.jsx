"use client";

import Header from "./Header";
import SelectedWork from "./SelectedWork";
import Services from "./Services";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import HomeScrollStatus from "./components/HomeScrollStatus";
import Footer from "./components/Footer";

// The home page: hero, Selected Work, Services, Blog, Testimonials and Contact.
export default function Home() {
  return (
    <>
      <HomeScrollStatus />
      <div className="m-auto w-9/12 relative">
        {/* The hero shows at once (it is what visitors see first); the rest fades in. */}
        <Header />
        <div data-reveal>
          <SelectedWork />
        </div>
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
  );
}
