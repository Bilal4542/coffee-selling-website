import React from 'react'
import ProductCards from '../Layouts/ProductCards'

const Products = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center px-5 lg:px-32 bg-backgroundColor'>
      <h1 className='text-4xl font-semibold text-center mt-24 mb-8 lg:mt-14'>Our Products</h1>
      <div className='flex flex-col lg:flex-row justify-center gap-12'>
        <ProductCards img={'https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        title={'Nespresso'}
        />
        <ProductCards img={'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlfGVufDB8fDB8fHww'}
        title={'Aeropress'}
        />
        <ProductCards img={'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        title={'Chemax'}
        />
      </div>
    </div>
  )
}

export default Products
