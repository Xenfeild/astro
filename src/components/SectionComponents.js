import TitleSection from "./TitleSection"
import CardWidget from "./cards/CardWidget"

export default function SectionComponents() {
  return (
    <div className="bg-cyan-50 mt-10 pt-10 p-10">
        <TitleSection title="Components" subtitle=
        "Most used widgets" description="Provides frequently used components for building websites using Tailwind CSS"/>
        <div className="flex justify-center">
          <CardWidget img="./././img/conception-de-site-web.png" title="Headers" description="in general Headers contain information that makes it easier for visitors to interact whith the website"/>
          <CardWidget img="./././img/image.png" title="Heros" description="in general Headers contain information that makes it easier for visitors to interact whith the website"/>
          <CardWidget img="./././img/liste-de-controle.png" title="Features" description="in general Headers contain information that makes it easier for visitors to interact whith the website"/>
        </div>
        <div className="flex justify-center">
          <CardWidget img="./././img/redaction.png" title="Content" description="in general Headers contain information that makes it easier for visitors to interact whith the website"/>
          <CardWidget img="./././img/megaphone.png" title="Call-to-action" description="in general Headers contain information that makes it easier for visitors to interact whith the website"/>
          <CardWidget img="./././img/dollar.png" title="princing" description="in general Headers contain information that makes it easier for visitors to interact whith the website"/>
        </div>
        <div className="flex justify-center">
          <CardWidget img="./././img/womens-voice.png" title="Testimonial" description="in general Headers contain information that makes it easier for visitors to interact whith the website"/>
          <CardWidget img="./././img/phone-book.png" title="Contact" description="in general Headers contain information that makes it easier for visitors to interact whith the website"/>
          <CardWidget img="./././img/footer.png" title="Footers" description="in general Headers contain information that makes it easier for visitors to interact whith the website"/>
        </div>
    </div>
  )
}
