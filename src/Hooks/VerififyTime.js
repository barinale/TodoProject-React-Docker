import React, { useContext, useEffect } from 'react'
import { Storage } from './Storage'
import { ContextReducer } from './../Hooks/UseReducer'

export const VerififyTime = () => {
  const {state,dispatch} = useContext(ContextReducer);
  
    const data = async ()=>{
        try{
             for(const key in state){          
                  const getDat = await Storage.getData(key);
                  await dispatch({type:'InitialFirst',pyload:{type:key,list:getDat}});
              }
            }
      catch(error){
            console.log("error Fetching Data from LocalStorage",error)
      }
    }
    
    useEffect(()=>{
          data()
    },[])


  return (
    <div>VerififyTime</div>
  )
}
