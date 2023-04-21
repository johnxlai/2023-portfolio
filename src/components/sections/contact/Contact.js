import React from 'react';
import ContactData from './contactData';

const Contact = () => {
  return (
    <section id="contact" className="py-10 px-4" data-aos="fade-up">
      <div className="container mx-auto text-white">
        <h3 className="section-heading">SAY HELLO</h3>
        <p>Let's get in touch, shoot me a message!</p>
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
