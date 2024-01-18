import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'

const MenuCard = ({img, title, value}) => {
  return (
    <div className='w-full lg:w-1/4 bg-white p-3 rounded-lg'>
      <div>
        <img className='rounded-xl' src={img} alt="img" />
      </div>
      <div className='p-2 mt-5'>
        <div className='flex justify-between'>
            <h3 className='font-semibold text-xl'>{title}</h3>
            <h3 className='font-semibold text-xl'>{value}</h3>
        </div>
        <div className='flex justify-between mt-5'>
            <div className='flex gap-2'>
                <button className='px-3 text-sm border-2 border-brightColor bg-backgroundColor hover:text-brightColor transition-all rounded-lg'>Hot</button>
                <button className='px-3 text-sm border-2 border-brightColor bg-backgroundColor hover:text-brightColor transition-all rounded-lg'>Cold</button>
            </div>
            <span className='flex items-center bg-backgroundColor px-3 py-2 rounded-full cursor-pointer'>
                <FaCartShopping size={20} />
            </span>
        </div>
      </div>
    </div>
  )
}

export default MenuCard
