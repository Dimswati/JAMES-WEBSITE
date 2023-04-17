// import Swiper core and required modules
import { Navigation, Pagination,  Autoplay } from 'swiper';
import { app_url } from '../../constants';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

// custom css
import "./slider.scss";

export default function App({images}) {
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

        {
          images?.map(image => {
            return ( <SwiperSlide key={image.id}><img src={`${app_url}${image.attributes.url}`} alt="slider images" /></SwiperSlide> )
        
          })
        }
      </Swiper>
    </>
  );
}
