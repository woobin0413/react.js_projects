import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { CityLogo } from "../ui/Icons";

class Header extends Component {
  state = {};
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#98C5E9 ",
          boxShadow: "none",
          padding: "10px 0",
          borderBottom: "2px solid #00285e"
        }}
      >
        <ToolBar style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>
            <div className="header_logo">
              <CityLogo width="70px" height="70px" link={true} linkTo="/" />
            </div>
          </div>

          <Link to="/the_team">
            <Button color="inherit">The Team</Button>
          </Link>
          <Link to="/the_matches">
            <Button color="inherit">The Matches</Button>
          </Link>
        </ToolBar>
      </AppBar>
    );
  }
}

export default Header;
