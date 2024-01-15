import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '../../assets/covercode.jpg';
import slide_image_2 from '../../assets/house.jpg';
import slide_image_3 from '../../assets/covercode.jpg';
import slide_image_4 from '../../assets/house.jpg';
import slide_image_5 from '../../assets/covercode.jpg';
import slide_image_6 from '../../assets/house.jpg';
import slide_image_7 from '../../assets/covercode.jpg';

import './Projects.css';
import { ArrowCircleLeft, ArrowCircleRight } from '@phosphor-icons/react';

const Projects = () => {
  return (
    <section id='projects' className="container">
      <h1 className="heading">Projects</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ArrowCircleLeft color='black' name="arrow-back-outline"></ArrowCircleLeft>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ArrowCircleRight color='black' name="arrow-forward-outline"></ArrowCircleRight>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </section>
  );
}

export default Projects;