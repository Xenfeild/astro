import TitleSection from "../TitleSection"
import Card from "../cards/Card"

export default function SectionInsideTemplates() {
  return (
    <div className="flex px-56 space-x-36 pt-20 text-left bg-cyan-50">
        <div className="w-1/2">
        <img src="./././img/3.jpg" alt="" />
        </div>
      <div className="text-left mt-36 ">
        <Card img="./././img/validity.png" title="Per ei quaeque sensibus"/>
        <Card img="./././img/validity.png" title="Cu imperdiet posidonim sed"/>
        <Card img="./././img/validity.png" title="Nulla omittam sadipscing mel ne"/>
        <Card img="./././img/validity.png" title="Per ei quaeque sensibus"/>
        <Card img="./././img/validity.png" title="Cu imperdiet posidonim sed"/>
        <Card img="./././img/validity.png" title="Nulla omittam sadipscing mel ne"/>
      </div>
    </div>
  )
}
