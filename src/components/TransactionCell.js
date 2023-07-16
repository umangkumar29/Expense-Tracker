import React from 'react'
import "./TransactionCell.css"

const TransactionCell = (props) => {
  const cellClassName = props.payload?.type === "EXPENSE" ? "cell cell-expense" : "cell cell-income";

  return (
    <div className={cellClassName}>
      <span>{props.payload.desc}</span>
      <span>Rs. {props.payload.amt}</span>
    </div>
  )
}

export default TransactionCell
