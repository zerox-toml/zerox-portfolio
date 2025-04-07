import React from 'react'
import { AiOutlineSwapRight } from "react-icons/ai"
import Title from "../Title"


const loading = false

export default function GuestBook() {
  return (
    <section
      className="lg:h-full h-[95rem] overflow-y-scroll myScroll"
      id="guestComments"
    >
      <Title name="Articles" />
      
    </section>
  )
}
