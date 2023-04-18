import React from 'react';
import CV from '../assets/resume/john-lai-resume.pdf';
import { MdDownload } from 'react-icons/md';

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex">
        <div className="md:w-1/2">
          <h3 className="section-heading">About</h3>
        </div>
        <div className="md:w-1/2">
          <h3 className="section-heading">About</h3>
          <div className="cards"></div>
          <p>
            I worked as a Front-End Developer at Carpages.ca where I've worked
            on over 300 websites converting photoshop, sketch and figma mockup
            to wordpress site using bootstrap and tailwind.
          </p>
          <a className="flex items-center" href={CV} download>
            <span className="mr-2">Download CV</span>
            <MdDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
