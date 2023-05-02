import Project from './Project';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';

const Projects = ({ projects }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper portfolio-projects items-start"
      data-aos="fade-up"
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}>
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <Project project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
    // <div
    //   className="portfolio-projects grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 items-start"
    //   data-aos="fade-up">
    //   {/* {projects.map((project) => (
    //     <Project  project={project} />
    //   ))} */}
    // </div>
  );
};
export default Projects;
