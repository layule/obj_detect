import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../style/home.module.css";

function Home(props) {
  return (
    <>
      <section
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="bg1"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg2"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg3"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg4"></div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Home;
