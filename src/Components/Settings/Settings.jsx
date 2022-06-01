import React from 'react'
import { useSelector } from 'react-redux'
const Settings = () => {
  const draggable = useSelector(state => state.drag);
  console.log(draggable)
  return (
    <div className='bg-amber-300'>
        <div >
         
            <h1>asdsad</h1>
            <h1>Settings</h1>
            <h1>Settings</h1>
            <h1>Settings</h1>
            <h1>Settings</h1>
            <h1>Settings</h1>
            <h1>Settings</h1>
        </div>
    </div>
  )
}

export default Settings