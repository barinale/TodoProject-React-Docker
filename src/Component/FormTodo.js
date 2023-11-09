import React, { useState } from 'react'

export const FormTodo = ({disp}) => {
    const [todo,setTodo] = useState('')
    const [pred,setPeroid] = useState('')
    const HandlingSubmitting =(e)=>{
        e.preventDefault ()
        
        disp({type:"Add",pyload:{id:Date.now(),name:todo,date:pred}})
        setTodo('')
        setPeroid('')
    }

  return (
    <div >
        <form onSubmit={HandlingSubmitting} className='m-auto w-96 bg-slate-50 rounded p-4'>
        <div className='my-6'>
            <label htmlFor="todo" className='block text-xl text-gray-600 font-bold'>Todo</label>
            <input type='text' required placeholder='Entre Todo Name' name='todo' value={todo} onChange={(e)=>setTodo(e.target.value)} className='p-4 w-full border border-gray-600 rounded my-4'  />
        </div>

        <div className='my-6'>   
            <label htmlFor="Date" className='block text-xl text-gray-600 font-bold'>Date</label>
            <input type='date' required name="Date" value={pred} onChange={(e)=>setPeroid(e.target.value)} className='p-4 w-full border border-gray-600 rounded my-4' />
        </div>

        <button type='submit' className='bg-sky-700 rounded p-4 text-white text-xl'>Submit</button>
        </form>
    </div>
  )
}
