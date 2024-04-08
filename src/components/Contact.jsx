import React, { useState } from 'react'

export default function Contact() {


    const [name, setname] = useState('');
    const [email, setemail] = useState('');

    const handlesubmit = () => {
        console.log(name, email);

        setemail('');
        setname('');
    }

    return (
        <div id='contact' className='bg-gray-600'>
            <div className='flex justify-center text-white'>
                <h1 className='my-8 text-2xl'>Contact By Mail</h1>
            </div>


            <div className='flex justify-center items-center mt-5'>
                <div className='bg-blue-400 w-2/3 grid grid-cols-2 justify-center items-center gap- my-6'>
                    <div className='m-7'>

                        <label className="block text-sm font-medium text-white ">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder='Enter your name'
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            required
                            className=" p-2 block border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />

                        <div className='my-4'>
                            <textarea placeholder='Message' className='p-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500  ' />

                        </div>

                    </div>

                    <div className='m-7 '>


                        <label className="block text-sm font-medium text-white ">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            required
                            className="p-2 block  border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />


                        <div className='flex justify-between my-4 ' onClick={handlesubmit}>

                            <h3 className='rounded-md bg-orange-500 p-2 cursor-pointer hover:bg-blue-200'>submit</h3>

                        </div>

                    </div>
                </div>


            </div>



        </div>
    )
}
