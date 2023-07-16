import React ,{useState} from 'react'
import './Overview.css'
import AddTransCont from './AddTransCont'
const Overview = (props) => {
    const [isAddBtnVis, setisAddBtnVis] = useState(false)

    function btnHandler() {
        setisAddBtnVis(!isAddBtnVis);
    }


  return (
    <div className='cont-2'>
        <div className="BalanceBox">
            Balance: Rs. {props.income - props.expense}
            <button className="btn" onClick={btnHandler} >{isAddBtnVis ? "Cancel" : "Add"} </button>
        </div>
        {isAddBtnVis && (<AddTransCont  setisAddBtnVis={btnHandler} addTransaction = {props.addTransaction} />)}

        <div className="ExpenseCont">
          <div className="expensebox" >
            Expense
            <span >Rs. {parseInt(props.expense)}</span>
          </div>
          <div className="expensebox" >
            Income
            <span >Rs. {parseInt(props.income)}</span>
          </div>
        </div>
    </div>
  )
}

export default Overview;
