import { BsInfoSquare } from "react-icons/bs";
import TitleSection from "../TitleSection";

export default function SectionFeatures() {
  return (
    <div>
    <div className="bg-blue-200 py-6 flex justify-center space-x-5">
        
        <BsInfoSquare className="text-2xl"/>
        <p><span className="text-black font-bold">Philosophy:</span> Simplicity, Best Practices and High Performance</p>
    </div>
    <div className="py-20  px-20">
     <TitleSection title="features" subtitle="What you get with Astro Wind" description="Sed ut perspiciats unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."/>
    </div>
    </div>
  )
}
