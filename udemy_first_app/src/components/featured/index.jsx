import React, { Component } from "react";
import Carrousel from "./Carrousel";
import TimeUntil from "./TimeUntil";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carrousel />

      <div className="artist_name">
        <div className="wrapper">SPACEBOY ELECTRON</div>
      </div>

      <TimeUntil />
    </div>
  );
};
export default Featured;
