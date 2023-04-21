import React from 'react';
import { useEffect } from 'react';
import HeaderImage from '../../../assets/images/john-lai-profile.jpg';
import SocialData from './socialData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header className="header mt-[4rem] lg:mt-[5rem]">
      <div className="header-container container mx-auto px-4 py-20 relative flex flex-col items-center text-center text-white">
        <div className="header-profile" data-aos="fade-in">
          <img className="mb-6 rounded-full" src={HeaderImage} alt="John Lai" />
        </div>
        <h1 className="text-5xl mb-2 uppercase" data-aos="fade-up">
          John Lai
        </h1>
        <h2
          className="text-uppercase text-xl text-md mb-4 typewriter"
          data-aos="fade-up">
          Full Stack Developer
        </h2>
        <div
          className="mb-8 lg:w-1/2 text-gray-300 leading-8"
          data-aos="fade-up">
          <p>
            I’m a Toronto-based Full Stack Developer, a recent graduate from the
            full time University Of Toronto Bootcamp.
          </p>
          <p>
            I worked as a Front-End Developer at Carpages.ca where I've worked
            on over 300 websites converting photoshop, sketch and figma mockup
            to wordpress site using bootstrap and tailwind.
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
        <ul className="header-social flex flex-col gap-3 absolute left-0 bottom-0">
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
      </div>
    </header>
  );
};
export default Header;
