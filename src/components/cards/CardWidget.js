
export default function CardWidget({img, title, description}) {
  return (
    <div className='bg-white w-[410px] p-5 shadow-2xl m-5'>
      <div className="flex">
      <img src={img} alt=""  className="w-10"/>
      <p className="font-bold">{title}</p>
      </div>
      <div className="mt-3">
      <p>{description}</p>
      </div>
    </div>
  )
}
