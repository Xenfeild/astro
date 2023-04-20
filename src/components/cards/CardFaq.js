
export default function CardFaq({img,title,description}) {
  return (
    <div className="m-10">
    <div className="flex align-center space-x-5">
      <img src={img} alt="" className="w-10 "/>
      <p className="font-bold">{title}</p>
      </div>
      <div className="mt-3">
      <p>{description}</p>
      </div>
    </div>
  )
}
