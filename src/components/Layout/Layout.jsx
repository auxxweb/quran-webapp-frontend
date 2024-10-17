import React from "react";
import NavBar from "../navBar/NavBar";

const Layout = ({ children }) => {
  return (
    <div className="">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
