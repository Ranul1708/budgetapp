//import transaction from "../components/Transaction";

const reducer = (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            //reducer changes the state and sends it down to the component
            //but we can not change it, we have to create a new state here 
            //and then it can be sent down to the component.

            return{
                //since this is the action for 'DELETE_TRANSACTION',
                //this will return all the transactoins except the one that shoulf be deleted

                ...state,
                transactions:state.transactions.filter(transaction=>transaction.id !== action.payload)

            }
        case 'ADD_TRANSACTION':
            //return the initial state 
            //return the newly added transaction in addition to the existing transactions 
        
            return{
                ...state,
                transactions:[action.payload,...state.transactions]
            }
        default:
            return state;
    }
}

export default  reducer;
