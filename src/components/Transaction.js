import React from 'react'
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';

const Transaction = ({transaction}) => {

  //pullout only the deleteTransaction action from Global context
  const {deleteTransaction} = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <div>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
          {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
          <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
      </li> 
    </div>
  )
}

export default Transaction


