import React, { useRef } from 'react'

import logo from '../images/logo.svg'
import { AiOutlineAlignLeft } from "react-icons/ai";
import { GiCrossedBones } from "react-icons/gi";
import Button from './Button';

const Navbar = () => {


    const overlayRef = useRef()

    const openCloseOverlay = (e) => {
        if (e.target.classList.contains('bars-icon')) {
            overlayRef.current.classList.add('active')
        }

        if (e.target.classList.contains('cross-icon') || e.target.contains('header')) {
            overlayRef.current.classList.remove('active')
        }

        console.log(e.target);
    }


    return (
        <>
            <div onClick={openCloseOverlay} className="overlay bg-black/80 text-white fixed h-screen left-0 w-0 text-4xl mm:flex xl:hidden overflow-x-hidden transition-[width] duration-500" ref={overlayRef}>

                <button onClick={openCloseOverlay} className='cross-icon absolute right-4 top-4'>
                    <GiCrossedBones className='pointer-events-none' />
                </button>


                <nav className='nav-links flex flex-col space-y-6 mt-28 ml-6'>
                    <a href="" className=' hover:translate-x-6 transition-transform duration-700'>Home</a>
                    <a href="" className=' hover:translate-x-6 transition-transform duration-700'>About</a>
                    <a href="" className=' hover:translate-x-6 transition-transform duration-700'>Services</a>
                    <a href="" className=' hover:translate-x-6 transition-transform duration-700'>Blog</a>
                    <a href="" className=' hover:translate-x-6 transition-transform duration-700'>Contact</a>
                </nav>

            </div>


            <header className="header h-24 flex items-center text-white justify-between">

                <div className="logo mr-20">
                    <img src={logo} alt="" />
                </div>

                <button onClick={openCloseOverlay} className='bars-icon text-4xl mm:block xl:hidden'>
                    <AiOutlineAlignLeft className='pointer-events-none' />
                </button>

                <nav className='nav-links flex-1 space-x-10 mm:hidden xl:flex'>
                    <a href="" className=''>Home</a>
                    <a href="" className=''>About</a>
                    <a href="" className=''>Services</a>
                    <a href="" className=''>Blog</a>
                    <a href="" className=''>Contact</a>
                </nav>

                <div className='crazy-btn'>
                    <Button btnText="Sign in" />
                </div>

            </header>

        </>
    )
}

export default Navbar