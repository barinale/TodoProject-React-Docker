import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FormTodo } from '../Component/FormTodo'
import { ListTodo } from '../Component/ListTodo'

export const AllRouter = () => {
  return (
   <div  className='w-full '>
    <Routes>
        <Route path="/" element={<><FormTodo /><ListTodo/></>} />
        <Route path="/NextWeak" element={<div className=''></div>} />
    </Routes>
   </div> 
  )
}
