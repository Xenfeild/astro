import TitleSection from "./TitleSection"
import SectionInsideTemplates from "./templates/SectionInsideTemplates"
import SectionInsideTemplates2 from "./templates/SectionInsideTemplates2"
import SectionInsideTemplates3 from "./templates/SectionInsideTemplates3"

export default function SectionInside() {
  return (
    <div className="bg-cyan-50 pt-10">
        <TitleSection title="Inside template" subtitle="And what's inside?..."/>
        <SectionInsideTemplates/>
        <SectionInsideTemplates2/>
        <SectionInsideTemplates3/>
    </div>
  )
}
