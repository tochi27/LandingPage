import React from 'react'
import arrow from '../assets/arrow.svg'

const Button = ({ type, children, onClick}) => {
  switch (type.toLowerCase()) {
    case "primary":
        return <button className='flex items-center gap-3 border border-1 border-[#e0e0e0] px-6 py-2 rounded-3xl bg-white text-black' onClick={onClick}>{children}</button>
        
    case "default":
        return <button className='flex items-center gap-3 border border-1 border-[#e0e0e0] px-6 py-2 rounded-3xl bg-black text-white' onClick={onClick}>{children} <img src={arrow} alt="" /></button>
  
    default:
        break;
  }
}

export default Button