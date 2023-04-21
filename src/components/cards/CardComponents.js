import React from 'react'

export default function CardComponents({title,content, ficon}) {
  return (
    <div className='bg-white p-4 shadow-lg rounded-md '>
        <div className='flex items-center space-x-3 pb-2'>
        <img src={ficon} alt="" className='w-6'/>
        <p className='font-bold text-lg'>{title}</p>
        <p className='font-light text-sm'>{content}</p>
    </div>
    </div>
  )
}
