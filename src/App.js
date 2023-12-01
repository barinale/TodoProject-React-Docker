import React, {  useReducer } from 'react'
import { HeaderTodo } from './Component/HeaderTodo'
import { FormTodo } from './Component/FormTodo'
import { ListTodo } from './Component/ListTodo'
import { reducer } from './Hooks/UseReducer'
import { ContextReducer } from './Hooks/UseReducer'

const App = () => {
  let initialValue = {
    Delete:[],
    Progres:[],
    Done:[],
    todo:
    [
    {id:1,name:"nothing to do",date:Date.now()},
    {id:2,name:"nothing to do 1",date:Date.now()},
    {id:3,name:"nothing to do 12",date:Date.now()},
    {id:4,name:"nothing to do 13",date:Date.now()},
    {id:5,name:"nothing to do 14",date:Date.now()},
    {id:6,name:"nothing to do 15",date:Date.now()}]}
  const [state,dispatch ]= useReducer(reducer,initialValue)
  
  return (
  <ContextReducer.Provider value={{ state,dispatch }}>
      <div className='bg-gray-600 h-screen flex flex-col justify-between'>
        <HeaderTodo />
        <FormTodo  />
        <ListTodo  />
      </div>
    </ContextReducer.Provider>
  )
}
export default App