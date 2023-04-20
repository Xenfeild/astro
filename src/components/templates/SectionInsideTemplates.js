import TitleSection from "../TitleSection"
import Card from "../cards/Card"

export default function SectionInsideTemplates() {
  return (
    <div className="flex px-56 space-x-36 mt-10 bg-cyan-50">
      <div className=" text-left ">
        <TitleSection className="text-left mb-10" subtitle="Ad vix debet docendi" description="Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates" />
        <Card img="./././img/validity.png" title="Per ei quaeque sensibus" description="Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim."/>
        <Card img="./././img/validity.png" title="Per ei quaeque sensibus" description="Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim."/>
        <Card img="./././img/validity.png" title="Per ei quaeque sensibus" description="Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim."/>
      </div>
      <div>
        <img src="./././img/2.jpg" alt="" />
      </div>
    </div>
  )
}
