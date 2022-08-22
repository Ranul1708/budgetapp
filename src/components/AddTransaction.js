import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


const AddTransaction = () => {
  const [text, setText] = useState('');//COmponent level state
  const [amount, setAmount] = useState('0');//Component level state

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e =>{
    e.preventDefault();

    //create the new transaction object
    //this aobject has the attributes - id,text,amount
    const newTransaction = {
      id:Math.floor(Math.random()*100000000),//this generates a random number
                                             //but this is NOT the best practise
      text, // no need to define here cuz itz already defined in the line 6 when setting useState
      amount: +amount// +amount is to avoid the amount meing stored as as a string
    }

    //pass in the new Transaction object to the addTransaction() Method
    addTransaction(newTransaction);

  }
  
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
