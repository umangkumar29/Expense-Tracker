import React, { useState } from "react";
import "./AddTransCont.css";
const AddTransCont = (props) => {
  const [amt, setAmt] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("EXPENSE");
  
  const addTransaction = () => {
    props.addTransaction({ amt, desc, type , id:Date.now()});
    props.setisAddBtnVis();
  };
  
  function amtHandler (event) {
    setAmt(event.target.value);
  }
  function descHandler(event){
    setDesc(event.target.value);
  }
  function typeHandler(event){
    setType(event.target.value);
  }
  return (
    <div className="cont-3">
      <input placeholder="Amount" value={amt} type="number" onChange={amtHandler} />
      <input placeholder="Description" value={desc} onChange={descHandler}/>
      <div className="radiobtn">

        <input 
        type="radio" 
        id="expense" 
        name="type" 
        value="EXPENSE" 
        checked={type === "EXPENSE"} 
        onChange={typeHandler}
        />

        <label htmlFor="Expense">Expense</label>

        <input 
        type="radio" 
        id="income" 
        name="type" 
        value="INCOME" 
        checked={type === "INCOME"} 
        onChange={typeHandler}
        />

        <label htmlFor="income">Income</label>
      </div>
      <button className="add" onClick={addTransaction} addTransanction={props.addTransanction}>Add Transanction</button>
    </div>
  );
};

export default AddTransCont;
