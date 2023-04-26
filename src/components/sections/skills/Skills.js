import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper';

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
          slidesPerView={1}
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
              slidesPerView: 4,
            },
          }}
          spaceBetween={30}
          loop={true}
          freeMode={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          autoplay={true}
          className="mySwiper">
          {SkillsData.map((skill) => {
            return (
              <SwiperSlide key={skill.id}>
                <Skill skill={skill} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
