import React, {  useCallback, useEffect, useReducer, useState } from 'react'

import { HeaderTodo } from './Component/HeaderTodo'
import { reducer } from './Hooks/UseReducer'
import { ContextReducer } from './Hooks/UseReducer'
import { Storage } from './Hooks/Storage'
import { AllRouter } from './Router/Router'
// Start Routers





// End Routers

const App = () => {
  const [dataFetched,setDataFetched] = useState(false);
  let initialValue = {
    task:{
          todo:[],
          Progres:[],
          Completed:[],
          Delete:[]},
    DateT:{
      NextWeak:[],
      NextMounth:[],
      NextYear:[]
    }
    }
    
    const [state,dispatch ]= useReducer(reducer,initialValue)

    const DataUse = useCallback(async ()=>{
      try{
        for(const key in {
                todo:[],
                Progres:[],
                Completed:[],
                Delete:[]}){
          console.log(key)          
          const getDat = await Storage.getData(key);
          await dispatch({type:'InitialFirst',pyload:{type:key,list:getDat}});
          setDataFetched(true)
          console.log(" i have Rendered")
        }
      }
      catch(error){
        console.log("error Fetching Data from LocalStorage",error)
      }
      },[])
    // const data = async ()=>{
    //   try{
    //     for(const key in initialValue.task){
    //       console.log(key)          
    //       const getDat = await Storage.getData(key);
    //       await dispatch({type:'InitialFirst',pyload:{type:key,list:getDat}});
    //       setDataFetched(true)
    //       console.log("how mny Time ")
    //     }
    //   }
    //   catch(error){
    //     console.log("error Fetching Data from LocalStorage",error)
    //   }
    //   }
      useEffect(()=>{
    
        DataUse()
      },[DataUse])
      if(!dataFetched){
        return <>Still In Progress</>
      }
  return (
  <ContextReducer.Provider value={{ state,dispatch }}>
      <div className='bg-gray-100 h-screen flex '>
        <HeaderTodo />

        <div className='flex flex-col items-center w-full'>
            <AllRouter/>
        </div>
      </div>
    </ContextReducer.Provider>
  )
}
export default App