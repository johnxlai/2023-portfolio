import React from 'react';
import ServiceData from './serviceData';
import Card from '../../card/Card';
const Services = () => {
  return (
    <section id="services" className="py-10 px-4" data-aos="fade-up">
      <div className="container mx-auto">
        <h2>Services</h2>
        <p>Services below</p>
        <div className="grid md:grid-cols-2 gap-4 md:gap-10">
          {ServiceData.map((service) => {
            return (
              <Card
                key={service.id}
                className="bg-slate-400 p-5 rounded flex items-start gap-3">
                <div className="bg-slate-600 p-3 rounded">{service.icon}</div>
                <div className="service-details">
                  <h4 className="mb-3 text-md">{service.title}</h4>
                  <p className="text-sm">{service.desc}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
