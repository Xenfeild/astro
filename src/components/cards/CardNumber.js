

export default function CardNumber({number, data}) {
  return (
    <div className="text-center uppercase">
        <p className="font-bold text-blue-700 text-5xl">
            {number}
        </p>
        <p className="font-bold text-gray-600">
            {data}
        </p>
    </div>
  )
}
