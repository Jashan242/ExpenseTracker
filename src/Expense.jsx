import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form.jsx";
import store from "./Store.jsx";
import { clearTask, deleteTask } from "./Reducer.jsx";
import del from "./assets/del.svg";

export default function Expense() {

    const expense=useSelector((state)=>state.expense);
    const total=2000;
    const dispatch=useDispatch();
    const [form, setForm] = useState(false);

    const totalSpend=store.getState().expense.reduce((acc,curr)=>{
        return Number(acc)+Number(curr.amount);
    },0);
    

    function openForm(){
        setForm(true);
    }

    function closeForm(){
        setForm(false);
    }

  return (
    <div className='bg-black text-white min-h-screen'>
      <h1 className='text-center p-10 text-6xl font-bold'>Expense Tracker</h1>
      <div className='flex flex-col sm:flex-row text-xl justify-center items-center gap-5 pt-16 lg:justify-center'>
        <div className='border-2 p-4 rounded-md w-[200px] shadow-[0px_0px_8px_2px_rgba(255,255,255,0.5)]' >
          <h3>Expenditure</h3>
          <h1 className="font-bold">Rs. {Number(totalSpend)}</h1>
        </div>
        <div className='border-2 p-4 rounded-md w-[200px] text-left shadow-[0px_0px_8px_2px_rgba(255,255,255,0.5)]'>
          <h3>Total Balance</h3>
          <h1 className="font-bold">Rs. {Number(total)}</h1>
        </div>
        <div className='border-2 p-4 rounded-md w-[200px] text-nowrap shadow-[0px_0px_8px_2px_rgba(255,255,255,0.5)]'>
          <h3>Remaining Balance</h3>
          <h1 className="font-bold">Rs. {Number(total-totalSpend)}</h1>
        </div>
        <div>
          <button onClick={() => {openForm()}} className="border-black border-2 py-3 px-4 bg-white text-black rounded-[100px] mt-4 font-semibold hover:shadow-[0px_0px_8px_2px_rgba(255,255,255,0.5)]">Add Expense</button>
        </div>
      </div>
      <div>
        <div className="flex justify-between mx-auto w-8/12 pb-4 mt-8 sm:text-2xl text-xl font-bold">
          <h1>Expense History</h1>
          <button className="" onClick={()=>dispatch(clearTask())}>Clear All</button>
        </div>
      {expense.length===0 && <h1 className="text-center text-3xl font-bold mt-10">No Expenses</h1>}
        <ul className="flex flex-col items-center gap-4 text-nowrap">
        
            {expense.map((item)=>(
                <li key={item.id} className="text-xl font-semibold border-2 p-3 w-8/12 rounded-md flex justify-between items-center">
                    <span>{item.description} - {item.amount}</span>
                    {/* <button className="border-black border-2 p-1 px-2 bg-red-700 text-white rounded-md font-semibold hover:shadow-[0px_0px_8px_2px_rgba(255,255,255,0.5)] ml-4" onClick={()=>dispatch(deleteTask(item.id))}>Delete</button> */}
                    <img src={del} alt="delete" className="w-10 h-10" onClick={()=>dispatch(deleteTask(item.id))}/>
                </li>
            ))}
        </ul>
      </div>
      <div className='fixed flex items-center justify-center bg-black/50'>
        {form && <Form closeForm={closeForm} />}
      </div>
    </div>
  )
}
