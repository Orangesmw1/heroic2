import React, { Component } from "react";
import "./items.css";

export default class ItemsComponent extends Component {
  render() {
    return (
      <div className="items">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="bg-card">
                <div className="card-body">
                  <div className="card-icon">
                    <i class="fa fa-volleyball-ball"></i>
                  </div>
                  <div className="card-content">
                    <h2>Fresh new layout</h2>
                    <p>
                      With Bootstrap 5, we've created a fresh <br></br> new
                      layout for this template!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="bg-card">
                <div className="card-body">
                  <div className="card-icon">
                    <i class="fa fa-volleyball-ball"></i>
                  </div>
                  <div className="card-content">
                    <h2>Free to download </h2>
                    <p>
                      With Bootstrap 5, we've created a fresh <br></br> new
                      layout for this template!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="bg-card">
                <div className="card-body">
                  <div className="card-icon">
                    <i class="fa fa-volleyball-ball"></i>
                  </div>
                  <div className="card-content">
                    <h2>Jumbotron hero header</h2>
                    <p>
                      With Bootstrap 5, we've created a fresh <br></br> new
                      layout for this template!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="bg-card">
                <div className="card-body">
                  <div className="card-icon">
                    <i class="fa fa-volleyball-ball"></i>
                  </div>
                  <div className="card-content">
                    <h2>Feature boxes</h2>
                    <p>
                      With Bootstrap 5, we've created a fresh <br></br> new
                      layout for this template!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="bg-card">
                <div className="card-body">
                  <div className="card-icon">
                    <i class="fa fa-volleyball-ball"></i>
                  </div>
                  <div className="card-content">
                    <h2>Simple clean code</h2>
                    <p>
                      With Bootstrap 5, we've created a fresh <br></br> new
                      layout for this template!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="bg-card">
                <div className="card-body">
                  <div className="card-icon">
                    <i class="fa fa-volleyball-ball"></i>
                  </div>
                  <div className="card-content">
                    <h2>A name you trust</h2>
                    <p>
                      With Bootstrap 5, we've created a fresh <br></br> new
                      layout for this template!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
