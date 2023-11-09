import React from 'react'

export const HeaderTodo = () => {
  return (
    <div className='bg-slate-700 flex justify-between'>
        <div className='bg-green-700 h-40 w-40 rounded flex justify-center items-center '>
            <h4 className='text-fuchsia-50 font-bold text-lg inline-block  '>Done :</h4>
        </div>
        <div className='bg-red-700 h-40 w-40 rounded flex justify-center items-center '>
            <h4 className='text-fuchsia-50 font-bold text-lg inline-block  '>Delete :</h4>
        </div>
        <div className='bg-blue-700 h-40 w-40 rounded flex justify-center items-center '>
            <h4 className='text-fuchsia-50 font-bold text-lg inline-block  '>Progress :</h4>
        </div>
        <div className='bg-slate-300 h-40 w-40 rounded flex justify-center items-center '>
            <h4 className='text-fuchsia-50 font-bold text-lg inline-block  '>Not Started :</h4>
        </div>
    </div>
  )
}
