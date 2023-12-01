import React, { useContext } from 'react'
import { ContextReducer } from './../Hooks/UseReducer'

export const ListTodo = () => {
  const {state} = useContext(ContextReducer);
   const  keys = Object.keys(state)
  return (
    <div>
        
    {
      keys.forEach((key)=>{
       return state[key].map((item)=>{
          return <TodoUi key={item.id} todo={item} type={key}/>
        })
      })
    }
   
    
    </div>

  )
}



const TodoUi = ({todo,type})=>{
  const {dispatch} = useContext(ContextReducer);
  console.log(type)
    return<>
            <div  className='w-1/3 my-4 rounded flex justify-between gap-2'>
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