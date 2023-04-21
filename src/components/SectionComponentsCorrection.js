import TitleSection from "./TitleSection"
import CardWidget from "./cards/CardWidget"
import { dataCardComponent } from "./data/DataCardComponents"
import CardComponents from "./cards/CardComponents"

export default function SectionComponents() {
  return (
    <section className="bg-cyan-50 py-20 px-20">
        <TitleSection title="Components" subtitle=
        "Most used widgets" description="Provides frequently used components for building websites using Tailwind CSS"/>
        <div className="grid grid-cols-3 gap-4 pt-14">
          {dataCardComponent.map((item,index)=>(
            <CardComponents
            key={index}
            ficon={item.ficon}
            title={item.title}
            content={item.content}
            />
          )
          )}
        </div>
    </section>
  )
}
