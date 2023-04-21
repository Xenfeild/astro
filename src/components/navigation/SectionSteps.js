import React from 'react'
import { dataStep } from '../data/dataStep'
import CardStep from '../cards/CardStep'

export default function SectionSteps() {
  return (
    <section className='flex justify-center px-20 py-20'>
            <div className="w-1/2">
                <h2 className='font-bold text-3xl pb-6'>Get your dream website and running in no time with AstroWind </h2>
                <div className="">
                    {dataStep.map((item, index)=>
                    <CardStep 
                    key={index}
                    title={item.title}
                    icon={item.icon}
                    step={item.step}
                    text={item.text}
                    />
                    
                    )}          
                </div>
            </div>
            <div className="w-1/2">
                <img src="/img/4.jpg" alt=""className='w-full max-h-[65vh] object-cover' />
            </div>
    </section>
  )
}
