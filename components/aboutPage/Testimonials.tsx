import Testimonial from "../Testimonial"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation, Autoplay } from "swiper"
import TestimonialSkeleton from "../TestimonialSkeleton"
// import profileOperations from "../../graphqlOperations/profile"
import { TestimonialData } from "../../types"

interface TestimonialQuery {
  testimonials: TestimonialData[]
}

const testimonialData: TestimonialData[] = [
  {
    id: "1",
    userName: "Paige Donner",
    userProfession: "Co-founder FrontierDAO.xyz",
    quote: "I appreciate your conscientiousness and am grateful for the communication, terrific developer...",
    userImage: {
      url: "/images/paige.png"
    }
  },
  {
    id: "2",
    userName: "Daniel Villanueva",
    userProfession: "Computer Engineer",
    quote: "You've earned it. You're the kind of person everyone would want on their team.",
    userImage: {
      url: "/images/dani.png"
    }
  }
];

export default function Testimonials() {
  return (
    <div className="testimonials">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        className="mySwiper"
      >
        {testimonialData.map((t) => (
          <SwiperSlide key={t.id}>
            <Testimonial testimonial={t} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
