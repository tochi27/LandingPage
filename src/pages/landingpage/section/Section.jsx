import React from 'react'
import Button from '../../../component/Button'
import { NavLink } from 'react-router-dom'

const Section = () => {
  return (
    <section className='flex items-center justify-between h-[31rem] px-20 bg-[#dfdfdf]'>
      <div>
        <h1 className='font-bolder text-[4rem] w-[30rem] py-20'>Modern wealth management</h1>
        <p className='w-[26rem]'>We help you with everything you need to manage your finances(advice, tracking, investments, taxes, borrowing, and more)</p>
        <div className='flex items-center gap-5 py-5'>
          <Button type="default">Get started</Button>
          <Button type="primary">Learn more</Button>
        </div>
      </div>

      <div className='grid gap-[2.4rem] font-medium text-[1.5rem]'>
        <NavLink className="text-[#c5c6d0]" to="#">Custom Indexing</NavLink>
        <NavLink className="text-[#898888]" to="#">Alternative Investment</NavLink>
        <NavLink className="text-[#898888]" to="#">Asset Allocation</NavLink>
        <NavLink className="text-[#898888]" to="#">Document Organization</NavLink>
        <NavLink className="text-[#898888]" to="#">Financial Advice</NavLink>
        <NavLink className="text-[#898888]" to="#">Personalized Planning</NavLink>
        <NavLink className="text-[#c5c6d0]" to="#">Tax Modelling</NavLink>
      </div>
    </section>
  )
}

export default Section