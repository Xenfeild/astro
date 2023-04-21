import React from 'react'
import TitleSection from './TitleSection'
import CardFaq from './cards/CardFaq'
import CardNumber from './cards/CardNumber'
import ButtonWithIcon from './btn/ButtonWithIcon'

export default function SectionFaq() {
  return (
    <div className='p-20  justify-center'>
        <TitleSection title="faqs" subtitle="Frequently Asked Questions" description="Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar"/>
        <div className="flex">
            <div className='w-1/2 m-10'>
                <CardFaq img="./././img/arrow.png" title='What i need to start?' description="Space, the final frontier.These are the voyages of the Starshop Enterprise. Its five-year mission: to ex^mpre strange new worlds. Ma,y say exploration is part of our stedtiny, but it's actually our duty to future generation"/>
                <CardFaq img="./././img/arrow.png" title='How to install th Astro + Tailwind CSS template?' description="Space, the final frontier.These are the voyages of the Starshop Enterprise. Its five-year mission: to ex^mpre strange new worlds. Ma,y say exploration is part of our stedtiny, but it's actually our duty to future generation"/>
                <CardFaq img="./././img/arrow.png" title="What's something taht you don't" description="Space, the final frontier.These are the voyages of the Starshop Enterprise. Its five-year mission: to ex^mpre strange new worlds. Ma,y say exploration is part of our stedtiny, but it's actually our duty to future generation"/>
            </div>
            <div className='w-1/2 m-10'>
                <CardFaq img="./././img/arrow.png" title="What's an example of when you changed your mind?"description="Space, the final frontier.These are the voyages of the Starshop Enterprise. Its five-year mission: to ex^mpre strange new worlds. Ma,y say exploration is part of our stedtiny, but it's actually our duty to future generation"/>
                <CardFaq img="./././img/arrow.png" title='What is somenthing that you would like to try again?' description="Space, the final frontier.These are the voyages of the Starshop Enterprise. Its five-year mission: to ex^mpre strange new worlds. Ma,y say exploration is part of our stedtiny, but it's actually our duty to future generation"/>
                <CardFaq img="./././img/arrow.png" title="If you could only ask one question to each person you meet, what would that question be?" description="Space, the final frontier.These are the voyages of the Starshop Enterprise. Its five-year mission: to ex^mpre strange new worlds. Ma,y say exploration is part of our stedtiny, but it's actually our duty to future generation"/>
            </div>
        </div>
        <div className='flex justify-around m-20'>
            <CardNumber number="132k" data="Download"/>
            <CardNumber number="24.8k" data="stars"/>
            <CardNumber number="10.3k" data="forks"/>
            <CardNumber number="48.4k" data="users"/>
        </div>
        <div className='flex justify-center'>
            <div className='flex justify-center flex-col shadow-2xl  w-[600px] p-10'>
                <TitleSection subtitle="Astro + Tailwind CSS" description="Be a very surprised by these huge fake numbers you are seeing on this page.Don't waste more time! :P"/>
                <div className='flex justify-center'>
                    <ButtonWithIcon title="Get template" bgColor='bg-blue-700' textColor={'text-white'}/>
                </div>
            </div>
        </div>
    </div>
  )
}
