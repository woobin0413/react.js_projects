import React, { Component } from "react";
import Featured from "./Featured";
import Matches from "./matches";

const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <Matches />
    </div>
  );
};

export default Home;
