"use client";

import ServiceShowcase from '@/components/service-showcase';
import Image from 'next/image';
import { motion } from 'framer-motion';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: 'easeOut' } },
};

export default function ServiciosPage() {
  return (
    <div>
      <section className="relative overflow-hidden text-center py-32 md:py-44 rounded-xl shadow-lg mb-16">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "circOut" }}
        >
          <Image
            src="https://clinicalikedental.com/wp-content/uploads/2021/05/clinica-dental-Brunete-profesionales-min-scaled-2560x1280.jpg"
            alt="Fondo de la sección de servicios"
            fill
            className="object-cover brightness-50"
            quality={95}
            priority
          />
        </motion.div>
        <motion.div
          className="relative z-10 container mx-auto px-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-headline font-bold text-white mb-4">
            Nuestros Servicios
          </motion.h1>
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Ofrecemos una gama completa de tratamientos para asegurar tu salud dental. Conoce todo lo que podemos hacer por tu sonrisa.
          </motion.p>
        </motion.div>
      </section>
      <div className="pb-16">
        <ServiceShowcase />
      </div>
    </div>
  );
}
