import {createStore} from 'redux'
import expenseReducer from './Reducer.jsx'
import { addTask } from './Reducer.jsx'

const store=createStore(expenseReducer);

console.log(store.getState());

// store.dispatch(addTask({id:1, description:"Food", amount:100}))
// store.dispatch(addTask({id:1, description:"Food", amount:100}))
// store.dispatch(addTask({id:1, description:"Food", amount:100}))

console.log(store.getState());



export default store;