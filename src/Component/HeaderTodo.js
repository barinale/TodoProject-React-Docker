import React, { useContext } from 'react'
import { ContextReducer } from '../Hooks/UseReducer'
import trash from './../icons/trash.svg'
import Progress from './../icons/Progress.svg'
import todo from './../icons/todo.svg'
import done from './../icons/done.svg'
import { Link } from 'react-router-dom'

export const HeaderTodo = () => {
    const {state} = useContext(ContextReducer)
  return (
    <div className='w-1/3 bg-gray-200 flex flex-col gap-2 p-4'>
        <div className=''>
            <h4 className='flex gap-2'>
                <img src={done} alt="trashImage" className='w-4'/>
                Done : {state.task.Completed.length}
            </h4>
        </div>
        <div className=''>
            <h4 className='flex gap-2'>
                <img src={trash} alt="trashImage" className='w-4'/>

                Delete : {state.task.Delete.length}
            </h4>
        </div>
        <div className=''>
            <h4 className='flex gap-2'>
                <img src={Progress} alt="trashImage" className='w-4'/>

                Progress :{state.task.Progres.length}
            </h4>
        </div>
        <div className=''>
            <h4 className='flex gap-2'>
                <img src={todo} alt="trashImage" className='w-4'/>

                Not Started :{state.task.todo.length}
            </h4>
        </div>
        <div>
        {/* <Link to="/NextWeak" >For Next Week</Link> */}


        </div>
    </div>
  )
}
