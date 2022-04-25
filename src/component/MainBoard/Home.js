import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "./Home.scss";

SwiperCore.use([Navigation, Pagination]);

const Home = () => {
    return (
        <div className="Home">
            <Swiper>
                <SwiperSlide><img src="./image/marryImage1.jpg" alt="main1" /></SwiperSlide>
                <SwiperSlide><img src="./image/marryImage2.jpg" alt="main2" /></SwiperSlide>
                <SwiperSlide><img src="./image/marryImage3.jpg" alt="main3" /></SwiperSlide>
                <SwiperSlide><img src="./image/marryImage4.jpg" alt="main4" /></SwiperSlide>
                <SwiperSlide><img src="./image/marryImage5.jpg" alt="main5" /></SwiperSlide>
                <SwiperSlide><img src="./image/marryImage6.jpg" alt="main6" /></SwiperSlide>
                <SwiperSlide><img src="./image/marryImage7.jpg" alt="main7" /></SwiperSlide>
                <SwiperSlide><img src="./image/marryImage8.jpg" alt="main8" /></SwiperSlide>
                <SwiperSlide><img src="./image/marryImage9.jpg" alt="main9" /></SwiperSlide>
                <SwiperSlide><img src="./image/marryImage10.jpg" alt="main10" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Home;