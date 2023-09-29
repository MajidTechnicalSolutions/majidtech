import React from "react";
import { Header } from "./Header";
// import { MainPattern } from "./Resources/Svgs";
// import Testimonials from "./Testimonials";
import Home from "./Home";
import SelectedWork from "./SelectedWork";
// import Services from "./Services";
// import Blog from "./Blog";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/selectedwork" element={<SelectedWork />} />
        {/* <Route path="/testimonials" element={<Testimonials />} /> */}
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="/Services" element={<Services />} /> */}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
{
  /* 
}
{
  //  <GlobalStyle />
}
{
  /* </Theme> */
}
