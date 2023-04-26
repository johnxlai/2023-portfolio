import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
// import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Grid, Pagination, Autoplay } from 'swiper';

import SkillsData from './skillsData';
import Skill from './Skill';

const Skills = () => {
  return (
    <section
      id="skills"
      className="angled-accent before:bg-primary pt-16 py-[14rem] px-4 bg-primary text-secondary">
      <div className="container mx-auto text-center relative z-[1]">
        <h3 className="section-heading mb-4">Tools & Frameworks</h3>
        <p className="mb-10 w-1/2 mx-auto">
          Technologies, languages and programs that I have experience in.
        </p>
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          loop={true}
          freeMode={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          autoplay={true}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
              width: 1024,
              slidesPerView: 3,
            },
          }}>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          {/* {SkillsData.map((skill) => {
            return (
              <SwiperSlide key={skill.id}>
                <Skill skill={skill} />
              </SwiperSlide>
            );
          })} */}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
