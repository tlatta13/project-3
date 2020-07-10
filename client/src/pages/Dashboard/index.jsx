import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext";
import Modal from "react-modal";
import Income from "../../components/Income";
import Expense from "../../components/Expense";
import MonthlyBar from "../../components/Charts/monthlybar";
import PieChart from "../../components/Charts/piechart";
import IncomeTable from "../../components/Tables/income"
import ExpenseTable from "../../components/Tables/expense"
import SavingsTable from "../../components/Tables/savings"


const customStyles = {
  content: {

    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  main:{
      'fontFamily': 'Arial, Helvetica, sans-serif'
    
  }
};
const Dashboard = () => {
  // Modal Info Start
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const openModal = (contents) => {
    setModalContent(contents);
    setIsOpen(true);
  };
  useEffect(() => Modal.setAppElement("body"));
  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  
  const userInfo = useContext(AuthContext);

  const style = {
    buttonsDiv: {
      display: "flex",
      justifyContent: "center",
    },
    incomeButton: {
      backgroundColor: "green"
    },
    expenseButton: {
      backgroundColor: "red"
    }
  };
  // Modal Info End

  return (
    <div className="class" style={customStyles.main}>
      <div className="container bg-light border-0 rounded my-4">
        <h3 className="text-center text-light mb-3 pt-4">
          <div style={{color:"black"}}>
          Welcome {userInfo.user ? userInfo.user.email : null}!{" "}
          </div>
        </h3>
        <div style={style.buttonsDiv}>
          <button
            style={style.incomeButton}
            className="income btn btn-secondary mr-1 mb-4"
            onClick={() => openModal("income")}>
              Add Income
          </button>
          <button 
            style={style.incomeButton}
            className="expense btn btn-secondary mx-2 mb-4" 
            onClick={()=>openModal('savings')}>
              Add Savings
          </button>
          <button 
            style={style.expenseButton}
            className="expense btn btn-secondary ml-1 mb-4" 
            onClick={()=>openModal('expense')}>
              Add Expense
          </button>
        </div>
      </div>

      {/* Graphs Container */}
      <div className="container bg-light border-0 rounded my-4">
        <div className="row">
          <div
            className="col-sm d-flex flex-column justify-content-center my-3"
            style={{ height: 500 }}
          >
             <MonthlyBar />
          </div>
          <div
            className="col-sm d-flex flex-column justify-content-center my-3"
            style={{ height: 500 }}
          >
            <PieChart />
          </div>
        </div>
      </div>
      
      {/* Modals */}
      <Modal Income
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Income Modal"
      >
        {modalContent === "income" ? <Income close={closeModal} /> :
        
       <Expense close={closeModal} />}
        </Modal>

      {/* Income Savings and Expense Tables */}
      <div className="container bg-light border-0 rounded my-4">
        <h3 className="text-center mb-3 pt-4">
          Income
        </h3>
        <IncomeTable
          // incomes={this.state.filteredIncomes}
          // sortByDate={this.sortByDate}
          // sortByCategory={this.sortByCategory}
        />
      </div>

      <div className="container bg-light border-0 rounded my-4">
        <h3 className="text-center mb-3 py-4">
          Savings
        </h3>
        <SavingsTable
          // incomes={this.state.filteredIncomes}
          // sortByDate={this.sortByDate}
          // sortByCategory={this.sortByCategory}
        />
      </div>

      <div className="container bg-light border-0 rounded my-4">
        <h3 className="text-center mb-3 py-4">
          Expenses
        </h3>
        <ExpenseTable
          // incomes={this.state.filteredIncomes}
          // sortByDate={this.sortByDate}
          // sortByCategory={this.sortByCategory}
        />
      </div>
    </div>
  );
};

export default Dashboard;
