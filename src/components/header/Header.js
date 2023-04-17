import React from 'react';
import HeaderImage from '../../assets/images/john-lai-profile.jpg';
import SocialData from './socialData';

const Header = () => {
  return (
    <header className="header mt-[4rem] lg:mt-[5rem]">
      <div className="header-container container mx-auto relative flex flex-col items-center text-center  px-4">
        <div className="header-profile">
          <img className="mb-5" src={HeaderImage} alt="John Lai" />
        </div>
        <h2 className="mb-2">John Lai</h2>
        <p className="mb-3 lg:w-1/2">
          I’m a Toronto-based Full Stack Developer, a recent graduate from the
          full time University Of Toronto Bootcamp. As a graduate from Creative
          Advertising at Seneca and Advertising & Graphic Design at Humber
          College, I landed an internship at Normark Inc. (Rapala Canada), where
          I designed products that are now being sold at chain retailers across
          Canada such as Le Baron, Canadian Tire, and Wal-Mart. Upon completion
          of the internship, I worked as a Web Content Designer & SEO Specialist
          at Jonas Club Software. At Jonas, I’ve worked on over 200 websites,
          building web content and adjusting layouts using HTML and CSS.
        </p>
        <div className="flex gap-3 ">
          <a href="#contact" className="btn-primary">
            talk
          </a>
          <a href="#portfolio" className="btn-primary">
            Portfolio
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
