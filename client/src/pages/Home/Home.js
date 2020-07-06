import React, { Component } from "react";
import "./home.css";
import logo from "./logo.svg";

class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}

            <img
              src="https://www.altran.com/as-content/uploads/sites/4/2017/05/5-0_finance_1600.jpg"
              class="card-img-top"
              alt="..."
            />

            <hr></hr>

            <div className="card text-center">
              <div className="card-header">Budget App</div>
              <div className="card-body">
                <h5 className="card-title">Login or Signup below to get started!</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Login
                </a>
                <p></p>
                <a href="#" class="btn btn-primary">
                  Signup
                </a>
              </div>
            </div>

            <hr></hr>

            <div className="row row-cols-3 row-cols-md-3">
              <div className="col mb-4">
                <div className="info-card">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="info-card">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="info-card">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="info-card">
                  <img src="..." class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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

export default HomePage;
