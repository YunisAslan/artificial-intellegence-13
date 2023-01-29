import React from 'react'
import { FaPlay } from "react-icons/fa";

const Button = ({btnText,icon}) => {

    return (

        <button className='my-custom-btn bg-btnColor py-4 px-8 rounded-sm hover:brightness-110 mr-5'>
           {icon && <img src={<FaPlay />} alt="" />} {btnText} 
        </button>
    )
}

export default Button