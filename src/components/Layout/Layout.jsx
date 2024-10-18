import React from "react";
import NavBar from "../navBar/NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="top-0 sticky z-50">
        <NavBar />
      </div>
      {children}
    </div>
  );
};

export default Layout;
