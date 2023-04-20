import React from 'react'
import TitleSection from './TitleSection'
import CardBlog from './cards/CardBlog'

export default function SectionBlog() {
  return (
    <div className='p-20'>
        <div className='flex justify-between text-left'>
            <div className='w-72'>
                <TitleSection subtitle="Find out more content in our Blog" description="view all posts >>"/>
            </div>
            <div className='w-1/2'>
                <TitleSection description="The blog is used to display AstroWind documentation. Each new article will be an important step that you will need to know to be an expert in creating a website using Astro + Tailwind CSS. Astro is a very interesting technology. Thanks."/>
            </div>
        </div>
        <div className='flex justify-between'>
            <CardBlog img="./././img/5.jpg" title="Get Started With AstroWind To create a website using Astro and Tailwind CSS" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, fuga!"/>
            <CardBlog img="./././img/tools.jpg" title="Get Started With AstroWind To create a website using Astro and Tailwind CSS" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, fuga!"/>
            <CardBlog img="./././img/6.jpg" title="Get Started With AstroWind To create a website using Astro and Tailwind CSS" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, fuga!"/>
            <CardBlog img="./././img/7.jpg" title="Get Started With AstroWind To create a website using Astro and Tailwind CSS" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, fuga!"/>
        </div>
    </div>
  )
}
