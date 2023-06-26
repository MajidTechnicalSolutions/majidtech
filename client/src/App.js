import React from "react";
import { Header } from "./Header";
import Pattern from "./Resources/images/Pattern.svg";
// import { MainPattern } from "./Resources/Svgs";
// import Testimonials from "./Testimonials";
import SelectedWork from "./Work/SelectedWork.tsx";
// import Services from "./Services";
// import Blog from "./Blog";

import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function App() {
  return (
    <Router>
      <div
        className="App bg-backgroundDark font-modernEra"
        style={{ backgroundImage: `url(${Pattern})` }}
      >
        <div className="m-auto w-9/12">
          {" "}
          <Link to="/header" exact component={Header} />
          <Link to="/SelectedWork" exact component={SelectedWork} />
          {/* <MainPattern/> */}
          {/* <Link path="/work" exact component={Work} />
            <Link path="/services" exact component={Services} />
            <Link path="/testimonials" exact component={Testimonials} />
            <Link path="/blog" exact component={Blog} />
            <Link path="/contact" exact component={Contact} /> */}
          {/* <GlobalStyle /> */}
          {/* </Theme> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
