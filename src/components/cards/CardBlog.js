

export default function CardBlog({img, title, description}) {
  return (
    <div className='bg-white w-96 p-5 w-64'>
      <div className="">
      <img src={img} alt=""  className="shadow-xl mb-5"/>
      <p className="font-bold">{title}</p>
      </div>
      <div className="mt-3">
      <p>{description}</p>
      </div>
    </div>
  )
}
