import React, { Component } from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101651.39775531324!2d-122.0215751333692!3d37.23332282706181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e34365377033f%3A0xef675301ac748ca6!2sLos+Gatos%2C+CA!5e0!3m2!1sen!2sus!4v1557700990981!5m2!1sen!2sus"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen
      />

      <div className="location_tag">
        <div>location</div>
      </div>
    </div>
  );
};

export default Location;
