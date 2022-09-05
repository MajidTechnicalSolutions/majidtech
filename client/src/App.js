import React from "react";
import {Header} from "./Header";
import { MainPattern } from './Resources/Svgs'
// import Testimonials from "./Testimonials";
// import Work from "./Work";
// import Services from "./Services";
// import Blog from "./Blog";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link'

function App() {
  return (
    <Router>
      <div className="App">
      <MainPattern/>
        {/* <Theme> */}
            <Link to="/header" exact component={Header} />
            {/* <Link path="/work" exact component={Work} />
            <Link path="/services" exact component={Services} />
            <Link path="/testimonials" exact component={Testimonials} />
            <Link path="/blog" exact component={Blog} />
            <Link path="/contact" exact component={Contact} /> */}
          {/* <GlobalStyle /> */}
        {/* </Theme> */}
      </div>
    </Router>
  );
}

export default App;
