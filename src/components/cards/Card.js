
export default function Card({img, title, description}) {
  return (
    <div className='flex space-x-5 mb-5'>
      <p></p>
      <img src={img} alt="" className='w-10 rounded-full h-10'/>
    <div>
      <p className='text-bold '>{title}</p>
      <p className='font-light mt-5'>{description}</p>
    </div>
</div>
  )
}
