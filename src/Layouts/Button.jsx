import React from 'react'

const Button = ({title}) => {
  return (
    <div>
      <button className='px-6 py-1 border-2 bg-[#FFDCAB] hover:text-[#AB6B2E] rounded-full transition-all'>
        {title}
      </button>
    </div>
  )
}

export default Button
