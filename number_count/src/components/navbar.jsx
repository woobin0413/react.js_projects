// imrc
import React, { Component } from "react";

//stateless functional componenet
//class component can be fine but stateless component is simple!
//shortcut to make a stateless component "sfc"
//In class component, props do not need to be called as an argument
//functinal component needs props as an argument.

const Navbar = ({ totalCounters }) => {
  console.log("navbar - rendered");
  return (
    <nav className="nav navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand m-2" href="/">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
