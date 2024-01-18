import React from 'react'
import Button from '../Layouts/Button'
import coffeeImg from '../assets/maincoffee.png'

const Home = () => {
  return (
    <div className='min-h-screen py-16 flex flex-col justify-center lg:flex-row lg:justify-between items-center px-5 lg:px-32 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2B]'>
      <div className='w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-start lg:leading-tight'>Start your day with a steaming cup of coffee</h1>
        <p>Boost your productivity and build your mood with a cup of coffee in
          the morning</p>
          <div className='flex gap-4'>
            <Button title={'ADD TO CART'}/>
            <Button title={'More Menu'}/>
          </div>
      </div>
      <div className='relative'>
        <img src={coffeeImg} alt="/" />
        <div className=" absolute bg-white px-8 py-2 top-[40px] right-0 rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            <h1 className='font-semibold'>14K</h1>
        </div>
        <div  className=" absolute bg-white px-8 py-2 bottom-6 -left-10 rounded-full">
            <h1 className='font-semibold'>Cappuccino</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
