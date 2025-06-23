"use client";

import React from 'react';
import { faqs } from '@/data/faqs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const InteractiveFAQ: React.FC = () => {
  return (
    <section id="faq">
      <div className="container mx-auto px-4">
        <motion.div
          className="w-full max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faqItem) => (
              <motion.div
                key={faqItem.id}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <AccordionItem value={faqItem.id} className="border-b-0 mb-2 rounded-lg shadow-sm bg-card overflow-hidden">
                  <AccordionTrigger className="p-6 text-left font-medium text-lg hover:bg-accent/10 transition-colors focus:bg-accent/20">
                    <span className="flex-1">{faqItem.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0 text-muted-foreground leading-relaxed">
                    {faqItem.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveFAQ;
