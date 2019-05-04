import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  render() {
    // const { onIncrement } = this.props;
    return (
      // <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //   <div className="collapse navbar-collapse">
      <React.Fragment>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Fluid jumbotron</h1>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
