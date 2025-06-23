"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Stethoscope, HelpCircle, Users, Phone } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: "easeOut",
    },
  },
};

const cardHoverEffect = { y: -8, transition: { type: 'spring', stiffness: 300 } };
const iconHoverEffect = { scale: 1.1, rotate: 5, transition: { type: 'spring', stiffness: 400 } };
const buttonHoverEffect = { scale: 1.05, transition: { type: 'spring', stiffness: 400 } };
const buttonTapEffect = { scale: 0.95 };

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <section className="relative overflow-hidden text-left py-32 md:py-44 rounded-xl shadow-lg">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "circOut" }}
        >
          <Image
            src="https://cdn-3.expansion.mx/dims4/default/20a5c17/2147483647/strip/true/crop/2121x1414+0+0/resize/1200x800!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F65%2F06%2F99b822244e65b2723c6fb457cde2%2Fistock-810206880.jpg"
            alt="Fondo de clínica dental"
            fill
            className="object-cover brightness-50"
            priority
          />
        </motion.div>
        <motion.div
          className="relative z-10 container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-headline font-bold text-white mb-4">
            ArtDent
          </motion.h1>
          <motion.h4 variants={itemVariants} className="text-4xl md:text-4xl font-headline font-bold text-white mb-4">
            Ayudandote a sonreir
          </motion.h4>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Explore nuestros servicios, encuentre respuestas a sus preguntas y toda la informacion sobre nosotros. 
            ¡Su camino hacia una sonrisa más saludable comienza aquí!
          </motion.p>
          <motion.div variants={itemVariants}>
            <motion.div whileHover={buttonHoverEffect} whileTap={buttonTapEffect}>
                <Button asChild className="mt-8" size="lg">
                  <Link href="/reservar-cita">
                    <Phone className="mr-2 h-5 w-5" />
                    Reserva tu cita aquí
                  </Link>
                </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        className="container mx-auto px-2 pt-24 pb-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-headline font-bold text-center mb-10 text-primary">Explore Nuestras Secciones</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <motion.div whileHover={cardHoverEffect}>
                <Link href="/servicios" className="block group">
                  <div className="p-6 bg-card rounded-xl shadow-md h-full flex flex-col items-center text-center">
                    <motion.div whileHover={iconHoverEffect}>
                        <Stethoscope className="h-16 w-16 text-accent mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-headline font-semibold text-primary mb-3">Nuestros Servicios</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">Descubra la gama completa de tratamientos dentales que ofrecemos para cuidar su salud bucal.</p>
                    <motion.div whileHover={buttonHoverEffect} whileTap={buttonTapEffect} className="mt-auto">
                        <Button variant="outline" className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-200">
                        Ver Servicios
                        </Button>
                    </motion.div>
                  </div>
                </Link>
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <motion.div whileHover={cardHoverEffect}>
                <Link href="/nosotros" className="block group">
                  <div className="p-6 bg-card rounded-xl shadow-md h-full flex flex-col items-center text-center">
                    <motion.div whileHover={iconHoverEffect}>
                        <Users className="h-16 w-16 text-accent mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-headline font-semibold text-primary mb-3">Sobre Nosotros</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">Descubra toda la informacion sobre nuestra clinica, doctores y reseñas de pacientes.</p>
                    <motion.div whileHover={buttonHoverEffect} whileTap={buttonTapEffect} className="mt-auto">
                        <Button variant="outline" className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-200">
                        Ver Nosotros
                        </Button>
                    </motion.div>
                  </div>
                </Link>
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <motion.div whileHover={cardHoverEffect}>
                <Link href="/faq" className="block group">
                  <div className="p-6 bg-card rounded-xl shadow-md h-full flex flex-col items-center text-center">
                    <motion.div whileHover={iconHoverEffect}>
                        <HelpCircle className="h-16 w-16 text-accent mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-headline font-semibold text-primary mb-3">FAQ</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">Consulte cualquier duda o consulta en nuestra seccion de preguntas frecuentes.</p>
                    <motion.div whileHover={buttonHoverEffect} whileTap={buttonTapEffect} className="mt-auto">
                        <Button variant="outline" className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-200">
                        Consultar FAQ
                        </Button>
                    </motion.div>
                  </div>
                </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
