import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import API from "../../lib/API"
import AuthContext from '../../contexts/AuthContext'

const customStyles = {
    main:{
        'fontFamily': 'Arial, Helvetica, sans-serif'
    }
  };

const Income = (props) => {
  const { authToken } = useContext(AuthContext);
  const [income, setIncome] = useState(0);
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState("");
  const [comment, setComment] = useState("");
  const close = (event) => {
    event.preventDefault();
    props.close();
  };

  const submitHandler = (event) => {
    event.preventDefault();

    API.Income.post(authToken, {
      date: date,
      category: category,
      amount: income,
      comment: comment,
    })
    .then(()=>{
      props.getLatestIncome();
      window.location.reload();
      props.close()
  })
};

  return (
    <>
      <form style={customStyles.main}>
        <div className="form-group">
          <div  className="mb-3">
          <label htmlFor="categoryBox">Income Date:</label>
            <div>
              <DatePicker selected={date} onChange={(date) => setDate(date)} />
            </div>
          </div>

          <div  className="mb-3">
            <label htmlFor="categoryBox">Type of Income:</label>
            <select 
              className="form-control" 
              id="categoryBox" 
              value={category} 
              onChange={(event) => setCategory(event.target.value)}
            >
                <option></option>
                <option>Salary</option>
                <option>Bonus</option>
                <option>Commission</option>
                <option>Gift</option>
                <option>Refund</option>
                <option>Dividend</option>
                <option>Interest</option>
                <option>Other</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="incomeBox">Income Amount:</label>
            <input
              type="text"
              className="form-control"
              id="incomeBox"
              value={income}
              onChange={(event) => setIncome(event.target.value)}
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="categoryBox">Notes:</label>
            <textarea
              id="commentBox"
              rows="4"
              cols="50"
              className="form-control"
              style={{ resize: "none" }}
              value ={comment}
              onChange={event=>setComment(event.target.value)}
            />
          </div>
        </div>
        
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
          className="mt-3"
        >
          <button
            type="submit"
            className="btn btn-primary"
            onClick={submitHandler}
          >
            Submit
          </button>
          <button className="btn btn-danger" onClick={close}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default Income;
