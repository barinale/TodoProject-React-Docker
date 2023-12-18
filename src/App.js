import React, {  useEffect, useReducer } from 'react'
import { HeaderTodo } from './Component/HeaderTodo'
import { FormTodo } from './Component/FormTodo'
import { ListTodo } from './Component/ListTodo'
import { reducer } from './Hooks/UseReducer'
import { ContextReducer } from './Hooks/UseReducer'
import { Storage } from './Hooks/Storage'

const App = () => {
  

  let initialValue = {
    Delete:[],
    Progres:[],
    Done:[],
    todo:[]}
    
    const [state,dispatch ]= useReducer(reducer,initialValue)

    useEffect(()=>{
      for(const key in initialValue){          
          dispatch({type:'InitialFirst',pyload:{type:key,list:[...Storage.getData(key)]}});
      }
    },[])

  return (
  <ContextReducer.Provider value={{ state,dispatch }}>
      <div className='bg-gray-600 h-screen flex flex-col '>
        <HeaderTodo />
        <FormTodo  />
        <ListTodo  />
      </div>
    </ContextReducer.Provider>
  )
}
export default App