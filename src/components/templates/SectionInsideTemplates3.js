import TitleSection from "../TitleSection"
import Card from "../cards/Card"

export default function SectionInsideTemplates() {
  return (
    <div className="flex px-56 space-x-36 pt-20 text-left">
      <div className="text-left mt-10">
        <TitleSection subtitle="Get your dream website up and running in no time with AstroWind."/>
        <Card img="./././img/box.png" title="Step 1: Download" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam assumenda veniam reprehenderit. Est, magnam repellat?"/>
        <Card img="./././img/paint-brush.png" title="Step 2: Add content" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam assumenda veniam reprehenderit. Est, magnam repellat?"/>
        <Card img="./././img/paint-brush.png" title="Step 3: Customize styles" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam assumenda veniam reprehenderit. Est, magnam repellat?"/>
        <Card img="./././img/validity.png" title="Ready!"/>
      </div>
      <div>
        <img src="./././img/4.jpg" alt="" className="" />
      </div>
    </div>
  )
}
