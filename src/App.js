import React, {  useEffect, useReducer, useState } from 'react'
import { HeaderTodo } from './Component/HeaderTodo'
import { FormTodo } from './Component/FormTodo'
import { ListTodo } from './Component/ListTodo'
import { reducer } from './Hooks/UseReducer'
import { ContextReducer } from './Hooks/UseReducer'
import { Storage } from './Hooks/Storage'

const App = () => {
  const [dataFetched,setDataFetched] = useState(false);

  let initialValue = {
    Delete:[],
    Progres:[],
    Done:[],
    todo:[]}
    
    const [state,dispatch ]= useReducer(reducer,initialValue)


    const data = async ()=>{
      try{

        for(const key in initialValue){          
          const getDat = await Storage.getData(key);
          await dispatch({type:'InitialFirst',pyload:{type:key,list:getDat}});
          setDataFetched(true)
        }
      }
      catch(error){
        console.log("error Fetching Data from LocalStorage",error)
      }
      }
      useEffect(()=>{
    
        data()
      },[])
      if(!dataFetched){
        return <>Still In Progress</>
      }
  return (
  <ContextReducer.Provider value={{ state,dispatch }}>
      <div className='bg-gray-100 h-screen flex '>
        <HeaderTodo />
        <FormTodo  />
        <ListTodo  />
      </div>
    </ContextReducer.Provider>
  )
}
export default App