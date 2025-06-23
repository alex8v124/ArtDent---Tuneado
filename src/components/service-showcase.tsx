import React from 'react';
import { services } from '@/data/services';
import ServiceCard from './service-card';

const ServiceShowcase: React.FC = () => {
  return (
    <section id="services" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
