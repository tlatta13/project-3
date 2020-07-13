import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import API from "../../lib/API"
import AuthContext from '../../contexts/AuthContext'

import "react-datepicker/dist/react-datepicker.css";
const customStyles = {
    main:{
        'font-family': 'Arial, Helvetica, sans-serif'
    }
  };
const Expense = (props) => {
  const { authToken } = useContext(AuthContext);
  const [expense, setExpense] = useState(0);
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState("");
  const [comment, setComment] = useState("");
  const close = (event) => {
    event.preventDefault();
    props.close();
  };

  const submitHandler = (event) => {
    event.preventDefault();

    API.Expense.post(authToken, {
      date: date,
      category: category,
      amount: expense,
      comment: comment,
    })
    .then(()=>{
      props.getLatestExpenses()
      console.log({
        date: date,
        category: category,
        amount: expense,
        comment: comment
      });
      props.close()
    })
  };

  return (
    <>
      <form style={customStyles.main}>
        <div className="form-group">
          <div>
            What is the date of the transaction?
            <div>
              <DatePicker selected={date} onChange={(date) => setDate(date)} />
            </div>
          </div>
          <label htmlFor="categoryBox">Type of Expense?</label>
          <input
            type="text"
            className="form-control"
            id="categoryBox"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="incomeBox">What is the amount of the expense?</label>
          <input
            type="text"
            className="form-control"
            id="incomeBox"
            value={expense}
            onChange={(event) => setExpense(event.target.value)}
          />
        </div>
        <div>
          <div>Expense Notes:</div>

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

export default Expense;