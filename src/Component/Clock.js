import React, { useState } from 'react'

export const Clock = () => {
    let time  = new Date().toLocaleTimeString()

    const [ctime,setTime] = useState(time)
    const UpdateTime=()=>{
      time =  new Date().toLocaleTimeString()
      setTime(time)
    }
    setInterval(UpdateTime)
    return <h1 className='text-2xl'>{ctime}</h1>
}
