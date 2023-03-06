import React, { Component } from "react";
import CategoryComponent from "./Category/category";
import LogoComponent from "./Logo/logo";
import "./header.css";

export default class HeaderComponet extends Component {
  render() {
    return (
      <div className="header ">
        <nav>
          <div className="container px-lg-5">
            <LogoComponent />
            <CategoryComponent />
          </div>
        </nav>
      </div>
    );
  }
}
