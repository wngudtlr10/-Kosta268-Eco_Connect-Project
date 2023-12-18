import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Carousel/Carousel.css';

// import required modules
import {Autoplay, Pagination, Navigation} from 'swiper/modules';
import sum from '../../assets/images/carousel/친환경썸네일1.png';
import sum1 from '../../assets/images/carousel/친환경썸네일.png';
import sum2 from '../../assets/images/carousel/친환경제품2.png';

export default function Carousel() {
    return (
        <>
            <div className="carousel-container">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={sum} className="Sumnail" alt="slide1"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sum1} alt="slide1"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sum2} alt="slide1"/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
