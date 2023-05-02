import Project from './Project';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

const Projects = ({ projects }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper portfolio-projects items-start">
      {projects.map((project) => (
        <SwiperSlide>
          <Project key={project.id} project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
    // <div
    //   className="portfolio-projects grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 items-start"
    //   data-aos="fade-up">
    //   {/* {projects.map((project) => (
    //     <Project key={project.id} project={project} />
    //   ))} */}
    // </div>
  );
};
export default Projects;
