import AboutMe from "./AboutMe"
import Facts from "./Facts"
import Title from "../Title"
import Testimonials from "./Testimonials"
export default function About() {
  return (
    <section className="h-full overflow-y-scroll myScroll pb-5">
      <Title name="about me" />
      <AboutMe />

      <Title name="My Favourites" />
      <Facts />
      <Title name="testimonials" />
      <Testimonials />
    </section>
  )
}
