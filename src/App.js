import React, { useReducer } from 'react'
import { HeaderTodo } from './Component/HeaderTodo'
import { FormTodo } from './Component/FormTodo'
import { ListTodo } from './Component/ListTodo'
import { reducer } from './Hooks/UseReducer'
const App = () => {
  let initialValue = {todo:[{id:1,name:"nothing to do",date:Date.now()}]}
  const [state,dispatch ]= useReducer(reducer,initialValue)
  
  return (
    <div className='bg-gray-600 h-screen flex flex-col justify-between'>
      <HeaderTodo />
      <FormTodo disp={dispatch} />
      <ListTodo  stat={state}/>
    </div>
  )
}
export default App