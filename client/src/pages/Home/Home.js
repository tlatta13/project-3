import React, { Component } from "react";
import "./home.css";
import { Link } from "react-router-dom";



class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
            <img
              src="https://www.altran.com/as-content/uploads/sites/4/2017/05/5-0_finance_1600.jpg"
              className="card-img-top shadow"
              alt="..."
            />

            <div className="card text-center my-4">
              <div className="card-header shadow">
                <h2>Budget App</h2>
              </div>
              <div className="card-body shadow">
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>

                <Link to='/login'>
                  <button className="mr-2 btn btn-primary">Login</button>
                </Link>
                <Link to='/register'>
                  <button className="ml-2 btn btn-danger">Register</button>
                </Link>


              </div>
            </div>

            <div className="row row-cols-3 row-cols-md-3">
              <div className="col mb-4">
                <div className="info-card bg-light shadow">
                  <img src="..." className="card-img-top mt-3" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Manage Spending</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="info-card bg-light shadow">
                  <img src="..." className="card-img-top mt-3" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Plan Savings</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="info-card bg-light shadow">
                  <img src="..." className="card-img-top mt-3" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">View Summaries</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This card is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="info-card bg-light shadow">
                  <img src="..." class="card-img-top mt-3" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Graphs and Reports</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
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

export default HomePage;
