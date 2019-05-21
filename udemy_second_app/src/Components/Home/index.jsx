import React, { Component } from "react";
import Featured from "./Featured";
import Matches from "./matches";
import MeetPlayers from "./meetPlayers";
const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <Matches />
      <MeetPlayers />
    </div>
  );
};

export default Home;
