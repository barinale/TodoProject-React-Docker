import React from 'react'

export const ListTodo = () => {
  return (
    <div>
    <TodoUi todo={{ name:"working i  pOrtodlio",date:Date.now }}/>        
    </div>
  )
}



const TodoUi = ({todo})=>{
    return<>
            <div className='w-96 my-4 bg-orange-500 rounded flex justify-between'>
                <div>
                    <p>{todo.name}</p>
                    <p>{todo.date}</p>

                </div>
                <div>
                    <button>Start</button>
                    <button>Delete</button>
                </div>
            </div>
    </>
}