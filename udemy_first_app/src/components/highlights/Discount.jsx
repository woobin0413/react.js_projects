import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utility/MyButton";
class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 70
  };

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    } else {
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>purchase tickets before 20th May</h3>
              <p>
                Massage therapy is also thought to induce a relaxation response,
                which lowers the heart rate, respiratory rate, and blood
                pressure.
              </p>

              <MyButton
                text="Purchased Ticket"
                bck="#FFA800"
                color="#FFFFFF"
                link="https://www.google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
