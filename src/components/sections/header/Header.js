import React from 'react';
import { useEffect } from 'react';
import HeaderImage from '../../../assets/images/john-lai-profile.jpg';
import SocialData from '../../social-icons/socialData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header" className="header min-h-screen">
      <div className="header-container container mx-auto px-4 pt-28 md:pt-36 lg:pt-48 pb-12 relative flex flex-col items-center text-center text-white">
        <div className="header-profile" data-aos="fade-in">
          <img
            className="mb-6 rounded-full w-[100px] md:w-[200px]"
            src={HeaderImage}
            alt="John Lai"
          />
        </div>
        <h1
          className="text-4xl lg:text-7xl mb-2 lg:mb-3 uppercase"
          data-aos="fade-up">
          John Lai
        </h1>
        <h2
          className="text-uppercase text-xl lg:text-2xl mb-4 typewriter"
          data-aos="fade-up">
          Full Stack Developer
        </h2>
        <div
          className="mb-8 lg:w-1/2 text-gray-100 text-shadow"
          data-aos="fade-up">
          <ul className="header-social flex flex-col gap-3 absolute -left-14 top-[6px]">
            {SocialData.map((item) => (
              <li key={item.id}>
                <a
                  className="header-social-icons"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer">
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
          <p className="mb-3">
            Full Stack Web Developer with 7+ years in Front-End development and
            Design. Experienced with integrating creativity and solution to
            build mobile driven and user-friendly applications.
          </p>

          <p>
            Great attention to details and unwavering commitment to precision,
            even when working on highly complex projects. Outside of work, I
            enjoy camping, fishing, and playing soccer competitively.
          </p>
        </div>
        <div className="flex gap-3" data-aos="fade-up">
          <a href="#contact" className="btn-primary">
            Let's Chat
          </a>
          <a href="#portfolio" className="btn-primary">
            Recent Work
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
