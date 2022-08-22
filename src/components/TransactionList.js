import React , {useContext} from 'react';
import { GlobalContext }  from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
  //pulling out transactions from the global state
  //transactions is an array
  //to show each transaction in the array it needs to be iterated/mapped
  //then, all the details for each transaction will be shown in a "html element"
  //see line 15 (remember -it''s called a statement)
  const {transactions} = useContext(GlobalContext);
  

  return (
    <div>
      <h3>History</h3>
      
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction = {transaction}/>))}
        
      </ul>
    </div>
  )
}

export default TransactionList;
