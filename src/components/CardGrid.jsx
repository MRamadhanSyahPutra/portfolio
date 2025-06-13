// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/css/swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function CardGrid({ children }) {
  return (
    <>
      <Swiper
        direction='horizontal'
        slidesPerView='auto'
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        {children}
      </Swiper>
    </>
  );
}
