import React, { useState } from 'react'
import Hero from './Hero'
import Home from './Home'
import Work from './work'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'
import { Link } from 'react-scroll'
import { MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import resume from '../assets/resume.pdf'

export default function Header() {

    const [click, setclick] = useState(false)
    const handelclick = () => setclick(!click)
    const closemenu = () => setclick(!click)
    return (

        <div className='container mx-auto   '>
            <div className='fixed flex justify-around items-center bg-gray-400 h-16 w-full z-10'>
                <div className='mt-1 text-2xl font-bold text-white'>
                    <h1>Punit Dixit</h1>
                </div>
                <ul className={click ? 'hidden md:flex flex-wrap md:items-center md:mt-2 md:gap-8 left-0 mt-44 bg-gray-400 ' : 'flex flex-col  justify-between gap-2 p-5 min-w-56   md:flex md:flex-row md:items-center md:mt-2 md:gap-8 md:p-0   mt-44 bg-gray-400 '}>
                    <li className='cursor-pointer hover:text-orange-400 font-semibold'>
                        <Link to="hero" spy={true} smooth={true} hashSpy={true} offset={50} duration={500} onClick={closemenu} >Home</Link>
                    </li>
                    <li className='cursor-pointer hover:text-orange-400'>
                        <Link to="about" spy={true} smooth={true} hashSpy={true} offset={50} duration={500} onClick={closemenu} >About</Link>
                    </li>
                    <li className='cursor-pointer hover:text-orange-400'>
                        <Link to="work" spy={true} smooth={true} hashSpy={true} offset={50} duration={500} onClick={closemenu} >Portfolio</Link>
                    </li>
                    <li className='cursor-pointer hover:text-orange-400'>
                        <Link to="skills" spy={true} smooth={true} hashSpy={true} offset={50} duration={500} onClick={closemenu} >Skills</Link>

                    </li>
                    <li className='cursor-pointer hover:text-orange-400'>
                        <Link to="contact" spy={true} smooth={true} hashSpy={true} offset={50} duration={500} onClick={closemenu} >Contact</Link>

                    </li>
                    <a href={resume} download="resume">
                        <li className='cursor-pointer rounded-full bg-orange-400 p-1 hover:bg-orange-200'>Download CV</li>
                    </a>


                </ul>

                <a className='md:hidden absolute bottom-0' onClick={handelclick}>
                    {click ?  <MdMenu /> : <RxCross1 /> }
                </a>
                {/* <a className='md:hidden'>
                    <RxCross1 />
                </a> */}
            </div>

            <Hero />        
            <Home />
            <Work />
            <Skills />
            <Contact className='mb-10' />
            <Footer />

        </div>
    )
}
