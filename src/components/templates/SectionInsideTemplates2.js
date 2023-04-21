import TitleSection from "../TitleSection"
import Card from "../cards/Card"

export default function SectionInsideTemplates() {
  return (
    <div className="flex px-56 space-x-36 pt-20 text-left bg-cyan-50 justify-center py-10">
        <div className="w-1/2">
        <img src="./././img/3.jpg" alt="" />
        </div>
      <div className="text-left mt-36 ">
        <Card img="./././img/check.png" title="Per ei quaeque sensibus"/>
        <Card img="./././img/check.png" title="Cu imperdiet posidonim sed"/>
        <Card img="./././img/check.png" title="Nulla omittam sadipscing mel ne"/>
        <Card img="./././img/check.png" title="Per ei quaeque sensibus"/>
        <Card img="./././img/check.png" title="Cu imperdiet posidonim sed"/>
        <Card img="./././img/check.png" title="Nulla omittam sadipscing mel ne"/>
      </div>
    </div>
  )
}
