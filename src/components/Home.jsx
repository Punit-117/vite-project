import React from 'react'
import image2 from '../assets/punit2.jpeg'
import image3 from '../assets/punit3.jpeg'

export default function Home() {
  return (
    <div id='about' className='bg-gray-600 grid grid-cols-2 min-h-screen z-0'>
      <div className='flex justify-center items-center text-white relative'>
        <img className='h-2/3 w-80 rounded-lg shadow-xl' src={image2} alt='punit2' />
        <img className='absolute h-52 w-52 bottom-5 left-24 rounded-lg shadow-2xl' src={image3} />
        

      </div>
      <div className='flex justify-center items-center text-center '>
        <div className=' text-start text-white'>
          <h1 className='font-bold text-xl'>I'm a Developer</h1>
          <h1 className='font-semibold text-4xl mt-2'>I Develop Application that Help People</h1>
          <p className='text-lg mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elr Lorem ipsum dolor sit amet<br /> consectetur adipisicing elit. Ducimus fugit quaerat consequatur 
          voluptatum voluptates numquam, fuga aliquid ex amet, similique hic, assumenda eum ipsum adipisci deserunt cum aperiam recusandae quod? </p>
          <div className='flex justify-between mt-3'>

            <h3 className='rounded-full bg-blue-500 p-2 cursor-pointer hover:bg-blue-200'>View Portfolio</h3>
      
          </div>
        </div>
      </div>
    </div>
  )
}
