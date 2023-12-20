import React, { useContext, useState } from 'react'
import { ContextReducer } from '../Hooks/UseReducer'
import plus from './../icons/plus.svg'
export const FormTodo = () => {
    const {dispatch} = useContext(ContextReducer)
    const [todo,setTodo] = useState('')
    const [pred,setPeroid] = useState('')
    const HandlingSubmitting =(e)=>{
        e.preventDefault ()
        
        dispatch({type:"ADD",pyload:{id:Date.now(),name:todo,date:pred}})
        setTodo('')
        setPeroid('')
    }

  return (
    <div >
        <form onSubmit={HandlingSubmitting} className='bg-gray-200 flex p-2 '>
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
    </div>
  )
}
