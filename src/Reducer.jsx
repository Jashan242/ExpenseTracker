const initialState={
    expense:[],
}

const Add_Expense="Add_Expense";
const Delete_Expense="Delete_Expense";
const Clear_Expense="Clear_Expense";

export const addTask=(data)=>{
    return{
        type:Add_Expense,
        payload:data,
    }
}

export const deleteTask=(id)=>{
    return{
        type:Delete_Expense,
        payload:id,
    }
}

export const clearTask=()=>{
    return{
        type:Clear_Expense,
    }
}



const expenseReducer=(state=initialState, action)=>{
    switch(action.type){

        case "Add_Expense":
            return{
                ...state,
                expense:[...state.expense, action.payload]
            }

         case "Delete_Expense":
            return{
                ...state,
                expense: state.expense.filter((expense)=> expense.id!=action.payload),
            }
            
        case "Clear_Expense":
            return{
                ...state,
                expense:[],
            }

        default:
            return state;
    }
}

export default expenseReducer;
