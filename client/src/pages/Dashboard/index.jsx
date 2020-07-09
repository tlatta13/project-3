import React, { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
/* import car from './images/car.png' */

const Dashboard = () => {
  const userInfo = useContext(AuthContext);

  const style = {
    buttons: {
      display: "flex",
      justifyContent: "center",
    },
  };
  return (
    <>
      <div className="mt=4" styles={{ backgroundImage:`https://s3.amazonaws.com/timberlinefinancial/hero/settlements.jpg)` }}>
        <h1>Finance Image</h1>
      </div>
      <h1 className="text-center text-light my-3">
        Welcome {userInfo.user ? userInfo.user.email : null}!{" "}
      </h1>
      <div style={style.buttons}>
        <button className="btn btn-secondary">Add Income</button>
        <div style={{ width: "10%" }} />
        <button className="btn btn-secondary">Add Expense</button>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm d-flex flex-column justify-content-center" style={{height:500}}>Insert Graph</div>
          <div className="col-sm d-flex flex-column justify-content-center" style={{height:500}}>Insert Graph</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard; 
