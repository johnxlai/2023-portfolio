import React from 'react';
import ContactData from './contactData';

const Contact = () => {
  return (
    <section
      id="contact"
      className="angled-accent px-4 bg-secondary z-10"
      data-aos="fade-up">
      <div className="container mx-auto md:w-1/2 lg:w-1/4 text-primary border border-primary p-8 relative z-10">
        <h3 className="section-heading">SAY HELLO</h3>
        <p className="mb-3">Let's get in touch, shoot me a message!</p>
        <div className="contact-container">
          {ContactData.map((contact) => {
            return (
              <a
                key={contact.id}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer">
                {contact.icon}
                {contact.link}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
