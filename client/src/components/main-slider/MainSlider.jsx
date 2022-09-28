import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./mainSlider.scss"

import item from "../../resources/tea.webp"



const MainSlider = () => {
  return (
    <>
      <Swiper
        speed={700}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={item} alt="" /></SwiperSlide>
        <SwiperSlide><img src={item} alt="" /></SwiperSlide>
        <SwiperSlide><img src={item} alt="" /></SwiperSlide>
        <SwiperSlide><img src={item} alt="" /></SwiperSlide>
        <SwiperSlide><img src={item} alt="" /></SwiperSlide>
        <SwiperSlide><img src={item} alt="" /></SwiperSlide>
        <SwiperSlide><img src={item} alt="" /></SwiperSlide>
        <SwiperSlide><img src={item} alt="" /></SwiperSlide>
        <SwiperSlide><img src={item} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
export default MainSlider;