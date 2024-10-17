import React from "react";
import NavBar from "../navBar/NavBar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
