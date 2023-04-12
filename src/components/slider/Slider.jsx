// import Swiper core and required modules
import { Navigation, Pagination,  Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

// custom css
import "./slider.scss";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://images.unsplash.com/photo-1558611997-dd5b20e08c71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2VsZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="image one" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1507497806295-753c4108560c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2VsZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="image two" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1507335563142-a814078ce38c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdlbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="image three" /></SwiperSlide>
      </Swiper>
    </>
  );
}
