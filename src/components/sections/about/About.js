import React from 'react';
import ProfileImg from '../../../assets/images/john-lai-profile.jpg';
import CV from '../../../assets/resume/john-lai-resume.pdf';
import { MdDownload } from 'react-icons/md';
import AboutData from './aboutData';
import Card from '../../card/Card';

const About = () => {
  return (
    <section id="about" className="py-10 px-4">
      <div className="container mx-auto flex gap-10">
        <div className="md:w-1/2">
          <img
            className="w-full border-8 border-sky-500 hover:border-0 theme-transition"
            src={ProfileImg}
            alt="John Lai"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="section-heading">About</h3>
          <div className="cards grid grid-cols-3 gap-4">
            {AboutData.map((card) => {
              return (
                <Card
                  key={card.id}
                  className=" flex flex-col justify-center items-center mb-3 p-1 md:px-3 py-8 bg-white rounded gap-2">
                  <span className="text-3xl">{card.icon}</span>
                  <h5 className="text-lg">{card.title}</h5>
                  <p>{card.desc}</p>
                </Card>
              );
            })}
          </div>
          <p className="mb-3">
            I worked as a Front-End Developer at Carpages.ca where I've worked
            on over 300 websites converting photoshop, sketch and figma mockup
            to wordpress site using bootstrap and tailwind.
          </p>
          <a className="flex items-center btn-primary" href={CV} download>
            <span className="mr-2">Download CV</span>
            <MdDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
