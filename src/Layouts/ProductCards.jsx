import React from 'react'
import {BsStarFill, BsStarHalf} from 'react-icons/bs'
import Button from './Button'


const ProductCards = ({img, title}) => {
  return (
    <div className='w-full lg:w-1/4 bg-white p-3 rounded-lg'>
      <img className='rounded-xl' src={img} alt="img" />
      <div className='flex flex-col items-center mt-5 gap-3'>
        <h2 className='font-semibold text-xl'>{title}</h2>
        <div className='flex'>
            <BsStarFill className='text-brightColor'/>
            <BsStarFill className='text-brightColor'/>
            <BsStarFill className='text-brightColor'/>
            <BsStarFill className='text-brightColor'/>
            <BsStarHalf className='text-brightColor'/>
        </div>
        <h3 className='font-semibold text-lg'>$15.99</h3>
        <Button title={'ADD TO CART'}/>
      </div>
    </div>
  )
}

export default ProductCards
