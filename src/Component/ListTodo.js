import React from 'react'

export const ListTodo = ({stat}) => {
  console.log(stat)
  return (
    <div>
      {stat.todo.map((item)=>{
        return <TodoUi key={item.id} todo={item}/> 
      })}
              
    </div>
  )
}



const TodoUi = ({todo})=>{
    return<>
            <div  className='w-96 my-4 bg-orange-500 rounded flex justify-between'>
                <div>
                    <p>{todo.name}</p>
                    <p>{new Date(todo.date).toLocaleDateString()}</p>

                </div>
                <div>
                    <button>Start</button>
                    <button>Delete</button>
                </div>
            </div>
    </>
}