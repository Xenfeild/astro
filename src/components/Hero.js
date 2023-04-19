// import React from 'react'
import Button from "../components/btn/Button";
import ButtonWithIcon from "../components/btn/ButtonWithIcon"


export default function Hero() {
  return (
    <div className="p-10 flex justify-center flex-col  text-center py-10">
        <h1 className="font-bold text-4xl p-30 pt-14">Free template for create your website with <span className="text-indigo-600">Astro 2.0</span> + Tailwind CSS</h1>
        <p className="text-slate-400 pt-8 mx-64 text-lg"><span className="font-bold text-black">AstroWind</span> is a free, customisable and production-ready template for Astro 2.0 + Tailwind CSS. Suitable for Startups, Small Buisness, Sass Websites, Professional Protfolis, Maketing Websites, Landing Pages</p>
        <div className="pt-11 flex justify-center space-x-11">
            <ButtonWithIcon title="Get template" bgColor='bg-blue-700' textColor={'text-white'}/>
            <Button title="Learn more"/>
        </div>
        <div className="pt-10">
            <img src="img/1.png" alt="hero astro" />
        </div>
    </div>
  )
}
