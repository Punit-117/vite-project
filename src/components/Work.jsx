import React from 'react'
import work1 from '../assets/work1.png'

export default function Work() {
  return (
    <div id='work' className='bg-gray-600'>

      <div className='flex flex-col justify-center items-center pt-10 text-white'>
        <h2 className='text-orange-600 font-bold'>Portfolio</h2>
        <h1 className='text-2xl'>My Amazing Works</h1>
      </div>

      <div className='flex justify-center mt-20'>
        <img className='rounded-2xl shadow-2xl w-2/3 cursor-pointer hover:scale-110 duration-150 transition ease-in-out ' src={work1} alt='work1' />
      </div>

      <div className='flex justify-center mt-20'>
        <img className='rounded-2xl shadow-2xl w-2/3 cursor-pointer hover:scale-110 duration-150 transition ease-in-out' src={work1} alt='work1' />
      </div>

      <div className='flex justify-center mt-20'>
        <img className='rounded-2xl shadow-2xl w-2/3 cursor-pointer hover:scale-110 duration-150 transition ease-in-out' src={work1} alt='work1' />
      </div>

    </div>
  )
}
