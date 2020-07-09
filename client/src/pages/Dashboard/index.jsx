import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext";
import Modal from "react-modal";
import Income from "../../components/Income";


// function App() {
//   return (
//     <div  styles={{ backgroundImage:`https://s3.amazonaws.com/timberlinefinancial/hero/settlements.jpg)` }}>
//       <h1>Finance Image</h1>
//     </div>
//   );
// }
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
      'font-family': 'Arial, Helvetica, sans-serif'
    
  }
};
const Dashboard = () => {
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
    buttons: {
      display: "flex",
      justifyContent: "center",
    },
  };
  return (
    <div className="class" style={customStyles.main}>
      <div>
        <h1>Finance Image</h1>
      </div>
      <h1 className="text-center text-light my-3">
        <div style={{color:"blue"}}>
        Welcome {userInfo.user ? userInfo.user.email : null}!{" "}
        </div>
      </h1>
      <div style={style.buttons}>
        <button
          className="income btn btn-secondary "
          onClick={() => openModal("income")}
        >
          Add Income
        </button>
        <div style={{ width: "10%" }} />
        <button className="expense btn btn-secondary" onClick={()=>openModal('expense')}>Add Expense</button>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-sm d-flex flex-column justify-content-center"
            style={{ height: 500 }}
          >
            Insert Graph
          </div>
          <div
            className="col-sm d-flex flex-column justify-content-center"
            style={{ height: 500 }}
          >
            Insert Graph
          </div>
        </div>
      </div>
      <Modal Income
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {modalContent === "income" ? <Income close={closeModal} /> :
        
        null}
        </Modal>

        <Modal Expense
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {modalContent === "expense" ? <Expense close={closeModal} /> :
        
        null}
      </Modal>
    </div>
  );
};

export default Dashboard;
