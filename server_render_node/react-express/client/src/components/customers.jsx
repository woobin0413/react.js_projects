import React, { Component } from "react";
import "./customers.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PostDetail from "./postDetail";

class Customers extends Component {
  state = {
    checked: false,
    customers: [],
    posts: []
  };

  componentDidMount() {
    fetch("/api/customers")
      .then(response => response.json())
      .then(customers =>
        this.setState({
          customers
        })
      );

    fetch("/api/posts")
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    console.log("Customers images!!");
    const customers = this.state.customers;
    const image_url = "user/images/";
    const detail_url = "/customers/";
    return (
      <React.Fragment>
        <Router>
          <div className="container-fluid">
            <div className="row">
              {customers.map(c => (
                <div className="col-md-3 hoverLink" key={c.id}>
                  <Link to={detail_url + c.id}>
                    <div key={c.id}>
                      <div className="title">{c.title}</div>
                      <img
                        src={image_url + c.image}
                        alt=""
                        width="100%"
                        height="230px"
                      />
                      <div className="desc">
                        <p>{c.description}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default Customers;
