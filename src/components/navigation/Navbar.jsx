import { HiOutlineSun, HiOutlineRss,} from "react-icons/hi";
import { BsRocketTakeoff } from "react-icons/bs";
import Button from "../btn/Button";
// import logo from "../../../public/img/rocket.png"
// import React from 'react'

export default function Navbar() {
  return (
    <nav class="flex justify-between pt-5 px-10 items-center text-lg">
        {/* logo */}
        <div className="flex space-x-2 font-bold items-center">
            <BsRocketTakeoff/>
            <p>AstroWind</p>
        </div>
        {/* item nav */}
        <ul class="flex space-x-4">
            <li>Landing</li>
            <li>Pages</li>
            <li>Widgets</li>
            <li>Blog</li>
        </ul>
        {/* icones */}
        <div class=" flex space-x-4 items-center">
            <HiOutlineSun/>
            <HiOutlineRss/>
            <Button title="Download"/>
        </div>
        
    </nav>
  );
}
