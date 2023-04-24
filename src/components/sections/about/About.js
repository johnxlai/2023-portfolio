import React from 'react';
import ProfileImg from '../../../assets/images/john-lai-profile.jpg';
import CV from '../../../assets/resume/john-lai-resume.pdf';
import { MdDownload } from 'react-icons/md';
import AboutData from './aboutData';
import Card from '../../card/Card';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-black text-center"
      data-aos="fade-in">
      <div className="container mx-auto flex gap-10">
        <div className="md:w-8/12 mx-auto">
          <h3 className="section-heading text-white mb-7">About Me</h3>
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
          <div className="text-white mb-3">
            <p className="mb-3">
              As a graduate from Creative Advertising at Seneca and Advertising
              & Graphic Design at Humber College, I landed an internship at
              Normark Inc. (Rapala Canada), where I designed products that are
              now being sold at chain retailers across Canada such as Le Baron,
              Canadian Tire, and Wal-Mart. Upon completion of the internship, I
              worked as a Web Content Designer & SEO Specialist at Jonas Club
              Software. At Jonas, I’ve worked on over 200 websites, building web
              content and adjusting layouts using HTML and CSS.
            </p>

            <a className="flex items-center btn-primary" href={CV} download>
              <span className="mr-2">Download CV</span>
              <MdDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
