"use client";

import Image from 'next/image';
import { HeartHandshake, Microscope, Smile } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function NosotrosPage() {
  return (
    <div>
      <motion.section
        className="relative overflow-hidden text-center py-32 md:py-44 rounded-xl shadow-lg mb-16"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://dentalrosel.com/wp-content/uploads/2023/07/clinica-dental-en-merida-1024x576.jpg"
            alt="Fondo de la sección sobre nosotros"
            fill
            className="object-cover brightness-50"
            quality={95}
            priority
          />
        </div>
        <motion.div
          className="relative z-10 container mx-auto px-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-headline font-bold text-white mb-4">
            Sobre Nosotros
          </motion.h1>
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Conoce nuestra historia, misión y al equipo de profesionales apasionados por la salud dental.
          </motion.p>
        </motion.div>
      </motion.section>

      <div className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
          <div className="max-w-5xl mx-auto">
            {/* Section 1: History */}
            <motion.div
              className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-32"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-headline font-bold text-primary mb-4">Nuestra Historia</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Fundada con la misión de proveer cuidado dental excepcional en un ambiente cálido y profesional, ArtDent ha crecido hasta convertirse en un pilar de la comunidad.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Desde nuestros inicios, nos hemos dedicado a utilizar la tecnología más avanzada y a mantenernos al día con las últimas técnicas odontológicas para garantizar que nuestros pacientes reciban la mejor atención posible. Nuestro viaje ha sido impulsado por la pasión y el compromiso con cada sonrisa que cuidamos.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/359761464_790060936239998_6431677811396990354_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHJYtpEXx_0upoCrJILd1eW7WGCvJXNjwTtYYK8lc2PBNq_6Q0wnuLWA9pTrtSKZDjpIG8prRauKonCG8UyaCZq&_nc_ohc=U9hWn-k7YzIQ7kNvwEIJI2C&_nc_oc=AdlKIDuM_FmK0AF0gPVAxMqJQokQihBbILH8gva3B8a6f2hv8EDqEI9dosIXcukM7G8&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=b6gRECSe6o-uguzdmK6gYg&oh=00_AfNvM8WH3Js1c_hYCTxmwVe2DiluCjOKeWnr_0oIqyoIIA&oe=685EB3FD"
                  alt="Interior de la clínica ArtDent"
                  width={600}
                  height={450}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </motion.div>

            {/* Section 2: Team */}
            <motion.div
              className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-32"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <div>
                <Image
                  src="https://clinicadentaluc.es/wp-content/uploads/2021/01/uc-dentistas-equipo-con-mascarillas.jpg"
                  alt="Equipo de ArtDent"
                  width={600}
                  height={450}
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-headline font-bold text-primary mb-4">Nuestro Equipo</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nuestro equipo está compuesto por dentistas, higienistas y personal administrativo altamente cualificados y apasionados por la salud dental. Cada miembro está comprometido a hacer que su visita sea lo más cómoda y agradable posible. Creemos en la educación continua y en un enfoque centrado en el paciente para construir relaciones duraderas basadas en la confianza y el cuidado excepcional.
                </p>
              </div>
            </motion.div>

            {/* Section 3: Values */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-3xl font-headline font-bold text-primary text-center mb-12">Nuestros Valores</motion.h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div variants={fadeIn} className="text-center p-6 bg-card rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <HeartHandshake className="mx-auto h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Compromiso</h3>
                  <p className="text-sm text-muted-foreground">Dedicados a tu bienestar y a ofrecerte el mejor cuidado posible en cada visita.</p>
                </motion.div>
                <motion.div variants={fadeIn} className="text-center p-6 bg-card rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <Microscope className="mx-auto h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Innovación</h3>
                  <p className="text-sm text-muted-foreground">Utilizamos la última tecnología y técnicas para tratamientos eficaces y cómodos.</p>
                </motion.div>
                <motion.div variants={fadeIn} className="text-center p-6 bg-card rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <Smile className="mx-auto h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Confianza</h3>
                  <p className="text-sm text-muted-foreground">Construimos relaciones transparentes y duraderas con nuestros pacientes.</p>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
