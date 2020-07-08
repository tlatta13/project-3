import React, { Component } from "react";
import "./home.css";
import img1 from "../../assets/images/budgetUse.png";
import img2 from "../../assets/images/Piggy-Bank-on-money-250x250.jpg";
import img3 from "../../assets/images/summaries.png";
import img4 from "../../assets/images/chart.png";
import { Link } from "react-router-dom";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const HomePage = () => {
  return (
    // <ParallaxProvider>
    //   <Parallax className="custom-class" y={[-10, 20]} tagOuter="figure">
        <div className="container">
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
              <Link to="/login">
                <button className="mr-2 btn btn-primary">Login</button>
              </Link>
              <Link to="/register">
                <button className="ml-2 btn btn-danger">Register</button>
              </Link>
            </div>
          </div>
          <div className="row row-cols-3 row-cols-md-3">
            <div className="col mb-4">
              <div className="info-card bg-light shadow">
                <img src={img1} className="card-img-top mt-3" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Manage Spending</h5>
                  <p className="card-text">
                    Track all your spendings and manage your money your way.
                  </p>
                </div>
                <div className="card-body shadow">
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Link to="/login">
                    <button className="mr-2 btn btn-primary">Login</button>
                  </Link>
                  <Link to="/register">
                    <button className="ml-2 btn btn-danger">Register</button>
                  </Link>
                </div>
              </div>
              <div className="row row-cols-3 row-cols-md-3">
                <div className="col mb-4">
                  <div className="info-card bg-light shadow">
                    <img src={img1} className="card-img-top mt-3" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Manage Spending</h5>
                      <p className="card-text">
                        Track all your spendings and manage your money your way.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="info-card bg-light shadow">
                    <img src={img2} className="card-img-top mt-3" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Plan Savings</h5>
                      <p className="card-text">
                        See your savings add up and put them to good use.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="info-card bg-light shadow">
                    <img src={img3} className="card-img-top mt-3" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">View Summaries</h5>
                      <p className="card-text">
                        View summaries of your past spendings and deposits.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="info-card bg-light shadow">
                    <img src={img4} class="card-img-top mt-3" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Graphs and Reports</h5>
                      <p className="card-text">
                        See how your wallet is doing with customized charts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    //   </Parallax>
    // </ParallaxProvider>
  );
};

export default HomePage;
