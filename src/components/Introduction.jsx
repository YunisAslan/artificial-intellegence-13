import React from 'react'
import Button from './Button'
import syberImg from '../images/Introduction-section/syber.svg'

const Introduction = () => {
  return (
    <section className="introduction text-white grid grid-cols-4 pt-12">

        <div className="intro-left mm:col-span-4 xl:col-span-2 xl:pr-28 pt-[6rem] xl:min-w-[40rem] mm:min-w-fit mm:pr-0 mm:text-center xl:text-left">
            <h6 className='text-btnColor uppercase font-semibold text-lg'>Next genaretion platform</h6>
            <h2 className='font-extrabold text-5xl'>Artificial intelligence <br /> & Syber security</h2>
            <p className='leading-7'>Lorem ipsum is placeholder text commonly used in the graphic, <br /> print, and publishing industries for previewing layouts and <br /> visual mockups.</p>

            <div className="btn-groups flex">
                <Button btnText="Get started" className="my-custom-btn bg-red-800 text-4xl"/>
                <Button btnText="Watch video" icon=""/>
            </div>
        </div>

        <div className="intro-right  mm:col-span-4 xl:col-span-2 flex xl:justify-end w-100 mm:justify-center">
            <img src={syberImg} alt="" className='w-100'/>
        </div>

    </section>
  )
}

export default Introduction