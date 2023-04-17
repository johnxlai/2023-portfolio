import React from 'react';
import HeaderImage from '../../assets/images/john-lai-profile.jpg';
import SocialData from './socialData';

const Header = () => {
  return (
    <header className="header mt-[5rem]">
      <div className="container header-container relative flex flex-col items-center">
        <div className="header-profile">
          <img className="mb-5" src={HeaderImage} alt="John Lai" />
        </div>
        <h2 className="mb-3">John Lai</h2>
        <p>
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
        <div className="flex gap-3 my-4">
          <a href="#contact" className="btn-primary">
            talk
          </a>
          <a href="#portfolio" className="btn-primary">
            Portfolio
          </a>
        </div>
        <ul className="header-social flex">
          {SocialData.map((item) => (
            <li key={item.id}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
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
