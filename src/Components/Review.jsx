import React from 'react'
import ReviewCard from '../Layouts/ReviewCard'

const Review = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center px-5 lg:px-32 bg-backgroundColor'>
      <h1 className='text-4xl font-semibold text-center mt-24 mb-8 lg:mt-14'>Customer's Review</h1>
      <div className='flex flex-col lg:flex-row gap-5 justify-center py-4 my-8'>
        <ReviewCard img={'https://petapixel.com/assets/uploads/2019/02/download-2-800x800.jpeg'} title={'Olivia'}/>
        <ReviewCard img={'https://petapixel.com/assets/uploads/2019/02/download-4-800x800.jpeg'} title={'Jhon Doe'}/>
        <ReviewCard img={'https://i.redd.it/1opazkkfhmg21.jpg'} title={'Alixa'}/>
      </div>
    </div>
  )
}

export default Review
