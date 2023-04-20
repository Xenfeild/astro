import { CiTwitter} from "react-icons/ci";
import { AiOutlineInstagram, } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { BiRss } from "react-icons/bi";


export default function 
() {
  return (
    <div className='px-10 flex justify-between'>
        <div>
        <p>
            Made by onWidget - All Rights reserves.
        </p>
        </div>
        <div className="flex space-x-5">
        <CiTwitter/>
        <AiOutlineInstagram/>
        <FiFacebook/>
        <BiRss/>
        </div>
    </div>
  )
}
