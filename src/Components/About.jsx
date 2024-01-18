import React from 'react'
import Button from '../Layouts/Button'

const About = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-4 lg:px-32 bg-backgroundColor'>
      <h1 className='text-4xl font-semibold mt-24 mb-8 lg:mt-14'>About Us</h1>
      <div className='flex flex-col lg:flex-row items-center gap-5'>
        <div className='w-full lg:w-2/4'>
            <img className='rounded-lg' src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='w-full lg:w-2/4 p-4 space-y-4'>
            <h2 className='font-semibold text-3xl'>What Makes Our Coffee Special?</h2>
            <p>Our coffee's uniqueness lies in the exquisite blend of Ethiopian Arabica beans, carefully roasted to perfection. With a commitment to sustainability and ethical sourcing, each cup encapsulates a rich narrative of passion and craftsmanship, delivering an unparalleled coffee experience.</p>
            <Button title={'Learn More'} />
        </div>
      </div>
    </div>
  )
}

export default About
