import React, { Component } from "react";
import "./home.css";

class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="col">

            <img
              src="https://www.altran.com/as-content/uploads/sites/4/2017/05/5-0_finance_1600.jpg"
              class="card-img-top"
              alt="..."
            />

            <div className="card text-center my-4">
              <div className="card-header">
                <h2>Budget App</h2>
              </div>
              <div className="card-body">
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary mr-2">
                  Login
                </a>
<<<<<<< HEAD
                <a href="#" class="btn btn-primary ml-2">
=======
                <p></p>
                <a href="#" class="btn btn-danger">
>>>>>>> 66c3f7e89cd515588b45c3af21b0da0ea95b341f
                  Signup
                </a>
              </div>
            </div>

            <div className="row row-cols-3 row-cols-md-3">
              <div className="col mb-4">
                <div className="info-card bg-light">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="info-card bg-light">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="info-card bg-light">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This card is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="info-card bg-light">
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
