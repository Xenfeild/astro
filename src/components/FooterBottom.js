import { CiTwitter} from "react-icons/ci";
import { AiOutlineInstagram, } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { BiRss } from "react-icons/bi";
import { SlSocialGithub } from "react-icons/sl";
import { MdOutlineWidgets } from "react-icons/md";


export default function FooterBottom() {
  return (
    <div className='px-10 flex justify-between '>
        <div className="flex items-center space-x-2">
          <MdOutlineWidgets/>
        <p>
            Made by <span className="text-blue-500">onWidget</span> - All Rights reserves.
        </p>
        </div>
        <div className="flex space-x-5">
        <CiTwitter/>
        <AiOutlineInstagram/>
        <FiFacebook/>
        <BiRss/>
        <SlSocialGithub/>
        </div>
    </div>
  )
}
