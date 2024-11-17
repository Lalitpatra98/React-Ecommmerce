import React from 'react'
import Gradient from '../assets/gradients.jpg'
const Email = () => {
  return (
    <>
     <div className='h-36 bg-gradient-to-r from-orange-400 to-indigo-500 m-4 flex flex-col justify-center items-center rounded-md ' >
      <h1 className='text-white text-2xl'>Get notify about new product </h1>
      <input type="text" className='w-64 m-4 rounded p-2 outline-none'  placeholder='Email'/>
     </div>
    </>
   
  )
}

export default Email