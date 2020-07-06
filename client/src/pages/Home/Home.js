import React, { Component } from "react";

import logo from "./logo.svg";

class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}

            <div className="card text-center">
            <img src="https://www.altran.com/as-content/uploads/sites/4/2017/05/5-0_finance_1600.jpg" class="card-img-top" alt="..."/>
              <div className="card-header">Featured</div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
                  <p></p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>

            <p></p>

            <div className="row row-cols-3 row-cols-md-3">
  <div className="col mb-4">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col mb-4">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col mb-4">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col mb-4">
    <div className="card">
      <img src="..." class="card-img-top" alt="..."/>
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
