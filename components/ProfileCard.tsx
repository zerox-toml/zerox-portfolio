import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import MediaIcons from "./media";
import MyLink from "./MyLink";
import Slide from "./Slide";
import Typing from "./Typing";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

export default function ProfileCard() {
  return (
    <div className="profile h-full lg:w-[42rem] xl:w-[48rem] bg-gray-900 rounded-lg relative lg:block hidden">
      <div className="relative z-40 w-full h-full myShadow">
        <Slide />

        <div className="relative z-20 w-56 h-56 mx-auto rounded-full -mt-36 profilePic border-yellow-700 border-2">
          <Image
            src="/images/puck.png"
            alt="userPic"
            layout="fill"
            className="w-full h-full block p-0 z-20 relative object-cover rounded-full border-4 border-[#1c1b1b] border-solid"
          />
        </div>

        <h1 className="text-center text-gray-300 text-[3.4rem] font-medium mt-4 mb-0.5">
          Aldino Saputra
        </h1>

        <Typing />
        <MediaIcons />
        <div className="absolute bottom-0 left-0 flex w-full h-28 borderLeft customLine">
          <MyLink
            name="My Twitter"
            Icon={FaXTwitter}
            url="https://x.com/SilkenCore59010"  
            border 
          />
          <MyLink
            name="My Github"
            Icon={AiFillGithub}
            url="https://github.com/zerox-toml"
          />
        </div>
      </div>
    </div>
  );
}
