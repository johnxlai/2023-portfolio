import React from 'react';
import ServiceData from './serviceData';
import Card from '../card/Card';
const Services = () => {
  return (
    <section id="services" className="py-10">
      <h2>Services</h2>
      <p>Services below</p>
      <div className="container">
        {ServiceData.map((service) => {
          return (
            <Card key={service.id} className="bg-slate-400">
              <div>{service.icon}</div>
              <div className="service-details">
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
