import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Hire from "./Components/Hire";
import Tutorials from "./Components/Tutorials/Tutorials";
import Courses from "./Components/Courses/Courses";
import Login from "./Components/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyles";
import Theme from "./styles/Theme";

function App() {
  return (
    <Router>
      <div className="App">
        <Theme>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/courses" exact component={Courses} />
            <Route path="/hire" exact component={Hire} />
            <Route path="/tutorials" exact component={Tutorials} />
            <Route path="/login" exact component={Login} />
          </Switch>
          <GlobalStyle />
        </Theme>
      </div>
    </Router>
  );
}

export default App;
