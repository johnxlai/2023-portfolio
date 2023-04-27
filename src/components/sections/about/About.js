import React from 'react';

import CV from '../../../assets/resume/john-lai-resume.pdf';
import { MdDownload } from 'react-icons/md';
import AboutData from './aboutData';
import Card from '../../card/Card';

const About = () => {
  return (
    <section
      id="about"
      className="pt-10 pb-[12rem] px-4 bg-black text-center"
      data-aos="fade-in">
      <div className="container mx-auto flex gap-10">
        <div className="md:w-9/12 xl:w-5/12  mx-auto">
          <h3 className="section-heading text-white mb-1">About Me</h3>
          <div className="cards grid md:grid-cols-3 gap-4">
            {AboutData.map((card) => {
              return (
                <Card
                  key={card.id}
                  className="flex flex-col justify-center items-center mb-3 p-1 md:px-3 py-6 text-primary rounded-lg">
                  <h5 className="text-7xl font-openSans flex items-center tracking-tight">
                    {card.number}
                    <span className="text-5xl ml-1">+</span>
                  </h5>
                  <h4 className="text-sm font-bold font-openSans uppercase mb-3 truncate">
                    {card.title}
                  </h4>
                  <p className="text-sm font-bold font-openSans uppercase text-tertiary">
                    {card.desc}
                  </p>
                </Card>
              );
            })}
          </div>
          <div className="text-white my-5">
            <p className="mb-3">
              As a graduate from Creative Advertising at Seneca and Advertising
              & Graphic Design at Humber College, I landed an internship at
              Rapala Canada, where I designed products that were sold at chain
              retailers across Canada such as Le Baron, Canadian Tire, and
              Wal-Mart.
            </p>

            <p className="mb-3">
              Upon completion of the internship, I worked as a Web Content
              Designer & SEO Specialist at Jonas Club Software. At Jonas, I’ve
              worked on over 200 websites, building web content and email
              templates using HTML and CSS.
            </p>

            <p className="mb-8">
              I enjoy camping, fishing and playing soccer in my spare time.
            </p>

            <a
              className="inline-flex items-center btn-tertiary mb-3"
              href={CV}
              download>
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
