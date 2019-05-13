import React, { Component } from "react";
import MyButton from "../utility/MyButton";
import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Basic", "Medium", "Professional"],
    desc: [
      "Dolore et eirmod sadipscing accusam accusam ipsum consetetur dolore et. Dolores elitr lorem sed dolor rebum dolores clita sed ea..",
      "Dolore et eirmod sadipscing accusam accusam ipsum consetetur dolore et. Dolores elitr lorem sed dolor rebum dolores clita sed ea..",
      "Dolore et eirmod sadipscing accusam accusam ipsum consetetur dolore et. Dolores elitr lorem sed dolor rebum dolores clita sed ea.."
    ],
    linkto: ["http://sales/a", "http://sales/b", "http://sales/c"],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchased"
                bck="#FFA800"
                color="#FFFFFF"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Price</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
