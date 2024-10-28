import React from "react";
import NavBar from "../navBar/NavBar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="w-full fixed top-0 left-0 z-10">
        <NavBar />
      </div>
      <div className="flex flex-1  pt-20">
        <main className={`flex-1   `}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
