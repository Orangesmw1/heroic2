import React, { Component } from "react";
import ItemsComponent from "./items/items";
import WarmComponent from "./warm/warm";
import "./welcome.css";

export default class WelcomeComponent extends Component {
  render() {
    return (
      <div className="welcome">
        <WarmComponent />
        <ItemsComponent />
      </div>
    );
  }
}
