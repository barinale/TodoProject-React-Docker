import React, { useContext } from 'react'
import { ContextReducer } from './../Hooks/UseReducer'
import { VerififyTime } from '../Hooks/VerififyTime';
export const ListTodo = () => {
  const very = VerififyTime();
  const {state} = useContext(ContextReducer);
   const  keys = Object.keys(state)
  return <div className='self-stretch	px-2'>
    <div className='flex flex-col flex-wrap justify-between '>

      {
      keys.flatMap((key) =>
        {
          let phrase = key =='Progres' ? 'In Progress ':key;
          return<div className='bg-gray-200'>  
        <h1 className='bg-white rounded p-2'>{phrase} :</h1>
        {state[key].map((item) => (
          <TodoUi key={item.id} todo={item} type={key} />
        ))}

        <br/>
        </div>
        }
      )
      } 

    
    </div>

    </div>
}



const TodoUi = ({todo,type})=>{
  const {dispatch} = useContext(ContextReducer);
  const Colors = {Delete:'slate',Progres:'blue',Done:'Green',todo:'green'}
  let ButtonDis;
  //here i make buttons depend on the type of todo and the actin should do for evey button
  switch(type){
      case "Delete":
      ButtonDis = <><button className={`bg-green-700 p-1 rounded`} onClick={()=>{
                    dispatch({type:'RECOVER_DELETE_TODO',pyload:{id:todo.id,type:'Recover'}})
                  }}>Recover</button> <button className={`bg-red-700 p-1 rounded`}  onClick={()=>{
                    dispatch({type:'RECOVER_DELETE_TODO',pyload:{id:todo.id,type:'DeleteIt'}})
                  }}>Delete It</button>
                  </>

      break;
      case "Progres":
      ButtonDis = <>
        <button className={`bg-amber-700 p-1 rounded`} onClick={()=>{dispatch({type:'COMPLETE_REMOVE_PROGRESS_TODO',pyload:{id:todo.id,type:'Complete'}})}}>Complete</button>
        <button className={`bg-emerald-700 p-1 rounded`} onClick={()=>{dispatch({type:'COMPLETE_REMOVE_PROGRESS_TODO',pyload:{id:todo.id,type:'Remove'}})}}>Remove from Progres</button>
      </>
      break;
      case "Completed":
        ButtonDis = <>
                  <button className={`bg-blue-700 p-1 rounded`} onClick={()=>{dispatch({type:'BACK_TO_PROGESS',pyload:{id:todo.id}})}}>back it To Progress</button>
            </>
      break;
      case "todo":
          ButtonDis =
          <>
            <button className={`bg-green-700 p-1 rounded`} onClick={()=>{dispatch({type:'DELETE_START_TODO',pyload:{id:todo.id,type:"start"}})}}>start</button>
            <button className={`bg-red-700 p-1 rounded`} onClick={()=>{dispatch({type:'DELETE_START_TODO',pyload:{id:todo.id,type:"delete"}})}}>delete</button>
          </>
      break; 
      default:
        ButtonDis = <span>Nothing</span>
  }
    return<>

            <div  className={`w-50 my-4 rounded flex justify-between gap-2`}>
                <div className='grow flex items-center justify-between'>
                    <p>{todo.name}</p>
                    <p>{new Date(todo.date).toLocaleDateString()}</p>
                </div>

                <div className='py-2'>
                    {ButtonDis}
                </div>
            </div>
    </>
}