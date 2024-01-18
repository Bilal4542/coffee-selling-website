import React from 'react'
import MenuCard from '../Layouts/MenuCard'

const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center px-5 lg:px-32 bg-backgroundColor'>
      <h1 className='text-center text-4xl mt-24 mb-8 font-semibold'>Our Menu</h1>
      <div className='flex flex-wrap gap-8 justify-center pb-8'>
        <MenuCard img={'https://images.unsplash.com/photo-1580758704548-b03d9e324975?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} title={'Espresso'} />
        <MenuCard img={'https://images.unsplash.com/photo-1468418143278-41595b1a4c89?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} title={'Cappucccino'} />
        <MenuCard img={'https://images.unsplash.com/photo-1571658734974-e513dfb8b86b?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} title={'Latte'} />
        <MenuCard img={'https://images.unsplash.com/photo-1562308437-637ff72a020f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} title={'Americano'} />
        <MenuCard img={'https://images.unsplash.com/photo-1503481766315-7a586b20f66d?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} title={'Macchiato'} />
        <MenuCard img={'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} title={'Doppio'} />
      </div>
    </div>
  )
}

export default Menu
