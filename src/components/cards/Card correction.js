import { icons } from "react-icons"

const dataCards = [
  {
  title:"Astrowind + css",
  description:'A seamless integration between two great frameworks that offer high productivity, performance and versatillity',
  icon: "l'icone de ton choix"
  },
  {
  title:"Ready-to-use Components",
  },
  {
  title:"Best Practives",
  },
  {
  title:"Excellent Page Speed",
  },
  {
  title:"Search Engine optimisation SEO",
  },
  {
  title:"Ready-to-use Components",
  },
]

export default function Card({img, title, description}) {
  return (
    <div className='flex space-x-5 mb-5'>
      <p></p>
      <img src={img} alt="" className='w-10 rounded-full h-10'/>
    <div className="max-w-md">
      <p className='text-bold text-2xl'>{title}</p>
      <p className='font-light mt-5'>{description}</p>
    </div>
</div>
  )
}
