import React from "react";
import styles from "./Find.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Find your Drive</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Explore the world's largest car sharing marketplace</span>
          </p>
        </div>
      </div>
      <div className={styles.slider}>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{}}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Find;
