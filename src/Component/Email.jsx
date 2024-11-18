import React from 'react'
import Gradient from '../assets/gradients.jpg'
const Email = () => {
  return (
    <>
    <div className='dark:bg-gradient-to-r from-slate-500 to-slate-600'>
       <div className='h-36 bg-gradient-to-r from-orange-400 to-indigo-500  flex flex-col justify-center items-center p-4 dark:bg-none' >
      <h1 className='text-white text-2xl'  data-aos="fade-up">Get notify about new product </h1>
      <input type="text" className='w-64 m-4 rounded p-2 outline-none'  data-aos="fade-up" data-aos-anchor-placement="top-bottom"  placeholder='Email' />
     </div>
    </div>
    
    </>
   
  )
}

export default Email