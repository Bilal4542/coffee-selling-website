import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] text-black rounded-t-3xl mt-8 md:mt-0'>
      <div className='flex flex-col justify-between md:flex-row p-8 px-5 md:px-32'>
        <div className='w-full md:w-1/4'>
            <h1 className='font-semibold text-xl pb-4'>DreamyDrip</h1>
            <p className='text-sm'>Welcome to our coffee heaven! Explore our aromatic brews, savor artisanal flavors, and discover the perfect roas to elevate your daily ritual.</p>
        </div>
        <div>
            <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
            <nav className='flex flex-col gap-2'>
                <a className='hover:text-brightColor cursor-pointer transition-all' href="/">Home</a>
                <a className='hover:text-brightColor cursor-pointer transition-all' href="/">About US</a>
                <a className='hover:text-brightColor cursor-pointer transition-all' href="/">Products</a>
                <a className='hover:text-brightColor cursor-pointer transition-all' href="/">Reviews</a>
            </nav>
        </div>
        <div>
            <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Menu</h1>
            <nav className='flex flex-col gap-2'>
                <a className='hover:text-brightColor cursor-pointer transition-all' href="/">Cappuccino</a>
                <a className='hover:text-brightColor cursor-pointer transition-all' href="/">Latte</a>
                <a className='hover:text-brightColor cursor-pointer transition-all' href="/">Americano</a>
            </nav>
        </div>
        <div>
            <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Contact</h1>
            <nav className='flex flex-col gap-2'>
                <a className='hover:text-brightColor cursor-pointer transition-all' href="/">abc123@gmail.com</a>
                <a className='hover:text-brightColor cursor-pointer transition-all' href="/">+92123456789</a>
                <a className='hover:text-brightColor cursor-pointer transition-all' href="/">Social Media</a>
            </nav>
        </div>
      </div>
      <div>
        <p className='text-center py-4'>
            @copyright developed by
            <span className='text-backgroundColor'> Muhammad Bilal </span>
            All Rights Reserved!
        </p>
      </div>
    </div>
  )
}

export default Footer
