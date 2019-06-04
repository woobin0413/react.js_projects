import React from "react";
import ReactDOM from "react-dom";
import "./Resources/css/app.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { firebase } from "./firebase";

const App = props => {
  return (
    <BrowserRouter>
      <Routes {...props} />
    </BrowserRouter>
  );
};

//한번 로그인시 다른 곳으로 라우팅해도 이미 로그인한 유저는 계속 로그인되있는다.
firebase.auth().onAuthStateChanged(user => {
  ReactDOM.render(<App user={user} />, document.getElementById("root"));
});
