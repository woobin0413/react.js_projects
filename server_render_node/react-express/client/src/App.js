import React, { Component } from "react";
import Customers from "./components/customers";
import Posts from "./components/posts";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import "./App.css";
import Addpost from "./components/addpost";

class App extends Component {
  state = {
    input: "",

    posts: [
      {
        id: 1,
        title: "id=1",
        text:
          "Amet dolor eos kasd at sadipscing. Gubergren clita est ea et voluptua sed diam, sit sadipscing dolor sed nonumy aliquyam.",
        url: "https://picsum.photos/200/300/?random"
      },
      {
        id: 2,
        title: "id=2",
        text:
          "Amet dolor eos kasd at sadipscing. Gubergren clita est ea et voluptua sed diam, sit sadipscing dolor sed nonumy aliquyam.",
        url: "https://picsum.photos/200/300/?random"
      }
    ]
  };

  constructor() {
    super();
    console.log("App - Counstructor");
  }

  render() {
    console.log("app rendered");
    const routes = [
      {
        path: "/",
        exact: true,
        sidebar: () => <h2>Home!</h2>,
        main: () => (
          <React.Fragment>
            <Navbar />
            <Posts posts={this.state.posts} />
          </React.Fragment>
        )
      },
      {
        path: "/customers",
        sidebar: () => <h2>Customers!</h2>,
        main: () => <Customers />
      },
      {
        path: "/addpost",
        sidebar: () => <h2>Add Post!</h2>,
        main: () => <Addpost />
      }
    ];
    return (
      // <React.Fragment>
      //   <Navbar />
      //   <Posts posts={this.state.posts} />
      //   <Customers />
      // </React.Fragment>
      <Router>
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "10px",
              width: "15%",
              background: "#f0f0f0"
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link to="/">
                  <button className="btn btn-warning" style={{ width: "100%" }}>
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/customers">
                  <button
                    className="btn btn-success mt-2 mb-2"
                    style={{ width: "100%" }}
                  >
                    Customers
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/addpost">
                  <button className="btn btn-warning" style={{ width: "100%" }}>
                    Add Post
                  </button>
                </Link>
              </li>
            </ul>

            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.

              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                //sidebar 밑에 텍스트
                component={route.sidebar}
              />
            ))}
          </div>

          <div style={{ flex: 1, padding: "10px" }}>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                //router 클릭시 다른 화면보여줌
                component={route.main}
              />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
