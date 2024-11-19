import React from 'react'
import { addTask } from './Reducer.jsx'
import { useDispatch } from 'react-redux';

export default function Form({closeForm}) {
    const dispatch=useDispatch();
    const addExpense=(e)=>{
        e.preventDefault(); 
        dispatch(addTask({description:e.target.description.value, amount:e.target.amount.value, id:Date.now()}));
        console.log(e.target.description.value);
        closeForm();
    }
    const handleClickOutside=(e)=>{
        if(e.target.id==="modal"){
            closeForm();
        }
    }
    return (
        <div
        id="modal"
        className='fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm'
         onClick={handleClickOutside}
         >
            <div className='flex flex-col w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%] h-auto min-h-[400px] items-center justify-center rounded-md p-4 bg-white/6 border-2 backdrop-blur-md'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-3 sm:p-4 md:p-5 font-bold'>Add Expense</h1>
                <form onSubmit={addExpense} className='flex flex-col gap-3 sm:gap-4 w-full px-2 sm:px-4 md:px-6'>
                    <div className='flex flex-col'>  
                        <label className='text-lg sm:text-xl md:text-2xl p-2'>Enter the item</label>
                        <input 
                            name="description"
                            type="text" 
                            placeholder='Enter the item' 
                            className='px-3 sm:px-4 py-1 sm:py-2 rounded-md text-base sm:text-lg md:text-xl text-black w-full transition-all duration-200 border-2 border-transparent hover:border-black'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-lg sm:text-xl md:text-2xl p-2'>Add the amount</label>
                        <input 
                            name="amount"
                            type="text" 
                            placeholder='Enter the amount' 
                            className='px-3 sm:px-4 py-1 sm:py-2 rounded-md text-base sm:text-lg md:text-xl text-black w-full transition-all duration-200 border-2 border-transparent hover:border-black'
                        />
                    </div>
                    <div className='flex m-auto mt-6 sm:mt-8 w-full'>
                        <button
                            type="submit" 
                            className='w-full py-2 sm:py-3 mb-4 px-4 text-lg sm:text-xl md:text-2xl font-semibold rounded-md bg-white text-black hover:bg-white/90 transition-all duration-200'
                        >
                            Add Expense
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
