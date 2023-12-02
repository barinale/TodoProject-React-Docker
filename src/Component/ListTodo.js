import React, { useContext } from 'react'
import { ContextReducer } from './../Hooks/UseReducer'

export const ListTodo = () => {
  const {state} = useContext(ContextReducer);
   const  keys = Object.keys(state)
   console.log(state)
  return (
    <div className='flex flex-wrap justify-between'>

      {
      keys.flatMap((key) =>
        state[key].map((item) => (
          <TodoUi key={item.id} todo={item} type={key} />
        ))
      )
      }

    
    </div>

  )
}



const TodoUi = ({todo,type})=>{
  const {dispatch} = useContext(ContextReducer);
  const Colors = {Delete:'slate',Progres:'blue',Done:'Green',todo:'red'}
    return<>
            <div  className={`w-50 my-4 bg-${Colors[type]}-500 rounded flex justify-between gap-2`}>
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