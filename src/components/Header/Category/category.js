import React, { Component } from "react";
import "./category.css";

export default class CategoryComponent extends Component {
  render() {
    return (
      <div>
        <ul>
          <li className="home">Home</li>
          <li className="about">About</li>
          <li className="contact">Contact</li>
        </ul>
      </div>
    );
  }
}
