import React, { Component } from "react";
import icon_location from "../../resources/images/icons/location.png";
import icon_calendar from "../../resources/images/icons/calendar.png";
import Zoom from "react-reveal/Zoom";

const VenueInfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red" />
                  <div
                    className="vn_icon"
                    style={{ background: `url(${icon_calendar})` }}
                  />
                  <div className="vn_title">Event Date & Time</div>
                  <div className="vn_desc">
                    A supported freedom libels a welcome. The rushed formula
                    cubes the young. The tune bolts underneath the matrix. Can
                    the arch memory taste the understandable tear?
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow" />
                  <div
                    className="vn_icon"
                    style={{ background: `url(${icon_location})` }}
                  />
                  <div className="vn_title">Event Location</div>
                  <div className="vn_desc">
                    A supported freedom libels a welcome. The rushed formula
                    cubes the young. The tune bolts underneath the matrix. Can
                    the arch memory taste the understandable tear?
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
          <div />
        </div>
      </div>
    </div>
  );
};

export default VenueInfo;
