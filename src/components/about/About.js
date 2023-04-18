import React from 'react';
import CV from '../../assets/resume/john-lai-resume.pdf';
import { MdDownload } from 'react-icons/md';
import aboutData from './aboutData';
import Card from '../card/Card';

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex">
        <div className="md:w-1/2">
          <h3 className="section-heading">About</h3>
        </div>
        <div className="md:w-1/2">
          <h3 className="section-heading">About</h3>
          <div className="cards">
            {aboutData.map((card) => {
              return (
                <Card key={card.id} className="">
                  <span>{card.icon}</span>
                  <h5>{card.title}</h5>
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
