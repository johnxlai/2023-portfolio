import React from 'react';
import ContactData from './contactData';
import SocialIcons from '../../social-icons/socialData';
import CV from '../../../assets/resume/john-lai-resume.pdf';
import { BsFiletypeDocx } from 'react-icons/bs';

const Contact = () => {
  return (
    <section
      id="contact"
      className="angled-accent px-4 bg-secondary z-10"
      data-aos="fade-up">
      <div className="container mx-auto md:w-1/2 lg:w-1/4 text-primary border border-primary p-8 relative z-10">
        <h3 className="section-heading text-white mb-2">SAY HELLO</h3>
        <p className="mb-4 text-gray-100">
          Let's get in touch, shoot me a message!
        </p>
        <div className="mb-5">
          {ContactData.map((contact) => {
            return (
              <a
                key={contact.id}
                className="flex items-center mb-3 hover:text-tertiary"
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer">
                <span className="mr-2">{contact.icon}</span>
                {contact.text}
              </a>
            );
          })}
        </div>
        <ul className="flex gap-3">
          {SocialIcons.map((icon) => {
            return (
              <li key={icon.id}>
                <a
                  href={icon.link}
                  className="hover:text-tertiary"
                  target="_blank"
                  rel="noopener noreferrer">
                  {icon.icon}
                </a>
              </li>
            );
          })}
          <li>
            <a className="hover:text-tertiary" href={CV} download>
              <BsFiletypeDocx size={20} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
