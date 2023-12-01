import React, { useContext } from 'react'
import { ContextReducer } from '../Hooks/UseReducer'

export const HeaderTodo = () => {
    const {state} = useContext(ContextReducer)
  return (
    <div className='bg-slate-700 flex justify-between'>
        <div className='bg-green-700 h-40 w-40 rounded flex justify-center items-center '>
            <h4 className='text-fuchsia-50 font-bold text-lg inline-block  '>Done : {state.Done.length}</h4>
        </div>
        <div className='bg-red-700 h-40 w-40 rounded flex justify-center items-center '>
            <h4 className='text-fuchsia-50 font-bold text-lg inline-block  '>Delete : {state.Delete.length}</h4>
        </div>
        <div className='bg-blue-700 h-40 w-40 rounded flex justify-center items-center '>
            <h4 className='text-fuchsia-50 font-bold text-lg inline-block  '>Progress :{state.Progres.length}</h4>
        </div>
        <div className='bg-slate-300 h-40 w-40 rounded flex justify-center items-center '>
            <h4 className='text-fuchsia-50 font-bold text-lg inline-block  '>Not Started :{state.todo.length}</h4>
        </div>
    </div>
  )
}
