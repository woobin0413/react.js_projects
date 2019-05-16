import React, { Component } from "react";
import Header from "../Components/Header_footer/Header";
import Footer from "../Components/Header_footer/Footer";
const Layout = props => {
  //stateless 형은 props.children 으로 부모로부터 받는다.
  //class 형식은 this.props 로 부모로부터 받는다.
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
