import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../../component/Button'
import discord from '../../../assets/discord.svg'
import figma from '../../../assets/figma.svg'
import openai from '../../../assets/openai.svg'
import retool from '../../../assets/retool.svg'
import slack from '../../../assets/slack.svg'
import stripe from '../../../assets/stripe.svg'



const Header = () => {

const [isHovered, setIsHovered] = useState(false)

  return (
    <header className='h-[100svh] '>
       <nav className='flex items-center justify-between p-4 px-20 h-[7%]'>
        <div>
            <h1 className='font-[neuton-800] text-[1.5rem]'>compound</h1>
        </div>
        <ul className='flex items-center gap-10'>
            <NavLink to="#">Membership</NavLink>
            <NavLink to="#">Resources</NavLink>
            <NavLink to="#">Company</NavLink>
        </ul>
        <div className='flex items-center gap-5'>
            <button>Sign in</button>
            <Button type="default">Get started</Button>
           
           
            
        </div>
       </nav>
       <section className='p-36 h-[93%]'>
        <h1 className={`font-bold text-[3.5rem] cursor-pointer ${!isHovered ? "blur-sm" : "blur-0"} hover:transition-all`} onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(true)}>We focus on your finances.</h1>
        <h1 className={`font-bold text-[3.5rem] ${isHovered ? "blur-sm" : "blur-0"} hover:transition-all`}  onMouseOver={() => setIsHovered(false)} onMouseLeave={() => setIsHovered(false)}>We focus on what matters the most.</h1>

        <div className='flex items-center gap-5 py-10'>
          <Button type="default">Get started</Button>
          <Button type="primary">Learn more</Button>
        </div>

        <div className='py-36 flex items-center gap-10'>
            <div className='text-[1.5rem]'>
                <p className='w-[20rem]'>Wealth management for people from leading tech companies</p>
            </div>
            <div className='flex items-center gap-10'>
                <img src={discord} alt="" />
                <img src={figma} alt="" />
                <img src={openai} alt="" />
                <img src={retool} alt="" />
                <img src={slack} alt="" />
                <img src={stripe} alt="" />
            </div>
        </div>
       </section>
    </header>
  )
}

export default Header