import React, { useContext, useState } from 'react'
import { ContextReducer } from '../Hooks/UseReducer'
import plus from './../icons/plus.svg'
import { Clock } from './Clock'
export const FormTodo = () => {
    const {dispatch} = useContext(ContextReducer)
    const [todo,setTodo] = useState('')
    const [pred,setPeroid] = useState('')
    const [error,setError] = useState(false);
    const HandlingSubmitting =(e)=>{
        e.preventDefault ()
        console.log()

        //for checken day and mounth and year wbefore adding todo so most be grathen that today 
        if(new Date(new Date(pred).toISOString().slice(0, 10)).getTime() >= new Date(new Date().toISOString().slice(0, 10)).getTime() ){
            dispatch({type:"ADD",pyload:{id:Date.now(),name:todo,date:pred}})
            setTodo('')
            setPeroid('')
            setError(false)
        }else{
            setError(true)

        }
    }

  return (
    <div className='w-full bg-blue-400 flex justify-between'>
        <div>
            <form onSubmit={HandlingSubmitting} className='bg-gray-200 flex p-2' autoComplete="off">
            <div className=''>
                <input type='text' required placeholder='Entre Todo Name' name='todo' value={todo} 
                onChange={(e)=>setTodo(e.target.value)} className='p-2'  />
            </div>

            <div className=''>   
                <label htmlFor="Date" className=''>Date</label>
                <input type='date' required name="Date" value={pred} 
                onChange={(e)=>setPeroid(e.target.value)} className='p-2' />
            </div>

            <button type='submit' className='bg-white rounded rounded-2xl'><img src={plus} alt="Add" className='w-10'/></button>
            </form>
            {error ? <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Date </strong>
                        <span className="block sm:inline"> must be greater than or equal to today.</span>
                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                        </span>
                        </div>: ''}
        </div>
        <div className='p-3'>
            <Clock />
        </div>
    </div>
  )
}
