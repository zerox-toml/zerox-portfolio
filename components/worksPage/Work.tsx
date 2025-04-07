import Image from "next/image"
import { FaPlus } from "react-icons/fa"
import { motion } from "framer-motion"
import { currentWork } from "../../apollo-client"




export default function Work(props:any) {
  
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout="position"
      onClick={() => currentWork(props.projectId)}
      className={`pb-12 px-12`}
    >
      <div className="group work-wrapper cursor-pointer">
        <div className={`relative w-full h-[35rem] lg:h-72 work`}>
          <FaPlus className="text-main-orange text-5xl z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100" />
          <Image
            src={props.imageUrl}
            alt="project"
            objectFit="cover"
            layout="fill"
            className="group-hover:scale-105 transition-all duration-500"
          />
        </div>
        <p className="capitalize text-gray-300 text-2xl text-center mt-6 mb-4 tracking-wide group-hover:text-main-orange transition-all duration-150">
          {props.title}
        </p>
        <p className="text-gray-500 text-xl text-center tracking-wide capitalize">
          {props.workContent}
        </p>
        
        
      </div>
    </motion.li>
  )
}
