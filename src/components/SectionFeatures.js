import { BsInfoSquare } from "react-icons/bs";
import TitleSection from "./TitleSection";
import Card from "./cards/Card";
import { DataCards } from "./data/DataCardFeature";
console.log(DataCards);

export default function SectionFeatures() {
  return (
    <div>
      <div className="bg-blue-200 py-6 flex justify-center space-x-5">
          <BsInfoSquare className="text-2xl"/>
          <p><span className="text-black font-bold">Philosophy:</span> Simplicity, Best Practices and High Performance</p>
      </div>
      <div className="py-10  px-20">
        <TitleSection title="features" subtitle="What you get with Astro Wind" description="Sed ut perspiciats unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."/>
      </div>
      <div className="flex justify-center px-56 py-20">
          <div className="">
              <Card img='./././img/approximation.png' title='Astro + Tailwind CSS Integration' description='A seamless integration between two great frameworks that offer high productivity, performance and versatillity'/>
              <Card img='./././img/rhombe.png' title='Ready-to-use Components' description='A seamless integration between two great frameworks that offer high productivity, performance and versatillity'/>
              <Card img='./././img/liste-de-controle.png' title='Best Practives' description='Lorem ipsum dolor sit amet, consectetur adisciping elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla'/>
          </div>
          <div className="">
              <Card img='./././img/rocket (1).png' title='Excellent Page Speed' description='Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.'/>
              <Card img='./././img/left-right.png' title='Excellent Page Speed' description='Lorem ipsum dolor sit amet, consectetur adisciping elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla'/>
              <Card img='./././img/idea.png' title='Ready-to-use Components' description='Lorem ipsum dolor sit amet, consectetur adisciping elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla'/>
          </div>
      </div>
    </div>
  )
}
