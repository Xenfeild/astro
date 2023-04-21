// note ceci sert uniquement à la correction on va pas l'intégrer pendant que mit fais sont speach mais on verra ca plus tard pour savoir comment ça marche

import { icons } from "react-icons"


export default function CardCorrection({icon, title, description}) {
  return (
    <div className='flex space-x-5 mb-5'>
      {icon}
      {/* <p></p> */}
      {/* <img src={img} alt="" className='w-10 rounded-full h-10'/> */}
    <div className="max-w-md">
      <p className='text-bold text-2xl'>{title}</p>
      <p className='font-light mt-5'>{description}</p>
    </div>
</div>
  )
}
