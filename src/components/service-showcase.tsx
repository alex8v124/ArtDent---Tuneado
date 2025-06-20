import React from 'react';
import { services } from '@/data/services.tsx';
import ServiceCard from './service-card';

const ServiceShowcase: React.FC = () => {
  return (
    <section id="services" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-10 text-primary">
          Our Services
        </h2>
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
