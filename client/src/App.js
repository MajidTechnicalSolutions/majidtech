import React from "react";
import {Header} from "./Header";
import  Pattern  from './Resources/images/Pattern.svg'
import { MainPattern } from "./Resources/Svgs";
// import Testimonials from "./Testimonials";
// import Work from "./Work";
// import Services from "./Services";
// import Blog from "./Blog";

import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link'

function App() {
  return (
    <Router>
      <div className="App w-screen h-screen bg-black" >
            <Link to="/header" exact component={Header} />
            <MainPattern/>
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
