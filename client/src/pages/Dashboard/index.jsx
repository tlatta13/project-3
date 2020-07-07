import React, { useContext } from "react";
import AuthContext from '../../contexts/AuthContext'
const Dashboard = () => {
   const userInfo = useContext(AuthContext)

   const style ={
       buttons:{
           'display':'flex',
           'justifyContent':'center'
       }
   }
  return <>
    <h1 className='text-center text-light my-3'>Welcome {userInfo.user ? userInfo.user.email:null}! </h1>
    <div style={style.buttons}>

   <button className='btn btn-success'>Add Income</button>
   <div style ={{'width':'10%'}}/>
   <button className='btn btn-success'>Add Expense</button>
    </div>
  
  </>;
};

export default Dashboard;
