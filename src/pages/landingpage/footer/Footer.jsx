import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='h-[74.75rem] bg-[#333333]'>
        <div className='h-[20rem] w-[34rem] px-20 py-5 text-white flex items-center justify-between'>
            <div className='grid'>
                <div className=''>
                    <h1 className='font-bold '>Resources</h1>
                </div>
                <NavLink>The Manual</NavLink>
                <NavLink>The Archive</NavLink>
                <NavLink>Offer Calculator</NavLink>
            </div>
            <div className='grid'>
                <div className=''>
                    <h1 className='font-bold '>Company</h1>
                </div>
                <NavLink className="">Approach</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Careers</NavLink>
                <NavLink>Newsroom</NavLink>
                <NavLink>FAQs</NavLink>
            </div>
            <div className='grid'>
                <div className=''>
                    <h1 className='font-bold '>Legal</h1>
                </div>
                <NavLink>Directory</NavLink>
                <NavLink>Privacy</NavLink>
                <NavLink>Terms of Service</NavLink>
                <NavLink>Security</NavLink>
            </div>
        </div>
    </footer>
  )
}

export default Footer