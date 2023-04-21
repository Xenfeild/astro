import { BsBoxSeam, BsType, BsCheckLg } from "react-icons/bs";
import { TbPaint } from "react-icons/tb";
const boxIcon = <BsBoxSeam className="text-5xl text-[#1D40B0] rounded-full border-solid border-2 p-2 border-blue-600 bg-white" />;
const typeIcon = <BsType className="text-5xl text-[#1D40B0] rounded-full border-solid border-2 p-2 border-blue-600 bg-white" />;
const paintIcon = <TbPaint className="text-5xl text-[#1D40B0] rounded-full border-solid border-2 p-2 border-blue-600 bg-white" />;
const checkIcon = <BsCheckLg className=" text-5xl text-white bg-blue-600 rounded-full border-solid border-2 p-2 border-blue-600" />;

export const dataStep = [
  {
    icon:  boxIcon ,
    step: "Step 1:",
    title: "Download",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagitis, quam nec venenatis lobortis, misirus tempus nulla, sed portittior est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula.",
  },
  {
    icon: typeIcon ,
    step: "Step 2:",
    title: "Add content",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagitis, quam nec venenatis lobortis, misirus tempus nulla, sed portittior est nibh at nulla.",
  },
  {
    icon:  paintIcon ,
    step: "Step 3:",
    title: "Customize styles",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagitis, quam nec venenatis lobortis, misirus tempus nulla, sed portittior est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.",
  },
  { icon:  checkIcon , step: "Ready!" },
];
