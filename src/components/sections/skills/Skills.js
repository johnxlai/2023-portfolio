import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper';

import SkillsData from './skillsData';
import Skill from './Skill';

const Skills = () => {
  return (
    <section id="skills" className="py-10 px-4">
      <div className="container mx-auto"></div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper">
        {SkillsData.map((skill) => {
          return (
            <SwiperSlide key={skill.id}>
              <Skill />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Skills;
