import React, { useContext } from 'react'
import { ContextReducer } from './../Hooks/UseReducer'

export const ListTodo = ({stat}) => {
  return (
    <div>
      {stat ?stat.todo.map((item)=>{
        return <TodoUi key={item.id} todo={item}/> 
      }):"List is Empt" }
              
    </div>
  )
}



const TodoUi = ({todo})=>{
  const {dispatch} = useContext(ContextReducer);
    return<>
            <div  className='w-full my-4 bg-orange-500 rounded flex justify-between gap-2'>
                <div className='grow flex items-center justify-between'>
                    <p>{todo.name}</p>
                    <p>{new Date(todo.date).toLocaleDateString()}</p>

                </div>
                <div className=''>
                    <button className='bg-green-500 font-bold rounded p-4 mr-2'>Start</button>
                    <button onClick={()=>dispatch({type:"DELETE",pyload:{id:todo.id}})} 
                    className='bg-red-500 font-bold rounded p-4'>Delete</button>
                </div>
            </div>
    </>
}