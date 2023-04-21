import { BsInfoSquare } from "react-icons/bs";
// import TitleSection from "./TitleSection";
// import Card from "./cards/Card";
import { DataCards } from "./data/DataCardFeature";
import CardCorrection from "./cards/Card correction";
console.log(DataCards);


export default function SectionFeatures() {
  return (
    <section>
      {/* <div className="bg-blue-200 py-6 flex justify-center space-x-5"> */}
      <div className="bg-blue-200 py-6 flex justify-center space-x-5">
          <BsInfoSquare className="text-2xl"/>
          <p><span className="text-black font-bold">Philosophy:</span> Simplicity, Best Practices and High Performance</p>
      </div>
        <div className="pb-12  px-20">
          <div className="grid grid-cols-2 gap-y-8">
          {DataCards.map((item, index)=>(
            <CardCorrection
            key={index}
            icon={item.icon}
            title= {item.title}
            description={item.description}
          />
        ))}
        </div>
      </div>
    </section>
  )
}
