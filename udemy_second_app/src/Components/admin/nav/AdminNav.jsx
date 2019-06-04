import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import { firebase } from "../../../firebase";

const AdminNav = () => {
  const links = [
    {
      title: "Matches",
      linkTo: "/admin_matches"
    },
    {
      title: "Add Matches",
      linkTo: "/admin_matches/edit_match"
    },
    {
      title: "Players",
      linkTo: "/admin_players"
    },
    {
      title: "Add Players",
      linkTo: "/admin_players/add_player"
    }
  ];

  const style = {
    color: "#ffffff",
    fontWeight: "300",
    borderBottom: "1px solid #353535"
  };

  const logoutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          console.log("Log out successfull");
        },
        error => {
          console.log("error logging out");
        }
      );
  };
  //   jsx return 시 () 사용 필요
  const renderItems = () =>
    links.map(link => (
      <Link to={link.linkTo} key={link.title}>
        <ListItem button style={style}>
          {link.title}
        </ListItem>
      </Link>
    ));
  return (
    <div>
      {renderItems()}
      <ListItem button style={style} onClick={() => logoutHandler()}>
        Log out
      </ListItem>
    </div>
  );
};

export default AdminNav;
