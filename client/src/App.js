import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

import GlobalStyle from "./styles/GlobalStyles";
import Theme from "./styles/Theme";

function App() {
  return (
    <div className="App">
      <Theme>
        <Navbar />
        <Home />
        <header className="App-header"></header>
        <GlobalStyle />
      </Theme>
    </div>
  );
}

export default App;
