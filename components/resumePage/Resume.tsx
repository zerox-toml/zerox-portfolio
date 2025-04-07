import Title from "../Title"
import MyResume from "./MyResume"

export default function Resume() {
  return (
    <section className="h-full overflow-y-scroll myScroll">
      <Title name="resume" />
      <MyResume />

     
    </section> 
  )
}
