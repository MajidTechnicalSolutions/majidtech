import React from "react";
import Navbar from "./Navbar";
import Pattern from "./Resources/images/Pattern.svg";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <div
        className="App bg-backgroundDark font-modernEra"
        style={{ backgroundImage: `url(${Pattern})` }}
      >
        <div className="m-auto w-9/12">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
