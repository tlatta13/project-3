import React, { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
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
      <h1 className="text-center text-light my-3">
        Welcome {userInfo.user ? userInfo.user.email : null}!{" "}
      </h1>
      <div style={style.buttons}>
        <button className="btn btn-success">Add Income</button>
        <div style={{ width: "10%" }} />
        <button className="btn btn-success">Add Expense</button>
      </div>
      <div className="container">
        <div class="row">
          <div class="col-sm d-flex flex-column justify-content-center" style={{height:500}}>Insert Graph</div>
          <div class="col-sm d-flex flex-column justify-content-center" style={{height:500}}>Insert Graph</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
