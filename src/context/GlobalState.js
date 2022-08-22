//import { type } from '@testing-library/user-event/dist/type';
import React, {createContext, useReducer} from 'react';
import  AppReducer  from './AppReducer';

//initial state
const initialState = {
    //create the transactions object
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

//create context object
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

//Actions
function deleteTransaction(id){
    //dispatch an object to the reducer
    dispatch({
        //dispatching an action of type 'DELETE_TRANSACTION' 
        //And with a payload - the transaction id
        type:'DELETE_TRANSACTION',
        payload: id
    });// now that the action is created, it should be passed down to Global Provider 
       // to make use of it
}
function addTransaction(transaction){
    //dispatch an object to the reducer
    dispatch({
        //dispatching an action of type 'ADD_TRANSACTION' 
        //And with a payload - the transaction object itself
        type:'ADD_TRANSACTION',
        payload: transaction
    });// now that the action is created, it should be passed down to Global Provider 
       // to make use of it
}

return( 
        //Provider provides any state or actions to the components
        //state.transactions -> can access the transactions state from any component.
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,// this should be pulled out when delete button is clicked
            addTransaction//This should be pulled out when the add button clicked
            }}>
            
            {children}
        </GlobalContext.Provider>
    )

}
