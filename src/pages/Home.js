import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import classes from "../style/home.module.scss";

const Home = () => {
  return (
    <>
      <div className={classes.container}>
        <Swiper
          className="swiper-slide"
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className={classes.bg1}>1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.bg2}>2</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Home;
