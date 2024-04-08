import React from 'react'
import image from '../assets/punit.jpeg'
import heroimg from '../assets/hero.jpg'
import Typewriter from 'typewriter-effect'

export default function Hero() {
    return (
        

        <div id='hero' className='bg-gradient-to-r from-violet-500 to-fuchsia-500 grid grid-cols-2 min-h-screen z-0'>
            <div className='flex justify-center items-center text-white'>
                <div className=' text-start'>
                    <h1 className='font-bold text-xl'>Hello I'm</h1>
                    <h1 className='font-semibold text-4xl'>Punit dixit</h1>

                    <h3 className='flex flex-row font-bold text-xl my-2'>
                        <span className='text-red-500'>

                        <Typewriter options={
                            {
                                strings: ['web Developer', 'App Developer'],
                                autoStart: true,
                                loop: true
                            }
                        } /> 
                        </span>from Ajmer</h3>
                    <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elr<br />acaca </p>
                    <div className='flex justify-between mt-3'>

                        <h3 className='rounded-full bg-blue-500 p-2 cursor-pointer'>Get a Quote</h3>
                        <h1 className='cursor-pointer'>About Me</h1>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center text-center '>
                <div className='relative '>

                    <img className=' h-80 w-80 m-5 shadow-2xl ' src={image} alt='Punit' />
                    <h1 className='absolute top-8 left-0 bg-fuchsia-300 rounded-md p-1 text-lg'>Fresher</h1>
                    <span className='absolute bottom-8 right-0 bg-fuchsia-300 rounded-md p-1 text-lg'>10+ projects</span>
                </div>
            </div>
        </div>
    )
}
