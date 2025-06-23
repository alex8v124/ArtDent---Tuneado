"use client";

import InteractiveFAQ from '@/components/interactive-faq';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FaqPage() {
  return (
    <div>
      <section className="relative overflow-hidden text-center py-32 md:py-44 rounded-xl shadow-lg mb-16">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
        >
          <Image
            src="https://clinicadentalbarbastro.com/wp-content/uploads/2020/07/bustillobarbastro_primeravisita.jpg"
            alt="Fondo de la sección de preguntas frecuentes"
            fill
            className="object-cover brightness-50"
            quality={95}
            priority
          />
        </motion.div>
        <motion.div
            className="relative z-10 container mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Encuentra respuestas rápidas a tus dudas más comunes sobre nuestros servicios, políticas y cuidados dentales.
          </p>
        </motion.div>
      </section>
      <div className="pb-16">
        <InteractiveFAQ />
      </div>
    </div>
  );
}
