import React, { useContext } from 'react'
import { ContextReducer } from './../Hooks/UseReducer'
import { getByDisplayValue } from '@testing-library/react';

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
  let ButtonDis;
  switch(type){
      case "Delete":
      ButtonDis = <><button onClick={()=>{
                    dispatch({type:'RECOVER_DDELETE',pyload:{id:todo.id}})
                  }}>Recover</button> <button onClick={()=>{
                    dispatch({type:'DELETE_FOREVER',pyload:{id:todo.id}})
                  }}>Delete It</button>
                  </>

      break;
      case "Progress":
      ButtonDis = <>
        <button onClick={()=>{dispatch({action:'COMPLETE_TODO',pyload:{id:todo.id}})}}>Complete</button>
        <button onClick={()=>{dispatch({action:'REMOVE_FROM_ROGRESS',pyload:{id:todo.id}})}}>Remove from Progres</button>
      </>
      break;
      case "Done":
        ButtonDis = <>
                  <button onClick={()=>{dispatch({action:'',pyload:{id:todo.id}})}}></button>
                  <button onClick={()=>{dispatch({action:'',pyload:{id:todo.id}})}}></button>
            </>
      break;
      case "todo":
          ButtonDis =
          <>
            <button onClick={()=>{dispatch({action:'',pyload:{id:todo.id}})}}></button>
            <button onClick={()=>{dispatch({action:'',pyload:{id:todo.id}})}}></button>
          </>
      break; 
      default:
        ButtonDis = <button onClick={}>Nothing </button>
  }
    return<>
{<div>{ButtonDis}</div>}

            <div  className={`w-50 my-4 bg-${Colors[type]}-500 rounded flex justify-between gap-2`}>
                <div className='grow flex items-center justify-between'>
                    <p>{todo.name}</p>
                    <p>{new Date(todo.date).toLocaleDateString()}</p>
                </div>

                <div className=''>
                    <button className='bg-green-500 font-bold rounded p-4 mr-2' onClick={()=>{
                      dispatch({type:"DELETE_START_TODO",pyload:{id:todo.id,type:'start'}})
                    }}>Start</button>
                    <button onClick={()=>dispatch({type:"DELETE_START_TODO",pyload:{id:todo.id,type:'delete'}})} 
                    className='bg-red-500 font-bold rounded p-4'>Delete</button>
                </div>
            </div>
    </>
}