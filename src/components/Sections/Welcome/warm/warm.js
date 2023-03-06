import React, { Component } from "react";
import "./warm.css";

export default class WarmComponent extends Component {
  render() {
    return (
      <div className="warm">
        <div className="container px-lg-5">
          <div className="warm-main">
            <h1 className="warm-title">A warm welcome!</h1>
            <p>
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been <br></br> removed from the framework.
              Why create custom CSS when you can use utilities?
            </p>
            <button className="btn btn-primary btn-lg">
              <span>Call to action</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
