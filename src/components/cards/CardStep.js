import React from 'react'



export default function CardStep({icon, title, text, step}) {
  return (
    <div className='flex space-x-4  border-s-gray-300 border-s relative'>
    <div className='flex flex-col items-center  '>
      <div className=' absolute'>{icon}</div>
    </div>
    <div className="relative pl-12 left-10">
      <p className='text-bold text-2xl pb-2'>
        <span className='font-bold'>{step === "Ready!" ? "" : <div className='bg-gray-300 h-full w-[1px]'></div>}</span>{title}</p>
      <p className='font-light  mb-5'>{text}</p>
    </div>
</div>
  )
}
