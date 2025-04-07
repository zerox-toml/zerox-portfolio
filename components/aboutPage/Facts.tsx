import {
  BsAwardFill,
  BsCodeSlash,
  BsGlobe,
  BsJournalAlbum,
  
} from "react-icons/bs"
import { IoIosFootball } from "react-icons/io";
import { MdOutlineSportsTennis } from "react-icons/md";
import { IoLogoGameControllerB } from "react-icons/io";
import { GrRun } from "react-icons/gr";
import { FaReact } from "react-icons/fa"
import Fact from "./Fact"

export default function Facts() {
  return (
    <ul className="grid grid-cols-2 mb-12 logos sm:grid-cols-4">
      <Fact Icon={IoIosFootball} desc="Football" border />
      <Fact Icon={IoLogoGameControllerB} desc="Computer game" border />
      <Fact Icon={MdOutlineSportsTennis} desc="Tennis" border />
      <Fact Icon={GrRun} desc="Running" />
    </ul>
  )
}
