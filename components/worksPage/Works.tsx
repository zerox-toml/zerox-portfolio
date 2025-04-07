'use client'
import { SetStateAction, useState } from "react"
import Title from "../Title"
import Work from "./Work"
import WorksSkeleton from "./WorksSkeleton"
import { currentWorkTab } from "../../apollo-client"
import { useReactiveVar } from "@apollo/client"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, Tab } from '@mui/material' // Import Material UI Tabs
import { workExperience } from "../../data"

export default function Works() {
  const currentTab = useReactiveVar(currentWorkTab)
  const [isOpen, setIsOpen] = useState<string | null>(null)
  
  // Managing the current selected tab
  const [value, setValue] = useState(0)
  
  const handleChange = (event: any, newValue: SetStateAction<number>) => {
    setValue(newValue)
  }

  // Define tab labels for different categories
  const tabLabels = ["Blockchain", "LLM", "Full Stack", "Ecommerce"]

  // Filter workExperience based on selected tab label
  const filteredWorks = workExperience.filter(w => w.workTabs.includes(tabLabels[value]))

  return (           
    <div
      id="scrollableDiv"
      className="lg:h-full h-[95rem] overflow-y-scroll myScroll"
    >
      <Title name="works" currentMenu={currentTab} />

      <div>
        {/* Tabs for categories */}
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {tabLabels.map((label, index) => (
            <Tab key={index} label={label} /> // Dynamically create tabs
          ))}
        </Tabs>

        {/* Render the filtered works based on selected tab */}
        <motion.ul
          layout="position"
          className="grid grid-cols-1 sm:grid-cols-2 relative vCustomLine before:hidden sm:before:block before:left-1/2 before:-translate-x-1/2 pt-12"
        >
          <AnimatePresence>
            {filteredWorks.length > 0 ? (
              filteredWorks.map((w) => (
                <Work
                  key={w.id}
                  title={w.title}
                  imageUrl={w.images[0].url}
                  projectId={w.id}
                  currentWorkTab={w.workTabs}
                  workContent={w.workContent}
                />
              ))
            ) : (
              <WorksSkeleton /> // Fallback for empty state
            )}
          </AnimatePresence>
        </motion.ul>
      </div>
    </div>
  )
}
